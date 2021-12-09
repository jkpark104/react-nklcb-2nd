/* eslint-disable no-unused-vars */
import React, { Fragment as Template } from 'react';
import {
  EmojiOops,
  List,
  PrettyPrintCode,
  Container,
  Headline,
  GlobalNav,
  DescList,
} from './components';
import { isObject, isArray } from './utils';

/* -------------------------------------------------------------------------- */

let error = null;

/* -------------------------------------------------------------------------- */

const ConditionalRendering = () => {
  // nullish ??
  error ?? console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');

  // optional chaining ?.
  error?.log?.();

  return (
    <div className="container">
      <h1 className="headline">
        {!error ? 'React 조건부 렌더링' : <EmojiOops height={200} />}
      </h1>
      <p className={error && 'error-message'}>
        {!error
          ? '오류가 존재하면 렌더링 되도록 코드를 작성합니다.'
          : error.message}
      </p>
    </div>
  );
};

/* -------------------------------------------------------------------------- */

const db = require('./api/db.json');

const {
  navigation: { items: list },
} = db;

const renderList = (list) => {
  return list.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.link}>{item.text}</a>
      </li>
    );
  });
};

const ListRedering = () => {
  return (
    <Container>
      <Headline headline="React 리스트 렌더링 (배열)"></Headline>

      <GlobalNav>
        <List>
          {list.map((item, index) => (
            <List.Item key={index} link={item.link} text={item.text} />
          ))}
        </List>
      </GlobalNav>

      <DescList>
        {Object.entries(db).map(([key, value]) => {
          return (
            <Template key={key}>
              <dt>{key}</dt>
              <dd>
                {isObject(value) || isArray(value) ? (
                  <PrettyPrintCode code={value} />
                ) : (
                  value
                )}
              </dd>
            </Template>
          );
        })}
      </DescList>
    </Container>
  );
};

/* -------------------------------------------------------------------------- */

export { ListRedering };

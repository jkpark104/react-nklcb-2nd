export const addClass = (node, ...classNams) => {
  // 로직 자성
  // 문서 요소 노드에 접근/조작

  if (node && 'classList' in node) {
    node.classList.add(...classNams);
  }

  return node;
};

const getChildren = (elm: Element): Element[] =>
    Array.from(elm.children)
        .flatMap(child => [child, ...getChildren(child)]);

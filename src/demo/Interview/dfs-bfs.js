const node = {
  ele: 'div',
  children: [
    {
      ele: 'ul',
      children: [
        {
          ele: 'li',
          children: [
            {
              ele: 'a',
              children: [{ ele: 'img' }],
            },
          ],
        },
        {
          ele: 'li',
          children: [
            {
              ele: 'span',
            },
          ],
        },
        {
          ele: 'li',
        },
      ],
    },
    {
      ele: 'p',
    },
    {
      ele: 'button',
    },
  ],
}

const deepFirstSearchRecursion = (node, list = []) => {
  if (node) {
    list.push(node)
    const children = node.children
    if (children && children.length) {
      children.forEach(item => {
        deepFirstSearchRecursion(item, list)
      })
    }
  }
  return list
}

const deepFirstSearch = (node, list = []) => {
  if (node) {
    const stack = []
    stack.push(node)
    while (stack.length) {
      const item = stack.pop()
      const children = item.children || []
      list.push(item)
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return list
}

// console.log(deepFirstSearchRecursion(node))
// console.log(deepFirstSearch(node))

const breadthFirstSearch = (node, list = []) => {
  if (node) {
    const queue = []
    queue.unshift(node)
    while (queue.length) {
      const item = queue.shift()
      const children = item.children || []
      list.push(item)
      children.forEach(ele => {
        queue.push(ele)
      })
    }
  }
  return list
}
console.log(breadthFirstSearch(node))
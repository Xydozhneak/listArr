const arr = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(arr) {
  const list = document.createElement('ul');
  arr.forEach(element => {
    const item = document.createElement('li');
    if (Array.isArray(element)) {
      const innerList = generateList(element);
      item.append(innerList);
    } else {
      item.textContent = element;
    }
    list.append(item);
  });
  return list;
}

const list = generateList(arr);
document.body.appendChild(list);
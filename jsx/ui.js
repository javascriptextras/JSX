export function createButton(text, onClick, id, parentId) {
  if (typeof text !== 'string') {
    throw new Error('text must be a string');
  }

  const button = document.createElement('button');
  button.textContent = text;
  button.id = id;

  if (typeof onClick === 'function') {
    console.log(onClick + " added");
    button.addEventListener('click', onClick);
  }

  if (parentId) {
    const parent = document.getElementById(parentId);
    if (parent) {
      parent.appendChild(button);
    } else {
      console.warn(`Parent element with ID '${parentId}' not found.`);
    }
  }

  return button;
}

export function createLabel(text, id, parentId) {
  if (typeof text !== 'string') {
    throw new Error('text must be a string');
  }

  const label = document.createElement('label');
  label.textContent = text;
  label.id = id;

  if (parentId) {
    const parent = document.getElementById(parentId);
    if (parent) {
      parent.appendChild(label);
    } else {
      console.warn(`Parent element with ID '${parentId}' not found.`);
    }
  }

  return label;
}

export function createDiv(id, parentId) {
  if (typeof id !== 'string') {
    throw new Error('id must be a string');
  }

  const div = document.createElement('div');
  div.id = id;

  if (parentId) {
    const parent = document.getElementById(parentId);
    if (parent) {
      parent.appendChild(div);
    } else {
      console.warn(`Parent element with ID '${parentId}' not found.`);
    }
  }

  return div;
}

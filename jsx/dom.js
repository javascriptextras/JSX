export function replaceHTML(ID, INNER) {
  document.getElementById(ID).innerHTML = INNER;
}

export function replaceATTRIB(ID, ATTRIB, VAL) {
  document.getElementById(ID)[ATTRIB] = VAL;
}

export function addHTML(parentId, html) {
  const parentElement = document.getElementById(parentId);
  const div = document.createElement('div');
  div.innerHTML = html;
  const children = div.childNodes;

  for (let i = 0; i < children.length; i++) {
    parentElement.appendChild(children[i]);
  }
}

export function removeHTML(id) {
  const element = document.getElementById(id);
  if (element) {
    element.parentNode.removeChild(element);
  } else {
    console.warn(`Element with ID '${id}' not found.`);
  }
}

export function removeATTRIB(id, attrib) {
  document.getElementById(ID)[ATTRIB] = "";
}

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

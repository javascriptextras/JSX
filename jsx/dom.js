export function replaceHTML(ID, INNER) {
  document.getElementById(ID).innerHTML = INNER;
}

export function replaceATTRIB(ID, ATTRIB, VAL) {
  document.getElementById(ID)[ATTRIB] = VAL;
}

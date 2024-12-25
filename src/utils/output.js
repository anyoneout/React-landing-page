export function output(message, outputTag, shouldAppend) {
  if (shouldAppend) window[outputTag].innerHTML += message;
  else window[outputTag].innerHTML = message;
}
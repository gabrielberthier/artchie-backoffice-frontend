export function simpleHash(toConvert) {
  let hash = 0;
  let str = toConvert;
  str += new Date().getTime().toString() + Math.floor(Math.random() * 101);
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

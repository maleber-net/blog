function clearDesc(obj) {
  
  var str = obj.innerHTML;
  str = str.replace(/<(?:.|\n)*?>/gm, '');
  str = str.substring(0, 300);
  var lastIndex = str.lastIndexOf(" ")
  str = str.substring(0, lastIndex);
  obj.innerHTML = str;
}

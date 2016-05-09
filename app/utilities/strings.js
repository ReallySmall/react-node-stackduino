var truncate = function(string, truncateAt) {
  if(!string || !truncateAt){
    return;
  }
  string = string.trim();
  if(string.length < truncateAt){
    return string;
  } else {
    let truncatedString = string.substring(0, truncateAt);
    truncatedString += ' ...';
    return truncatedString;
  }
}

export { truncate }
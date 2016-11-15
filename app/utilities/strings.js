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
};

var toDateString = function(dateString){
  if(!dateString){
    return '';
  }
  var dateObj = new Date(dateString);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  var formattedDate = dateObj.getDate()+" "+months[dateObj.getMonth()]+" "+dateObj.getFullYear();
  return formattedDate;
};

export { truncate, toDateString };
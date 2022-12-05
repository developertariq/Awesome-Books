
function formatDate() {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const date = new Date();
  let str = date.toLocaleString('en-US', options);
  str = str.replace(',', 'th');
  str = str.replace('at', ',');

  return str;
}

export { formatDate };
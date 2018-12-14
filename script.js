// Monitor current URL + '.update' for changes
let currentPageTimestamp = null;
setInterval(() => {
  fetch(window.location.href + '.update')
    .then(response => response.text())
    .then(timestamp => {
      if (currentPageTimestamp == null)
        currentPageTimestamp = timestamp;
      else if (currentPageTimestamp != timestamp)
        window.location.href = window.location.href;
  })
}, 1000);

vim command + JS snippet for crapshoot livereload

### The Algorithm
1. Serve files using `python -m SimpleHTTPServer 8869`


2. Update a file, `"$file.update"`, on save
```vimL
:autocmd BufWritePost * execute "!echo `date` > %.update"
```

3. Reload webpage when change is detected
```html
/* Also at: https://www.alexstachowiak.com/livereload.js */
<script>
  let current = null;
  setInterval(() => {
    fetch(window.location.href + '.update')
      .then(r => r.text())
      .then(content => {
        if (current == null)
          current = content;
        else if (current != content)
          window.location.href = window.location.href;
    })
  }, 1000);
</script>
```

Works for `index.html`, etc., but the save command will need to be updated if the file and URL don't share a name.

# nth-line

Read the nth line of a file efficiently, without reading the rest of the file. Your system must have sed available.

## Usage

**Asynchronous**
```js
const nthLine = require('nth-line');

nthLine.read(__dirname + '/notes.txt', 150).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
});
```

**Synchronous**
```js
let nthLine = require('nth-line');

try {
  console.log(nthLine.readSync(__dirname + '/notes.txt', 150));
} catch (err) {
  console.log(err);
}
```

The first line in your file is line 0, and if you don't pass in an absolute path, the file path is relative to the directory that node is executing in. Consider using __dirname to fully qualify the file path.

## Discussion

This is just a wrapper around invoking sed in a shell. Newlines (\r\n and \n) are stripped from the end of the result. Errors thrown contain the the error message from sed.

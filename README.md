# read-nth-line

Read the nth line of a file efficiently, without reading the rest of the file. Your system must have sed available.

## Usage

**Asynchronous**
```js
const nthLine = require('read-nth-line');

nthLine.read(__dirname + '/notes.txt', 150).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
});
```

**Synchronous**
```js
const nthLine = require('read-nth-line');

try {
  console.log(nthLine.readSync(__dirname + '/notes.txt', 150));
} catch (err) {
  console.log(err);
}
```

The first line in your file is line 0, and if you don't pass in an absolute path, the file path is relative to the directory that node is executing in. Consider using __dirname to fully qualify the file path.

## Discussion

This is just a wrapper around invoking sed in a shell. Errors thrown contain the error message from sed.

# read-nth-line

Read the nth line of a file with sed. Your system must have sed available. For large files, this is more efficient than using readline. However, due to the overhead of spawning a shell process, readline is more efficient for smaller files.

## Usage

**Asynchronous**

```js
const nthLine = require('read-nth-line');

nthLine.read(__dirname + '/notes.txt', 150).then(result => {
  console.log(result);
}).catch(err => {
  console.warn(err);
});
```

**Synchronous**

```js
const nthLine = require('read-nth-line');

try {
  console.log(nthLine.readSync(__dirname + '/notes.txt', 150));
} catch (err) {
  console.warn(err);
}
```

The first line in your file is line 0, and if you don't pass in an absolute path, the file path is relative to the directory that node is executing in. Consider using __dirname to fully qualify the file path.

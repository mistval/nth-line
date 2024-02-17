const child_process = require('child_process');

function createExecFileArgs(filePath, lineNumber) {
  return ['sed', [`${lineNumber + 1}q;d`, filePath]];
}

function readAsync(filePath, lineNumber) {
  return new Promise(function(resolve, reject) {
    const execFileArgs = createExecFileArgs(filePath, lineNumber);
    child_process.execFile(...execFileArgs, function(err, result) {
      if (err) {
        reject(err);
      }
      resolve(result.toString());
    });
  });
}

function readSync(filePath, lineNumber) {
  const execFileArgs = createExecFileArgs(filePath, lineNumber);
  const result = child_process.execFileSync(...execFileArgs);
  return result.toString();
}

module.exports.read = readAsync;
module.exports.readSync = readSync;

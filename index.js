const child_process = require('child_process');

function createShellCommand(filePath, lineNumber) {
  return `sed '${lineNumber + 1}q;d' ${filePath}`;
}

function readAsync(filePath, lineNumber) {
  return new Promise(function(resolve, reject) {
    const shellCommand = createShellCommand(filePath, lineNumber);
    child_process.exec(shellCommand, function(err, result) {
      if (err) {
        reject(err);
      }
      resolve(result.toString());
    });
  });
}

function readSync(filePath, lineNumber) {
  const shellCommand = createShellCommand(filePath, lineNumber);
  const result = child_process.execSync(shellCommand);
  return result.toString();
}

module.exports.read = readAsync;
module.exports.readSync = readSync;

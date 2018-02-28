const child_process = require('child_process');

function createShellCommand(filePath, lineNumber) {
  return `sed '${lineNumber + 1}q;d' ${filePath}`;
}

function stringifyResult(result) {
  let resultString = result.toString();
  if (resultString.endsWith('\n')) {
    resultString = resultString.substring(0, resultString.length - 1);
  }
  if (resultString.endsWith('\r')) {
    resultString = resultString.substring(0, resultString.length - 1);
  }
  return resultString;
}

function readAsync(filePath, lineNumber) {
  return new Promise(function(resolve, reject) {
    const shellCommand = createShellCommand(filePath, lineNumber);
    child_process.exec(shellCommand, function(err, result) {
      if (err) {
        reject(err);
      }
      resolve(stringifyResult(result));
    });
  });
}

function readSync(filePath, lineNumber) {
  const shellCommand = createShellCommand(filePath, lineNumber);
  const result = child_process.execSync(shellCommand);
  return stringifyResult(result);
}

module.exports.read = readAsync;
module.exports.readSync = readSync;

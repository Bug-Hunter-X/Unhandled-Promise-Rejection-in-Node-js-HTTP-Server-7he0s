const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    // Error handling is missing here! 
    console.error('Error:', error); // This will log the error, but the client gets nothing
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might throw an error
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Operation successful';
}
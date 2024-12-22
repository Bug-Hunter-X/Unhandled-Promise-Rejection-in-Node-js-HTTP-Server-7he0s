const http = require('http');

const server = http.createServer((req, res) => {
  doSomethingAsync()
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    })
    .catch(error => {
      console.error('Error:', error); // Log the error for debugging
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error'); // Send an error response to the client
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function doSomethingAsync() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Operation successful';
} 
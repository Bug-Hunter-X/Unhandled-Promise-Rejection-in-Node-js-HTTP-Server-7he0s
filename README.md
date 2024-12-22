# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections in asynchronous HTTP server operations. The server doesn't handle errors gracefully, resulting in silent failures and a poor user experience.

## Bug

The `bug.js` file shows a Node.js HTTP server with an asynchronous operation (`doSomethingAsync`).  If this operation fails (due to a simulated error), the error is logged to the console, but the client receives no response. This is a major issue. 

## Solution

The `bugSolution.js` file demonstrates the correct way to handle errors: sending an appropriate error response to the client.

## How to run

1. Clone this repo
2. Navigate to the directory
3. Run `node bug.js` to see the buggy server in action
4. Run `node bugSolution.js` to see the fixed version

import { XMLHttpRequest } from 'xmlhttprequest';

const XHR = new XMLHttpRequest();

try {
  if (XHR.status >= 200 && XHR.status < 300) {
    console.log(`success!`, XHR);
  }
} catch (error) {
  console.log(`The request failed!`, error);
}

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
XHR.open(`GET`, `https://google.com`);
XHR.send();

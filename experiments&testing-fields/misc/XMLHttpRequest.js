const XHR = new XMLHttpRequest();

XHR.onload = function XHRcall() {
  try {
    if (XHR.status >= 200 && XHR.status < 300) console.log(`success!`, XHR.response);
  } catch (error) {
    console.log(`The request failed!`, error);
  }
};
// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
XHR.open(`GET`, `https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699`);
XHR.send();

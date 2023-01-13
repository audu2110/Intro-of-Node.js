const http= require('http');
const server=http.createServer((req,res)=>{
    console.log('OD');
});
server.listen(4000);



const http= require('http');
const server=http.createServer((req,res)=>{
    console.log(req);
});
server.listen(4000);


const http= require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(4000)




const http= require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/home'){
        console.log('Welcome home');
    }
    else if(url==='/about'){
        console.log('Welcome to About Us page');
    }
    else if(url==='/node'){
        console.log(' Welcome to my Node Js project');
    }
});
server.listen(5000)



const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);

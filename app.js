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



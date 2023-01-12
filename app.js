const http= require('http');
const server=http.createServer((req,res)=>{
    console.log('OD');
});
server.listen(4000);

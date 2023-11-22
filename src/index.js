const http=require('http');
const  express=require('express');
const path=require('path');
const {Server}=require('socket.io');
const app = express();
const cors = require('cors');
const server=http.createServer(app);
const io=new Server(server);
app.use(cors());
/**socket connection */
io.on('connection',(socket)=>{
    socket.on('user-message',message=>{
        io.emit('message',message)
    });
});

app.use(express.static(path.resolve('./public')));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'index.html')
});
server.listen(3001,()=>{console.log("listening on port 3001")});
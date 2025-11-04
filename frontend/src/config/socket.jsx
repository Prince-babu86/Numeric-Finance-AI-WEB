import {io} from 'socket.io-client'

const socket = io("https://numeric-finance-ai-web.onrender.com" , {
  withCredentials:true,
   transports: ["websocket", "polling"], // allow both transports
});

export default socket;

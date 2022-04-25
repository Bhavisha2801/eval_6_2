const http = require('http');

const app = require('./Routes/user');
const connectToDB = require('./DBConnections/mongoDb');
const PORT = 9001;

http.createServer(app).listen(PORT , () => {
    new connectToDB();
    console.log(`server is running on port no ${PORT}`)
});



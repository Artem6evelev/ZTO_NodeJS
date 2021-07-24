const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now(); //start time
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.basedUrl} ${req.url} ${delta}ms`);//*Checking how much time it takes to send a request
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json())

app.use('/friends', friendsRouter); //two main collections that our app supports
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})
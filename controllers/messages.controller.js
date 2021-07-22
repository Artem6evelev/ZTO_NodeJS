function getMessages(req, res) { // we using function because when we debugging node application and we get err messages if use named function or arrow functionnode won't give us inforamation, write function for extra debuggin benefit
    res.send('<ul><li>Hello Albert!</li></ul>');
}

function postMessage (req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
};
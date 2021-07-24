const path = require('path');//this will let us hadle a path 

function getMessages(req, res) { // we using function because when we debugging node application and we get err messages if use named function or arrow functionnode won't give us inforamation, write function for extra debuggin benefit
    // path.join(__dirname, '..', 'public', 'skimountain.jpg'); //The path.join() method joins the specified path segments into one path.
    res.render('messages', {
        title: 'Messages to my Friends',
        friend: 'Elon Musk',
    })
        // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
}
 
function postMessage (req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
};
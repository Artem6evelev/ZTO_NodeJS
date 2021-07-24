const path = require('path');//this will let us hadle a path 

function getMessages(req, res) { // we using function because when we debugging node application and we get err messages if use named function or arrow functionnode won't give us inforamation, write function for extra debuggin benefit
    // res.send('<ul><li>Hello Albert!</li></ul>');
    path.join(__dirname, '..', 'public', 'skimountain.jpg'); //The path.join() method joins the specified path segments into one path.
    res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'));
}
 
function postMessage (req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
};
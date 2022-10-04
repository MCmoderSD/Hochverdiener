const mysql = require('mysql');

module.exports.database={setvalues, getvalues};
const connection = mysql.createConnection({
    host: 'mcmodersd.live',
    user: 'root',
    password: '16154513443189A!a',
    database: 'hochverdiener'
});

//servercfg
//serverid text, serveralias text, serversettings text
function setvalues(serverid, serveralias, serversettings) {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        connection.query("INSERT INTO servercfg (serverid, serveralias, serversettings) VALUES ("+"'"+serverid+"',"+"'"+serveralias+"',"+"'"+serversettings+"')", function (err, result) {

            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}

function getvalues(serverid) {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        connection.query("SELECT * FROM servercfg WHERE serverid = " + serverid, function (err, result, fields) {
            if (err) throw err;
            return result;
        });
    });
}



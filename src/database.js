

const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'mcmodersd.live',
    user: 'root',
    password: '16154513443189A!a',
    database: 'hochverdiener'
});

function connect() {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
}

//servercfg
//serverid text, serveralias text, serversettings text
function setinitvalues(serverid, serveralias, serversettings) {
        connection.query("INSERT INTO servercfg (serverid, serveralias, serversettings) VALUES ("+"'"+serverid+"',"+"'"+serveralias+"',"+"'"+serversettings+"')", function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
}

function getsettings(serverid, callback) {
        connection.query("SELECT * FROM servercfg WHERE serverid = '" + serverid + "'", function (err, result, fields) {
            if (err) return callback(err);
            callback(null, result[0].serversettings);
        });
}

function setsettings(serverid, serversettings) {
        connection.query("UPDATE servercfg SET serversettings = '" + serversettings + "' WHERE serverid = '" + serverid + "'", function (err, result) {
            if (err) throw err;
            console.log("1 record updated");
        });
}


module.exports.database={setinitvalues, getsettings, connect, setsettings};


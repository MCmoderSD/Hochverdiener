

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
            if(result[0])
            callback(null, result[0].serversettings);
            else {
                setinitvalues(serverid, client.guilds.cache.get(serverid).name, "");
                callback(null, "setDefault");
            }
        });
}

function setsettings(serverid, serversettings) {
        connection.query("UPDATE servercfg SET serversettings = ? WHERE serverid = ?", [serversettings, serverid]);
}


module.exports.database={setinitvalues, getsettings, connect, setsettings};


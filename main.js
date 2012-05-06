(function() {
  "use strict";

  var cfg = require('./config.js')
    , dbName = cfg.dbName
    , tableName = cfg.tableName
    , sqlite3 = require('sqlite3')
    , db = new sqlite3.Database(dbName)
    , shid = require('shortid')
    ;

  db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='" + tableName + "';", function(err, row) {
    if(err) { throw err; }
    if(!row) {
      db.run("CREATE TABLE " + tableName + " (id INTEGER PRIMARY KEY, short VARCHAR(16), target TEXT);", function() {
      });
    }
  });

  function add(target, cb) {
    var query = db.prepare( "INSERT INTO "
                          + tableName
                          + " (short, target)"
                          + " VALUES (?, ?);")
      , shortId = shid.generate()
      ;
    
    db.serialize(function() {
      
      query.run(shortId, target);
      query.finalize(function() {
        cb(shortId);
      });

    });
  }

  function get(shortId, cb) {
    var query = db.prepare("SELECT target FROM " 
                          + tableName
                          + " WHERE short = '"
                          + shortId
                          + "';")
      ;

    query.get(function(err, row) {
      if(err) { throw err; }
      if(!row) {
        cb(undefined);
        return;
      }
      cb(row.target);
    });
  }

  module.exports.get = get;
  module.exports.add = add;
}());

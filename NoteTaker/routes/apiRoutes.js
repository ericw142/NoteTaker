module.exports = function(app) {
    const path = require("path");
    const fs = require("fs");

    app.get("/api/notes", function(req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), function(err, data) {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    });
    app.post("/api/notes", function(req, res) {
        newNote = JSON.stringify(req.body, null, 2);

        fs.appendFile(path.join(__dirname, "../db/db.json"), newNote, (err) => {
            if (err) throw err;
            console.log("New note saved.");
        });
    });
}
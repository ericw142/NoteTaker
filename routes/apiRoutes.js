module.exports = function(app) {
    const path = require("path");
    const fs = require("fs");

    app.get("/api/notes", function(req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), function(err, data) {
            if (err) throw err;
            var jsonData = JSON.parse(data);

            console.log(jsonData);
            return jsonData;
          });
    });

    app.post("/api/notes", function(req, res) {
        var newNote = req.body;

        fs.readFile(path.join(__dirname, "../db/db.json"), function(err, data) {
            if (err) throw err;

            var jsonData = JSON.parse(data);
            jsonData.notes.push(newNote);

            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(jsonData), "utf-8", function(err) {
                if (err) throw err;
                console.log("New note saved.");
            });
        });
    });
}
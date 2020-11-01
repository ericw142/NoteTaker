module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        return res.json(path.join(__dirname, "../db/db.json"));
    });
}
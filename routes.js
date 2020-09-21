const express = require('express')
const routes = express.Router()

routes
    .get("/", function (req, res) {
        return res.redirect("/teachers")
    })

    .get("/teachers/", function (req, res) {
        return res.render("./teachers/teacher")
    })

    .get("/teachers/create", function (req, res) {
        return res.render("./teachers/create")
    })

    .post("/teachers/", function (req, res) {
        return res.send("Recebido")
    })

    .get("/studants", function (req, res) {

        return res.render("studants")
    })

routes.use(function (req, res) {
    res.status(404).render("not-found");
});

module.exports = routes
const express = require('express')
const routes = express.Router()

routes
    .get("/", function (req, res) {
        return res.redirect("teacher")
    })

    .get("/teacher", function (req, res) {
        return res.render("teacher")
    })

    .get("/studants", function (req, res) {

        return res.render("studants")
    })

routes.use(function (req, res) {
    res.status(404).render("not-found");
});

module.exports = routes
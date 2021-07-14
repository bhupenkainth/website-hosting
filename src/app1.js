const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/register");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);



app.get("/", (req, res) => {
     res.render("index")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/contact", (req, res) => {
    res.render("contact")
});

app.get("/blogpost", (req, res) => {
    res.render("blogpost")
});
app.get("/search", (req, res) => {
    res.render("search")
});
app.get("/salvictoria", (req, res) => {
    res.render("salvictoria")
});
app.get("/niretyal", (req, res) => {
    res.render("niretyal")
});
app.get("/adamchandler", (req, res) => {
    res.render("adamchandler")
});
app.get("/denisa", (req, res) => {
    res.render("denisa")
});
app.get("/alysa", (req, res) => {
    res.render("alysa")
});
app.get("/cody", (req, res) => {
    res.render("cody")
});
app.get("/rody", (req, res) => {
    res.render("rody")
});
app.get("/smith", (req, res) => {
    res.render("smith")
});
app.get("/allina", (req, res) => {
    res.render("allina")
});
app.get("/joe", (req, res) => {
    res.render("joe")
});
app.get("/peter", (req, res) => {
    res.render("peter")
});
app.get("/aditi", (req, res) => {
    res.render("aditi")
});
app.get("/megha", (req, res) => {
    res.render("megha")
});
app.post("/contact", async (req, res) => {
    try {
        const registeremployee = new Register({
            nam: req.body.nam,
            phonenumber: req.body.phonenumber,
            email: req.body.email,
            help: req.body.help,
        
        })
        const registered = await registeremployee.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`server running at port no ${port}`);
})
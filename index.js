var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());

app.post("/ajax/email", function(request, response) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "esender7777@gmail.com",
            pass: "uhfe oluh wsoy vmkt"
        }
    });

    var textBody = `FROM: ${request.body.name} EMAIL: ${request.body.email} MESSAGE: ${request.body.message}`;
    var htmlBody = `<h2>Mail From: ${request.body.name}</h2><p>email: <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>${request.body.message}</p>`;
    var mail = {
        from: "esender7777@gmail.com",
        to: "elbarae.akachar@gmail.com",
        subject: "Mail From exnov.ma",
        text: textBody,
        html: htmlBody
    };

    transporter.sendMail(mail, function (err, info) {
        if(err) {
            response.status(500).json({ message: "Message non envoyé", error: err.toString() });
        } else {
            response.json({ message: `Message envoyé: ${info.messageId}` });
        }
    });
});

app.get("/", function(request, response) {
    response.render("homePage");
});

app.get("/test", function(request, response) {
    response.render("testPage");
});

app.listen(7000, function() {
    console.log('Server is listening on port 7000');
});

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
            pass: "yuoq jett rlcc glsz"
        }
    });

    var textBody = `FROM: ${request.body.name} EMAIL: ${request.body.email} MESSAGE: ${request.body.message}`;
    var htmlBody = `<h2>Mail From: ${request.body.name}</h2><p>email: <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>${request.body.message}</p>`;
    var mail = {
        from: "esender7777@gmail.com",
        to: "betexnov@gmail.com",
        subject: "Mail From exnov.ma",
        text: textBody,
        html: htmlBody
    };

    transporter.sendMail(mail, function (err, info) {
        if(err) {
            console.log(err);
            response.status(500).json({ message: "Message not sent: An error occurred" });
        } else {
            response.json({ message: `Message sent: ${info.messageId}` });
        }
    });
});

app.listen(7000, function() {
    console.log('Server is listening on port 7000');
});

app.get("/", function(request, response) {
    response.render("homePage");
});

app.get("/test", function(request, response) {
    response.render("testPage");
});

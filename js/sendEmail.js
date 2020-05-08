(function () {
    emailjs.init("user_82QFa7hBZ0VpcOO1lOLOE");
})();

function sendMail(contactForm) {
    emailjs.send("gmail", "giselle", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "memory_game_app": contactForm.gameapp.value
    })
    .then(
        function(response) {
            alert("SUCCESS", response);
        },
        function(error) {
            alert("FAILED", error);
        }
    );
    return false;  
}
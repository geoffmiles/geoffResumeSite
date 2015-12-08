function log(obj) {
    $('#response').text(JSON.stringify(obj));
};

var m = new mandrill.Mandrill('3Mursnrg1PD6MBQmTe2m5Q');

function sendTheMail() {
    var userEmail = $("#email").val();
    var userName = $("#name").val();
    var userMessage = $("#message").val();
    var userCompany = $("#company").val();
        
    var params = {
    "message": {
        "from_email": userEmail,
        "to":[{
            "name":userName,
            "email":"geoff.g.miles@gmail.com"}],
        "subject": userName + " from " + userCompany,
        "text": userMessage,
        "autotext": true
        }
    };

    m.messages.send(params, function(res) {
        console.log(userEmail);
        log(res);
    }, function(err) {
        log(err);
    });
};
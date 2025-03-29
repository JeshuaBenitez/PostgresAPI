// Archivo callrestapi.js
var url = "http://localhost:8080/api/users"; // Asegúrate de que la URL sea correcta

function postUser() {
    console.log("POST user", url);
    var myName = $('#name').val();
    var myEmail = $('#email').val();
    var myAge = $('#age').val();
    var myComments = $('#comments').val();

    var myUser = {
        name: myName,
        email: myEmail,
        age: myAge,
        comments: myComments
    };

    console.log(myUser);

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
            console.log(data);
            $('#resultado').html(JSON.stringify(data.user));
        },
        data: JSON.stringify(myUser)
    });
}

function getUsers() {
    console.log("GET usuarios", url);
    $.getJSON(url, function(json) {
        console.log(json);
        var arrUsers = json.users;
        var htmlTableUsers = '<table border="1">';
        arrUsers.forEach(function(item) {
            htmlTableUsers += '<tr>' +
                '<td>' + item.id + '</td>' +
                '<td>' + item.name + '</td>' +
                '<td>' + item.email + '</td>' +
                '<td>' + item.age + '</td>' +
                '<td>' + item.comments + '</td>' +
                '</tr>';
        });
        htmlTableUsers += '</table>';
        $('#resultado').html(htmlTableUsers);
    });
}

function sendMail() {
// PHP call
	  $.ajax({
	    url: "mail.php",
	    type: 'POST',
	    data: {
	        name: $('#name').val(),
	        email: $('#email').val(),
	        subject: $('#subject').val(),
	        message: $('#message').val(),
	    },
	    dataType: 'json'
	  });

	  $( "#cta .content form" ).css('overflow', 'hidden');
	  $( "#cta .content form" ).animate({
	      opacity: 0,
	      height: "toggle"
	  }, 1000, function() {
	      $('#cta .content').html("<p style=\"color: GhostWhite;margin: 0px;display: none\">Thanks for the message. I'll get back to you as soon as possible.</p>");
	      $('#cta .content p').animate({height: "toggle"}, function () {});
	  });
}

function validateName() {

  var name = document.getElementById('name').value;

  if(name.length == 0) {
    $('#name').parent().addClass('has-error');
    return false;
  }

  return true;
}

function validateEmail () {

  var email = document.getElementById('email').value;

  if(email.length == 0) {
    $('#email').parent().addClass('has-error');
    return false;
  }

  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(email)) {
    $('#email').parent().addClass('has-error');
    return false;
  }

  return true;
}

function validateSubject() {
  var message = document.getElementById('subject').value;
  var required = 1;
  var left = required - message.length;

  if (left > 0) {
    $('#subject').parent().addClass('has-error');
    return false;
  }

  return true;
}

function validateMessage() {
  var message = document.getElementById('message').value;
  var required = 1;
  var left = required - message.length;

  if (left > 0) {
    $('#message').parent().addClass('has-error');
    return false;
  }

  return true;
}

function validateForm() {
  $('.has-error').removeClass('has-error');
  $('.contact-submit').addClass('disabled');
  var val_name = validateName();
  var val_email = validateEmail();
  var val_subject = validateSubject();
  var val_message = validateMessage();
  if (val_name && val_email && val_subject && val_message) {
    sendMail();
  }
}


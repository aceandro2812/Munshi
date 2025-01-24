$(document).ready(function() {
    // Attach click event handler to the submit button
    $('#submit').click(function() {
      // Get the value from the input field
      var email = $('#email').val();
      var password = $('#password').val();
      // Send an AJAX request to the Express.js router
      $.ajax({
        url: '/login',
        method: 'POST',
        data: { email: email , password:password },
        success: function(response) {
          // Handle the response from the router
          console.log(response);
        },
        error: function(error) {
          // Handle any errors that occur during the request
          console.error(error);
        }
      });
    });
  });
  



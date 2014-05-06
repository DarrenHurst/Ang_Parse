'use strict';

define([],function () {

   return {
         registerUser: function(username,password){
            var user = new Parse.User();
            user.set("username", username);
            user.set("password", password);
            user.set("email",username);



            user.signUp(null, {
                success: function(user) {
                    // Hooray! Let them use the app now.
                    window.location = '#/root';
                },
                error: function(user, error) {
                    // Show the error message somewhere and let the user try again.
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }

         ,
        login: function(username,password){
            Parse.User.logIn(username, password, {
                success: function(user) {
                    // Do stuff after successful login.
                    window.location = '#/root';
                    return user;
                },
                error: function(user, error) {
                    // The login failed. Check error to see why.
                    return null;
                }
            });
        }
        ,

        checkForSession: function(){
            var user = new Parse.User.current();
            if (user._sessionToken) {
                // do stuff with the user

                window.location = '#/root';

            } else {
                // show the signup or login page

                Parse.User.logOut();
                var currentUser = Parse.User.current();
                var currentUser = Parse.User.current();
                window.location = '#/';
            }
        }
       ,
       logout: function(){
           Parse.User.logOut();
           var currentUser = Parse.User.current();
           window.location = '#/';
       }
    }



});


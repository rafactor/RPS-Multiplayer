
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCBeX6_5k8uBvj-A1kSroEMxJEQWJxBbmk",
    authDomain: "rps-multiplayer-7196f.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-7196f.firebaseio.com",
    projectId: "rps-multiplayer-7196f",
    storageBucket: "rps-multiplayer-7196f.appspot.com",
    messagingSenderId: "165306718406"
  };

  firebase.initializeApp(config);

  
  var db = firebase.database();
  var connectionsRef = db.ref("/connections");
  var connectedRef = db.ref(".info/connected");
 
  //Initial Values
  var email = "";
  var password = "";
  var userList = [];
  var userKey = [];
  var counter = 0;
  var currentUser = {}
  var conkey;

  var app = {
      signInForm() {
        let $wrapper = $('#onlinePlayers');
        $wrapper.empty()

        let $newContainer = $('<div>');
        $newContainer.addClass('form center').attr('id','sign-form')

        let $form = $('<form>')
        $form.addClass('container column')

        let $emailLabel = $('<label>');
        $emailLabel.attr('for','email').text('Email');

        // let $passwordLabel = $('<label>');
        // $passwordLabel.attr('for','password').text('Password');

        // let $password = $('<input>');
        // $password.attr({
        //     'type':'password',
        //     'placeholder':'Enter Password',
        //     'name':'password'
        // });

        let $email = $('<input>');
        $email.attr({
            'type':'text',
            'placeholder':'Enter Email',
            'name':'email',
            'id':'input-email'
        });

        let $login = $('<button>')
        $login.attr({
            'id':'btn-login',
            'type':'submit'
        }).text('Login')

        let $remember = $('<label>')
        $remember.html('<input type="checkbox" checked="checked" name="remember"> Remember me')
            
        let $cancel = $('<button>')
        $cancel.attr({
            'id':'cancelbtn',
            'type':'button'
        }).text('Cancel')

        let $cancelWrapper = $('<div>')

        // let $forgot = $('<span>')
        // $forgot.addClass('forgot').html('Forgot <a href="#">password?</a>')

        $cancelWrapper.append($cancel)
        $form.append($emailLabel, $email, $login, $remember, $cancelWrapper);
        $newContainer.append($form);
        $wrapper.append($newContainer)
      },
      closeForm(){
      $('#onlinePlayers').empty()

      let $container = $('<div>');
        $container.addClass('container center column').attr('id','sign-wrapper')

        let $loginBtn = $('<button>');
        $loginBtn.attr('id','signIn').text('Sign In');

        // let $registerBtn = $('<button>');
        // $registerBtn.attr('id','signUp').text('Register');
      
        $container.append($loginBtn);

        $('#onlinePlayers').append($container)
      },
      signUpForm() {
        let $wrapper = $('#onlinePlayers');
        $wrapper.empty()
        console.log('in')

        let $newContainer = $('<div>');
        $newContainer.addClass('form center').attr('id','sign-form')

        let $form = $('<form>')
        $form.addClass('container column')

        let $emailLabel = $('<label>');
        $emailLabel.attr('for','email').text('Email');

        let $email = $('<input>');
        $email.attr({
            'id':'register-email',
            'type':'text',
            'placeholder':'Enter Email',
            'name':'email'
        });

        let $passwordLabel = $('<label>');
        $passwordLabel.attr('for','password').text('Password');

        let $password = $('<input>');
        $password.attr({
            'type':'password',
            'placeholder':'Enter Password',
            'name':'password',
            'id':'register-password'
        });

        let $passwordLabel2 = $('<label>');
        $passwordLabel2.attr('for','password').text('Repeat Password');

        let $password2 = $('<input>');
        $password2.attr({
            'type':'password',
            'placeholder':'Repeat Password',
            'name':'password'
        });

        

        let $enter = $('<button>')
        $enter.attr({
            'id':'btnRegister',
            'type':'button'
        }).text('Register')

          
        let $cancel = $('<button>')
        $cancel.attr({
            'id':'cancelbtn',
            'type':'button'
        }).text('Cancel')

        
        let $signIn = $('<span>')
        $signIn.addClass('signin').html('Already have an account? <a href="#">Sign In</a>')
    
        $form.append($emailLabel, $email, $passwordLabel, $password, $enter, $cancel);
        $newContainer.append($form);
        $wrapper.append($newContainer)
      },
      onlineView(){
        $('#onlinePlayers').empty()  
      },
      findEmailID(email){
          console.log('userId')
        let n = userList.indexOf(key);

        if (n >= 0) {
            currentUser = {
                email: userList[existent],
                key: userKey[existent]
            }
            console.log(currentUser)
            return n
        } else {
            db.ref('users').push({
                'email': email,

            }) 
        }

      }
  }

  //BTN LOGIN

  // check if email exists


  // ON LOAD
// 1. get the list of registered emails
// 2. get the list of online users

  //Detecting Connection State

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

    // If they are connected..
    if (snap.val()) {
  
      // Add user to the connections list.
      var con = connectionsRef.push(true);
  
      // Remove user from the connection list when they disconnect.
      con.onDisconnect().remove();
    }
  });


//   $(document).on("click",".btn",btn.start)
app.signInForm();

  $(document).on('click','#signIn', app.signInForm)
  $(document).on('click','#signUp', app.signUpForm)
  $(document).on('click','#cancelbtn', app.closeForm)


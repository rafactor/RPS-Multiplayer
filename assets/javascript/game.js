// build front screen

// select local ou online

// login auth
// select avatar
// enter username
// build play arena
// show available players
// invite a player
// notification
// acceptance
// round selector (only creator)
// select RPS
// wait for opponent
// run game js
// store stats
// display results
// play again

/* GLOBAL */
const $body = $('body')
// var title = 'RPS online'
// const mode; //define online or local
var loggedUser
var player = [];
var users = ['test'];
var n = player.length
var splashTimerID
var avatar = ['fas fa-user-alt', 'fas fa-user-ninja', 'fas fa-user-tie',
    'fas fa-user-md', 'fas fa-user-graduate', 'fas fa-user-secret',
    'fas fa-user-injured', 'fas fa-user-astronaut'
]

// var db = firebase.database();



var screen = {
    initial() {
        let $container = $('<div>');
        $container.addClass('initial-container')

        let $splash = $('<div>');
        $splash.addClass('initial-wrapper-icons')

        let $title = $('<h1>');
        $title.addClass('title').html('i c o n i c')

        icon.rock($splash)
        icon.paper($splash)
        icon.scissors($splash)

        $container.append($title, $splash);
        $body.append($container)
    },

    login(){
        func.clearAll()
        let $mainContainer = $('<div>');
        $mainContainer.addClass('main-wrapper');

        let $login = $('<button>');
        $login.addClass('btn').attr({
            'id':'login',
        }).text('sign in')

        let $newUser = $('<button>');
        $newUser.addClass('btn').attr({
            'id':'newUser',
        }).text('new player');

        $mainContainer.append($login, $newUser);
        $body.append($mainContainer);
    },

    signin(){

        func.clearAll()
        let $mainContainer = $('<div>');
        $mainContainer.addClass('main-wrapper');

        let $placeholder = $('<div>')
        $placeholder.addClass('placeholder')
        .text('display sign in screen using Firebase')

        let $placeholderButton = $('<div>')
        $placeholderButton.addClass('btn')
        .text('Sign in Test User').attr('id','signIn')

        $mainContainer.append($placeholder, $placeholderButton)
        $body.append($mainContainer);
    },

    player(){
        let $container = $('.main-wrapper');
        $container.empty();

        icon.user($container);
        let $navWrapper = $('<div>');
        $navWrapper.addClass('navBar');

        let $instruction = $('<p>');
        $instruction.addClass('instructions')
        .html('create your user name using only letters and numbers, without space and special characters:')

        let $input = $('<input>');
        $input.addClass('inputText').attr({
            'id':'inputName',
            'placeholder':'username'
        })

        icon.next($navWrapper)
        $container.append($instruction, $navWrapper, $input)

        let $error = $('<p>');
        $error.addClass('errorMessage').html('');
        $container.append($navWrapper, $error)
    },
    iconSelection(){
        //clear the inverval timer used in the splash
        clearInterval(splashTimerID)
        $('body').empty();

        let $mainContainer = $('<div>');
        $mainContainer.addClass('main-wrapper');

        let $instruction = $('<h3>');
        $instruction.addClass('instruction').text('choose your avatar');

        let $container = $('<div>');
        $container.addClass('selectorWrapper');

        avatar.forEach((e) => {
            let $icon = $('<i>');
            $icon.addClass(e + ' icon-selector')
                .attr('id', e)
            $container.append($icon)
        });

        // $($container).append($icon)
        clearInterval(splashTimerID)
        $($mainContainer).append($instruction, $container)
        $('body').append($mainContainer)
    },
    opponent(){
        let $main = $('.main-wrapper')
        $main.empty()

        let $player = $('<div>')
        $player.addClass('divPlayer')

        let $opponent = $('<div>');
        $opponent.addClass('divOpponent')

        icon.selected($player)

        let $online = $('<button>');
        $online.addClass('btn-sm').attr('id','online').text('multiplayer online')

        let $offline = $('<button>');
        $offline.addClass('btn-sm').attr('id','online').text('vs computer')

        $opponent.append($online, $offline);
        $main.append($player, $opponent)
    

    },




   
    playerDetail(n) {
        let $container = $('.main-wrapper');
        $container.empty();

        let $navWrapper = $('<div>');
        $navWrapper.addClass('navBar');

        let $instruction = $('<p>');
        $instruction.html('create your user name')

        $container.append($instruction)



        screen.playerIcon(n, $container)

        let $error = $('<p>');
        $error.addClass('errorMessage').html('')

        $container.append($navWrapper, $error)
    },
    playerIcon(n, place) {
        let $icon = $('<i>')
        $icon.addClass(player[n].icon).attr({
            'id': 'selectedAvatar'
        });

        // let $instruction = $('<div>');
        // $instruction.addClass('instructions')
        // .text('enter your username:')

        let $input = $("<input>")
        $input.attr({
            'id': 'input-name',
            'type': 'text',
            'placeholder': 'type your name'
        })


        place.append($icon, $input)
    },

    // backButton(place) {


    //     let $leftButton = $('<i>')
    //     $leftButton.addClass('fas fa-chevron-left')
    //         .attr('id', 'backToAvatarSelection')
    //     place.append($leftButton)

    // },
  
}

var func = {

    initiate(){
        clearInterval(splashTimerID);
        $('body').empty();
      
        screen.login()
        // console.log(db)
        // if (db === null) {
        //     console.log('create new player')
        // } else {
        //     console.log('welcome')
        // }
    },
    saveName(newUser){
        player[n] = new Player('Anonymous', n, 'anonymous' + n + '@anything.com');
        users.push(newUser);
        player[n].username = newUser;

        $('.errorMessage').empty();
        // icon.back($('.main-wrapper'), 'avatarSelection');
        // icon.next($('.main-wrapper'),'selectOpponent');
        // player[n].username = newUser;
        screen.iconSelection();
    },

    
    checkName() {
        var newUser = $(this).val().trim();

        let numberOfUsers = users.length

        if (numberOfUsers === 0) {
            func.saveName(newUser);
            console.log('zero');
        } else {
            if (users.indexOf(newUser) === -1) {
                func.saveName(newUser);
                console.log(users)
                console.log('not found');
            } else {
                console.log('erro')
                   $('.errorMessage').html('<small>This username already exists. <br><strong href="#">Login</strong> or create a new username.</small>')      
               }
        }
    },
    chooseAvatar() {
        player[n].icon = $(this).attr('id');
        screen.opponent();
        console.log('selected')
    },
    createPlayer() {
        
    },
    clearAll() {
        $('body').empty();
    }
}
var icon = {
    selected(e) {
        
        let $image = $('<i>');
        $image.addClass(player[n].icon).attr({
            'id': 'user',
        });
        e.append($image)
    },
    user(e) {
        let $image = $('<i>');
        $image.addClass('fas fa-user-alt').attr({
            'id': 'user',
        });
        e.append($image)
    },
    
    rock(e) {
        let $image = $('<i>');
        $image.addClass('far fa-hand-rock initial-image').attr({
            'id': 'rock',
        });
        e.append($image)
    },

    paper(e) {
        let $image = $('<i>');
        $image.addClass('far fa-hand-paper initial-image').attr({
            'id': 'paper',
        });
        e.append($image)
    },

    scissors(e) {
        let $image = $('<i>');
        $image.addClass('far fa-hand-scissors initial-image').attr({
            'id': 'scissors',
        });
        e.append($image)
    },
    next(e, id) {
        let $image = $('<i>');
        $image.addClass('fas fa-arrow-right').attr({
            'id': id,
            'data-gray': true
        });
        e.append($image)
    },
    back(e, id) {
        let $image = $('<i>');
        $image.addClass('fas fa-arrow-left').attr({
            'id': id,
        });
        e.append($image)
    }
}

function Player(first, last, email) {
    this.firstName = first;
    this.lastName = last;
    this.username = 0;
    this.email = email;
    this.playerId = 'player' + n
    this.icon = '';
    this.wins = 0;
    this.loses = 0
    this.matches = 0;
}

$(document).on("click", ".icon-selector", func.chooseAvatar)
$(document).on('focusout', "#inputName", func.checkName)
$(document).on('click', "#avatarSelection", screen.iconSelection)

$(document).on('click',"#login", screen.signin);
$(document).on('click',"#newUser", screen.player);






screen.initial();
splashTimerID = setInterval(func.initiate, 500)

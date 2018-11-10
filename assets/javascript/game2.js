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
var $body = $('body')
var title = 'RPS online'
var mode; //define online or local
var loggedUser
var player = [];
var n = player.length
var splashTimerID
var avatar = ['fas fa-user-alt','fas fa-user-ninja','fas fa-user-tie',
              'fas fa-user-md','fas fa-user-graduate','fas fa-user-secret',
            'fas fa-user-injured','fas fa-user-astronaut']


var app = {
    initial(){
        let $container = $('<div>');
        $container.addClass('initial-container')

        let $splash = $('<div>');
        $splash.addClass('initial-wrapper-icons')

        let $title = $('<h1>');
        $title.addClass('title').html('i c o n i c')
        
        icon.rock( $splash)
        icon.paper($splash)
        icon.scissors($splash)

        $container.append($title,$splash);
        $body.append($container)
    },
    selectIcon() {
        $('body').empty();

        let $mainContainer = $('<div>');
        $mainContainer.addClass('main-wrapper');

        let $instruction = $('<h3>');
        $instruction.addClass('instruction').text('choose your avatar');

        let $container = $('<div>');
        $container.addClass('selectorWrapper');

       avatar.forEach((e)=>{
            let $icon = $('<i>');
            $icon.addClass(e + ' icon-selector')
            .attr('id',e)
            
            $container.append($icon)
       });

            // $($container).append($icon)
            clearInterval(splashTimerID)
            $($mainContainer).append($instruction, $container)

            $('body').append($mainContainer)

        },
    
   
    chooseAvatar(){
        
        app.createPlayer()
        player[n].icon = $(this).attr('id');
        console.log('pos'+ n)
        app.playerDetail(n)
    },

    createPlayer(){
        player[n] = new Player('Anonymous',n,'anonymous'+n +'@anything.com'); 
    },
    playerDetail(n){
        let container = $('.main-wrapper');
        container.empty();

        app.playerIcon(n, container)

      
        
        
    },
    playerIcon(n, place){
        let $icon = $('<i>')
        $icon.addClass(player[n].icon).attr({
            'id':'selectedAvatar'
        });

        let $input = $("<input>")
        $input.attr({
            'id':'input-name',
            'type': 'text',
            'value': 'type your name'
        })

        place.append($icon, $input)
         
    }
}

var icon = {
    rock(e){
        let $image = $('<i>');
        $image.addClass('far fa-hand-rock initial-image').attr({
            'id': 'rock',
        })
        ;

        e.append($image)
    },

    paper(e){
        let $image = $('<i>');
        $image.addClass('far fa-hand-paper initial-image').attr({
            'id': 'paper',
        })
        ;

        e.append($image)
    },

    scissors(e){
        let $image = $('<i>');
        $image.addClass('far fa-hand-scissors initial-image').attr({
            'id': 'scissors',
        })
        ;

        e.append($image)
    }
}

function Player(first, last, email){
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.playerId = 'player' + n
    this.icon = '';
    this.wins = 0;
    this.loses = 0
    this.matches = 0;
}

$(document).on("click",".icon-selector",app.chooseAvatar)


app.initial();
splashTimerID = setInterval(app.selectIcon, 2000)

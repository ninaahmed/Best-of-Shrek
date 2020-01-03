$(function(){
    $(document).ready(function(){
        $("button").click(function(){
            $("#quote").text(getNextQuote());
        });
    });
});

var quotes = ['She waited...for her true love, and true love\'s first kiss. (laughs) Like that\'s ever gonna happen!',
'(All Star playing)',
'Now, ogres, they\'re much worse.',
'*ROARS*',
'Oh, really? You and what army?',
'If that was me, you\'d be dead.',
'Sometimes, things are more than they appear.',
'I\'m a terrifying ogre! What do I have to do to get a little privacy!',
'WHAT ARE YOU DOING IN MY SWAMP???',
'*at Farquaad\'s large castle* Do you think maybe he\'s compensating for something?',
'I\'m not gonna eat ya.',
'(Farquaad: "What is that? It\'s hideous!") That\'s not very nice. It\'s just a donkey.',
'(Bad Reputation playing)',
'*crowd cheers* Oh, yeah! *flexes*',
'For your information, there\'s a lot more to ogres than people think.',
'Ogres are like onions... Onions have layers. Ogres have layers.',
'I don\'t care what everyone likes!',
'End of story. Bye-bye. See ya later.',
'(at Fiona\'s fire-y castle) Sure it\'s big enough, but look at the location. *laughs*',
'Come on, donkey. I\'m right here beside ya, okay?',
'Just keep moving, and don\'t look down.',
'You\'re already halfway.',
'That\'ll do, Donkey. That\'ll do.',
'(Fiona: "What kind of knight are you?") One of a kind.',
'Let\'s just say I\'m not your type, okay?',
'Hey! I\'m nobody\'s messenger boy, alright? I\'m a delivery boy.',
'You know, Donkey, sometimes things are more than they appear.',
'There\'s just me and my swamp.',
'They judge me before they even know me.',
'Better out than in, I always say.',
'(My Beloved Monster playing)',
'Now, I don\'t mean to brag, but I make a mean weedrat stew.',
'I\'m in trouble. Okay, here I go.',
'My swamp!',
'You /are/ beautiful.'
];
let index = -1;

function getNextQuote(){
    index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}
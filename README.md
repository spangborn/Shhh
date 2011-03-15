# Shhh #
Shhh is a jQuery plugin intended to silence screaming internet users. It takes text that is in all caps, and converts it to properly cased sentences. Shhh allows for various ignored words and different regular expressions.


## Usage ##

Basic:
    $(".shouting").shh();

Advanced:
If for whatever reason you want to modify the behavior, you have the following options:
    
    $('p.comment).shhh({
		punctuation : ['.', '!', '?'], //An array of characters deemed to be punctuation
		ignore : ["I ", "I'm", "I'll", "I've", "I'd"] //An array of capitalizations that should be ignored
    });
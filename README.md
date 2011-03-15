# Shhh... #
- is a jQuery plugin intended to silence screaming internet users.
- takes text that is in all caps, and converts it to properly cased sentences.
- allows for various ignored words.


## Usage ##

Basic:
    $(".shouting").shhh();

Advanced:

If for whatever reason you want to modify the behavior, you have the following options:
    
    $('.shouting').shhh({
		punctuation : ['.', '!', '?'], //An array of characters deemed to be punctuation
		ignore : ["I ", "I'm", "I'll", "I've", "I'd"] //An array of capitalizations that should be ignored
    });

##Help##
You can find both [@eltiare](http://twitter.com/eltiare) and [@spangborn](http://twitter.com/spangborn) on Twitter.


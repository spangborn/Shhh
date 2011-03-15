# Shhh #
Shhh is a jQuery plugin intended to silence screaming internet users.

Shhh takes text that is in all caps, and converts it to properly cased sentences.

Shhh allows for various ignored words and different regular expressions.

## Usage ##

Basic:
    $(".shouting").shh();

Advanced:
    $(".shouting").shh({
		ignore : ["I ", "I've", "I'll", "I'd", "HTML", "CSS", "JS"]
	});
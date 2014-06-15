// ==UserScript==
// @name        Twitch Plays Pokemon Commands
// @namespace   github.com/graulund/tppcommands
// @description Helping you press what you want on the touch screen by converting commands into coordinates.

// @include     /^https?://(www|beta)\.twitch\.tv\/(twitchplayspokemon(/(chat.*)?)?|chat\/.*channel=twitchplayspokemon.*)$/

// @version 10.0
// @updateURL http://graulund.github.io/tppcommands/tppcommands.user.js
// @grant       unsafeWindow
// ==/UserScript==

/*
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
 
 // BIG shoutouts to the original TPP chat filter script. Good pointers.
 
 (function(){
"use strict";

var TPP_C_VERSION = "9.0";

var myWindow;
try {
    myWindow = unsafeWindow;
} catch(e) {
    myWindow = window;
}

var $ = myWindow.jQuery, console = myWindow.console;

console.log("TPP Commands version " + TPP_C_VERSION + " launched");

// Configuration (all keys should be lowercase)

var touchCommands = {
	// battle commands
	"a1f" : ["1,40","B"],
	"a1l1": "1,75",
	"a1l2": ["1,40","1,40","255,75"],
	"a1l3": ["1,40","1,140"],
	"a1l4": ["1,40","255,140"],
	"a2f" : ["255,40","B"],
	"a2l1": ["255,40","255,40","1,75"],
	"a2l2": "255,75",
	"a2l3": ["255,40","1,140"],
	"a2l4": ["255,40","255,140"],
	"a3f" : ["1,85","B"],
	"a4f" : ["255,85","B"],
	"att1":  "1,75",
	"att2":  "255,75",
	"att3":  "1,85",
	"att4":  "255,85",
	"heal": ["77,150", "80,20"],
	"learn": "5,170",
	"reuse": "77,188",
	"run":   "126,191",
	"switch": "210,190",
	"throw": ["77,150", "160,20"],
	// bag commands
	"mail": ["X","33,88","155,133","A"],
	"mailsort": ["160,180","255,141"],
	"toss": ["250,165","240,65"],
	"cancel": ["244,188"], // add to directions to auto-close most menus
	// pokemon commands
	"o": "255,133", // use to counter-troll
	"order": ["X","44,44", "255,133"],
	"order1": "1,22",
	"order2": "133,22",
	"order3": "1,77",
	"order4": "133,77",
	"order5": "1,133",
	"order6": "133,133",
	"poke1": "1,22",
	"poke2": "133,22",
	"poke3": "1,77",
	"poke4": "133,77",
	"poke5": "1,133",
	"poke6": "133,133",
	"take": "160,160",
	// PC commands
	"mon1": "40,70",
	"mon2": "70,70",
	"mon3": "40,100",
	"mon4": "70,115",
	"mon5": "40,130",
	"mon6": "70,135",
	"deposit": "255,55",
	"withdraw": "255,55",
	"liberate": "210,115", // release
	"exitpc": "x+b",
	// misc
	"test": "1,1" // test the script while sounding less psychotic

};

(function addAliases() {
	var aliases = {

		// att1 = 1, att2 = 2, etc.
		'': /^att/,
		// reuse = u for reUse
		'u': /^reuse/,
		// run = r
		'r': /^run/,
		// switch = s
		's': /^switch/,
	 	// throw = c for catch
		'c': /^throw/,
		// mail = m
		'm': /^mail/,
		// toss = t
		't': /^toss/,
		// poke = p
		'p': /^poke/,
		// liberate = l
		'l': /^liberate/,
		// exitpc = e
		'e': /^exitpc/
		 
	}, alias;

	for (var repl in aliases)
		for (var command in touchCommands)
			if (aliases[repl].test(command))
				console.log('Alias %s = %s ("%s")',
					alias = command.replace(aliases[repl], repl),
					command,
					(touchCommands[alias] = touchCommands[command]).join('" / "')
				);
})();

// Do it!

var getStringMatch = function(str, regex){
	var m = str.match(regex)
	if(m instanceof Array && m.length > 0){
		return m[0]
	}
	return ""
}

var spacestate = 0;

String.prototype.repeat = function(count) {
	if (count < 1) return '';
	var result = '', pattern = this.valueOf();
	while (count > 1) {
		if (count & 1) result += pattern;
			count >>= 1, pattern += pattern;
	}
	return result + pattern;
};

$(function(){
	var Room_proto = myWindow.App.Room.prototype;
	var original_send = Room_proto.send;
	Room_proto.send = function(message){

		var commandRegex = /^\s*([a-z0-9]+)\b/i, m = message.toLowerCase().match(commandRegex);

		if(m instanceof Array){
			var command = m[0];

			if(command in touchCommands){
			
				// What is the output of this command?
				var output = touchCommands[command];
				
				// Output randomization
				if(output instanceof Array){
					output = output[Math.floor(Math.random()*output.length)];
				}
			
				// Transform!
				arguments[0] = message = message.replace(commandRegex, output) + (" ".repeat(spacestate));

				// Log
				console.log("TPP Commands: Sent command \"" + output + "\" (\"" + command + "\")");
			}
		}

		return original_send.apply(this, arguments);
	};
});

}());

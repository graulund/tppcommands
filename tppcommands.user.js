// ==UserScript==
// @name        Twitch Plays Pokemon Commands
// @namespace   github.com/graulund/tppcommands
// @description Helping you press what you want on the touch screen by converting commands into coordinates.

// @include     /^https?://(www|beta)\.twitch\.tv\/(twitchplayspokemon(/(chat.*)?)?|chat\/.*channel=twitchplayspokemon.*)$/

// @version 10.1
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

var TPP_C_VERSION = "10.1";

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
	"a1f" : ["140,45+B", "B"],
	"a2f" : ["180,45+B","B"],
	"a3f" : ["140,108+B","B"],
	"a4f" : ["180,108+B","B"],
	
	"a1l1": ["140,90+A"],
	"a1l2": ["140,45","140,45","180,90+A"],
	"a1l3": ["140,45","10,162+A"],
	"a1l4": ["140,45","350,162+A"],
	
	"a2l1": ["180,45","180,45","140,90+A"],
	"a2l2": ["180,90+A"],
	"a2l3": ["180,45","10,162+A"],
	"a2l4": ["180,45","350,162+A"],
	
	"a3l1": ["140,108","140,108","140,90+A"],
	"a3l2": ["140,108","140,108","180,90+A"],
	"a3l3": ["140,130+A"],
	"a3l4": ["140,108","350,162+A"],
	
	"a4l1": ["180,108","180,108","140,90+A"],
	"a4l2": ["180,108","180,108","180,90+A"],
	"a4l3": ["180,108","10,162+A"],
	"a4l4": ["180,130+A"],
	
	"att1":  "140,60",
	"att2":  "180,60",
	"att3":  "140,120",
	"att4":  "180,120",
	
	//"heal": ["77,150", "80,20"],
	//"learn": "5,170",
	//"mail": ["X","33,88","155,133","A"],
	//"mailsort": ["160,180","255,141"],
	
	//"order": ["X","44,44", "255,133"],
	//"order1": "1,22",
	//"order2": "133,22",
	//"order3": "1,77",
	//"order4": "133,77",
	//"order5": "1,133",
	//"order6": "133,133",
	
	//"poke1": "1,22",
	//"poke2": "133,22",
	//"poke3": "1,77",
	//"poke4": "133,77",
	//"poke5": "1,133",
	//"poke6": "133,133",
	
	//"reuse": "77,188",
	
	"run":   "160,239+B" //,
	
	//"switch": "210,190",
	//"throw": ["77,150", "160,20"]
};

(function addAliases() {
	var aliases = {
		// Examples:

		// att1 = 1, att2 = 2, etc.
		// '':  /^att/,

		// run = r
		// 'r': /^run/,
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
				arguments[0] = message = message.replace(commandRegex, output);

				// Log
				console.log("TPP Commands: Sent command \"" + output + "\" (\"" + command + "\")");
			}
		}

		return original_send.apply(this, arguments);
	};
});

}());

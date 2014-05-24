// ==UserScript==
// @name        Twitch Plays Pokemon Commands
// @namespace   github.com/graulund/tppcommands
// @description Helping you press what you want on the touch screen by converting commands into coordinates.

// @include     /^https?://(www|beta)\.twitch\.tv\/(twitchplayspokemon(/(chat.*)?)?|chat\/.*channel=twitchplayspokemon.*)$/

// @version 7.3
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

var TPP_C_VERSION = "7.3";

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
	"a1f" : ["90,46","B"],
	"a1l1": ["90,60"],
	"a1l2": ["90,46","170,80"],
	"a1l3": ["90,46","90,46","90,102"],
	"a1l4": ["90,46","90,46","170,102"],
	"a2f" : ["170,46","B"],
	"a2l1": ["170,46","90,80"],
	"a2l2": ["170,60"],
	"a2l3": ["170,46","170,46","90,102"],
	"a2l4": ["170,46","170,46","170,102"],
	"a3f" : ["90,94","B"],
	"a3l1": ["90,90"],
	"a3l2": ["90,94","90,80"],
	"a3l3": ["90,94","90,102"],
	"a3l4": ["90,94","90,94","170,102"],
	"a4f" : ["170,94","B"],
	"a4l1": ["170,94","90,80"],
	"a4l2": ["170,90"],
	"a4l3": ["170,94","170,94","90,102"],
	"a4l4": ["170,94","170,102"],
	"att1":  "126,54",
	"att2":  "170,54",
	"att3":  "126,94",
	"att4":  "170,102",
	"att1d": "126,54",
	"att2d": "130,54",
	"att3d": "126,94",
	"att4d": "130,102",
	"calljoey": ["55,155","166,166","180,80"],
	"heal": ["77,150", "80,20"],
	"learn": "5,170",
	"order": ["50,80", "180,80"],
	"order1": "80,14",
	"order2": "180,14",
	"order3": "80,80",
	"order4": "180,80",
	"order5": "80,140",
	"order6": "180,140",
	"poke1": "90,15",
	"poke2": "160,15",
	"poke3": "90,85",
	"poke4": "160,85",
	"poke5": "90,103",
	"poke6": "160,103",
	"reuse": "77,177",
	"run":   "126,191",
	"switch": "210,190",
	"targ1": "5,10",
	"targ2": "200,10",
	"throw": ["77,150", "160,20"]
};

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

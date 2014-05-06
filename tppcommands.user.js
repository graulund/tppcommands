// ==UserScript==
// @name        Twitch Plays Pokemon Commands
// @namespace   github.com/graulund/tppcommands
// @description Helping you press what you want on the touch screen by converting commands into coordinates.

// @include     /^https?://(www|beta)\.twitch\.tv\/(twitchplayspokemon(/(chat.*)?)?|chat\/.*channel=twitchplayspokemon.*)$/

// @version     2.2
// @updateURL   http://github.com/graulund/tppcommands/raw/master/tppcommands.user.js
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

var TPP_C_VERSION = "2.2";

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
	"a1f" : ["100,40","B"]
	"a1l1": ["5,170","100,60"]
	"a1l2": ["5,170","100,30","200,80"]
	"a1l3": ["5,170","100,30","100,30","100,94"]
	"a1l4": ["5,170","100,30","100,30","200,102"]
	"a2f" : ["200,40","B"]
	"a2l1": ["5,170","200,30","100,80"]
	"a2l2": ["5,170","200,60"]
	"a2l3": ["5,170","200,30","200,30","100,94"]
	"a2l4": ["5,170","200,30","200,30","200,102"]
	"a3f" : ["100,94","B"]
	"a3l1": ["5,170","100,90"]
	"a3l2": ["5,170","100,142","200,80"]
	"a3l3": ["5,170","126,90","100,100"]
	"a3l4": ["5,170","100,142","100,142","200,102"]
	"a4f" : ["200,94","B"]
	"a4l1": ["5,170","200,142","100,80"]
	"a4l2": ["5,170","200,90"]
	"a4l3": ["5,170","200,142","200,142","100,94"]
	"a4l4": ["5,170","126,90","200,100"]	"att1":  "126,54",
	"att2":  "200,54",
	"att3":  "126,102",
	"att4":  "200,102",
	"heal": ["40,150", "40,20"],
	"learn1": ["30,170", "100,70"],
	"learn2": ["30,170", "200,70"],
	"learn3": ["30,170", "126,90", "100,100"],
	"learn4": ["30,170", "126,90", "200,100"],
	"poke1": "100,1",
	"poke2": "200,10",
	"poke3": "100,85",
	"poke4": "200,85",
	"poke5": "100,103",
	"poke6": "200,103",
	"reuse": "40,170",
	"run":   "126,191",
	"switch": "210,170",
	"throw": ["40,150", "170,20"]
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

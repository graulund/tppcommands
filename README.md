# Twitch Plays Pokemon Commands

The 3DS touch screen is hard to press in Twitch Plays Pokemon. This userscript offers a way to press oft-used buttons on the touch screen, like the different attacks, mons and so on, by converting predefined commands into coordinates that the stream accepts.


These commands are now optimised for Pokémon X, although most are not yet implemented.  Keep checking back for more

## Commands
Here's the list of commands that work:

#### General attacking move 
* **att1**:   158,60
* **att2**:   161,60
* **att3**:   158,120
* **att4**:   161,120

#### Miscellaneous commands 
* **run**:    160,239

Commands with more than one set of coordinates means that one of these coordinate sets are chosen at random.  Sometimes one input is more common than others.

Simply type them as you would any other command (a, b, left, etc.) in the Twitch chat -- i.e. it works with extra spaces/text and no matter what casing you use, as long as you start your message with it.

## How to install

### User script

If you use Greasemonkey, Tampermonkey, etc, this is the URL to [the script](http://graulund.github.io/tppcommands/tppcommands.user.js):

`http://graulund.github.io/tppcommands/tppcommands.user.js`

### Bookmark

If not, you can install it via a bookmark.

1. Go to the bookmark menu of your browser and add a new bookmark with the title of your choice.
2. Copy the following snippet and paste it into the URL field: `javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://graulund.github.io/tppcommands/tppcommands.user.js';})();`
3. Save the Bookmark.

From now on, you can just click on that bookmark when you have the TPP tab open to enable the script.

Cheers!

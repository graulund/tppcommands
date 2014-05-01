# Twitch Plays Pokemon Commands

The DS touch screen is hard to press in Twitch Plays Pokemon. This userscript offers a way to press oft-used buttons on the touch screen, like the different attacks, mons and so on, by converting predefined commands into coordinates that the stream accepts.

## Commands
Here's the list of commands that work:

* **att1**:  126,54
* **att2**:  200,54
* **att3**:  126,102
* **att4**:  200,102
* **poke1**: 100,1
* **poke2**: 200,10
* **poke3**: 100,85
* **poke4**: 200,85
* **poke5**: 100,103
* **poke6**: 200,145
* **run**:   126,191

Simply type them as you would any other command (a, b, left, etc.) in the Twitch chat -- i.e. it works with extra spaces/text and no matter what casing you use, as long as you start your message with it.

## How to install

### User script

If you use Greasemonkey, Tampermonkey, etc, this is the URL to the script:

`http://github.com/graulund/tppcommands/raw/master/tppcommands.user.js`

### Bookmark

If not, you can install it via a bookmark.

1. Go to the bookmark menu of your browser and add a new bookmark with the title of your choice.
2. Copy the following snippet and paste it into the URL field: `javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://github.com/graulund/tppcommands/raw/master/tppcommands.user.js';})();`
3. Save the Bookmark.

From now on, you can just click on that bookmark when you have the TPP tab open to enable the script.

Cheers!

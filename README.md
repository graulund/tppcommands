# Twitch Plays Pokemon Commands

The 3DS touch screen is hard to press in Twitch Plays Pokemon. This userscript offers a way to press oft-used buttons on the touch screen, like the different attacks, mons and so on, by converting predefined commands into coordinates that the stream accepts.


These commands are now optimised for Pokémon X, although most are not yet implemented.  Keep checking back for more

## Commands
Here's the list of commands that work:

#### General attacking move
* **att1**: 140,60
* **att2**: 180,60
* **att3**: 140,120
* **att4**: 180,120

#### Using attack while forgetting any new move
* **a1f**: 140,45+B / B
* **a2f**: 180,45+B / B
* **a3f**: 140,108+B / B
* **a4f**: 180,108+B / B

#### Using attack X while attempting to learn attack Y
* **a1l1**: 140,90+A
* **a1l2**: 140,45 / 180,90+A
* **a1l3**: 140,45 / 10,162+A
* **a1l4**: 140,45 / 350,162+A

* **a2l1**: 180,45 / 140,90+A
* **a2l2**: 180,90+A
* **a2l3**: 180,45 / 10,162+A
* **a2l4**: 180,45 / 350,162+A

* **a3l1**: 140,108 / 140,90+A
* **a3l2**: 140,108 / 180,90+A
* **a3l3**: 140,130+A
* **a3l4**: 140,108 / 350,162+A

* **a4l1**: 180,108 / 140,90+A
* **a4l2**: 180,108 / 180,90+A
* **a4l3**: 180,108 / 10,162+A
* **a4l4**: 180,130+A

#### Miscellaneous commands
* **run**: 160,239+B

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

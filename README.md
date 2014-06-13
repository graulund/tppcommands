# Twitch Plays Pokemon Commands

The DS touch screen is hard to press in Twitch Plays Pokemon. This userscript offers a way to press oft-used buttons on the touch screen, like the different attacks, mons and so on, by converting predefined commands into coordinates that the stream accepts.


These commands are now optimised for Pokémon Black
## Commands
Here's the list of commands that work:

#### Use attack, forget a move about to be learned 
* **a1f** : 1,40 / B
* **a2f** : 255,40 / B
* **a3f** : 1,85 / B
* **a4f** : 255,85 / B

#### Use attack X, learn a new move over attack y. learn is only meant for the final step. 
* **learn**: 5,170 
* **a1l1**: 1,75
* **a1l2**: 1,40 / 1,40 / 255,75
* **a1l3**: 1,40 / 1,140
* **a1l4**: 1,40 / 255,140
* **a2l1**: 255,40 / 255,40 / 1,75
* **a2l2**: 255,75
* **a2l3**: 255,40 / 1,140
* **a2l4**: 255,40 / 255,140

#### General attacking move 
* **att1**:   1,75
* **att2**:   255,75
* **att3**:   1,85
* **att4**:   255,85

#### Commands to switch and choose Pokémon in battle
* **switch**: 210,190
* **poke1**:  1,22
* **poke2**:  133,22
* **poke3**:  1,77
* **poke4**:  133,77
* **poke5**:  1,133
* **poke6**:  133,133

#### Commands to change team order outside of battle
* **order** : X / 44,44 / 255,133
* **order1**: 1,22
* **order2**: 133,22
* **order3**: 1,77
* **order4**: 133,77
* **order5**: 1,133
* **order6**: 133,133

#### Miscellaneous commands 
* **heal**:   77,150 / 80,20
* **reuse**:  77,177
* **run**:    126,191
* **throw**:  77,150 / 160,20

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

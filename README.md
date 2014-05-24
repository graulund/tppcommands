# Twitch Plays Pokemon Commands

The DS touch screen is hard to press in Twitch Plays Pokemon. This userscript offers a way to press oft-used buttons on the touch screen, like the different attacks, mons and so on, by converting predefined commands into coordinates that the stream accepts.

## Commands
Here's the list of commands that work:

#### Use attack, forget a move about to be learned 
* **a1f** : 90,46 / B
* **a2f** : 170,46 / B
* **a3f** : 90,94 / B
* **a4f** : 170,94 / B

#### Use attack X, learn a new move over attack y. learn is only meant for the final step. 
* **learn**: 5,170 
* **a1l1**: 90,60
* **a1l2**: 90,46 / 170,80
* **a1l3**: 90,46 / 90,46 / 90,102
* **a1l4**: 90,46 / 90,46 / 170,102
* **a2l1**: 170,46 / 90,80
* **a2l2**: 170,60
* **a2l3**: 170,46 / 170,46 / 90,102
* **a2l4**: 170,46 / 170,46 / 170,102
* **a3l1**: 90,90
* **a3l2**: 90,94 / 170,80
* **a3l3**: 90,94 / 90,102
* **a3l4**: 90,94 / 90,94 / 170,102
* **a4l1**: 170,94 / 90,80
* **a4l2**: 170,90
* **a4l3**: 170,94 / 170,94 / 90,102
* **a4l4**: 170,94 / 170,102
 
#### General attacking move 
* **att1**:   126,54
* **att2**:   170,54
* **att3**:   126,94
* **att4**:   170,102

#### Double battle attacks and target selection
* **att1d**: 126,54
* **att2d**: 130,54
* **att3d**: 126,94
* **att4d**: 130,102
* **targ1**: 5,10
* **targ2**: 200,10

#### Commands to switch and choose Pokémon 
* **switch**: 210,190
* **poke1**:  90,15
* **poke2**:  160,15
* **poke3**:  90,85
* **poke4**:  160,85
* **poke5**:  90,103
* **poke6**:  160,103

#### Miscellaneous commands 
* **heal**:   80,150 / 80,20
* **reuse**:  80,180
* **run**:    126,191
* **throw**:  80,150 / 160,20

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

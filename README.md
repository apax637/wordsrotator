WordsRotator
============

A simple text elements rotator plugin

Visit the [project page](http://andreapace.co.uk/wordsrotator/) for more information and usage examples!

Install
============
Five simple steps to install and configure wordsRotator plugin
### Step 1. Include jQuery

Include the last version of jQuery
### Step 2. Include jQuery Words Rotator Code

Insert into your page's head tag:
```bash
<link rel="stylesheet" href="jquery.wordrotator.css">
<script src="jquery.wordrotator.js"></script>
```
### Step 3. Include the CSS3 effects

Choose and build the CSS3 animation effects from [Animate.css](https://github.com/daneden/animate.css)
```bash
<link rel="stylesheet" href="animate.css">
```
### Step 4. HTML code

<p>An <span id="myWords"></span> a day keeps the doctor away</p>

### Step 5. Javascript code
```bash
<script type="text/javascript">
    $(function () {
        $("#myWords").wordsrotator({
            words: ['apple', 'apricot', 'avocado']
        });
    });
</script>

```
Configure
============
```bash
$("#myWords").wordsrotator({
    autoLoop: true,				//auto rotate words
    randomize: false,				//show random entries from the words array
    stopOnHover: false,				//stop animation on hover
    changeOnClick: false,			//force animation run on click
    animationIn: "flipInY",			//css class for entrace animation
    animationOut: "flipOutY",			//css class for exit animation
    speed: 2000,				//delay in milliseconds between two words
    words: ['apple', 'apricot', 'avocado']	//Array of words, it may contain HTML values
});
```

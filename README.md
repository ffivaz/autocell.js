# autocell.js
Cellular automatas in Javascript

## How to use

It's simple as that...

Load functions in your html headers :

```html
<head>
    <script src="game_of_life.js"></script>
</head>
```

In your html code, set a canvas with any width and height:

```html
<canvas id="canvas" width="800" height="500"></canvas>
```

And in a script, put the init code. Initial patterns are available in the data directory. Each file is JSON coded. In the example, the gosper-glider-gun.json file is assumed to be in the same directory as you html and js files.

```html
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    var myGOLObject = new gameOfLife(40, 72, canvas, ctx, 'gosper-glider-gun.json');
</script>
```

To cycle through the steps, set up a timer (in the same script, under the code above). Change 250 to any time (in milliseconds) you want a step to last.

```javascript
var myTimer;
myTimer = setInterval(function () {
    myGOLObject.run();
}, 250);

// You can stop the timer with:
clearInterval(myTimer);
```

You can flush the canvas (for instance to draw a new board) and reset the board with:

```javascript
ctx.clearRect(0, 0, canvas.width, canvas.height);
myGOLObject.reset();
```
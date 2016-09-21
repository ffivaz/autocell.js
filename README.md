# autocell.js
Cellular automatas in Javascript

## How to use

It's simple as that :

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

And in a script, get the init code

```html
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    var myGOLObject = new gameOfLife(40, 72, canvas, ctx, '../data/gosper-glider-gun.json');
</script>
```

the initial patterns are available in the data directory. Each file is JSON coded.

```javascript
var myTimer;
myTimer = setInterval(function () {
    myGOLObject.run();
}, 250);
```

Change 250 to any time (in milliseconds) you want a stop to last.


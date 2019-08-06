# ScrableBoard

This plguin allows you to create a scrable like board instantly. Allows the user to add a character and press tab to move right and enter to move down.

The plugin is more of a starter for setting up whatever scrable board like tool you are wanting to build. 

#Methods

The plugin has 3 public function to use for now:

1. clear which clears the board.
```
$("#scrable-board").data('plugin_ScrableBoard').clear()
```

2. exportTable which exports the table as html. This can then be parsed for anyway you need it.
```
$("#scrable-board").data('plugin_ScrableBoard').exportTable()
```

3. totalCellEnteredCount which gets you the total count of cells in use. 
```
$("#scrable-board").data('plugin_ScrableBoard').totalCellEnteredCount()
```

![alt text](https://raw.githubusercontent.com/bigfetz/ScrableBoard/master/scrableDemo.PNG)


#installation

To install add the css file 
```
<link rel="stylesheet" type="text/css" href="ScrableBoard.css">
```

and the JS plugin file with Jquery
```
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="ScrableBoard.js"></script>
```

Init plugin
```
<div id="scrable-board"></div>
.
.
<script>
  $(document).ready(function(){
    $("#scrable-board").ScrableBoard();
  });
</script>
```
    
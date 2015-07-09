# canvasProgress

标签： HTML5

---
使用canvase实现的progress小插件，例子如下：
```js
<canvas id="canvasEl" style="background-color:#000" height="100px" width="100px"></canvas>
    
var progress = new Progress({element:document.getElementById('canvasEl')});

var n = 0;

var timer = setInterval(function() {
	if (n++ !== 100) {
		progress.setProgress(n);		
	} else {
		clearInterval(timer);
	}
}, 100)；
```
实现效果：
    
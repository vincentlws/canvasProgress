# canvasProgress

标签： HTML5

---
使用canvase实现的progress小插件，例子如下：
```js
<canvas id="canvasEl" style="background-color:#000" height="100px" width="100px"></canvas>
    
var progress = new Progress({
    element: document.getElementById('canvasEl')
    //文字样式
	text: {
		font: '10px Arial',
		style: '#fff',
		alpha: 1
	},
	//外圈样式
	outSideCircle: {
		style: '#fff',
		alpha: 1,
		lineWidth: 2.5
	},
	//内圈样式
	inSideCircle:{
		style: '#fff',
		alpha: 0.3,
		lineWidth: 2	
	}
});

var n = 0;

var timer = setInterval(function() {
	if (n++ !== 100) {
		progress.setProgress(n);		
	} else {
		clearInterval(timer);
	}
}, 100)；
```
效果：
![1][1]    ![2][2]   ![3][3]


  [1]: https://github.com/vincentlws/canvasProgress/blob/master/img/1.png?raw=true
  [2]: https://github.com/vincentlws/canvasProgress/blob/master/img/2.png?raw=true
  [3]: https://github.com/vincentlws/canvasProgress/blob/master/img/3.png?raw=true
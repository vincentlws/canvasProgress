var Progress = function(opt) {
	this.option = this.extend({			
		radius: 20,
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
	}, opt)
	
	this.el = this.option.element;
	this.context = this.el.getContext('2d');
	this.elWidth = this.el.width;
	this.elHeight = this.el.height;
	this.hElWidth = this.elWidth / 2;
	this.hElHeight = this.elHeight / 2;
}

Progress.prototype = {
	constructor: Progress,

	extend: function(tar, sub) {
		for (var x in sub) {
			tar[x] = sub[x];
		}

		return tar;
	},

	/**
	*	绘制圆形
	*	@参数 n: 当前进度
	*
	*/
	_drawCircle: function(n) {
		var option = this.option,
			context = this.context,
			pi = Math.PI,
			inSideCircle = option.inSideCircle,
			outSideCircle = option.outSideCircle;
		
		context.beginPath();

		//设置透明度，样式与线条宽度
		this.extend(context, {
			globalAlpha: inSideCircle.alpha,
			strokeStyle: inSideCircle.style,
			lineWidth: inSideCircle.lineWidth
		})			

		//绘制圆
		context.arc(this.hElWidth, this.hElHeight, option.radius + outSideCircle.lineWidth - inSideCircle.lineWidth, 0, pi * 2, false);

		//画出圆形
		context.stroke();

		context.beginPath();

		//设置透明度，样式与线条宽度
		this.extend(context, {
			globalAlpha: outSideCircle.alpha,
			strokeStyle: outSideCircle.style,
			lineWidth: outSideCircle.lineWidth
		})							

		//根据当前进度绘制圆
		context.arc(this.hElWidth, this.hElHeight, option.radius, -(pi / 2), pi * 2 / 100 * (n - 25), false);

		//画出圆形
		context.stroke();
	},

	/**
	*	绘制进度
	*	@参数 n: 当前进度
	*/
	_drawText: function(n) {
		var context = this.context,
			number = n + '%',
			numberWidth = 0,
			textObj = this.option.text;

		context.beginPath();

		this.extend(context, {
			font: textObj.font,
			fillStyle: textObj.style,
			globalAlpha: textObj.alpha
		})			

		//得出数值宽度
		numberWidth = context.measureText(number).width;

		context.fillText(number, this.hElWidth - numberWidth / 2, this.hElHeight + 10 / 3)
	},

	/*
	*	绘制进度
	*	@参数 n: 进度			
	*/
	setProgress: function(n) {
		//清除canvas内容
		this.context.clearRect(0, 0, this.elWidth, this.elHeight);							

		this._drawCircle(n);
		
		this._drawText(n);					
	}
}
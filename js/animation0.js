/*
* www.Pooyaa.com
* Copyright (c) 2014-2015 Pooyaa;
*/
function postars(canvas){var _this=this,ctx=canvas.getContext('2d');_this.config={star:{color:'#ffffff'},line:{color:'#ffffff',width:0.1},position:{x:canvas.width*0.5,y:canvas.height*0.5},velocity:0.1,length:100,distance:120,radius:150,stars:[]};function Star(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.vx=(_this.config.velocity-(Math.random()*0.5));this.vy=(_this.config.velocity-(Math.random()*0.5));this.radius=Math.random();}Star.prototype={create:function(){ctx.beginPath();ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);ctx.fill();},animate:function(){var i;for(i=0;i<_this.config.length;i++){var star=_this.config.stars[i];if(star.y<0||star.y>canvas.height){star.vx=star.vx;star.vy=-star.vy;}
else if(star.x<0||star.x>canvas.width){star.vx=-star.vx;star.vy=star.vy;}
star.x+=star.vx;star.y+=star.vy;}}};_this.createStars=function(){var length=_this.config.length,star,i;ctx.clearRect(0,0,canvas.width,canvas.height);for(i=0;i<length;i++){_this.config.stars.push(new Star());star=_this.config.stars[i];star.create();}star.line();star.animate();};_this.setCanvas=function(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;};_this.setContext=function(){ctx.fillStyle=_this.config.star.color;ctx.strokeStyle=_this.config.line.color;ctx.lineWidth=_this.config.line.width;};_this.loop=function(callback){callback();reqAnimFrame(function(){_this.loop(function(){callback();});});};_this.init=function(){_this.setCanvas();_this.setContext();_this.loop(function(){_this.createStars();});_this.bind();};return _this;}var reqAnimFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};
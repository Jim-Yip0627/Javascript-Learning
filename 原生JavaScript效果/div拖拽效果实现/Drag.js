function Drag(obj1,obj2){
	var ex1 = document.getElementById(obj1);
	var ex2 = document.getElementById(obj2);
	var ex1_left = ex1.offsetLeft+ex1.offsetWidth;
	var ex1_top = ex1.offsetTop+ex1.offsetHeight;
	var sta = 0;
	//给ex2添加鼠标拖动事件	
	ex2.onmousedown = function(e){
			//设置鼠标样式
			ex2.style.cursor="move";	
			//获取鼠标按下事件对象;
			var e = window.event || e;
			
			//x=鼠标相对于网页的x坐标-ex2的left;
			var x=e.clientX-this.offsetLeft;
			//y=鼠标相对于网页的y左边-ex2的top;
			var y=e.clientY-this.offsetTop;
			
			document.onmousemove=function(e){//鼠标移动
				sta = 0;
				var e=window.event || e;//移动时创建一个事件
				if((e.clientX-x)<(ex1_left+30)&&(e.clientY-y)<(ex1_top+30)){
					sta = 1;
				}
				ex2.style.left=(e.clientX-x)+"px";
				ex2.style.top=(e.clientY-y)+"px";
				

			 }
			document.onmouseup=function (){//鼠标放开
				if(sta==1){
				ex2.style.left= ex1_left+"px";
				ex2.style.top=	ex1.offsetTop+"px";
				sta = 0;
				}
				document.onmousemove=null;
				document.onmouseup = null;
				ex2.style.cursor="normal";//设置放开的样式
			 }
		}
}
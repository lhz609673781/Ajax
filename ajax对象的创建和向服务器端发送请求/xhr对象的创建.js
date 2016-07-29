// ie7+,ff,opera,chrome,safari都支持原生的XHR对象，可以像下面代码一样创建
//var xhr=new XMLHttpRequest();

//如果想支持ie的早期版本，则按下面函数


function createXHR(){
	if(typeof XMLHttpRequest !="undefined"){
		return new XMLHttpRequest();
	}else if(typeof ActiveXObject !="undefined"){//ie早期版本
		//查看调用函数中是否存在一个activeXString的变量
		if(typeof arguments.callee.activeXString !="string"){
			//定义一个数组
			var version=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];
			for(var i=0,len=versions.length;i<len;i++){
				try{
					var xhr=new ActiveXObject(versions[i]);
					arguments.callee.activeXString=versions[i];
					return xhr;
				}catch(e){
				//skin
				}	
			}
		}
		return new ActiveXObject(arguments.callee.activeXString);
	}else{
		throw new Error("No XHR object available");
	}
}
function myAjax(method,url,params,callbake){
	//ajax
	var xhr;
	if(XMLHttpRequest){
		xhr = new XMLHttpRequest;
	}else{
		xhr = new ActiveXObject('microsoft.XMLHTTP')
	}
	//2
	if(method.toLowerCase() == 'get'){
		url = url + '?' + params;
	}
	xhr.open(method,url)
	//3
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200 ){
			//console.log(xhr.responseText);
			callbake(xhr.responseText)
		}
	}
	//4
	if(method.toLowerCase == 'post'){
		xhr.setRequesHeader('Content-type','application/x-www-form-urlencoded');
		xhr.send(params)
	}else{
		xhr.send(null)
	}
}
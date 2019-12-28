function form(name,age,username){
	if(/([A-Z]){3,}/.test(name)){
   		if(/^[0-9]{1,2}[:.,-]?$/.test(age)){
    		if(/[a-z]{4,}/.test(username)){
            	return "sukses"
            }
          	else{
            	return "format username salah"
            }
    	}else{
    		return "format umur salah"
    	}   
	}else{
	return "format nama salah"
	}
}

console.log(form('DIA',20,"diduhh"))
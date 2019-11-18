"use strict";
function Session(x){
	sessionStorage.setItem('ctx',x);
	sessionStorage.setItem('js',x+'/resources/js/garam');

	return{
		ctx : () =>{return sessionStorage.getItem('ctx');},
		js: ()=>{return sessionStorage.getItem('js');},

	}
}
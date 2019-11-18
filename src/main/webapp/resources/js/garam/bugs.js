"user strict"
var bugs = bugs||{}
bugs = (()=>{
	let _, js, bugsjs,bugsvue,pagevue;
    let init = () => {
    	_ = $.ctx();
        js = $.js();
        bugsjs = js + '/bugs.js'
        bugsvue= js + '/bugs_vue.js'
        pagevue= js +'/garam/page_vue.js'


    }
	 let onCreate = () => {
		 init()
		 $.when(
				 $.getScript(bugsvue),
				 $.getScript(pagevue)
				 )
		 .done(
				 $('<a>벅스 크롤링</a>').appendTo('body')
					.click(e=>{
						e.preventDefault()
						$.getJSON('bugs/crawling/', d=>{
							alert("크롤링")
							alert(d.artist)
							result(d)
					
						}
						)
					}),
					
					$('<a>벅스 디비</a>').appendTo('body')
					.click(e=>{
						e.preventDefault()
						$.getJSON('bugs/insert/', d=>{
							alert("디비")

					
						}
						)
					})
				 )
		 .fail(
				 alert('gg'))

			
			
	       
	    }
	 let result =x=>{
		 alert('떠라')
		 alert(x.artist)

		 $('body').empty
		 $(bugs_vue.page(x)).appendTo('body')
		 $(page_vue.page(x)).appendTo('body')
/*		 $('<div id = "music">'+
				'<span id = "artist12"></span>'+
				'<span id = "title12"></span>'+
				 '</div>').appendTo('body')
	
			 $.each(x.artist, (i, j)=>{
	             $('<h3>',{
	            	 text : j
	             }).appendTo('#music')
	            
	         }) ,
	         $.each(x.title, (i, j)=>{
	             $('<h3>',{
	            	 text :j
	             }).appendTo('#music')
	            
	         }) */
			 
		
	
			 $.each(x.artist, (i, j)=>{
				 $('<p id = "artist'+i+'"class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">')
				 .appendTo('#music')
	             $('<strong  class="d-block text-gray-dark">'+j+'</strong>')
	             .appendTo('#artist'+i).addClass('my-3 p-3 bg-white rounded shadow-sm')
	            
	         }) ,
	         $.each(x.title, (i, j)=>{
				 $('<p id = "artist'+i+'"class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">')
				 .appendTo('#music')
	        	 $('<a>'+j+'</a>')
					.appendTo('#artist'+i).addClass('my-3 p-3 bg-white rounded shadow-sm')
	            
	         }) 
		 
		 

        
	 }
	 
	 
	 

	 return {onCreate}	
	
})()
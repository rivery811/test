"use strict";
var brd = brd || {}
brd =(()=>{
	const WHEN_ERR = '호출하는 brd js를 찾을수 없습니다.'
	let context,js
	let brd_vuejs
	
	let init=()=>{
		context = $.ctx()
		js = $.js()
		brd_vuejs = js+'/vue/brd_vue.js'
	}
	let onCreate=()=>{
		init()
		$.when(
		 $.getScript(brd_vuejs)
		 
		).done(()=>{
			setContentView()
		}).fail(()=>{})
	}
	let setContentView=()=>{
		$('head')
		.html(brd_vue.brd_head({css:$.css(), img: $.img()}))
		$('body').addClass('text-center')
		.html(brd_vue.brd_body({css:$.css(),img:$.img()}))
		$('#brd_body_text').html('bugs_crawl')
		$('#brd_body_text1').html('bugs-music')
	}
	
	return{onCreate}
})()
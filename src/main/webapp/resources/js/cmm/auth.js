"use strict";
var auth = auth || {};
auth = (()=>{
    const WHEN_ERR = '호출하는 auth js를 찾을 수 없습니다 .'
    let context, js ;
    let auth_vuejs , brd_vuejs ;
    let routerjs,brdjs,bugsjs;
    let init=()=>{
       context = $.ctx()
       js = $.js()
       auth_vuejs = js+'/vue/auth_vue.js'
       routerjs = js + '/cmm/router.js'
       brdjs = js +'/brd/brd.js'
       brd_vuejs = js +'/vue/brd_vue.js'
       bugsjs = js + '/garam/bugs.js'
    }
    let onCreate=()=>{
       init();
       $.when(
               $.getScript(auth_vuejs),
               $.getScript(routerjs),
               $.getScript(brdjs),
               $.getScript(brd_vuejs)
       ).done(()=>{
           setContentView()
       }).fail(()=>{
           alert(WHEN_ERR)
       })
    }
    let setContentView=()=>{
        $('<table id="tab">' +
                '  <tr>' +
                '  </tr>' +
                '</table>') // key값 무조건 string이기 때문에 '' 생량가능 value는 생략 불가, json이기때문에 , 로 속성 추가                           
            .css({
                width: '80%',
                height: '80%',
                border: '1px solid black',
                margin: '0 auto'
            })
            .appendTo('body') // body에 오버로딩
        $.each(
            [{
                    id: 'left',
                    width: '20%'
                },
                {
                    id: 'right',
                    width: '80%'
                }
            ],
            (i, j) => {
                $('<td id="' + j.id + '"></td>')
                    .css({
                        border: '1px solid #ddd',
                        width: j.width,
                        'vertical-align': 'top'
                    })
                    .appendTo('#tab tr')
            })
        $.each([ // name을 주고 구분
                {
                    txt: '벅스뮤직',
                    name: 'bugs_crawl'
                },
                {
                    txt: 'CGV',
                    name: 'cgv_crawl'
                },
                {
                    txt: 'NAVER',
                    name: 'naver_crawl'
                }
            ],
            (i, j) => {
                $('<div name="' + j.name + '">' + j.txt + '</div>')
                    .appendTo('#left')
                    .click(function() {
                        $(this).addClass('active')
                        $(this).siblings().removeClass('active')
                        switch ($(this).attr('name')) {
                           case 'bugs_crawl':
                   			$.getScript(bugsjs)
                   			bugs.onCreate()
                               break
                           case 'cgv_crawl':
                             cgv_crawl()
                               break
                           case 'naver_crawl':
                             naver_crawl()
                             break
                       }
                    })
            })
        $('#left div').css({
            border: '1px solid #ddd',
            margin: 'auto 0',
            'line-height': '50px'
        })
        
        
    }
    let bugs_crawl=()=>{
       $('#right').empty()
       $('<a>bugs 순위차트</a><br/>')
       .appendTo('#right')
       .click(e=>{
           e.preventDefault()
            alert('벅스크롤링')
            brd.onCreate()
            
       })
       
    }
    let cgv_crawl=()=>{
       $('#right').empty()
       $('<a>CGV</a><br/>')
       .appendTo('#right')
       .click(e=>{
           e.preventDefault()
            alert('CGV')
       })
       
    }
    let naver_crawl=()=>{
       $('#right').empty()
       $('<a>NAVER</a><br/>')
       .appendTo('#right')
       .click(e=>{
           e.preventDefault()
            alert('NAVER')
       })
       
    }
    return{onCreate}
    
})();
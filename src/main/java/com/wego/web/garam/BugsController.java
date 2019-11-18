package com.wego.web.garam;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bugs")
@Transactional
@Lazy
public class BugsController {
	@Autowired BugsCrawling bugscrawling;
	@Autowired BugsProxy bproxy;
	@Autowired Bugspaging paging;
	@GetMapping("/crawling/")
	public Map<?,?> crawl(String a){
		

		 HashMap<String, Object> map= new HashMap<>();
		 List<String> bugslist= new ArrayList<String>();
		map.clear();
		//String url = "https://music.bugs.co.kr/chart";
		bugscrawling.crawling(a);
		System.out.println("컨트롤러"+bugscrawling.crawling(a));
		map.put("artist", bugscrawling.crawling(a).get("artist"));
		map.put("title", bugscrawling.crawling(a).get("titles"));
		paging.paging(a);
		//map.put("pager", paging.paging(a));
		return map;
	}
	@GetMapping("/insert/")
	public void insert(String url){
		bproxy.insertMusic(url);

		
	}
	
	
	

}

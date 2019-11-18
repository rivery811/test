package com.wego.web.garam;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class BugsProxy {
	@Autowired BugsCrawling bugscrawling;
	@Autowired BugsMapper bmapper;
	@Autowired Bugs bugs;
 @SuppressWarnings("unchecked")
@Transactional
public void insertMusic(String a) {

	 List<String> lista = new ArrayList<>();
	 lista = (List<String>) bugscrawling.crawling(a).get("artist");
	 System.out.println("프록시 가수"+lista);
	 List<String> listt = new ArrayList<>();
	 listt = (List<String>) bugscrawling.crawling(a).get("titles");
	 for(int i=0;i< 100;i++) {
		 
		 String artist = lista.get(i);
		 String title = listt.get(i);
		 bmapper.insertMusic(new Bugs(artist,title));
		 System.out.println("포문"+bugs.toString());
	 }
 }
}

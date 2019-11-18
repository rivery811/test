package com.wego.web.garam;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
@Component
public class BugsCrawling {

	public Map<?,?> crawling(String url) {
		List<String> titles= new ArrayList<String>();
		List<String> artists= new ArrayList<String>();
		HashMap<String, Object> map= new HashMap<>();
		url = "https://music.bugs.co.kr/chart";
		try {
			Document rawData = Jsoup.connect(url).timeout(10*1000).get();
			Elements title = rawData.select("p[class=title]");
			Elements artist = rawData.select("p[class=artist]");
			for(Element e : title) {
				titles.add( e.text());
			}
			for(Element e : artist) {
				artists.add( e.text());
			}
			map.clear();
			map.put("artist", artists);
			map.put("titles", titles);
			
			System.out.println("Å©·Ñ¸µ"+map.get("artist"));
			
		} catch (Exception e) {
			e.printStackTrace();
		}

		return map;
	}

}

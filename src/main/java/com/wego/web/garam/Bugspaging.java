package com.wego.web.garam;

import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Data @Lazy
@Component
public class Bugspaging {
	private int totalCount,startRow,endRow ,
	pageCount , pageNum , pageSize , startPage,endPage,
	blockCount , blockNum , nextBlock , prevBlock ;
private boolean existPrev, existNext;
private String search;
private final int BLOCK_SIZE = 4;

@Autowired BugsMapper bugsMapper;
@Autowired BugsCrawling bugscrawling;

public  void paging(String url) {
//ISupplier<String> s = () ->communityMapper.countCommunity();
	pageSize=4;
	
	
List<String> lista = new ArrayList<>();
lista = (List<String>) bugscrawling.crawling(url).get("artist");

int a = lista.size();
System.out.println("---------------------");
System.out.println(a);
totalCount =a;

pageCount = (totalCount % pageSize !=0)?(totalCount /pageSize)+1 : totalCount / pageSize;
startRow = (pageNum < 1)? 0 : (pageNum-1)*pageSize;
endRow =(pageNum ==pageCount)?totalCount -1:startRow+pageSize-1;

blockCount = (pageCount % BLOCK_SIZE !=0)?(pageCount/BLOCK_SIZE)+1 : pageCount / BLOCK_SIZE;
blockNum = (pageNum-1)/BLOCK_SIZE;
startPage = blockNum *BLOCK_SIZE +1;
endPage= (blockCount-1 == blockNum ) ? pageCount: startPage+(BLOCK_SIZE-1);
existPrev = (blockNum !=0)  ;
existNext = (blockNum < blockCount-1);
//pages = new ArrayList<>();
//for(int i = startPage; i <= endPage ; i++) {
//pages.add(i);
//}
nextBlock = startPage + BLOCK_SIZE ; 
prevBlock = startPage - BLOCK_SIZE;
}
}

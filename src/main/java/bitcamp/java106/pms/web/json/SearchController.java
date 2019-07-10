package bitcamp.java106.pms.web.json;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java106.pms.domain.Works;
import bitcamp.java106.pms.service.SearchService;

@RestController
@RequestMapping("/search")
public class SearchController {
    
    SearchService searchService;
    
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }
    
    @RequestMapping("list")
    public Object list(String title) {        
        return searchService.list(title);
    }
    
    @RequestMapping("storelist")
    public Object storelist(String title) {        
        return searchService.storelist(title);
    }
    
    @RequestMapping("workslist")
    public Object workslist(
            @RequestParam("title") String title,
            @RequestParam("startNo") int startNo,
            @RequestParam("pageNo") int pageNo) {        
        return searchService.workslist(title, startNo, pageNo);
    }
    
    @RequestMapping("{no}")
    public Works view(@PathVariable int no) throws Exception {
        return searchService.get(no);
    }

}
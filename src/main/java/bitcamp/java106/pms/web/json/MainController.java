package bitcamp.java106.pms.web.json;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java106.pms.service.BoardService;
import bitcamp.java106.pms.service.WorksService;
import bitcamp.java106.pms.service.WorkshopService;

@RestController
@RequestMapping("/main")
public class MainController {
    
    BoardService boardService;
    WorksService worksService;
    WorkshopService workshopService;
    
    public MainController(BoardService boardService, 
                          WorksService worksService,
                          WorkshopService workshopService) {
        this.boardService = boardService;
        this.worksService = worksService;
        this.workshopService = workshopService;
    }
    
    @RequestMapping("listmain")
    public Object selectListInMain() throws Exception {
        System.out.println("Controller.selectListInMain");
        return boardService.selectListInMain();
    }
    
    @RequestMapping("listkeyword")
    public Object selectListWithHashtag(String hashtag) throws Exception {
        System.out.println("Controller.selectListWithHashtag");
        return worksService.listWithHashtag(hashtag);
    }
    
    @RequestMapping("popular")
    public Object selectPopularList() throws Exception {
        System.out.println("Controller.selectPopularList");
        return workshopService.selectPopularList();
    }
}

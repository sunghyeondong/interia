package bitcamp.java106.pms.web.json;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java106.pms.domain.Wrkshp;
import bitcamp.java106.pms.service.WrkshpService;

@RestController
@RequestMapping("/wrkshp")
public class WrkshpController {
    
    WrkshpService wrkshpService;
    
    public WrkshpController(WrkshpService wrkshpService) {
        this.wrkshpService = wrkshpService;
    }

    @RequestMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(Wrkshp wrkshp) throws Exception {
        wrkshpService.add(wrkshp);
    }
    
    @RequestMapping("delete")
    //@ResponseStatus(HttpStatus.OK) // 응답 상태 코드 값의 기본은 "200(OK)" 이다.
    public void delete(@RequestParam("no") int no) throws Exception {
        wrkshpService.delete(no);
    }
    
    @RequestMapping("list")
    public Object list(int no) {        
        return wrkshpService.list(no);
    }
    
    @RequestMapping("listtwo")
    public Object listtwo(
            @RequestParam("pageNo") int pageNo,
            @RequestParam("pageSize") int pageSize) {        
        return wrkshpService.listtwo(pageNo, pageSize);
    }
    
    @RequestMapping("update")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public void update(Wrkshp wrkshp) throws Exception {
        wrkshpService.update(wrkshp);
    }
    
    @RequestMapping("{no}")
    public Wrkshp view(@PathVariable int no) throws Exception {
        return wrkshpService.get(no);
    }

}

//ver 55 - JSON 데이터를 출력하는 페이지 컨트롤러 생성







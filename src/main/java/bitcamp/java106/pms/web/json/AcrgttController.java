package bitcamp.java106.pms.web.json;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java106.pms.domain.Acrgtt;
import bitcamp.java106.pms.service.AcrgttService;

@RestController
@RequestMapping("/acrgtt")
public class AcrgttController {

    AcrgttService acrgttService;
    
    public AcrgttController(AcrgttService acrgttService) {
        this.acrgttService = acrgttService;
    }
    
    @RequestMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(Acrgtt acrgtt) throws Exception {
        acrgttService.add(acrgtt);
    }
    
}




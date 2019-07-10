package bitcamp.java106.pms.web.json;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java106.pms.domain.Qna;
import bitcamp.java106.pms.service.QnaService;

@RestController
@RequestMapping("/qna")
public class QnaController {
    
    QnaService qnaService;
    
    public QnaController(QnaService qnaService) {
        this.qnaService = qnaService;
    }

    @RequestMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(Qna qna) throws Exception {
        qnaService.add(qna);
    }
    
    @RequestMapping("delete")
    //@ResponseStatus(HttpStatus.OK) // 응답 상태 코드 값의 기본은 "200(OK)" 이다.
    public void delete(@RequestParam("no") int no,
                       @RequestParam("wsano") int wsano) throws Exception {
        qnaService.delete(no, wsano);
    }
    
    @RequestMapping("list")
    public Object list(int no) {        
        return qnaService.list(no);
    }
    
    @RequestMapping("update")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public void update(Qna qna) throws Exception {
        qnaService.update(qna);
    }
    
    @RequestMapping("{no}")
    public Qna view(@PathVariable int no) throws Exception {
        return qnaService.get(no);
    }

}
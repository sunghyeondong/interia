package bitcamp.java106.pms.web.json;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java106.pms.domain.Member;
import bitcamp.java106.pms.service.MyLikeService;

@RestController
@RequestMapping("/mylike")
public class MyLikeController {
    
    MyLikeService myLikeService;
    
    public MyLikeController(MyLikeService myLikeService) {
        this.myLikeService = myLikeService;
    }
    
    @RequestMapping("list")
    public Object myLikeList(HttpSession session) throws Exception {
        Member member = (Member)session.getAttribute("loginUser");
        
        return myLikeService.myLikeList(member.getNo());
    }
    
    @RequestMapping("likeCount{no}")
    public Object likeList(@PathVariable int no) throws Exception {
        return myLikeService.likeCount(no);
    }
    
    @RequestMapping("commentCount{no}")
    public Object commentCount(@PathVariable int no) throws Exception {
        return myLikeService.commentCount(no);
    }
    
    @RequestMapping("mpLikeCnt")
    public int mpLikeCnt(HttpSession session) {
        Member member = (Member)session.getAttribute("loginUser");
        int userNo = member.getNo();
        return myLikeService.mpLikeCnt(userNo);
    }
}

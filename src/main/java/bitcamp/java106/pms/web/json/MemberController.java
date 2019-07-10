package bitcamp.java106.pms.web.json;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.MatrixVariable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java106.pms.domain.Member;
import bitcamp.java106.pms.service.MemberService;

@RestController
@RequestMapping("/member")
public class MemberController {

    MemberService memberService;
    
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
    
    @RequestMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(Member member) throws Exception {
        memberService.add(member);
    }
    
    @RequestMapping("delete")
    public void delete(@RequestParam("no") int no) throws Exception {
        memberService.delete(no);
    }
    
    @RequestMapping("list{page}")
    public Object list(
            @MatrixVariable(defaultValue="1") int pageNo,
            @MatrixVariable(defaultValue="3") int pageSize) {
        return memberService.list(pageNo, pageSize);
    }
    
    @RequestMapping("update")
    @ResponseStatus(HttpStatus.OK)
    public void update(Member member) throws Exception {
        memberService.update(member);
    }
    
    // 해당 회원번호로 이용하여 모든 회원정보 출력
    @RequestMapping("{no}")
    public Member view(@PathVariable int no) throws Exception {
        System.out.println(no);
        return memberService.get(no);
    }
    
    // 페이스북 로그인시 아이디 값으로 회원번호 찾기용도로 쓰인다.
    @RequestMapping("searchNoOfId/{id}")
    public int searchNoOfId(@PathVariable String id) throws Exception {
        System.out.println(id);
        return memberService.memberNumber(id);
    }
    
    @RequestMapping("memberInfo")
    public Member memberInfo(HttpSession session) {
        Member member = (Member) session.getAttribute("loginUser");
        int userNo = member.getNo();
        System.out.println(userNo);
        
        return memberService.memberInfo(userNo);
    }
    
}




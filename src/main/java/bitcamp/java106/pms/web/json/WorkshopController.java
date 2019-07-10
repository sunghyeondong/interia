package bitcamp.java106.pms.web.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.UUID;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java106.pms.domain.Member;
import bitcamp.java106.pms.domain.WorksPhoto;
import bitcamp.java106.pms.domain.Workshop;
import bitcamp.java106.pms.domain.Wspho;
import bitcamp.java106.pms.service.MemberService;
import bitcamp.java106.pms.service.WorkshopService;
import bitcamp.java106.pms.service.WsphoService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/workshop")
public class WorkshopController {

    @Autowired ServletContext sc;
    WorkshopService workshopService;
    MemberService memberService;
    WsphoService wsphoService;
    
    public WorkshopController(
            WorkshopService workshopService) {
        this.workshopService = workshopService;
    }
    
    @RequestMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(Workshop workshop) throws Exception {
        workshopService.add(workshop);
    }
    
    @RequestMapping("addwspho")
    @ResponseStatus(HttpStatus.CREATED)
    public void addwspho(Wspho wspho) throws Exception {
        workshopService.add(wspho);
    }
    
    @RequestMapping("addIntro")
    @ResponseStatus(HttpStatus.CREATED)
    public void addIntro(Wspho wspho) throws Exception {
        workshopService.addIntroduce(wspho);
    }
    
    @RequestMapping("addfile")
    @ResponseStatus(HttpStatus.CREATED)
    public Object addfile(Workshop workshop, MultipartFile files) throws Exception {
            
        HashMap<String,Object> jsonData = new HashMap<>();
        
        String filesDir = sc.getRealPath("/files/workshop");
        
        String filename = UUID.randomUUID().toString();
        jsonData.put("filename", filename);
        jsonData.put("filesize", files.getSize());
        jsonData.put("originname", files.getOriginalFilename());
        try {
            File path = new File(filesDir + "/" + filename);
            System.out.println(path);
            files.transferTo(path);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonData;
        //workshopService.addfile(workshop, jsonData);
    }
    
    @RequestMapping("isExist/{isExistNo}") 
    public boolean isExist(@PathVariable int isExistNo) throws Exception {
        return workshopService.isExist(isExistNo); // 판매자 신청을 완료한 경우
    }
    
    @RequestMapping("delete")
    //@ResponseStatus(HttpStatus.OK) // 응답 상태 코드 값의 기본은 "200(OK)" 이다.
    public void delete(@RequestParam("no") int no) throws Exception {
        workshopService.delete(no);
    }
    
    
    @RequestMapping("list")
    public Object list(int no) {        
        return workshopService.list(no);
    }
    
    @RequestMapping("listtwo")
    public Object listtwo(
            @RequestParam("pageNo") int pageNo,
            @RequestParam("pageSize") int pageSize) {        
        return workshopService.listtwo(pageNo, pageSize);
    }
    
    @RequestMapping("listfur")
    public Object listfur(int no) {        
        return workshopService.listfur(no);
    }
    
    @RequestMapping("listfurtwo")
    public Object listfurtwo(
            @RequestParam("pageNo") int pageNo,
            @RequestParam("pageSize") int pageSize) {        
        return workshopService.listfurtwo(pageNo, pageSize);
    }
    
    @RequestMapping("listfab")
    public Object listfab(int no) {        
        return workshopService.listfab(no);
    }
    
    @RequestMapping("listfabtwo")
    public Object listfabtwo(
            @RequestParam("pageNo") int pageNo,
            @RequestParam("pageSize") int pageSize) {        
        return workshopService.listfabtwo(pageNo, pageSize);
    }
    
    @RequestMapping("listdeco")
    public Object listdeco(int no) {        
        return workshopService.listdeco(no);
    }
    
    @RequestMapping("listdecotwo")
    public Object listdecotwo(
            @RequestParam("pageNo") int pageNo,
            @RequestParam("pageSize") int pageSize) {        
        return workshopService.listdecotwo(pageNo, pageSize);
    }
    
    @RequestMapping("listapp")
    public Object listapp(int no) {        
        return workshopService.listapp(no);
    }
    
    @RequestMapping("listapptwo")
    public Object listapptwo(
            @RequestParam("pageNo") int pageNo,
            @RequestParam("pageSize") int pageSize) {        
        return workshopService.listapptwo(pageNo, pageSize);
    }
    
    @RequestMapping("listlife")
    public Object listlife(int no) {        
        return workshopService.listlife(no);
    }
    
    @RequestMapping("listlifetwo")
    public Object listlifetwo(
            @RequestParam("pageNo") int pageNo,
            @RequestParam("pageSize") int pageSize) {        
        return workshopService.listlifetwo(pageNo, pageSize);
    }
    
    @RequestMapping("listkit")
    public Object listkit(int no) {        
        return workshopService.listkit(no);
    }
    
    @RequestMapping("listkittwo")
    public Object listkittwo(
            @RequestParam("pageNo") int pageNo,
            @RequestParam("pageSize") int pageSize) {        
        return workshopService.listkittwo(pageNo, pageSize);
    }
    
    @RequestMapping("listbath")
    public Object listbath(int no) {        
        return workshopService.listbath(no);
    }
    
    @RequestMapping("listbathtwo")
    public Object listbathtwo(
            @RequestParam("pageNo") int pageNo,
            @RequestParam("pageSize") int pageSize) {        
        return workshopService.listbathtwo(pageNo, pageSize);
    }
    
    @RequestMapping("listSellerSite")
    public Object listSellerSite(int no) {        
        return workshopService.listSellerSite(no);
    }
    
    @RequestMapping("listSellerSiteBanner")
    public Object listSellerSiteBanner(int no) {        
        return workshopService.listSellerSiteBanner(no);
    }
    
    @RequestMapping("listIntro")
    public Object listIntro() {        
        return workshopService.listIntroduce();
    }
    
    @RequestMapping("update")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public void update(Workshop workshop) throws Exception {
        workshopService.update(workshop);
    }
    
    @RequestMapping("updateIntro")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public void updateIntro(Workshop workshop) throws Exception {
        workshopService.updateIntroduce(workshop);
    }
    
    @RequestMapping("{no}")
    public Workshop view(@PathVariable int no) throws Exception {
        return workshopService.get(no);
    }
    
    @RequestMapping("addAdpic")
    public Object addAdpic(HttpSession session, MultipartFile[] files) throws Exception {
        
        Member member = (Member)session.getAttribute("loginUser");
        int no = member.getNo();
        
        String filesDir = sc.getRealPath("/files/workshop");
        ArrayList<Wspho> workshopPhotos = new ArrayList<>();
        
        for (int i = 0; i < files.length; i++) {
            Wspho photo = new Wspho();
            String filename = UUID.randomUUID().toString();
            try {
                File path = new File(filesDir + "/" +  filename);
                files[i].transferTo(path);
                photo.setFilenametwo(filename);
                workshopPhotos.add(photo);
                
                Thumbnails.of(path)
                .size(50, 50)
                .outputFormat("jpg")
                .toFile(path.getCanonicalPath()+"_50x50");
                
                Thumbnails.of(path)
                .size(100, 100)
                .outputFormat("jpg")
                .toFile(path.getCanonicalPath()+"_100x100");
                
                Thumbnails.of(path)
                .size(150, 150)
                .outputFormat("jpg")
                .toFile(path.getCanonicalPath()+"_150x150");
                
                Thumbnails.of(path)
                .size(200, 200)
                .outputFormat("jpg")
                .toFile(path.getCanonicalPath()+"_200x200");
                
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        
        
        return workshopService.addAdpic(no, workshopPhotos);
    }
    
    @RequestMapping("adSNS")
    public int adSns(String kind, Workshop workshop, HttpSession session) throws Exception {
        Member member = (Member)session.getAttribute("loginUser");
        int no = member.getNo();
        workshop.setWno(no);
        return workshopService.adSns(kind, workshop);
    }
    
    @RequestMapping("getInfo")
    public Object getInfo(HttpSession session) throws Exception {
        Member member = (Member)session.getAttribute("loginUser");
        int no = member.getNo();
        return workshopService.getInfo(no);
    }
    
    
    
    
//    @RequestMapping("delete")
//    public void delete(@RequestParam("no") int no) throws Exception {
//        workshopService.delete(no);
//    }
//    
//    @RequestMapping("list{page}")
//    public Object list(
//            @MatrixVariable(defaultValue="1") int pageNo,
//            @MatrixVariable(defaultValue="3") int pageSize) {
//        return workshopService.list(pageNo, pageSize);
//    }
//    
//    @RequestMapping("update")
//    @ResponseStatus(HttpStatus.OK)
//    public void update(Member member) throws Exception {
//        workshopService.update(member);
//    }
//    
//    @RequestMapping("{id}")
//    public Member view(@PathVariable String id) throws Exception {
//        return workshopService.get(id);
//    }
//    
}




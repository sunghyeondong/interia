package bitcamp.java106.pms.web.json;

import java.io.File;
import java.util.HashMap;
import java.util.UUID;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java106.pms.domain.Odnwk;
import bitcamp.java106.pms.service.OdnwkService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/odnwk")
public class OdnwkController {
    
    @Autowired ServletContext sc;
    
    OdnwkService odnwkService;
    
    public OdnwkController(OdnwkService odnwkService) {
        this.odnwkService = odnwkService;
    }

    @RequestMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(Odnwk odnwk) throws Exception {
        odnwkService.add(odnwk);
    }
    
    @RequestMapping("delete")
    //@ResponseStatus(HttpStatus.OK) // 응답 상태 코드 값의 기본은 "200(OK)" 이다.
    public void delete(@RequestParam("no") int no,
                       @RequestParam("wsano") int wsano) throws Exception {
        odnwkService.delete(no, wsano);
    }
    
    @RequestMapping("list")
    public Object list(int no) {        
        return odnwkService.list(no);
    }
    
    @RequestMapping("revCount")
    public Object revCount(int no) {        
        return odnwkService.revCount(no);
    }
    
    @RequestMapping("revDetail")
    public Object revDetail(
            @RequestParam("wno") int wno,
            @RequestParam("startNo") int startNo,
            @RequestParam("pageNo") int pageNo) {        
        return odnwkService.revDetail(wno, startNo, pageNo);
    }
    
    @RequestMapping("listSellerSite")
    public Object listSellerSite(int no) {        
        return odnwkService.listSellerSite(no);
    }
    
    @RequestMapping("revList")
    public Object revList(int no) {        
        return odnwkService.revList(no);
    }
    
    @RequestMapping("revGet")
    public Object revGet(int no) {        
        return odnwkService.revGet(no);
    }
    
    @RequestMapping("revGetList")
    public Object revGetList(int no) {        
        return odnwkService.revGetList(no);
    }
    
    @RequestMapping("update")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public Object update(Odnwk odnwk, MultipartFile files) throws Exception {
        
        HashMap<String,Object> jsonData = new HashMap<>();
        
        String filesDir = sc.getRealPath("/files/mypage/review");
        
        String filename = UUID.randomUUID().toString();
        jsonData.put("filename", filename);
        jsonData.put("filesize", files.getSize());
        jsonData.put("originname", files.getOriginalFilename());
        try {
            File path = new File(filesDir + "/" + filename);
            files.transferTo(path);
            
            // 써네일 이미지 생성
            String thumbnailPath = path.getCanonicalPath() + "_200x200";
            Thumbnails.of(path)
                      .size(200, 200)
                      .outputFormat("jpg")
                      .toFile(new File(thumbnailPath));
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        odnwkService.update(odnwk, filename);
        
        jsonData.put("status", "success");
        return jsonData;
    }
    
    @RequestMapping("updateMod")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public Object updateMod(Odnwk odnwk, MultipartFile files) throws Exception {
        
        HashMap<String,Object> jsonData = new HashMap<>();
        
        String filesDir = sc.getRealPath("/files/mypage/review");
        
        String filename = UUID.randomUUID().toString();
        jsonData.put("filename", filename);
        jsonData.put("filesize", files.getSize());
        jsonData.put("originname", files.getOriginalFilename());
        try {
            File path = new File(filesDir + "/" + filename);
            files.transferTo(path);
            
            // 써네일 이미지 생성
            String thumbnailPath = path.getCanonicalPath() + "_200x200";
            Thumbnails.of(path)
                      .size(200, 200)
                      .outputFormat("jpg")
                      .toFile(new File(thumbnailPath));
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        odnwkService.updateMod(odnwk, filename);
        
        jsonData.put("status", "success");
        return jsonData;
    }
    
    @RequestMapping("{no}")
    public Odnwk view(@PathVariable int no) throws Exception {
        return odnwkService.get(no);
    }

    /*@RequestMapping("upload")
//    @ResponseStatus(HttpStatus.CREATED)
    public Object upload(
            MultipartFile files) {
        
        HashMap<String,Object> jsonData = new HashMap<>();
        
        String filesDir = sc.getRealPath("/files");
        
        String filename = UUID.randomUUID().toString();
        jsonData.put("filename", filename);
        jsonData.put("filesize", files.getSize());
        jsonData.put("originname", files.getOriginalFilename());
        try {
            File path = new File(filesDir + "/" + filename);
            files.transferTo(path);
            
            // 써네일 이미지 생성
            String thumbnailPath = path.getCanonicalPath() + "_200x200";
            System.out.println(thumbnailPath);
            Thumbnails.of(path)
                      .size(200, 200)
                      .outputFormat("jpg")
                      .toFile(new File(thumbnailPath));
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonData;
    }*/
}
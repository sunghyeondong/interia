package bitcamp.java106.pms.web.json;

import java.io.File;
import java.util.HashMap;
import java.util.UUID;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java106.pms.domain.Rvpho;
import bitcamp.java106.pms.service.RvphoService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/rvpho")
public class RvphoController {
    
    @Autowired ServletContext sc;
    
    RvphoService rvphoService;
    
    public RvphoController(RvphoService rvphoService) {
        this.rvphoService = rvphoService;
    }

    @RequestMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(Rvpho rvpho) throws Exception {
        rvphoService.add(rvpho);
    }
    
    @RequestMapping("delete")
    //@ResponseStatus(HttpStatus.OK) // 응답 상태 코드 값의 기본은 "200(OK)" 이다.
    public void delete(int no) throws Exception {
        rvphoService.delete(no);
    }
    
    @RequestMapping("list")
    public Object list(int no) {        
        return rvphoService.list(no);
    }

    
    @RequestMapping("update")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public void update(Rvpho rvpho) throws Exception {
        rvphoService.update(rvpho);
    }
    
    @RequestMapping("{no}")
    public Rvpho view(@PathVariable int no) throws Exception {
        return rvphoService.get(no);
    }

    @RequestMapping("upload")
//    @ResponseStatus(HttpStatus.CREATED)
    public Object upload(
            MultipartFile files) {
        
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
            System.out.println(thumbnailPath);
            Thumbnails.of(path)
                      .size(200, 200)
                      .outputFormat("jpg")
                      .toFile(new File(thumbnailPath));
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonData;
    }
}
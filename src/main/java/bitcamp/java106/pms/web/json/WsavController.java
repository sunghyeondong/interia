package bitcamp.java106.pms.web.json;

import java.io.File;
import java.util.ArrayList;
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

import bitcamp.java106.pms.domain.Wkacp;
import bitcamp.java106.pms.domain.Wsav;
import bitcamp.java106.pms.service.WsavService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/wsav")
public class WsavController {
    
    @Autowired ServletContext sc;
    WsavService wsavService;
    
    public WsavController(WsavService wsavService) {
        this.wsavService = wsavService;
    }

    @RequestMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(Wsav wsav, MultipartFile[] files) throws Exception {
        
        String filesDir = sc.getRealPath("/files/workshop/activity");
//        Wsav activity= new Wsav();
        
        
        ArrayList<Wkacp> activityPhotos = new ArrayList<>();
        
        for (int i = 0; i < files.length; i++) {
            Wkacp photo = new Wkacp();
            String filename = UUID.randomUUID().toString();
            try {
                File path = new File(filesDir + "/" +  filename);
                files[i].transferTo(path);
                photo.setFilename(filename);
                activityPhotos.add(photo);
                
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
        wsavService.add(wsav, activityPhotos);
    }
    
    @RequestMapping("delete")
    //@ResponseStatus(HttpStatus.OK) // 응답 상태 코드 값의 기본은 "200(OK)" 이다.
    public void delete(@RequestParam("no") int no,
                       @RequestParam("wsano") int wsano) throws Exception {
        wsavService.delete(no, wsano);
    }
    
    @RequestMapping("adminDelete")
    //@ResponseStatus(HttpStatus.OK) // 응답 상태 코드 값의 기본은 "200(OK)" 이다.
    public void adminDelete(@RequestParam("wsano") int wsano) throws Exception {
        wsavService.adminDelete(wsano);
    }
    
    @RequestMapping("list")
    public Object list(int no) {        
        return wsavService.list(no);
    }
    
    @RequestMapping("sellerSiteList")
    public Object sellerSiteList(int no) {        
        return wsavService.sellerSiteList(no);
    }
    
    @RequestMapping("sellerSiteListWsa")
    public Object sellerSiteListWsa(int memno, int wsano) {        
        return wsavService.sellerSiteListWsa(memno, wsano);
    }
    
    @RequestMapping("adminList")
    public Object adminList(int no) {
        return wsavService.adminList(no);
    }
    
    @RequestMapping("update")
    @ResponseStatus(HttpStatus.OK) // 기본 값이 OK 이다. 
    public void update(Wsav wsav, MultipartFile[] files) throws Exception {

        String filesDir = sc.getRealPath("/files/workshop/activity");

        
        ArrayList<Wkacp> activityPhotos = new ArrayList<>();
        
        for (int i = 0; i < files.length; i++) {
            Wkacp photo = new Wkacp();
            String filename = UUID.randomUUID().toString();
            try {
                File path = new File(filesDir + "/" +  filename);
                files[i].transferTo(path);
                photo.setFilename(filename);
                activityPhotos.add(photo);
                
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
        wsavService.update(wsav,activityPhotos);
    }

    
    @RequestMapping("{no}")
    public Wsav view(@PathVariable int no) throws Exception {
        return wsavService.get(no);
    }

}

//ver 55 - JSON 데이터를 출력하는 페이지 컨트롤러 생성







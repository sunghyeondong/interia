// 파일 업로드 - JSON
package bitcamp.java106.pms.web.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.coobird.thumbnailator.Thumbnails;

@RestController 
@RequestMapping("/adfile") 
public class AdminUpload {
    @Autowired ServletContext sc;
    
    @PostMapping("upload")
    public Object upload(
            MultipartFile[] files) {
        
        String filesDir = sc.getRealPath("/files");

        ArrayList<Map<String,Object>> jsonDataList = new ArrayList<>();
        
        for (int i = 0; i < files.length; i++) {
            HashMap<String,Object> jsonData = new HashMap<>();
            String filename = UUID.randomUUID().toString();
            jsonData.put("filename", filename);
            jsonData.put("filesize", files[i].getSize());
            jsonData.put("originname", files[i].getOriginalFilename());
            try {
                File path = new File(filesDir + "/" + filename);
                System.out.println(path);
                files[i].transferTo(path);
                jsonDataList.add(jsonData);
                
                Thumbnails.of(path)
                .size(50, 50)
                .outputFormat("jpg")
                .toFile(path.getCanonicalPath()+"_50x50");
                
                Thumbnails.of(path)
                .size(100, 100)
                .outputFormat("jpg")
                .toFile(path.getCanonicalPath()+"_100x100");
                
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return jsonDataList;
    }
}

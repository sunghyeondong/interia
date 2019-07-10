//파일 업로드 - JSON
package bitcamp.java106.pms.web.json;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Base64;
import java.util.Base64.Decoder;
import java.util.HashMap;
import java.util.UUID;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java106.pms.domain.Member;
import bitcamp.java106.pms.service.MemberService;
import net.coobird.thumbnailator.Thumbnails;

@RestController 
@RequestMapping("/mpfile") 
public class MypageUpload {
    
    MemberService memberService;
    
    public MypageUpload(MemberService memberService) {
        this.memberService = memberService;
    }
 
     @Autowired ServletContext sc;
     
     @PostMapping("banner")
     public Object banner(
             String imageData, HttpSession session) {
         
         HashMap<String,Object> jsonData = new HashMap<>();
         int commaIdx = imageData.indexOf(",");
         String base64data = imageData.substring(commaIdx + 1);
         
         Decoder decoder = Base64.getDecoder();
         byte[] data = decoder.decode(base64data);
         
         Member member = (Member)session.getAttribute("loginUser");
         int userNo = member.getNo();
         
         
         String filename = UUID.randomUUID().toString();
         String filesDir = sc.getRealPath("/files/mypage/banner");
         try {
             File path = new File(filesDir + "/" + filename);
             BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream(path));
             out.write(data);
             out.close();
             jsonData.put("status", "success");
             jsonData.put("filename", filename);
             
             
         } catch (Exception e) {
             jsonData.put("status", "fail");
             e.printStackTrace();
         }
         Member updMember = new Member();
         updMember.setNo(userNo);
         updMember.setBannerPhoto(filename);
         
         System.out.println(imageData);
         
         memberService.updateBphoto(updMember);
         
         return jsonData;
     }
     
     @PostMapping("profile")
     public Object profile(MultipartFile files, HttpSession session) {
         System.out.println(files);
         
         HashMap<String,Object> jsonData = new HashMap<>();
         
         Member member = (Member)session.getAttribute("loginUser");
         int userNo = member.getNo();
         
         String filesDir = sc.getRealPath("/files/mypage/profile");
         
         String filename = UUID.randomUUID().toString();
         jsonData.put("filename", filename);
         jsonData.put("filesize", files.getSize());
         jsonData.put("originname", files.getOriginalFilename());
         
         System.out.println(files);
         try {
             File path = new File(filesDir + "/" + filename);
             files.transferTo(path);
             
             Thumbnails.of(path)
             .size(400, 400)
             .outputFormat("jpg")
             .toFile(path.getCanonicalPath()+"_400x400");
             
             Thumbnails.of(path)
             .size(800, 800)
             .outputFormat("jpg")
             .toFile(path.getCanonicalPath()+"_800x800");
             
             Thumbnails.of(path)
             .size(1000, 1000)
             .outputFormat("jpg")
             .toFile(path.getCanonicalPath()+"_1000x1000");
             
         } catch (Exception e) {
             e.printStackTrace();
         }
         
         Member updMember = new Member();
         updMember.setNo(userNo);
         updMember.setProfilePhoto(filename);
         
         memberService.updatePphoto(updMember);
         
         jsonData.put("status", "success");
         return jsonData;
     }
}
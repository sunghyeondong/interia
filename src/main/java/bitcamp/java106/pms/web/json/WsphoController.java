package bitcamp.java106.pms.web.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java106.pms.domain.Wspho;
import bitcamp.java106.pms.service.MemberService;
import bitcamp.java106.pms.service.WsphoService;

@RestController
@RequestMapping("/wspho")
public class WsphoController {
    
    @Autowired ServletContext sc;
    WsphoService wsphoService;
    MemberService memberService;
    
    public WsphoController(
            WsphoService wsphoService) {
        this.wsphoService = wsphoService;
    }
    
    @RequestMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public void add(Wspho wspho, MultipartFile[] files) throws Exception {
            
    }
}




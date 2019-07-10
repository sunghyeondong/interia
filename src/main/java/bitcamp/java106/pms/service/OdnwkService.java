package bitcamp.java106.pms.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import bitcamp.java106.pms.domain.Odnwk;

public interface OdnwkService {
    // 서비스 컴포넌트에서 메서드명을 지을 때는 
    // 업무 용어를 사용하라!
    List<Odnwk> list(int no);
    List<Odnwk> listSellerSite(int no);
    List<Odnwk> revList(int no);
    List<Odnwk> revCount(int no);
    List<Odnwk> revDetail(int wno, int startNo, int pageNo);
    Odnwk get(int no);
    List<Odnwk> revGet(int no);
    List<Odnwk> revGetList(int no);
    int add(Odnwk odnwk);
    int update(Odnwk odnwk, String filename);
    int updateMod(Odnwk odnwk, String filename);
    int delete(int no, int wsano);
}
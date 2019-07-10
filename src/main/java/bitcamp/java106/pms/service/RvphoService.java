package bitcamp.java106.pms.service;

import java.util.List;

import bitcamp.java106.pms.domain.Rvpho;

public interface RvphoService {
    // 서비스 컴포넌트에서 메서드명을 지을 때는 
    // 업무 용어를 사용하라!
    List<Rvpho> list(int no);
    Rvpho get(int no);
    int add(Rvpho rvpho);
    int update(Rvpho rvpho);
    int delete(int no);
}
package bitcamp.java106.pms.service;

import java.util.List;

import bitcamp.java106.pms.domain.Works;
import bitcamp.java106.pms.domain.Workshop;

public interface SearchService {
    // 서비스 컴포넌트에서 메서드명을 지을 때는 
    // 업무 용어를 사용하라!
    List<Works> list(String title);
    List<Workshop> storelist(String title);
    List<Works> workslist(String title, int startNo, int pageNo);
    Works get(int no);
}
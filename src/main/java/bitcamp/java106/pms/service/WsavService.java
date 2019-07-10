// 서비스 컴포넌트 - 게시물 관련 업무를 처리할 객체
package bitcamp.java106.pms.service;

import java.util.ArrayList;
import java.util.List;

import bitcamp.java106.pms.domain.Wkacp;
import bitcamp.java106.pms.domain.Wsav;

public interface WsavService {
    // 서비스 컴포넌트에서 메서드명을 지을 때는 
    // 업무 용어를 사용하라!
    List<Wsav> list(int no);
    List<Wsav> sellerSiteList(int no);
    List<Wsav> sellerSiteListWsa(int memno, int wsano);
    List<Wsav> adminList(int no);
    Wsav get(int no);
    void add(Wsav wsav, ArrayList<Wkacp> activityPhotos);
    int update(Wsav wsav, ArrayList<Wkacp> activityPhotosv);
    int delete(int no, int wsano);
    int adminDelete(int wsano);
}

//ver 53 - 인터페이스 추가








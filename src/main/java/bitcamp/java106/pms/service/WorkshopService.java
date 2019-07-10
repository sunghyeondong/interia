package bitcamp.java106.pms.service;

import java.util.ArrayList;
import java.util.List;

import bitcamp.java106.pms.domain.WorksPhoto;
import bitcamp.java106.pms.domain.Workshop;
import bitcamp.java106.pms.domain.Wspho;

public interface WorkshopService {
    int add(Workshop workshop);  // 판매자 신청 관련 데이터 삽입 내용
    int add(Wspho wspho);
    int addIntroduce(Wspho wspho);
    boolean isExist(int no); // 이미 판매자 신청이 되어 있는 경우 여부 검사
    List<Workshop> selectPopularList();
    List<Workshop> list(int no);
    List<Workshop> listtwo(int pageNo, int pageSize);
    List<Workshop> listfur(int no);
    List<Workshop> listfurtwo(int pageNo, int pageSize);
    List<Workshop> listfab(int no);
    List<Workshop> listfabtwo(int pageNo, int pageSize);
    List<Workshop> listdeco(int no);
    List<Workshop> listdecotwo(int pageNo, int pageSize);
    List<Workshop> listapp(int no);
    List<Workshop> listapptwo(int pageNo, int pageSize);
    List<Workshop> listlife(int no);
    List<Workshop> listlifetwo(int pageNo, int pageSize);
    List<Workshop> listkit(int no);
    List<Workshop> listkittwo(int pageNo, int pageSize);
    List<Workshop> listbath(int no);
    List<Workshop> listbathtwo(int pageNo, int pageSize);
    
    
    List<Workshop> listSellerSite(int no);
    List<Workshop> listIntroduce();
    List<Workshop> listSellerSiteBanner(int no);
    Workshop get(int no);
    int update(Workshop workshop);
    int updateIntroduce(Workshop workshop);
    int delete(int no);
    int addAdpic(int no, ArrayList<Wspho> workshopPhotos);
    int adSns(String kind, Workshop workshop);
    Object getInfo(int no);
}

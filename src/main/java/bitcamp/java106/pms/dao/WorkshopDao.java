package bitcamp.java106.pms.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java106.pms.domain.Workshop;

public interface WorkshopDao {
    int insert(Workshop workshop);  // 공방 관련 판매자 등록하기!
    int selectOneNumber(int no); // 공방 등록 번호 여부 검사! (있으면 해당 값 리턴)
    int delete(int no) ;
    List<Workshop> selectList(int no);
    List<Workshop> selectListtwo(Map<String,Object> params);
    List<Workshop> selectfur(int no);
    List<Workshop> selectfurtwo(Map<String,Object> params);
    List<Workshop> selectfab(int no);
    List<Workshop> selectfabtwo(Map<String,Object> params);
    List<Workshop> selectdeco(int no);
    List<Workshop> selectdecotwo(Map<String,Object> params);
    List<Workshop> selectapp(int no);
    List<Workshop> selectapptwo(Map<String,Object> params);
    List<Workshop> selectlife(int no);
    List<Workshop> selectlifetwo(Map<String,Object> params);
    List<Workshop> selectkit(int no);
    List<Workshop> selectkittwo(Map<String,Object> params);
    List<Workshop> selectbath(int no);
    List<Workshop> selectbathtwo(Map<String,Object> params);
    
    
    List<Workshop> selectListSellerSite(int no);
    List<Workshop> selectListIntroduce();
    List<Workshop> selectListSellerSiteBanner(int no);
    int update(Workshop workshop);
    int updateIntroduce(Workshop workshop);
    Workshop selectOne(int no);
    void updTwit(Workshop workshop);
    void updFacbook(Workshop workshop);
    void updInsta(Workshop workshop);
    Object getInfo(int memno);

}

// 서비스 컴포넌트 - 게시물 관련 업무를 처리할 객체
package bitcamp.java106.pms.service;

import java.util.ArrayList;
import java.util.List;

import bitcamp.java106.pms.domain.Works;
import bitcamp.java106.pms.domain.WorksPhoto;

public interface WorksService {
    // 서비스 컴포넌트에서 메서드명을 지을 때는 
    // 업무 용어를 사용하라!
    List<Works> list(int startNo, int pageNo);
    List<Works> listSellerSite(int no);
    Works get(int no);
    void add(Works works, ArrayList<WorksPhoto> worksPhotos);
    int update(Works works, ArrayList<WorksPhoto> worksPhotos);
    int delete(int no);
    List<Works> listWithHashtag(String hashtag);
    Object getWorksPhotoOption(int worksNumber); // 작품, 옵션, 사진 가져오는 메소드
    List<Works> adminList(int no);
    Object getCurrentState(int no); 
    int addBuscket(int worksNumber, int no, String optionValue);; // 여기는 장바구니 담는 용도
    List<Object> getBuscketList(int buyerNumber); // 여기는 해당 공방 안에 있는 각 장바구니의 제품을 출력
    List<Object> viewBuscketWorkshopList(int buyerNumber); // 장바구니안에 있는 공방명 출력
    Works adGet(int no);
    int buscketDelete(int buyerNumber, int worksNumber);
    int buscketAllDelete(int buyerNumber);
}

//ver 53 - 인터페이스 추가







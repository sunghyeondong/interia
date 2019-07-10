package bitcamp.java106.pms.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java106.pms.domain.Member;

public interface MemberDao {
    int delete(int no); // 회원 탈퇴시 메소드
    List<Member> selectList(Map<String,Object> params); // 회원목록 리스트 출력(관리자용 예정)
    int insert(Member member); // 회원 가입 폼에서 사용하는 메소드
    int update(Member member); // 마이페이지에서 회원 수정 할 때 쓰는 메소드
    Member selectOne(int no); // 여기서 header에서 쓰여야 하는 메소드
    Member selectOneWithPassword(Map<String,Object> params); // 아이디와 비밀번호가 일치시 로그인 하는 메소드(service에서 isExist용으로 사용)
    int count(Map<String,Object> params); // 여기서 selectOneWithPassword에서 도움 주는 메서드 (service에서 isExist용으로 사용)
    String selectSearchOne(Map<String,Object> params); // 아이디 찾기 데이터 베이스 실행
    int selectSearchPassword(String id); // 여기는 아이디 검색이 일치하면 값 증가
    int updatePassword(Map<String, Object> params); // 비밀번호 변경 버튼 클릭
    int selectOneNumber(String id); // 아이디를 통해 회원번호 값 추출
    int updateBphoto(Member member);
    Member selectMemInfo(int no);
    void updatePphoto(Member member);
}






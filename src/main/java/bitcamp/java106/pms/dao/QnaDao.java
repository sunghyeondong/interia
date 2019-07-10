package bitcamp.java106.pms.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java106.pms.domain.Qna;

public interface QnaDao {
    int delete(Map<String,Object> params) ;
    List<Qna> selectList(int no);
    int insert(Qna qna);
    int update(Qna qna);
    Qna selectOne(int no);
}
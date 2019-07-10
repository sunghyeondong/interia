package bitcamp.java106.pms.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java106.pms.domain.Rvpho;

public interface RvphoDao {
    int delete(int odnwkNo) ;
    List<Rvpho> selectList(int no);
    int insert(Rvpho rvpho);
    int update(Rvpho rvpho);
    Rvpho selectOne(int no);
}
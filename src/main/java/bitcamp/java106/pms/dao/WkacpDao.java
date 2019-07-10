package bitcamp.java106.pms.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java106.pms.domain.Wkacp;
import bitcamp.java106.pms.domain.Wsav;

public interface WkacpDao {
    int delete(int no) ;
    List<Wkacp> selectList(int no);
    int insert(Wkacp wkacp);
    int update(Wkacp wkacp);
    Wsav selectOne(int no);
}

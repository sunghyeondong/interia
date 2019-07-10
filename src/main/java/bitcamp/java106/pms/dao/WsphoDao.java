package bitcamp.java106.pms.dao;

import java.util.HashMap;

import bitcamp.java106.pms.domain.Workshop;
import bitcamp.java106.pms.domain.Wspho;

public interface WsphoDao {
    int insert(Wspho wspho);
    int insertIntroduce(Wspho wspho);
    void delete(HashMap<String, Object> param);
    void insertAd(Wspho wspho);

}

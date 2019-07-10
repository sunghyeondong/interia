// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package bitcamp.java106.pms.service.impl;

import java.util.HashMap;

import org.springframework.stereotype.Service;

import bitcamp.java106.pms.dao.WsphoDao;
import bitcamp.java106.pms.domain.Wspho;
import bitcamp.java106.pms.service.WsphoService;

@Service
public class WsphoServiceImpl implements WsphoService {
    // 해당 메소드의 대해 알고 싶으면 자세한건 인터페이스 참조
    WsphoDao wsphoDao;
    
    public WsphoServiceImpl(WsphoDao wsphoDao) {
        this.wsphoDao = wsphoDao;
    }

    @Override
    public int add(Wspho wspho, HashMap<String, Object> jsonData) {
        return wsphoDao.insert(wspho);
    }
}








// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package bitcamp.java106.pms.service.impl;

import org.springframework.stereotype.Service;

import bitcamp.java106.pms.dao.AcrgttDao;
import bitcamp.java106.pms.domain.Acrgtt;
import bitcamp.java106.pms.service.AcrgttService;

@Service
public class AcrgttServiceImpl implements AcrgttService {
    
    AcrgttDao acrgttDao;
    
    public AcrgttServiceImpl(AcrgttDao acrgttDao) {
        this.acrgttDao = acrgttDao;
    }
    
    @Override
    public int add(Acrgtt acrgtt) {
        return acrgttDao.insert(acrgtt);
    }
    
}

//ver 53 - 클래스 추가







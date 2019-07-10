// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package bitcamp.java106.pms.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import bitcamp.java106.pms.dao.WrkshpDao;
import bitcamp.java106.pms.domain.Wrkshp;
import bitcamp.java106.pms.service.WrkshpService;

@Service
public class WrkshpServiceImpl implements WrkshpService {
    
    WrkshpDao wrkshpDao;
    
    public WrkshpServiceImpl(WrkshpDao wrkshpDao) {
        this.wrkshpDao = wrkshpDao;
    }
    
    @Override
    public List<Wrkshp> list(int no) {
        return wrkshpDao.selectList(no);
    }
    
    @Override
    public List<Wrkshp> listtwo(int pageNo, int pageSize) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("startRowNo", pageNo);
        params.put("pageSize", pageSize);
        
        return wrkshpDao.selectListtwo(params);
    }
    @Override
    public Wrkshp get(int no) {
        return wrkshpDao.selectOne(no);
    }
    
    @Override
    public int add(Wrkshp wrkshp) {
        return wrkshpDao.insert(wrkshp);
    }
    
    @Override
    public int update(Wrkshp wrkshp) {
        return wrkshpDao.update(wrkshp);
    }
    
    @Override
    public int delete(int no) {
        return wrkshpDao.delete(no);
    }
}

//ver 53 - 클래스 추가







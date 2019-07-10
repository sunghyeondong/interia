// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package bitcamp.java106.pms.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import bitcamp.java106.pms.dao.SearchDao;
import bitcamp.java106.pms.domain.Works;
import bitcamp.java106.pms.domain.Workshop;
import bitcamp.java106.pms.service.SearchService;

@Service
public class SearchServiceImpl implements SearchService {
    
    SearchDao searchDao;
    
    public SearchServiceImpl(SearchDao searchDao) {
        this.searchDao = searchDao;
    }
    
    @Override
    public List<Works> list(String title) {
        return searchDao.selectList(title);
    }
    
    @Override
    public List<Workshop> storelist(String title) {
        return searchDao.storeList(title);
    }
    
    @Override
    public List<Works> workslist(String title, int startNo, int pageNo) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("title", title);
        params.put("startNo", (startNo - 1) * pageNo);
        params.put("pageNo", pageNo);
        
        return searchDao.worksList(params);
    }
    
    @Override
    public Works get(int no) {
        return searchDao.selectOne(no);
    }
    
}
// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package bitcamp.java106.pms.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import bitcamp.java106.pms.dao.RvphoDao;
import bitcamp.java106.pms.domain.Rvpho;
import bitcamp.java106.pms.service.RvphoService;

@Service
public class RvphoServiceImpl implements RvphoService {
    
    RvphoDao rvphoDao;
    
    public RvphoServiceImpl(RvphoDao rvphoDao) {
        this.rvphoDao = rvphoDao;
    }
    
    @Override
    public List<Rvpho> list(int no) {
        return rvphoDao.selectList(no);
    }
    
    @Override
    public Rvpho get(int no) {
        return rvphoDao.selectOne(no);
    }
    
    @Override
    public int add(Rvpho rvpho) {
        return rvphoDao.insert(rvpho);
    }
    
    @Override
    public int update(Rvpho rvpho) {
        return rvphoDao.update(rvpho);
    }
    
    @Override
    public int delete(int no) {
        return rvphoDao.delete(no);
    }
}
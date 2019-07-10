// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package bitcamp.java106.pms.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import bitcamp.java106.pms.dao.WkacpDao;
import bitcamp.java106.pms.dao.WsavDao;
import bitcamp.java106.pms.domain.Wkacp;
import bitcamp.java106.pms.domain.Workshop;
import bitcamp.java106.pms.domain.Wsav;
import bitcamp.java106.pms.service.WsavService;

@Service
public class WsavServiceImpl implements WsavService {
    
    WsavDao wsavDao;
    WkacpDao wkacpDao;
    
    public WsavServiceImpl(WsavDao wsavDao, WkacpDao wkacpDao) {
        this.wsavDao = wsavDao;
        this.wkacpDao = wkacpDao;
    }
    
    @Override
    public List<Wsav> list(int no) {
        return wsavDao.selectList(no);
    }
    
    @Override
    public List<Wsav> sellerSiteList(int no) {
        return wsavDao.selectSellerSiteList(no);
    }
    
    @Override
    public List<Wsav> sellerSiteListWsa(int memno, int wsano) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("memno", memno);
        params.put("wsano", wsano);
        return wsavDao.selectSellerSiteListWsa(params);
    }
    
    @Override
    public List<Wsav> adminList(int no) {
        return wsavDao.selectAdminList(no);
    }
    
    @Override
    public Wsav get(int no) {
        System.out.println(no);
        Wsav wsav = wsavDao.selectOne(no);
        
        ArrayList<Wkacp> myPhotos = (ArrayList<Wkacp>)wkacpDao.selectList(no);
        
        wsav.setWorkshopPhoto(myPhotos);
        
        
        return wsav;
    }
    
    @Override
    public void add(Wsav wsav, ArrayList<Wkacp> activityphotos) {
        System.out.println(activityphotos);
        wsavDao.insert(wsav);
        
       int workshopActivityNo =  wsavDao.selectRecent().getNo();
               
       for(int i = 0; i < activityphotos.size(); i++) {
          Wkacp wkacp = activityphotos.get(i);
           wkacp.setWorkshopActivityNo(workshopActivityNo);
           wkacpDao.insert(wkacp);
       }
    }
    
    @Override
    public int update(Wsav wsav, ArrayList<Wkacp> activityphotos) {
       int workshopActivityNo =  wsav.getNo();
        wkacpDao.delete(workshopActivityNo);
        for(int i = 0; i < activityphotos.size(); i++) {
            Wkacp wkacp = activityphotos.get(i);
            wkacp.setWorkshopActivityNo(workshopActivityNo);
            wkacpDao.insert(wkacp);
        }
        
        return wsavDao.update(wsav);
        
    }
    
    @Override
    public int delete(int no, int wsano) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("memno", no);
        params.put("wsano", wsano);
        return wsavDao.delete(params);
    }

    @Override
    public int adminDelete(int wsano) {
        wkacpDao.delete(wsano);
        return wsavDao.adminDelete(wsano);
    }
}

//ver 53 - 클래스 추가







// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package bitcamp.java106.pms.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import bitcamp.java106.pms.dao.MainDao;
import bitcamp.java106.pms.dao.WorkshopDao;
import bitcamp.java106.pms.dao.WsphoDao;
import bitcamp.java106.pms.domain.Works;
import bitcamp.java106.pms.domain.WorksPhoto;
import bitcamp.java106.pms.domain.Workshop;
import bitcamp.java106.pms.domain.Wspho;
import bitcamp.java106.pms.service.WorkshopService;

@Service
public class WorkshopServiceImpl implements WorkshopService {
    // 해당 메소드의 대해 알고 싶으면 자세한건 인터페이스 참조
    WorkshopDao workshopDao;
    MainDao mainDao;
    WsphoDao wsphoDao;
    
    public WorkshopServiceImpl(WorkshopDao workshopDao, MainDao mainDao, WsphoDao wsphoDao) {
        this.workshopDao = workshopDao;
        this.mainDao = mainDao;
        this.wsphoDao = wsphoDao;
    }

    // 판매자 추가 관련 메소드
    @Override
    public int add(Workshop workshop) {
        return workshopDao.insert(workshop);
    }
    
    @Override
    public int add(Wspho wspho) {
        return wsphoDao.insert(wspho);
    }
    
    @Override
    public int addIntroduce(Wspho wspho) {
        return wsphoDao.insertIntroduce(wspho);
    }
    
    // 판매자 등록 되어있는지 검사!
    @Override
    public boolean isExist(int no) {
        return workshopDao.selectOneNumber(no) > 0 ? true : false;
    }

    @Override
    public List<Workshop> selectPopularList() {
        return mainDao.selectPopularList();
    }
    
    @Override
    public List<Workshop> list(int no) {
        return workshopDao.selectList(no);
    }
    
    @Override
    public List<Workshop> listtwo(int pageNo, int pageSize) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("startRowNo", pageNo);
        params.put("pageSize", pageSize);
        
        return workshopDao.selectListtwo(params);
    }
    
    @Override
    public List<Workshop> listfur(int no) {
        return workshopDao.selectfur(no);
    }
    
    @Override
    public List<Workshop> listfurtwo(int pageNo, int pageSize) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("startRowNo", pageNo);
        params.put("pageSize", pageSize);
        
        return workshopDao.selectfurtwo(params);
    }
    @Override
    public List<Workshop> listfab(int no) {
        return workshopDao.selectfab(no);
    }
    
    @Override
    public List<Workshop> listfabtwo(int pageNo, int pageSize) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("startRowNo", pageNo);
        params.put("pageSize", pageSize);
        
        return workshopDao.selectfabtwo(params);
    }
    @Override
    public List<Workshop> listdeco(int no) {
        return workshopDao.selectdeco(no);
    }
    
    @Override
    public List<Workshop> listdecotwo(int pageNo, int pageSize) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("startRowNo", pageNo);
        params.put("pageSize", pageSize);
        
        return workshopDao.selectdecotwo(params);
    }
    @Override
    public List<Workshop> listapp(int no) {
        return workshopDao.selectapp(no);
    }
    
    @Override
    public List<Workshop> listapptwo(int pageNo, int pageSize) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("startRowNo", pageNo);
        params.put("pageSize", pageSize);
        
        return workshopDao.selectapptwo(params);
    }
    @Override
    public List<Workshop> listlife(int no) {
        return workshopDao.selectlife(no);
    }
    
    @Override
    public List<Workshop> listlifetwo(int pageNo, int pageSize) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("startRowNo", pageNo);
        params.put("pageSize", pageSize);
        
        return workshopDao.selectlifetwo(params);
    }
    @Override
    public List<Workshop> listkit(int no) {
        return workshopDao.selectkit(no);
    }
    
    @Override
    public List<Workshop> listkittwo(int pageNo, int pageSize) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("startRowNo", pageNo);
        params.put("pageSize", pageSize);
        
        return workshopDao.selectkittwo(params);
    }
    @Override
    public List<Workshop> listbath(int no) {
        return workshopDao.selectbath(no);
    }
    
    @Override
    public List<Workshop> listbathtwo(int pageNo, int pageSize) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("startRowNo", pageNo);
        params.put("pageSize", pageSize);
        
        return workshopDao.selectbathtwo(params);
    }
    
    @Override
    public List<Workshop> listSellerSite(int no) {
        return workshopDao.selectListSellerSite(no);
    }
    
    @Override
    public List<Workshop> listSellerSiteBanner(int no) {
        return workshopDao.selectListSellerSiteBanner(no);
    }
    
    @Override
    public List<Workshop> listIntroduce() {
        return workshopDao.selectListIntroduce();
    }
    
    @Override
    public Workshop get(int no) {
        return workshopDao.selectOne(no);
    }
    
    @Override
    public int update(Workshop workshop) {
        return workshopDao.update(workshop);
    }
    
    @Override
    public int updateIntroduce(Workshop workshop) {
        return workshopDao.updateIntroduce(workshop);
    }
    
    @Override
    public int delete(int no) {
        return workshopDao.delete(no);
    }

    @Override
    public int addAdpic(int no, ArrayList<Wspho> workshopPhotos) {
        String pclsf = "홍보이미지";
        HashMap<String, Object> param = new HashMap<>();
        param.put("memno", no);
        param.put("pclsf",pclsf);
        wsphoDao.delete(param);
        for(int i = 0; i < workshopPhotos.size(); i++) {
            Wspho wspho = workshopPhotos.get(i);
            wspho.setWno(no);
            wspho.setWsPclsf(pclsf);
            wsphoDao.insertAd(wspho);
        }
        return 1;
    }

    @Override
    public int adSns(String kind, Workshop workshop) {
        if(kind.equals("twitter")) {
            workshopDao.updTwit(workshop);
        } else if(kind.equals("facebook")) {
            workshopDao.updFacbook(workshop);
        } else if(kind.equals("insta")){
            workshopDao.updInsta(workshop);
        }
        return 1;
    }

    @Override
    public Object getInfo(int memno) {
        return workshopDao.getInfo(memno);
    }
}








// 업무로직 구현체 - 고객사 마다 다른 구현을 할 수 있다.
package bitcamp.java106.pms.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import bitcamp.java106.pms.dao.QnaDao;
import bitcamp.java106.pms.domain.Qna;
import bitcamp.java106.pms.service.QnaService;

@Service
public class QnaServiceImpl implements QnaService {
    
    QnaDao qnaDao;
    
    public QnaServiceImpl(QnaDao qnaDao) {
        this.qnaDao = qnaDao;
    }
    
    @Override
    public List<Qna> list(int no) {
        return qnaDao.selectList(no);
    }
    
    @Override
    public Qna get(int no) {
        return qnaDao.selectOne(no);
    }
    
    @Override
    public int add(Qna qna) {
        return qnaDao.insert(qna);
    }
    
    @Override
    public int update(Qna qna) {
        return qnaDao.update(qna);
    }
    
    @Override
    public int delete(int no, int wsano) {
        HashMap<String,Object> params = new HashMap<>();
        params.put("memno", no);
        params.put("wsano", wsano);
        return qnaDao.delete(params);
    }
}
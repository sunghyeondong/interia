package bitcamp.java106.pms.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import bitcamp.java106.pms.dao.MyLikeDao;
import bitcamp.java106.pms.domain.Board;
import bitcamp.java106.pms.service.MyLikeService;

@Service
public class MyLikeServiceImpl implements MyLikeService {

    MyLikeDao myLikeDao;
    
    public MyLikeServiceImpl(MyLikeDao myLikeDao) {
        this.myLikeDao = myLikeDao;
    }
    
    @Override
    public List<Board> myLikeList(int no) {
        System.out.println(no);
        return myLikeDao.selectList(no);
    }

    @Override
    public Board likeCount(int no) {
        return myLikeDao.likeCount(no);
    }

    @Override
    public Board commentCount(int no) {
        return myLikeDao.commentCount(no);
    }

    @Override
    public int mpLikeCnt(int no) {
        return myLikeDao.totalLikeCount(no);
    }
    
}

package bitcamp.java106.pms.dao;

import java.util.List;

import bitcamp.java106.pms.domain.Board;

public interface MyLikeDao {
    List<Board> selectList(int no);
    Board likeCount(int no);
    Board commentCount(int no);
    int totalLikeCount(int no);
}

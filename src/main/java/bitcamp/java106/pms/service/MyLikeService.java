package bitcamp.java106.pms.service;

import java.util.List;

import bitcamp.java106.pms.domain.Board;

public interface MyLikeService {
    List<Board> myLikeList(int no);
    Board likeCount(int no);
    Board commentCount(int no);
    int mpLikeCnt(int userNo);
}

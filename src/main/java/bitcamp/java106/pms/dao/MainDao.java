package bitcamp.java106.pms.dao;

import java.util.List;

import bitcamp.java106.pms.domain.Board;
import bitcamp.java106.pms.domain.Works;
import bitcamp.java106.pms.domain.Workshop;

public interface MainDao {
    List<Board> selectListInMain();
    List<Works> selectListWithHashtag(String hashtag);
    List<Workshop> selectPopularList();
}

package bitcamp.java106.pms.dao;

import java.util.List;

import bitcamp.java106.pms.domain.Tag;

public interface TagDao {

    //Tag 삽입
    void insert(Tag tag);
    //저장한 최근 Tag가져오기
    Tag getTag(String tagValue);
    //태그번호와 작품번호 매칭
    void matchInsert(Tag match);
    int countTags(int no);
    List<Tag> selectMatchTags(int no);
    void deleteRelation(int worksNo);
    void boardMatchInsert(Tag boardMatch);





}

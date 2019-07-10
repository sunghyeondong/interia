package bitcamp.java106.pms.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java106.pms.domain.WorksPhoto;

public interface WorksPhotoDao {
    int delete(int worksNo) ;
    List<WorksPhoto> selectList(int worksNumber);
    int insert(WorksPhoto worksPhoto);
    int update(WorksPhoto worksPtoto);
}

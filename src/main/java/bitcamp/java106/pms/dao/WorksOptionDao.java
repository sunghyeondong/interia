package bitcamp.java106.pms.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java106.pms.domain.WorksOption;

public interface WorksOptionDao {
    int delete(int no) ;
    List<WorksOption> selectList(int worksNumber);
    int insert(WorksOption worksOption);
    int update(WorksOption worksOption);
    WorksOption selectOne(int no);
}

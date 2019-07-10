package bitcamp.java106.pms.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import bitcamp.java106.pms.domain.Odnwk;
import bitcamp.java106.pms.domain.Order;

public interface OrderDao {


    Order selectOne(int no);

    int insert(Order order);

    int update(Order order);

    List<Order> selectList(int no);

    //관리자 전용
    int adUpdate(Order order);
    
    Object adGet(int no);

    List<Object> adList(int no);

    List<Object> returnList(int no);
    
    List<Object> cancelList(int no);

    Object getReturnState(int no);

    void finClaim(HashMap<String, Object> param);

    String selectStatus(int no);

    void chngExchange(HashMap<String, Object> param);

    void chngReturn(HashMap<String, Object> param);

    List<Object> rejSelectList(HashMap<String, Object> param);

    List<Integer> selectOrderNumberList();

    int updateClaimReject(HashMap<String, Object> param);

    Object getCancelState(int no);

    void finCancel(HashMap<String, Object> param);

    int updateCancelReject(HashMap<String, Object> param);

    int getOrderNo(int wono);


}
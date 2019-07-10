package bitcamp.java106.pms.service;

import java.util.List;

import bitcamp.java106.pms.domain.Order;

public interface OrderService {
    // 서비스 컴포넌트에서 메서드명을 지을 때는 
    // 업무 용어를 사용하라!
    List<Order> list(int no);
    Order get(int no);
    int update(Order order);
    
    //관리자 전용
    int adUpdate(Order order);
    Object adGet(int no);
    List<Object> adList(int no);
    List<Object> returnList(int no);
    List<Object> cancelList(int no);
    Object getReturnState(int no);
    Object getCancelState(int no);
    
    int finClaim(int[] chkArr);
    int chngExchange(int[] chkArr);
    int chngReturn(int[] chkArr);
    List<Object> rejSelectList(int no, int userNo);
    
    void add(Order order); // 주문
    List<Integer> AllOrderNumber();
    Object updateClaimReject(int[] arr, String qs);
    int finCancel(int[] chkArr);
    int updateCancelReject(String worksOrderNo, Order order);
}
package bitcamp.java106.pms.domain;

import java.io.Serializable;
import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;


public class Order implements Serializable {
    private static final long serialVersionUID = 1L;

    private int no; //주문번호
    private int memberNo; //회원번호
    private String methodPay; //결재수단
    private int devCost; //배송비
    private int totalCost; //총금액
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date orderDate; //주문일
    private String orderState; //주문상태
    private String receiver; //수취인
    private String devMemo; //배송메모
    private String curir;//택배사
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date deliDate;//상품발송일
    private String post;//우편번호
    private String baseAddr;//기본주소
    private String detailAddr;//상세주소
    private String ivno;//송장번호
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date claimDate;//클레임요청일
    private String claimRequest;//클레임 상태
    private String claimContext;//클레임 사유
    private String proState;//처리상태
    private String proContext;//처리사유
    
    private String[] chkArr; // 주문리스트에서 체크박스 선택
    
    //데이터 컨트롤
    private Odnwk odnwk;
    private Works works;
    
    
    
    public String[] getChkArr() {
        return chkArr;
    }
    public void setChkArr(String[] chkArr) {
        this.chkArr = chkArr;
    }
    public String getReceiver() {
        return receiver;
    }
    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }
    public Date getDeliDate() {
        return deliDate;
    }
    public void setDeliDate(Date deliDate) {
        this.deliDate = deliDate;
    }
    @Override
    public String toString() {
        return "Order [no=" + no + ", memberNo=" + memberNo + ", methodPay="
                + methodPay + ", devCost=" + devCost + ", totalCost="
                + totalCost + ", orderDate=" + orderDate + ", orderState="
                + orderState + ", receiver=" + receiver + ", devMemo=" + devMemo
                + ", curir=" + curir + ", deliDate=" + deliDate + ", post="
                + post + ", baseAddr=" + baseAddr + ", detailAddr=" + detailAddr
                + ", ivno=" + ivno + ", claimDate=" + claimDate
                + ", claimRequest=" + claimRequest + ", claimContext="
                + claimContext + ", proState=" + proState + ", proContext="
                + proContext + ", odnwk=" + odnwk + ", works=" + works + "]";
    }
    
    
    
    public Works getWorks() {
        return works;
    }
    public void setWorks(Works works) {
        this.works = works;
    }
    public Odnwk getOdnwk() {
        return odnwk;
    }
    public void setOdnwk(Odnwk odnwk) {
        this.odnwk = odnwk;
    }
    public int getNo() {
        return no;
    }
    public void setNo(int no) {
        this.no = no;
    }
    public int getMemberNo() {
        return memberNo;
    }
    public void setMemberNo(int memberNo) {
        this.memberNo = memberNo;
    }
    public String getMethodPay() {
        return methodPay;
    }
    public void setMethodPay(String methodPay) {
        this.methodPay = methodPay;
    }
    public int getDevCost() {
        return devCost;
    }
    public void setDevCost(int devCost) {
        this.devCost = devCost;
    }
    public int getTotalCost() {
        return totalCost;
    }
    public void setTotalCost(int totalCost) {
        this.totalCost = totalCost;
    }
    public Date getOrderDate() {
        return orderDate;
    }
    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }
    public String getOrderState() {
        return orderState;
    }
    public void setOrderState(String orderState) {
        this.orderState = orderState;
    }
    public String getDevMemo() {
        return devMemo;
    }
    public void setDevMemo(String devMemo) {
        this.devMemo = devMemo;
    }
    public String getCurir() {
        return curir;
    }
    public void setCurir(String curir) {
        this.curir = curir;
    }
    public String getPost() {
        return post;
    }
    public void setPost(String post) {
        this.post = post;
    }
    public String getBaseAddr() {
        return baseAddr;
    }
    public void setBaseAddr(String baseAddr) {
        this.baseAddr = baseAddr;
    }
    public String getDetailAddr() {
        return detailAddr;
    }
    public void setDetailAddr(String detailAddr) {
        this.detailAddr = detailAddr;
    }
    public String getIvno() {
        return ivno;
    }
    public void setIvno(String ivno) {
        this.ivno = ivno;
    }
    public Date getClaimDate() {
        return claimDate;
    }
    public void setClaimDate(Date claimDate) {
        this.claimDate = claimDate;
    }
    public String getClaimRequest() {
        return claimRequest;
    }
    public void setClaimRequest(String claimRequest) {
        this.claimRequest = claimRequest;
    }
    public String getClaimContext() {
        return claimContext;
    }
    public void setClaimContext(String claimContext) {
        this.claimContext = claimContext;
    }
    public String getProState() {
        return proState;
    }
    public void setProState(String proState) {
        this.proState = proState;
    }
    public String getProContext() {
        return proContext;
    }
    public void setProContext(String proContext) {
        this.proContext = proContext;
    }

    
    
}

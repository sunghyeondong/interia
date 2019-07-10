package bitcamp.java106.pms.domain;

import java.io.Serializable;


public class Odnwk implements Serializable {
    private static final long serialVersionUID = 1L;

    private int no; /* 작품주문 번호 */
    private int oderNo; /* 주문번호 */
    private int worksNo; /* 작품번호 */
    private int oderStore; /* 수량 */
    private String purchEpilo; /* 구매후기 */
    private String revPhoto; /* 리뷰사진 */
    private String worksOption; /* 옵션내용 */
    private Order order;
    private Works works;
    
    Rvpho rvpho; 
    
    @Override
    public String toString() {
        return "Odnwk [no=" + no + ", oderNo=" + oderNo + ", worksNo=" + worksNo
                + ", oderStore=" + oderStore + ", purchEpilo=" + purchEpilo
                + ", revPhoto=" + revPhoto + ", worksOption=" + worksOption
                + ", order=" + order + ", works=" + works + ", rvpho=" + rvpho
                + "]";
    }
    
    public String getWorksOption() {
        return worksOption;
    }

    public void setWorksOption(String worksOption) {
        this.worksOption = worksOption;
    }

    public int getNo() {
        return no;
    }
    public void setNo(int no) {
        this.no = no;
    }
    public Order getOrder() {
        return order;
    }
    public Works getWorks() {
        return works;
    }
    
    public String getRevPhoto() {
        return revPhoto;
    }
    public void setRevPhoto(String revPhoto) {
        this.revPhoto = revPhoto;
    }
    public int getOderNo() {
        return oderNo;
    }
    public void setOderNo(int oderNo) {
        this.oderNo = oderNo;
    }
    public int getWorksNo() {
        return worksNo;
    }
    public void setWorksNo(int worksNo) {
        this.worksNo = worksNo;
    }
    public int getOderStore() {
        return oderStore;
    }
    public void setOderStore(int oderStore) {
        this.oderStore = oderStore;
    }
    public String getPurchEpilo() {
        return purchEpilo;
    }
    public void setPurchEpilo(String purchEpilo) {
        this.purchEpilo = purchEpilo;
    }
    
    
}

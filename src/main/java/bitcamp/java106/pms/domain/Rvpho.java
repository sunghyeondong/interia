package bitcamp.java106.pms.domain;

import java.io.Serializable;


public class Rvpho implements Serializable {
    private static final long serialVersionUID = 1L;

    private int no; /* 사진번호 */
    private int odnwkNo; /* 작품주문번호 */
    private String revPhoto; /* 리뷰사진 */
    
    
    @Override
    public String toString() {
        return "RVPHO [no=" + no + ", odnwkNo=" + odnwkNo + ", revPhoto=" + revPhoto + "]";
    }
    
    
    public int getNo() {
        return no;
    }
    public void setNo(int no) {
        this.no = no;
    }
    public int getOdnwkNo() {
        return odnwkNo;
    }
    public void setOdnwkNo(int odnwkNo) {
        this.odnwkNo = odnwkNo;
    }
    public String getRevPhoto() {
        return revPhoto;
    }
    public void setRevPhoto(String revPhoto) {
        this.revPhoto = revPhoto;
    }
    
}

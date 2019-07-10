package bitcamp.java106.pms.domain;

import java.io.Serializable;


public class Wrkshp implements Serializable {
    private static final long serialVersionUID = 1L;
 
    private int no;
    private int businessNo;
    private String BusinessName;
    private String name;
    private String industry;
    private String businessItem;
    private String mailingAddr;
    private String addr;
    private String detailAddr;
    
    private String title;
    private String introduction;
    private String workshopText;
    private String faceBook;
    private String twitter;
    private String instagram;
    
    @Override
    public String toString() {
        return "Wrkshp [no=" + no + ", businessNo=" + businessNo + ", BusinessName=" + BusinessName + ", name=" + name
                + ", industry=" + industry + ", businessItem=" + businessItem + ", mailingAddr=" + mailingAddr
                + ", addr=" + addr + ", detailAddr=" + detailAddr + ", title=" + title + ", introduction="
                + introduction + ", workshopText=" + workshopText + ", faceBook=" + faceBook + ", twitter=" + twitter
                + ", instagram=" + instagram + "]";
    }

    public int getNo() {
        return no;
    }
    public void setNo(int no) {
        this.no = no;
    }
    public int getBusinessNo() {
        return businessNo;
    }
    public void setBusinessNo(int businessNo) {
        this.businessNo = businessNo;
    }
    public String getBusinessName() {
        return BusinessName;
    }
    public void setBusinessName(String businessName) {
        BusinessName = businessName;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getIndustry() {
        return industry;
    }
    public void setIndustry(String industry) {
        this.industry = industry;
    }
    public String getBusinessItem() {
        return businessItem;
    }
    public void setBusinessItem(String businessItem) {
        this.businessItem = businessItem;
    }
    public String getMailingAddr() {
        return mailingAddr;
    }
    public void setMailingAddr(String mailingAddr) {
        this.mailingAddr = mailingAddr;
    }
    public String getAddr() {
        return addr;
    }
    public void setAddr(String addr) {
        this.addr = addr;
    }
    public String getDetailAddr() {
        return detailAddr;
    }
    public void setDetailAddr(String detailAddr) {
        this.detailAddr = detailAddr;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getIntroduction() {
        return introduction;
    }
    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }
    public String getWorkshopText() {
        return workshopText;
    }
    public void setWorkshopText(String workshopText) {
        this.workshopText = workshopText;
    }
    public String getFaceBook() {
        return faceBook;
    }
    public void setFaceBook(String faceBook) {
        this.faceBook = faceBook;
    }
    public String getTwitter() {
        return twitter;
    }
    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }
    public String getInstagram() {
        return instagram;
    }
    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }
    public static long getSerialversionuid() {
        return serialVersionUID;
    }
    
    

}

//ver 31 - 생성자 제거 및 count 변수 제거
//ver 27 - java.io.Serializable 인터페이스 구현
//ver 24 - setNo() 변경
//ver 18 - 게시물 객체의 고유 번호(no)를 static 변수(count)를 이용하여 자동 설정한다. 
// ver 16 - 캡슐화 적용. 겟터, 셋터 추가.
// ver 13 - 등록일의 데이터 타입을 String에서 Date으로 변경







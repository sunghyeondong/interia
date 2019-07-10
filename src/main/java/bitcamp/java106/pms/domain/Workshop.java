package bitcamp.java106.pms.domain;

import java.io.Serializable;

public class Workshop implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private int wno; // 공방번호(pk키와 연계)
    private int bno; // 판매자 번호
    private String mutual; // 상호
    private String rpstName; // 대표자명
    private String industry; // 업태
    private String items; // 종목
    private String zcode; // 우편번호
    private String baddr; // 기본 주소
    private String daddr; // 상세 주소
    private String studioName; // 공방명
    private String introduction; // 소개글
    private String wsContent; // 공방 소개 내용
    private String facebook; // 페이스북
    private String twitter; // 트위터
    private String instagram; // 인스타그램
    
    private String filename;
    private String filenametwo;
    
    
    
    @Override
    public String toString() {
        return "Workshop [wno=" + wno + ", bno=" + bno + ", mutual=" + mutual + ", rpstName=" + rpstName + ", industry="
                + industry + ", items=" + items + ", zcode=" + zcode + ", baddr=" + baddr + ", daddr=" + daddr
                + ", studioName=" + studioName + ", introduction=" + introduction + ", wsContent=" + wsContent
                + ", facebook=" + facebook + ", twitter=" + twitter + ", instagram=" + instagram + ", filename="
                + filename + ", filenametwo=" + filenametwo + "]";
    }
    public int getWno() {
        return wno;
    }
    public void setWno(int wno) {
        this.wno = wno;
    }
    public int getBno() {
        return bno;
    }
    public void setBno(int bno) {
        this.bno = bno;
    }
    public String getMutual() {
        return mutual;
    }
    public void setMutual(String mutual) {
        this.mutual = mutual;
    }
    public String getRpstName() {
        return rpstName;
    }
    public void setRpstName(String rpstName) {
        this.rpstName = rpstName;
    }
    public String getIndustry() {
        return industry;
    }
    public void setIndustry(String industry) {
        this.industry = industry;
    }
    public String getItems() {
        return items;
    }
    public void setItems(String items) {
        this.items = items;
    }
    public String getZcode() {
        return zcode;
    }
    public void setZcode(String zcode) {
        this.zcode = zcode;
    }
    public String getBaddr() {
        return baddr;
    }
    public void setBaddr(String baddr) {
        this.baddr = baddr;
    }
    public String getDaddr() {
        return daddr;
    }
    public void setDaddr(String daddr) {
        this.daddr = daddr;
    }
    public String getStudioName() {
        return studioName;
    }
    public void setStudioName(String studioName) {
        this.studioName = studioName;
    }
    public String getIntroduction() {
        return introduction;
    }
    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }
    public String getWsContent() {
        return wsContent;
    }
    public void setWsContent(String wsContent) {
        this.wsContent = wsContent;
    }
    public String getFacebook() {
        return facebook;
    }
    public void setFacebook(String facebook) {
        this.facebook = facebook;
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
    public String getFilename() {
        return filename;
    }
    public void setFilename(String filename) {
        this.filename = filename;
    }
    public String getFilenametwo() {
        return filenametwo;
    }
    public void setFilenametwo(String filenametwo) {
        this.filenametwo = filenametwo;
    }
    
    
    
}

package bitcamp.java106.pms.domain;

import java.io.Serializable;

public class Tag implements Serializable {

    /**
     * 
     */
    private static final long serialVersionUID = 1L;
    
    
    private int hashTagNo; /* 해시태그번호 */
    private String tagName; /* 해시태그 값*/
    
    private int boardMatchNo;
    private int worksMatchNo;
    
    
    
    
    public int getHashTagNo() {
        return hashTagNo;
    }
    public void setHashTagNo(int hashTagNo) {
        this.hashTagNo = hashTagNo;
    }
    public String getTagName() {
        return tagName;
    }
    public void setTagName(String tagName) {
        this.tagName = tagName;
    }
    public int getBoardMatchNo() {
        return boardMatchNo;
    }
    public void setBoardMatchNo(int boardMatchNo) {
        this.boardMatchNo = boardMatchNo;
    }
    public int getWorksMatchNo() {
        return worksMatchNo;
    }
    public void setWorksMatchNo(int worksMatchNo) {
        this.worksMatchNo = worksMatchNo;
    }

    
    
    
    
    
   

    


}

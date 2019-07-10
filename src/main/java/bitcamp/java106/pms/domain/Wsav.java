//공방체험 및 공방체험사진 TABLE
package bitcamp.java106.pms.domain;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonFormat;


public class Wsav implements Serializable {
    private static final long serialVersionUID = 1L;

    private int no; //번호
    private int workshopNo; // 공방번호
    private String title; // 체험명
    private int minPerson; // 최소인원
    private int maxPerson; //최대인원
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date experDate; //체험일
    private String startTime; //시작일
    private String endTime; //종료일
    
    private String prepareCont; //준비물 
    private int price; //체험료
    private String content; //내용
    
    ArrayList<Wkacp> workshopPhoto;

    @Override
    public String toString() {
        return "Wsav [no=" + no + ", workshopNo=" + workshopNo + ", title=" + title + ", minPerson=" + minPerson
                + ", maxPerson=" + maxPerson + ", experDate=" + experDate + ", startTime=" + startTime + ", endTime="
                + endTime + ", prepareCont=" + prepareCont + ", price=" + price
                + ", content=" + content + ", workshopPhoto=" + workshopPhoto + "]";
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public int getWorkshopNo() {
        return workshopNo;
    }

    public void setWorkshopNo(int workshopNo) {
        this.workshopNo = workshopNo;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getMinPerson() {
        return minPerson;
    }

    public void setMinPerson(int minPerson) {
        this.minPerson = minPerson;
    }

    public int getMaxPerson() {
        return maxPerson;
    }

    public void setMaxPerson(int maxPerson) {
        this.maxPerson = maxPerson;
    }

    public Date getExperDate() {
        return experDate;
    }

    public void setExperDate(Date experDate) {
        this.experDate = experDate;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getPrepareCont() {
        return prepareCont;
    }

    public void setPrepareCont(String prepareCont) {
        this.prepareCont = prepareCont;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public ArrayList<Wkacp> getWorkshopPhoto() {
        return workshopPhoto;
    }

    public void setWorkshopPhoto(ArrayList<Wkacp> workshopPhoto) {
        this.workshopPhoto = workshopPhoto;
    }
    
    
    

    
    
    
     
}
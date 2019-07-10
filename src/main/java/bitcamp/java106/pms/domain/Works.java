package bitcamp.java106.pms.domain;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Works implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private int worksNumber;  // 작품번호
    private int workshopNumber;  // 공방번호
    private String title; //작품명
    private int price; // 가격  
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date registeredDate; // 등록 날짜
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date modifiedDate;//수정일자
    private int capacity; // 재고수량
    private String salesStatus; // 판매 상태
    private String productDetail; // 제품 상세
    private String deliveryPrice; // 배송비 여부
    private WorksPhoto photo;  // 사진 관련
    private WorksOption option; // 제품 옵션 관련
    private String[] worksCategory; // 카테고리 (해시태그)
    
    
    ArrayList<WorksPhoto> worksPhotos;//사진관련(add)
    ArrayList<Tag> worksTags;//태그관련(add)
    
    
    
    @Override
    public String toString() {
        return "Works [worksNumber=" + worksNumber + ", workshopNumber="
                + workshopNumber + ", title=" + title + ", price=" + price
                + ", registeredDate=" + registeredDate + ", modifiedDate="
                + modifiedDate + ", capacity=" + capacity + ", salesStatus="
                + salesStatus + ", productDetail=" + productDetail
                + ", deliveryPrice=" + deliveryPrice + ", photo=" + photo
                + ", option=" + option + ", worksCategory="
                + Arrays.toString(worksCategory) + ", worksPhotos="
                + worksPhotos + ", worksTags=" + worksTags + "]";
    }
    public ArrayList<WorksPhoto> getWorksPhoto() {
        return worksPhotos;
    }
    public void setWorkshopPhoto(ArrayList<WorksPhoto> worksPhoto) {
        this.worksPhotos = worksPhoto;
    }
    
    public String[] getWorksCategory() {
        return worksCategory;
    }
    public void setWorksCategory(String[] worksCategory) {
        this.worksCategory = worksCategory;
    }
    public int getWorksNumber() {
        return worksNumber;
    }
    public void setWorksNumber(int worksNumber) {
        this.worksNumber = worksNumber;
    }
    public int getWorkshopNumber() {
        return workshopNumber;
    }
    public void setWorkshopNumber(int workshopNumber) {
        this.workshopNumber = workshopNumber;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }
    public Date getRegisteredDate() {
        return registeredDate;
    }
    public void setRegisteredDate(Date registeredDate) {
        this.registeredDate = registeredDate;
    }
    public Date getModifiedDate() {
        return modifiedDate;
    }
    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }
    public int getCapacity() {
        return capacity;
    }
    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
    public String getSalesStatus() {
        return salesStatus;
    }
    public void setSalesStatus(String salesStatus) {
        this.salesStatus = salesStatus;
    }
    public String getProductDetail() {
        return productDetail;
    }
    public void setProductDetail(String productDetail) {
        this.productDetail = productDetail;
    }
    public String getDeliveryPrice() {
        return deliveryPrice;
    }
    public void setDeliveryPrice(String deliveryPrice) {
        this.deliveryPrice = deliveryPrice;
    }
    public WorksPhoto getPhoto() {
        return photo;
    }
    public void setPhoto(WorksPhoto photo) {
        this.photo = photo;
    }
    public WorksOption getOption() {
        return option;
    }
    public void setOption(WorksOption option) {
        this.option = option;
    }
    
    
}
  


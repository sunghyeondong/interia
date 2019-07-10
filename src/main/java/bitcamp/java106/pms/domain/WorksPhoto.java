package bitcamp.java106.pms.domain;

import java.io.Serializable;

// 여기서 외래키를 제외하고, java에 데이터를 입력 받는 용도로만 사용하기 위한 도메인용도
public class WorksPhoto implements Serializable {
    private static final long serialVersionUID = 1L;
    
    // 여기서는 "작품사진", "리뷰사진", "공방체험사진" 3가지가 데이터 넣는 용도로 쓰는 도메인이다.
    // 자세한 사항은 "작품", "리뷰", "공방체험" 관련 DB 및 도메인 참조하기
    // "공방사진", "게시물 사진" : 별도의 도메인을 더 줘서 할 것!
    private int photoNumber;  // 사진 번호
    private int worksNumber; // 작품번호
    private String mainPhoto; // 리스트에 들어갈 메인으로 들어갈 사진
    private String path;  // 사진 경로
    
    
    @Override
    public String toString() {
        return "WorksPhoto [photoNumber=" + photoNumber + ", worksNumber="
                + worksNumber + ", mainPhoto=" + mainPhoto + ", path=" + path
                + "]";
    }
    
    
    
    public int getWorksNumber() {
        return worksNumber;
    }



    public void setWorksNumber(int worksNumber) {
        this.worksNumber = worksNumber;
    }



    public String getMainPhoto() {
        return mainPhoto;
    }



    public void setMainPhoto(String mainPhoto) {
        this.mainPhoto = mainPhoto;
    }



    public int getPhotoNumber() {
        return photoNumber;
    }



    public void setPhotoNumber(int photoNumber) {
        this.photoNumber = photoNumber;
    }



    public String getPath() {
        return path;
    }
    public void setPath(String path) {
        this.path = path;
    }
}

package bitcamp.java106.pms.domain;

import java.io.Serializable;

public class Member implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private int no;
    private String id;
    private String password;
    private String name;
    private String nickname;
    private String phoneNumber;
    private String zipCode;
    private String baseAdd;
    private String detailAdd;
    private String profilePhoto;
    private String bannerPhoto;
    
    
    
    public String getProfilePhoto() {
        return profilePhoto;
    }
    public void setProfilePhoto(String profilePhoto) {
        this.profilePhoto = profilePhoto;
    }
    public String getBannerPhoto() {
        return bannerPhoto;
    }
    public void setBannerPhoto(String bannerPhoto) {
        this.bannerPhoto = bannerPhoto;
    }
    public int getNo() {
        return no;
    }
    public void setNo(int no) {
        this.no = no;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getNickname() {
        return nickname;
    }
    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getZipCode() {
        return zipCode;
    }
    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }
    public String getBaseAdd() {
        return baseAdd;
    }
    public void setBaseAdd(String baseAdd) {
        this.baseAdd = baseAdd;
    }
    public String getDetailAdd() {
        return detailAdd;
    }
    public void setDetailAdd(String detailAdd) {
        this.detailAdd = detailAdd;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Member other = (Member) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }
    
    @Override
    public String toString() {
        return "Member [no=" + no + ", id=" + id + ", password=" + password
                + ", name=" + name + ", nickname=" + nickname + ", phoneNumber="
                + phoneNumber + ", zipCode=" + zipCode + ", baseAdd=" + baseAdd
                + ", detailAdd=" + detailAdd + ", profilePhoto=" + profilePhoto
                + ", bannerPhoto=" + bannerPhoto + "]";
    }
    
    
    
}






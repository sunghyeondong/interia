package bitcamp.java106.pms.domain;

import java.io.Serializable;

public class Wkacp implements Serializable {
    
    private static final long serialVersionUID = 1L;
    
    private int no;
    private int workshopActivityNo;
    private String filename;
    
    @Override
    public String toString() {
        return "Wkacp [no=" + no + ", workshopActivityNo=" + workshopActivityNo + ", filename=" + filename + "]";
    }
    
    public int getNo() {
        return no;
    }
    public void setNo(int no) {
        this.no = no;
    }
    public int getWorkshopActivityNo() {
        return workshopActivityNo;
    }
    public void setWorkshopActivityNo(int workshopActivityNo) {
        this.workshopActivityNo = workshopActivityNo;
    }
    public String getFilename() {
        return filename;
    }
    public void setFilename(String filename) {
        this.filename = filename;
    }
    
    

}

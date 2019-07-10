package bitcamp.java106.pms.domain;

import java.io.Serializable;

public class Acrgtt implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private int wno;
    private int wsno;
    private int personnel;
    private String workshopDate;
    
    
    @Override
    public String toString() {
        return "Acrgtt [wno=" + wno + ", wsno=" + wsno + ", personnel=" + personnel + ", workshopDate=" + workshopDate
                + "]";
    }
    public int getWno() {
        return wno;
    }
    public void setWno(int wno) {
        this.wno = wno;
    }
    public int getWsno() {
        return wsno;
    }
    public void setWsno(int wsno) {
        this.wsno = wsno;
    }
    public int getPersonnel() {
        return personnel;
    }
    public void setPersonnel(int personnel) {
        this.personnel = personnel;
    }
    public String getWorkshopDate() {
        return workshopDate;
    }
    public void setWorkshopDate(String workshopDate) {
        this.workshopDate = workshopDate;
    }
    
}

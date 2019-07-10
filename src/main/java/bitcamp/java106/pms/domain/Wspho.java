package bitcamp.java106.pms.domain;

import java.io.Serializable;

public class Wspho implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private int wsno;
    private int wno;
    private String wsPclsf;
    private String filename;
    private String filenametwo;
    
    
    
    
    @Override
    public String toString() {
        return "Wspho [wsno=" + wsno + ", wno=" + wno + ", wsPclsf=" + wsPclsf + ", filename=" + filename
                + ", filenametwo=" + filenametwo + "]";
    }

    public String getFilenametwo() {
        return filenametwo;
    }

    public void setFilenametwo(String filenametwo) {
        this.filenametwo = filenametwo;
    }

    public int getWsno() {
        return wsno;
    }
    public void setWsno(int wsno) {
        this.wsno = wsno;
    }
    public int getWno() {
        return wno;
    }
    public void setWno(int wno) {
        this.wno = wno;
    }
    public String getWsPclsf() {
        return wsPclsf;
    }
    public void setWsPclsf(String wsPclsf) {
        this.wsPclsf = wsPclsf;
    }
    public String getFilename() {
        return filename;
    }
    public void setFilename(String filename) {
        this.filename = filename;
    }
    
    
    
    
}

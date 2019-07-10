package bitcamp.java106.pms.domain;

import java.io.Serializable;

public class WorksOption implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private int optionNumber; // 옵션번호
    private int worksNumber;  // 작품번호
    private String attributeValue; // 속성값
    
    
    
    @Override
    public String toString() {
        return "WorksOption [optionNumber=" + optionNumber + ", worksNumber="
                + worksNumber + ", attributeValue=" + attributeValue + "]";
    }
    public int getWorksNumber() {
        return worksNumber;
    }
    public void setWorksNumber(int worksNumber) {
        this.worksNumber = worksNumber;
    }

    public int getOptionNumber() {
        return optionNumber;
    }

    public void setOptionNumber(int optionNumber) {
        this.optionNumber = optionNumber;
    }

    public String getAttributeValue() {
        return attributeValue;
    }

    public void setAttributeValue(String attributeValue) {
        this.attributeValue = attributeValue;
    }

    
}


package com.aprendoz_test.data.output;

import java.util.Date;


/**
 * Generated for query "getSyByCurDate_" on 07/30/2014 16:06:57
 * 
 */
public class GetSyByCurDate_RtnType {

    private Integer idsy;
    private String sy;
    private Date c2;
    private Date c3;

    public GetSyByCurDate_RtnType() {
    }

    public GetSyByCurDate_RtnType(Integer idsy, String sy, Date c2, Date c3) {
        this.idsy = idsy;
        this.sy = sy;
        this.c2 = c2;
        this.c3 = c3;
    }

    public Integer getIdsy() {
        return idsy;
    }

    public void setIdsy(Integer idsy) {
        this.idsy = idsy;
    }

    public String getSy() {
        return sy;
    }

    public void setSy(String sy) {
        this.sy = sy;
    }

    public Date getC2() {
        return c2;
    }

    public void setC2(Date c2) {
        this.c2 = c2;
    }

    public Date getC3() {
        return c3;
    }

    public void setC3(Date c3) {
        this.c3 = c3;
    }

}


package com.aprendoz_test.data;



/**
 *  aprendoz_test.TipoCosto
 *  11/07/2014 13:24:51
 * 
 */
public class TipoCosto {

    private Integer idTipoCosto;
    private String tipoCosto;

    public TipoCosto() {
    }

    public TipoCosto(Integer idTipoCosto, String tipoCosto) {
        this.idTipoCosto = idTipoCosto;
        this.tipoCosto = tipoCosto;
    }

    public Integer getIdTipoCosto() {
        return idTipoCosto;
    }

    public void setIdTipoCosto(Integer idTipoCosto) {
        this.idTipoCosto = idTipoCosto;
    }

    public String getTipoCosto() {
        return tipoCosto;
    }

    public void setTipoCosto(String tipoCosto) {
        this.tipoCosto = tipoCosto;
    }

}

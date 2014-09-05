
package com.aprendoz_test.data.output;



/**
 * Generated for query "dash_logDocentes" on 09/03/2014 16:11:21
 * 
 */
public class Dash_logDocentesRtnType {

    private String usuario;
    private String mes;
    private Long totalingresos;
    private Integer sy;

    public Dash_logDocentesRtnType() {
    }

    public Dash_logDocentesRtnType(String usuario, String mes, Long totalingresos, Integer sy) {
        this.usuario = usuario;
        this.mes = mes;
        this.totalingresos = totalingresos;
        this.sy = sy;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getMes() {
        return mes;
    }

    public void setMes(String mes) {
        this.mes = mes;
    }

    public Long getTotalingresos() {
        return totalingresos;
    }

    public void setTotalingresos(Long totalingresos) {
        this.totalingresos = totalingresos;
    }

    public Integer getSy() {
        return sy;
    }

    public void setSy(Integer sy) {
        this.sy = sy;
    }

}

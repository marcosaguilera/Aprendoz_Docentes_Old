
package com.aprendoz_test.data.output;

import java.math.BigDecimal;


/**
 * Generated for query "dash_no_calificados" on 05/09/2014 07:43:22
 * 
 */
public class Dash_no_calificadosRtnType {

    private Integer idasignatura;
    private Long sinCalificar;
    private Long total;
    private Long sy;
    private BigDecimal totalporcentaje;
    private BigDecimal califPorcentaje;
    private Long aprProgreso;

    public Dash_no_calificadosRtnType() {
    }

    public Dash_no_calificadosRtnType(Integer idasignatura, Long sinCalificar, Long total, Long sy, BigDecimal totalporcentaje, BigDecimal califPorcentaje, Long aprProgreso) {
        this.idasignatura = idasignatura;
        this.sinCalificar = sinCalificar;
        this.total = total;
        this.sy = sy;
        this.totalporcentaje = totalporcentaje;
        this.califPorcentaje = califPorcentaje;
        this.aprProgreso = aprProgreso;
    }

    public Integer getIdasignatura() {
        return idasignatura;
    }

    public void setIdasignatura(Integer idasignatura) {
        this.idasignatura = idasignatura;
    }

    public Long getSinCalificar() {
        return sinCalificar;
    }

    public void setSinCalificar(Long sinCalificar) {
        this.sinCalificar = sinCalificar;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public Long getSy() {
        return sy;
    }

    public void setSy(Long sy) {
        this.sy = sy;
    }

    public BigDecimal getTotalporcentaje() {
        return totalporcentaje;
    }

    public void setTotalporcentaje(BigDecimal totalporcentaje) {
        this.totalporcentaje = totalporcentaje;
    }

    public BigDecimal getCalifPorcentaje() {
        return califPorcentaje;
    }

    public void setCalifPorcentaje(BigDecimal califPorcentaje) {
        this.califPorcentaje = califPorcentaje;
    }

    public Long getAprProgreso() {
        return aprProgreso;
    }

    public void setAprProgreso(Long aprProgreso) {
        this.aprProgreso = aprProgreso;
    }

}

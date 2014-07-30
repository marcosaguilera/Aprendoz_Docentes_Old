
package com.aprendoz_test.data.output;

import java.math.BigDecimal;


/**
 * Generated for query "subjectsBySyAndStudent" on 07/30/2014 18:31:12
 * 
 */
public class SubjectsBySyAndStudentRtnType {

    private Integer idpersona;
    private Integer idasignatura;
    private String asignatura;
    private Integer esperados;
    private Integer logrados;
    private BigDecimal porcentaje;
    private BigDecimal puntaje;
    private String calificacion;
    private Integer idsy;

    public SubjectsBySyAndStudentRtnType() {
    }

    public SubjectsBySyAndStudentRtnType(Integer idpersona, Integer idasignatura, String asignatura, Integer esperados, Integer logrados, BigDecimal porcentaje, BigDecimal puntaje, String calificacion, Integer idsy) {
        this.idpersona = idpersona;
        this.idasignatura = idasignatura;
        this.asignatura = asignatura;
        this.esperados = esperados;
        this.logrados = logrados;
        this.porcentaje = porcentaje;
        this.puntaje = puntaje;
        this.calificacion = calificacion;
        this.idsy = idsy;
    }

    public Integer getIdpersona() {
        return idpersona;
    }

    public void setIdpersona(Integer idpersona) {
        this.idpersona = idpersona;
    }

    public Integer getIdasignatura() {
        return idasignatura;
    }

    public void setIdasignatura(Integer idasignatura) {
        this.idasignatura = idasignatura;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public Integer getEsperados() {
        return esperados;
    }

    public void setEsperados(Integer esperados) {
        this.esperados = esperados;
    }

    public Integer getLogrados() {
        return logrados;
    }

    public void setLogrados(Integer logrados) {
        this.logrados = logrados;
    }

    public BigDecimal getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(BigDecimal porcentaje) {
        this.porcentaje = porcentaje;
    }

    public BigDecimal getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(BigDecimal puntaje) {
        this.puntaje = puntaje;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public Integer getIdsy() {
        return idsy;
    }

    public void setIdsy(Integer idsy) {
        this.idsy = idsy;
    }

}


package com.aprendoz_test.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Periodo
 *  11/07/2014 13:24:50
 * 
 */
public class Periodo {

    private Integer idPeriodo;
    private TipoPeriodo tipoPeriodo;
    private Sy sy;
    private String periodo;
    private Date fechaInicio;
    private Date fechaFin;
    private Set<com.aprendoz_test.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_test.data.InscCursoAsig>();
    private Set<com.aprendoz_test.data.InscAlumAsig> inscAlumAsigs = new HashSet<com.aprendoz_test.data.InscAlumAsig>();
    private Set<com.aprendoz_test.data.InscCursoAsigCopy> inscCursoAsigCopies = new HashSet<com.aprendoz_test.data.InscCursoAsigCopy>();

    public Periodo() {
    }

    public Periodo(Integer idPeriodo, String periodo, Date fechaInicio, Date fechaFin) {
        this.idPeriodo = idPeriodo;
        this.periodo = periodo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

    public Periodo(Integer idPeriodo, TipoPeriodo tipoPeriodo, Sy sy, String periodo, Date fechaInicio, Date fechaFin, Set<com.aprendoz_test.data.InscCursoAsig> inscCursoAsigs, Set<com.aprendoz_test.data.InscAlumAsig> inscAlumAsigs, Set<com.aprendoz_test.data.InscCursoAsigCopy> inscCursoAsigCopies) {
        this.idPeriodo = idPeriodo;
        this.tipoPeriodo = tipoPeriodo;
        this.sy = sy;
        this.periodo = periodo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.inscCursoAsigs = inscCursoAsigs;
        this.inscAlumAsigs = inscAlumAsigs;
        this.inscCursoAsigCopies = inscCursoAsigCopies;
    }

    public Integer getIdPeriodo() {
        return idPeriodo;
    }

    public void setIdPeriodo(Integer idPeriodo) {
        this.idPeriodo = idPeriodo;
    }

    public TipoPeriodo getTipoPeriodo() {
        return tipoPeriodo;
    }

    public void setTipoPeriodo(TipoPeriodo tipoPeriodo) {
        this.tipoPeriodo = tipoPeriodo;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public String getPeriodo() {
        return periodo;
    }

    public void setPeriodo(String periodo) {
        this.periodo = periodo;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public Set<com.aprendoz_test.data.InscCursoAsig> getInscCursoAsigs() {
        return inscCursoAsigs;
    }

    public void setInscCursoAsigs(Set<com.aprendoz_test.data.InscCursoAsig> inscCursoAsigs) {
        this.inscCursoAsigs = inscCursoAsigs;
    }

    public Set<com.aprendoz_test.data.InscAlumAsig> getInscAlumAsigs() {
        return inscAlumAsigs;
    }

    public void setInscAlumAsigs(Set<com.aprendoz_test.data.InscAlumAsig> inscAlumAsigs) {
        this.inscAlumAsigs = inscAlumAsigs;
    }

    public Set<com.aprendoz_test.data.InscCursoAsigCopy> getInscCursoAsigCopies() {
        return inscCursoAsigCopies;
    }

    public void setInscCursoAsigCopies(Set<com.aprendoz_test.data.InscCursoAsigCopy> inscCursoAsigCopies) {
        this.inscCursoAsigCopies = inscCursoAsigCopies;
    }

}

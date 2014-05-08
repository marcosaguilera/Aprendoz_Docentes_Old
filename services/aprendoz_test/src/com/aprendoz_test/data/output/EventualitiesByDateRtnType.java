
package com.aprendoz_test.data.output;

import java.util.Date;


/**
 * Generated for query "eventualitiesByDate" on 04/21/2014 08:59:20
 * 
 */
public class EventualitiesByDateRtnType {

    private Date fecha;
    private Date hora;
    private String estado;
    private Integer ideventualidad;
    private String registrante;
    private Integer idsub;
    private String subtipo;
    private String descripcion;

    public EventualitiesByDateRtnType() {
    }

    public EventualitiesByDateRtnType(Date fecha, Date hora, String estado, Integer ideventualidad, String registrante, Integer idsub, String subtipo, String descripcion) {
        this.fecha = fecha;
        this.hora = hora;
        this.estado = estado;
        this.ideventualidad = ideventualidad;
        this.registrante = registrante;
        this.idsub = idsub;
        this.subtipo = subtipo;
        this.descripcion = descripcion;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Date getHora() {
        return hora;
    }

    public void setHora(Date hora) {
        this.hora = hora;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Integer getIdeventualidad() {
        return ideventualidad;
    }

    public void setIdeventualidad(Integer ideventualidad) {
        this.ideventualidad = ideventualidad;
    }

    public String getRegistrante() {
        return registrante;
    }

    public void setRegistrante(String registrante) {
        this.registrante = registrante;
    }

    public Integer getIdsub() {
        return idsub;
    }

    public void setIdsub(Integer idsub) {
        this.idsub = idsub;
    }

    public String getSubtipo() {
        return subtipo;
    }

    public void setSubtipo(String subtipo) {
        this.subtipo = subtipo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

}

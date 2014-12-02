
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.InscCoordinadoresSubarea
 *  11/07/2014 13:24:50
 * 
 */
public class InscCoordinadoresSubarea {

    private Integer idCoordinadorSubarea;
    private Integer personaIdPersona;
    private Integer syIdSy;
    private Integer subareaIdSubarea;
    private Integer activo;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public InscCoordinadoresSubarea() {
    }

    public InscCoordinadoresSubarea(Integer idCoordinadorSubarea, Integer personaIdPersona, Integer syIdSy, Integer subareaIdSubarea, Integer activo, Date fechaCreacion, Date fechaActualizacion) {
        this.idCoordinadorSubarea = idCoordinadorSubarea;
        this.personaIdPersona = personaIdPersona;
        this.syIdSy = syIdSy;
        this.subareaIdSubarea = subareaIdSubarea;
        this.activo = activo;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public Integer getIdCoordinadorSubarea() {
        return idCoordinadorSubarea;
    }

    public void setIdCoordinadorSubarea(Integer idCoordinadorSubarea) {
        this.idCoordinadorSubarea = idCoordinadorSubarea;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

    public Integer getSubareaIdSubarea() {
        return subareaIdSubarea;
    }

    public void setSubareaIdSubarea(Integer subareaIdSubarea) {
        this.subareaIdSubarea = subareaIdSubarea;
    }

    public Integer getActivo() {
        return activo;
    }

    public void setActivo(Integer activo) {
        this.activo = activo;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

}

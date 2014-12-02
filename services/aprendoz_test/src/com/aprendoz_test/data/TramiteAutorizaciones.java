
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.TramiteAutorizaciones
 *  11/07/2014 13:24:49
 * 
 */
public class TramiteAutorizaciones {

    private Integer idAutorizacion;
    private Tramite tramite;
    private Integer personaIdPersona;
    private Boolean aprobacion;
    private String comentario;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public TramiteAutorizaciones() {
    }

    public TramiteAutorizaciones(Integer idAutorizacion, Integer personaIdPersona, Boolean aprobacion, String comentario, Date fechaCreacion, Date fechaActualizacion) {
        this.idAutorizacion = idAutorizacion;
        this.personaIdPersona = personaIdPersona;
        this.aprobacion = aprobacion;
        this.comentario = comentario;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public TramiteAutorizaciones(Integer idAutorizacion, Tramite tramite, Integer personaIdPersona, Boolean aprobacion, String comentario, Date fechaCreacion, Date fechaActualizacion) {
        this.idAutorizacion = idAutorizacion;
        this.tramite = tramite;
        this.personaIdPersona = personaIdPersona;
        this.aprobacion = aprobacion;
        this.comentario = comentario;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public Integer getIdAutorizacion() {
        return idAutorizacion;
    }

    public void setIdAutorizacion(Integer idAutorizacion) {
        this.idAutorizacion = idAutorizacion;
    }

    public Tramite getTramite() {
        return tramite;
    }

    public void setTramite(Tramite tramite) {
        this.tramite = tramite;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public Boolean getAprobacion() {
        return aprobacion;
    }

    public void setAprobacion(Boolean aprobacion) {
        this.aprobacion = aprobacion;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
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

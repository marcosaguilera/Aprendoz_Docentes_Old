
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.TramiteTipoTramiteRol
 *  11/07/2014 13:24:50
 * 
 */
public class TramiteTipoTramiteRol {

    private Integer tramiteTipoRolId;
    private TramiteTipoTramite tramiteTipoTramite;
    private Integer tipoPersonaIdTipoPersona;
    private Boolean requerido;
    private Boolean valorDefecto;
    private Boolean apruebaSolicita;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public TramiteTipoTramiteRol() {
    }

    public TramiteTipoTramiteRol(Integer tramiteTipoRolId, Integer tipoPersonaIdTipoPersona, Boolean requerido, Boolean valorDefecto, Boolean apruebaSolicita, Date fechaCreacion, Date fechaActualizacion) {
        this.tramiteTipoRolId = tramiteTipoRolId;
        this.tipoPersonaIdTipoPersona = tipoPersonaIdTipoPersona;
        this.requerido = requerido;
        this.valorDefecto = valorDefecto;
        this.apruebaSolicita = apruebaSolicita;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public TramiteTipoTramiteRol(Integer tramiteTipoRolId, TramiteTipoTramite tramiteTipoTramite, Integer tipoPersonaIdTipoPersona, Boolean requerido, Boolean valorDefecto, Boolean apruebaSolicita, Date fechaCreacion, Date fechaActualizacion) {
        this.tramiteTipoRolId = tramiteTipoRolId;
        this.tramiteTipoTramite = tramiteTipoTramite;
        this.tipoPersonaIdTipoPersona = tipoPersonaIdTipoPersona;
        this.requerido = requerido;
        this.valorDefecto = valorDefecto;
        this.apruebaSolicita = apruebaSolicita;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public Integer getTramiteTipoRolId() {
        return tramiteTipoRolId;
    }

    public void setTramiteTipoRolId(Integer tramiteTipoRolId) {
        this.tramiteTipoRolId = tramiteTipoRolId;
    }

    public TramiteTipoTramite getTramiteTipoTramite() {
        return tramiteTipoTramite;
    }

    public void setTramiteTipoTramite(TramiteTipoTramite tramiteTipoTramite) {
        this.tramiteTipoTramite = tramiteTipoTramite;
    }

    public Integer getTipoPersonaIdTipoPersona() {
        return tipoPersonaIdTipoPersona;
    }

    public void setTipoPersonaIdTipoPersona(Integer tipoPersonaIdTipoPersona) {
        this.tipoPersonaIdTipoPersona = tipoPersonaIdTipoPersona;
    }

    public Boolean getRequerido() {
        return requerido;
    }

    public void setRequerido(Boolean requerido) {
        this.requerido = requerido;
    }

    public Boolean getValorDefecto() {
        return valorDefecto;
    }

    public void setValorDefecto(Boolean valorDefecto) {
        this.valorDefecto = valorDefecto;
    }

    public Boolean getApruebaSolicita() {
        return apruebaSolicita;
    }

    public void setApruebaSolicita(Boolean apruebaSolicita) {
        this.apruebaSolicita = apruebaSolicita;
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


package com.aprendoz_test.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TramiteTipoTramite
 *  11/07/2014 13:24:49
 * 
 */
public class TramiteTipoTramite {

    private Integer idTipoTramite;
    private String tramite;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private Set<com.aprendoz_test.data.TramiteTipoTramiteRol> tramiteTipoTramiteRols = new HashSet<com.aprendoz_test.data.TramiteTipoTramiteRol>();
    private Set<com.aprendoz_test.data.Tramite> tramites = new HashSet<com.aprendoz_test.data.Tramite>();

    public TramiteTipoTramite() {
    }

    public TramiteTipoTramite(Integer idTipoTramite, String tramite, Date fechaCreacion, Date fechaActualizacion) {
        this.idTipoTramite = idTipoTramite;
        this.tramite = tramite;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }

    public TramiteTipoTramite(Integer idTipoTramite, String tramite, Date fechaCreacion, Date fechaActualizacion, Set<com.aprendoz_test.data.TramiteTipoTramiteRol> tramiteTipoTramiteRols, Set<com.aprendoz_test.data.Tramite> tramites) {
        this.idTipoTramite = idTipoTramite;
        this.tramite = tramite;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
        this.tramiteTipoTramiteRols = tramiteTipoTramiteRols;
        this.tramites = tramites;
    }

    public Integer getIdTipoTramite() {
        return idTipoTramite;
    }

    public void setIdTipoTramite(Integer idTipoTramite) {
        this.idTipoTramite = idTipoTramite;
    }

    public String getTramite() {
        return tramite;
    }

    public void setTramite(String tramite) {
        this.tramite = tramite;
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

    public Set<com.aprendoz_test.data.TramiteTipoTramiteRol> getTramiteTipoTramiteRols() {
        return tramiteTipoTramiteRols;
    }

    public void setTramiteTipoTramiteRols(Set<com.aprendoz_test.data.TramiteTipoTramiteRol> tramiteTipoTramiteRols) {
        this.tramiteTipoTramiteRols = tramiteTipoTramiteRols;
    }

    public Set<com.aprendoz_test.data.Tramite> getTramites() {
        return tramites;
    }

    public void setTramites(Set<com.aprendoz_test.data.Tramite> tramites) {
        this.tramites = tramites;
    }

}

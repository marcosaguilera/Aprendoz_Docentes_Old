
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoTransporte
<<<<<<< HEAD
 *  07/11/2014 08:22:37
=======
 *  07/15/2014 14:36:08
>>>>>>> navegacion---mostrar-paneles
 * 
 */
public class TipoTransporte {

    private Integer idtipoTransporte;
    private String tipoTransporte;
    private String descripcion;
    private Set<com.aprendoz_test.data.TransporteRutas> transporteRutases = new HashSet<com.aprendoz_test.data.TransporteRutas>();

    public TipoTransporte() {
    }

    public TipoTransporte(Integer idtipoTransporte, String tipoTransporte, String descripcion) {
        this.idtipoTransporte = idtipoTransporte;
        this.tipoTransporte = tipoTransporte;
        this.descripcion = descripcion;
    }

    public TipoTransporte(Integer idtipoTransporte, String tipoTransporte, String descripcion, Set<com.aprendoz_test.data.TransporteRutas> transporteRutases) {
        this.idtipoTransporte = idtipoTransporte;
        this.tipoTransporte = tipoTransporte;
        this.descripcion = descripcion;
        this.transporteRutases = transporteRutases;
    }

    public Integer getIdtipoTransporte() {
        return idtipoTransporte;
    }

    public void setIdtipoTransporte(Integer idtipoTransporte) {
        this.idtipoTransporte = idtipoTransporte;
    }

    public String getTipoTransporte() {
        return tipoTransporte;
    }

    public void setTipoTransporte(String tipoTransporte) {
        this.tipoTransporte = tipoTransporte;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<com.aprendoz_test.data.TransporteRutas> getTransporteRutases() {
        return transporteRutases;
    }

    public void setTransporteRutases(Set<com.aprendoz_test.data.TransporteRutas> transporteRutases) {
        this.transporteRutases = transporteRutases;
    }

}

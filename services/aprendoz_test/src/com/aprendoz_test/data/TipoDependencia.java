
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoDependencia
<<<<<<< HEAD
 *  07/11/2014 08:22:37
=======
 *  07/15/2014 14:36:08
>>>>>>> navegacion---mostrar-paneles
 * 
 */
public class TipoDependencia {

    private Integer idtipodependencia;
    private String dependencia;
    private Set<com.aprendoz_test.data.ReportesDependencias> reportesDependenciases = new HashSet<com.aprendoz_test.data.ReportesDependencias>();

    public TipoDependencia() {
    }

    public TipoDependencia(Integer idtipodependencia, String dependencia) {
        this.idtipodependencia = idtipodependencia;
        this.dependencia = dependencia;
    }

    public TipoDependencia(Integer idtipodependencia, String dependencia, Set<com.aprendoz_test.data.ReportesDependencias> reportesDependenciases) {
        this.idtipodependencia = idtipodependencia;
        this.dependencia = dependencia;
        this.reportesDependenciases = reportesDependenciases;
    }

    public Integer getIdtipodependencia() {
        return idtipodependencia;
    }

    public void setIdtipodependencia(Integer idtipodependencia) {
        this.idtipodependencia = idtipodependencia;
    }

    public String getDependencia() {
        return dependencia;
    }

    public void setDependencia(String dependencia) {
        this.dependencia = dependencia;
    }

    public Set<com.aprendoz_test.data.ReportesDependencias> getReportesDependenciases() {
        return reportesDependenciases;
    }

    public void setReportesDependenciases(Set<com.aprendoz_test.data.ReportesDependencias> reportesDependenciases) {
        this.reportesDependenciases = reportesDependenciases;
    }

}

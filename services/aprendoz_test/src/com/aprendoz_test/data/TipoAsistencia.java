
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoAsistencia
<<<<<<< HEAD
 *  07/11/2014 08:22:39
=======
 *  07/15/2014 14:36:08
>>>>>>> navegacion---mostrar-paneles
 * 
 */
public class TipoAsistencia {

    private Integer idTipo;
    private String tipo;
    private Set<com.aprendoz_test.data.Asistencia> asistencias = new HashSet<com.aprendoz_test.data.Asistencia>();

    public TipoAsistencia() {
    }

    public TipoAsistencia(Integer idTipo, String tipo) {
        this.idTipo = idTipo;
        this.tipo = tipo;
    }

    public TipoAsistencia(Integer idTipo, String tipo, Set<com.aprendoz_test.data.Asistencia> asistencias) {
        this.idTipo = idTipo;
        this.tipo = tipo;
        this.asistencias = asistencias;
    }

    public Integer getIdTipo() {
        return idTipo;
    }

    public void setIdTipo(Integer idTipo) {
        this.idTipo = idTipo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Set<com.aprendoz_test.data.Asistencia> getAsistencias() {
        return asistencias;
    }

    public void setAsistencias(Set<com.aprendoz_test.data.Asistencia> asistencias) {
        this.asistencias = asistencias;
    }

}

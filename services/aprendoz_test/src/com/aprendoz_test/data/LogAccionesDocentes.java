
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.LogAccionesDocentes
<<<<<<< HEAD
 *  07/11/2014 08:22:37
=======
 *  07/15/2014 14:36:08
>>>>>>> navegacion---mostrar-paneles
 * 
 */
public class LogAccionesDocentes {

    private Integer idLogAccionesDocentes;
    private String usuario;
    private String accionRealizada;
    private String tablaAfectada;
    private Date fechaCreacion;

    public LogAccionesDocentes() {
    }

    public LogAccionesDocentes(Integer idLogAccionesDocentes, String usuario, String accionRealizada, String tablaAfectada, Date fechaCreacion) {
        this.idLogAccionesDocentes = idLogAccionesDocentes;
        this.usuario = usuario;
        this.accionRealizada = accionRealizada;
        this.tablaAfectada = tablaAfectada;
        this.fechaCreacion = fechaCreacion;
    }

    public Integer getIdLogAccionesDocentes() {
        return idLogAccionesDocentes;
    }

    public void setIdLogAccionesDocentes(Integer idLogAccionesDocentes) {
        this.idLogAccionesDocentes = idLogAccionesDocentes;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getAccionRealizada() {
        return accionRealizada;
    }

    public void setAccionRealizada(String accionRealizada) {
        this.accionRealizada = accionRealizada;
    }

    public String getTablaAfectada() {
        return tablaAfectada;
    }

    public void setTablaAfectada(String tablaAfectada) {
        this.tablaAfectada = tablaAfectada;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

}


package com.aprendoz_test.data;



/**
 *  aprendoz_test.TipoEps
<<<<<<< HEAD
 *  07/11/2014 08:22:39
=======
 *  07/15/2014 14:36:08
>>>>>>> navegacion---mostrar-paneles
 * 
 */
public class TipoEps {

    private Integer ideps;
    private String eps;
    private String direccion;
    private String web;

    public TipoEps() {
    }

    public TipoEps(Integer ideps, String eps, String direccion, String web) {
        this.ideps = ideps;
        this.eps = eps;
        this.direccion = direccion;
        this.web = web;
    }

    public Integer getIdeps() {
        return ideps;
    }

    public void setIdeps(Integer ideps) {
        this.ideps = ideps;
    }

    public String getEps() {
        return eps;
    }

    public void setEps(String eps) {
        this.eps = eps;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getWeb() {
        return web;
    }

    public void setWeb(String web) {
        this.web = web;
    }

}


package com.aprendoz_test.data;



/**
 *  aprendoz_test.Nacionalidades
 *  11/07/2014 13:24:51
 * 
 */
public class Nacionalidades {

    private Integer idNacionalidad;
    private String nacionalidad;

    public Nacionalidades() {
    }

    public Nacionalidades(Integer idNacionalidad, String nacionalidad) {
        this.idNacionalidad = idNacionalidad;
        this.nacionalidad = nacionalidad;
    }

    public Integer getIdNacionalidad() {
        return idNacionalidad;
    }

    public void setIdNacionalidad(Integer idNacionalidad) {
        this.idNacionalidad = idNacionalidad;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

}

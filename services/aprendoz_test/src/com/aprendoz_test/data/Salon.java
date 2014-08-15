
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Salon
 *  08/15/2014 11:25:12
 * 
 */
public class Salon {

    private Integer idSalon;
    private String numeroSalon;

    public Salon() {
    }

    public Salon(Integer idSalon, String numeroSalon) {
        this.idSalon = idSalon;
        this.numeroSalon = numeroSalon;
    }

    public Integer getIdSalon() {
        return idSalon;
    }

    public void setIdSalon(Integer idSalon) {
        this.idSalon = idSalon;
    }

    public String getNumeroSalon() {
        return numeroSalon;
    }

    public void setNumeroSalon(String numeroSalon) {
        this.numeroSalon = numeroSalon;
    }

}

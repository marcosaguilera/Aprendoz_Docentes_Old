
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Anticipos
 *  07/15/2014 14:36:08
 * 
 */
public class Anticipos {

    private Integer idAnticipos;
    private String codigo;

    public Anticipos() {
    }

    public Anticipos(Integer idAnticipos, String codigo) {
        this.idAnticipos = idAnticipos;
        this.codigo = codigo;
    }

    public Integer getIdAnticipos() {
        return idAnticipos;
    }

    public void setIdAnticipos(Integer idAnticipos) {
        this.idAnticipos = idAnticipos;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

}

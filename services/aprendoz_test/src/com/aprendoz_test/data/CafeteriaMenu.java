
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.CafeteriaMenu
<<<<<<< HEAD
 *  07/11/2014 08:22:38
=======
 *  07/15/2014 14:36:08
>>>>>>> navegacion---mostrar-paneles
 * 
 */
public class CafeteriaMenu {

    private Integer idMenu;
    private Date fecha;
    private String diaSemana;
    private Integer sopaIdSopa;
    private Integer garniturasIdGarnituras;
    private Integer postresIdPostres;

    public CafeteriaMenu() {
    }

    public CafeteriaMenu(Integer idMenu, Date fecha, String diaSemana, Integer sopaIdSopa, Integer garniturasIdGarnituras, Integer postresIdPostres) {
        this.idMenu = idMenu;
        this.fecha = fecha;
        this.diaSemana = diaSemana;
        this.sopaIdSopa = sopaIdSopa;
        this.garniturasIdGarnituras = garniturasIdGarnituras;
        this.postresIdPostres = postresIdPostres;
    }

    public Integer getIdMenu() {
        return idMenu;
    }

    public void setIdMenu(Integer idMenu) {
        this.idMenu = idMenu;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getDiaSemana() {
        return diaSemana;
    }

    public void setDiaSemana(String diaSemana) {
        this.diaSemana = diaSemana;
    }

    public Integer getSopaIdSopa() {
        return sopaIdSopa;
    }

    public void setSopaIdSopa(Integer sopaIdSopa) {
        this.sopaIdSopa = sopaIdSopa;
    }

    public Integer getGarniturasIdGarnituras() {
        return garniturasIdGarnituras;
    }

    public void setGarniturasIdGarnituras(Integer garniturasIdGarnituras) {
        this.garniturasIdGarnituras = garniturasIdGarnituras;
    }

    public Integer getPostresIdPostres() {
        return postresIdPostres;
    }

    public void setPostresIdPostres(Integer postresIdPostres) {
        this.postresIdPostres = postresIdPostres;
    }

}

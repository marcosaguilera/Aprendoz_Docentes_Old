
package com.aprendoz_test.data;



/**
 *  aprendoz_test.TablaDescuentos
 *  11/07/2014 13:24:51
 * 
 */
public class TablaDescuentos {

    private Integer idTablaDescuentos;
    private String codigo;
    private String concepto;
    private String nnombre;
    private String nconcepto;
    private Float valor;
    private Float pordcto;
    private Float valdcto;
    private String motivo;
    private String nombreEmpleado;
    private String nombrePapa;
    private String nombreMama;
    private String nombreHermano;
    private Integer syIdSy;

    public TablaDescuentos() {
    }

    public TablaDescuentos(Integer idTablaDescuentos, String codigo, String concepto, String nnombre, String nconcepto, Float valor, Float pordcto, Float valdcto, String motivo, String nombreEmpleado, String nombrePapa, String nombreMama, String nombreHermano, Integer syIdSy) {
        this.idTablaDescuentos = idTablaDescuentos;
        this.codigo = codigo;
        this.concepto = concepto;
        this.nnombre = nnombre;
        this.nconcepto = nconcepto;
        this.valor = valor;
        this.pordcto = pordcto;
        this.valdcto = valdcto;
        this.motivo = motivo;
        this.nombreEmpleado = nombreEmpleado;
        this.nombrePapa = nombrePapa;
        this.nombreMama = nombreMama;
        this.nombreHermano = nombreHermano;
        this.syIdSy = syIdSy;
    }

    public Integer getIdTablaDescuentos() {
        return idTablaDescuentos;
    }

    public void setIdTablaDescuentos(Integer idTablaDescuentos) {
        this.idTablaDescuentos = idTablaDescuentos;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getConcepto() {
        return concepto;
    }

    public void setConcepto(String concepto) {
        this.concepto = concepto;
    }

    public String getNnombre() {
        return nnombre;
    }

    public void setNnombre(String nnombre) {
        this.nnombre = nnombre;
    }

    public String getNconcepto() {
        return nconcepto;
    }

    public void setNconcepto(String nconcepto) {
        this.nconcepto = nconcepto;
    }

    public Float getValor() {
        return valor;
    }

    public void setValor(Float valor) {
        this.valor = valor;
    }

    public Float getPordcto() {
        return pordcto;
    }

    public void setPordcto(Float pordcto) {
        this.pordcto = pordcto;
    }

    public Float getValdcto() {
        return valdcto;
    }

    public void setValdcto(Float valdcto) {
        this.valdcto = valdcto;
    }

    public String getMotivo() {
        return motivo;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public String getNombreEmpleado() {
        return nombreEmpleado;
    }

    public void setNombreEmpleado(String nombreEmpleado) {
        this.nombreEmpleado = nombreEmpleado;
    }

    public String getNombrePapa() {
        return nombrePapa;
    }

    public void setNombrePapa(String nombrePapa) {
        this.nombrePapa = nombrePapa;
    }

    public String getNombreMama() {
        return nombreMama;
    }

    public void setNombreMama(String nombreMama) {
        this.nombreMama = nombreMama;
    }

    public String getNombreHermano() {
        return nombreHermano;
    }

    public void setNombreHermano(String nombreHermano) {
        this.nombreHermano = nombreHermano;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

}

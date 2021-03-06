
package com.aprendoz_test.data;



/**
 *  aprendoz_test.PromocionCopy
 *  11/07/2014 13:24:51
 * 
 */
public class PromocionCopy {

    private Integer idPromocion;
    private Sy sy;
    private Persona persona;
    private Boolean aprobado;
    private Boolean autorizadoAcademico;
    private String commentcomite;
    private Boolean autorizadoFinanciera;
    private String commentfinanc;
    private Boolean promovido;
    private String commentaprobado;
    private String commentpromovido;
    private Float calificacion;
    private String calificacionChar;
    private Boolean autorizadoPromAnticipada;

    public PromocionCopy() {
    }

    public PromocionCopy(Integer idPromocion, Boolean aprobado, Boolean autorizadoAcademico, String commentcomite, Boolean autorizadoFinanciera, String commentfinanc, Boolean promovido, String commentaprobado, String commentpromovido, Float calificacion, String calificacionChar, Boolean autorizadoPromAnticipada) {
        this.idPromocion = idPromocion;
        this.aprobado = aprobado;
        this.autorizadoAcademico = autorizadoAcademico;
        this.commentcomite = commentcomite;
        this.autorizadoFinanciera = autorizadoFinanciera;
        this.commentfinanc = commentfinanc;
        this.promovido = promovido;
        this.commentaprobado = commentaprobado;
        this.commentpromovido = commentpromovido;
        this.calificacion = calificacion;
        this.calificacionChar = calificacionChar;
        this.autorizadoPromAnticipada = autorizadoPromAnticipada;
    }

    public PromocionCopy(Integer idPromocion, Sy sy, Persona persona, Boolean aprobado, Boolean autorizadoAcademico, String commentcomite, Boolean autorizadoFinanciera, String commentfinanc, Boolean promovido, String commentaprobado, String commentpromovido, Float calificacion, String calificacionChar, Boolean autorizadoPromAnticipada) {
        this.idPromocion = idPromocion;
        this.sy = sy;
        this.persona = persona;
        this.aprobado = aprobado;
        this.autorizadoAcademico = autorizadoAcademico;
        this.commentcomite = commentcomite;
        this.autorizadoFinanciera = autorizadoFinanciera;
        this.commentfinanc = commentfinanc;
        this.promovido = promovido;
        this.commentaprobado = commentaprobado;
        this.commentpromovido = commentpromovido;
        this.calificacion = calificacion;
        this.calificacionChar = calificacionChar;
        this.autorizadoPromAnticipada = autorizadoPromAnticipada;
    }

    public Integer getIdPromocion() {
        return idPromocion;
    }

    public void setIdPromocion(Integer idPromocion) {
        this.idPromocion = idPromocion;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Boolean getAprobado() {
        return aprobado;
    }

    public void setAprobado(Boolean aprobado) {
        this.aprobado = aprobado;
    }

    public Boolean getAutorizadoAcademico() {
        return autorizadoAcademico;
    }

    public void setAutorizadoAcademico(Boolean autorizadoAcademico) {
        this.autorizadoAcademico = autorizadoAcademico;
    }

    public String getCommentcomite() {
        return commentcomite;
    }

    public void setCommentcomite(String commentcomite) {
        this.commentcomite = commentcomite;
    }

    public Boolean getAutorizadoFinanciera() {
        return autorizadoFinanciera;
    }

    public void setAutorizadoFinanciera(Boolean autorizadoFinanciera) {
        this.autorizadoFinanciera = autorizadoFinanciera;
    }

    public String getCommentfinanc() {
        return commentfinanc;
    }

    public void setCommentfinanc(String commentfinanc) {
        this.commentfinanc = commentfinanc;
    }

    public Boolean getPromovido() {
        return promovido;
    }

    public void setPromovido(Boolean promovido) {
        this.promovido = promovido;
    }

    public String getCommentaprobado() {
        return commentaprobado;
    }

    public void setCommentaprobado(String commentaprobado) {
        this.commentaprobado = commentaprobado;
    }

    public String getCommentpromovido() {
        return commentpromovido;
    }

    public void setCommentpromovido(String commentpromovido) {
        this.commentpromovido = commentpromovido;
    }

    public Float getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(Float calificacion) {
        this.calificacion = calificacion;
    }

    public String getCalificacionChar() {
        return calificacionChar;
    }

    public void setCalificacionChar(String calificacionChar) {
        this.calificacionChar = calificacionChar;
    }

    public Boolean getAutorizadoPromAnticipada() {
        return autorizadoPromAnticipada;
    }

    public void setAutorizadoPromAnticipada(Boolean autorizadoPromAnticipada) {
        this.autorizadoPromAnticipada = autorizadoPromAnticipada;
    }

}


package com.aprendoz_test.data;



/**
 *  aprendoz_test.InscPersonaGrupoFamiliar
 *  08/15/2014 11:25:12
 * 
 */
public class InscPersonaGrupoFamiliar {

    private Integer idInscPersonaGrupoFamiliar;
    private Persona persona;
    private TipoPersona tipoPersona;
    private GrupoFamiliar grupoFamiliar;
    private Boolean responsable;

    public InscPersonaGrupoFamiliar() {
    }

    public InscPersonaGrupoFamiliar(Integer idInscPersonaGrupoFamiliar, Boolean responsable) {
        this.idInscPersonaGrupoFamiliar = idInscPersonaGrupoFamiliar;
        this.responsable = responsable;
    }

    public InscPersonaGrupoFamiliar(Integer idInscPersonaGrupoFamiliar, Persona persona, TipoPersona tipoPersona, GrupoFamiliar grupoFamiliar, Boolean responsable) {
        this.idInscPersonaGrupoFamiliar = idInscPersonaGrupoFamiliar;
        this.persona = persona;
        this.tipoPersona = tipoPersona;
        this.grupoFamiliar = grupoFamiliar;
        this.responsable = responsable;
    }

    public Integer getIdInscPersonaGrupoFamiliar() {
        return idInscPersonaGrupoFamiliar;
    }

    public void setIdInscPersonaGrupoFamiliar(Integer idInscPersonaGrupoFamiliar) {
        this.idInscPersonaGrupoFamiliar = idInscPersonaGrupoFamiliar;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public TipoPersona getTipoPersona() {
        return tipoPersona;
    }

    public void setTipoPersona(TipoPersona tipoPersona) {
        this.tipoPersona = tipoPersona;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public Boolean getResponsable() {
        return responsable;
    }

    public void setResponsable(Boolean responsable) {
        this.responsable = responsable;
    }

}

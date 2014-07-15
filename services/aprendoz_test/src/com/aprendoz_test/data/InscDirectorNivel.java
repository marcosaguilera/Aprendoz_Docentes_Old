
package com.aprendoz_test.data;



/**
 *  aprendoz_test.InscDirectorNivel
<<<<<<< HEAD
 *  07/11/2014 08:22:38
=======
 *  07/15/2014 14:36:07
>>>>>>> navegacion---mostrar-paneles
 * 
 */
public class InscDirectorNivel {

    private Integer idInscDirectorNivel;
    private Persona persona;
    private Nivel nivel;

    public InscDirectorNivel() {
    }

    public InscDirectorNivel(Integer idInscDirectorNivel) {
        this.idInscDirectorNivel = idInscDirectorNivel;
    }

    public InscDirectorNivel(Integer idInscDirectorNivel, Persona persona, Nivel nivel) {
        this.idInscDirectorNivel = idInscDirectorNivel;
        this.persona = persona;
        this.nivel = nivel;
    }

    public Integer getIdInscDirectorNivel() {
        return idInscDirectorNivel;
    }

    public void setIdInscDirectorNivel(Integer idInscDirectorNivel) {
        this.idInscDirectorNivel = idInscDirectorNivel;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Nivel getNivel() {
        return nivel;
    }

    public void setNivel(Nivel nivel) {
        this.nivel = nivel;
    }

}

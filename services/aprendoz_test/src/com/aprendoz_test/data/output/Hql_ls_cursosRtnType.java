
package com.aprendoz_test.data.output;



/**
 * Generated for query "hql_ls_cursos" on 06/13/2014 08:34:00
 * 
 */
public class Hql_ls_cursosRtnType {

    private Integer idGrado;
    private Integer idCurso;
    private String curso;

    public Hql_ls_cursosRtnType() {
    }

    public Hql_ls_cursosRtnType(Integer idGrado, Integer idCurso, String curso) {
        this.idGrado = idGrado;
        this.idCurso = idCurso;
        this.curso = curso;
    }

    public Integer getIdGrado() {
        return idGrado;
    }

    public void setIdGrado(Integer idGrado) {
        this.idGrado = idGrado;
    }

    public Integer getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(Integer idCurso) {
        this.idCurso = idCurso;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

}

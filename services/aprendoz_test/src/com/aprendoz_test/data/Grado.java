
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Grado
 *  06/13/2014 08:33:46
 * 
 */
public class Grado {

    private Integer idGrado;
    private Nivel nivel;
    private String grado;
    private String grade;
    private String gradoSapiens;
    private Set<com.aprendoz_test.data.CostosAnualesCopy> costosAnualesCopies = new HashSet<com.aprendoz_test.data.CostosAnualesCopy>();
    private Set<com.aprendoz_test.data.Asignatura> asignaturas = new HashSet<com.aprendoz_test.data.Asignatura>();
    private Set<com.aprendoz_test.data.Costos> costoses = new HashSet<com.aprendoz_test.data.Costos>();
    private Set<com.aprendoz_test.data.AsignaturaCopy> asignaturaCopies = new HashSet<com.aprendoz_test.data.AsignaturaCopy>();
    private Set<com.aprendoz_test.data.AccAuthorization> accAuthorizations = new HashSet<com.aprendoz_test.data.AccAuthorization>();
    private Set<com.aprendoz_test.data.Curso> cursos = new HashSet<com.aprendoz_test.data.Curso>();
    private Set<com.aprendoz_test.data.CostosAnuales> costosAnualeses = new HashSet<com.aprendoz_test.data.CostosAnuales>();

    public Grado() {
    }

    public Grado(Integer idGrado, String grado, String grade, String gradoSapiens) {
        this.idGrado = idGrado;
        this.grado = grado;
        this.grade = grade;
        this.gradoSapiens = gradoSapiens;
    }

    public Grado(Integer idGrado, Nivel nivel, String grado, String grade, String gradoSapiens, Set<com.aprendoz_test.data.CostosAnualesCopy> costosAnualesCopies, Set<com.aprendoz_test.data.Asignatura> asignaturas, Set<com.aprendoz_test.data.Costos> costoses, Set<com.aprendoz_test.data.AsignaturaCopy> asignaturaCopies, Set<com.aprendoz_test.data.AccAuthorization> accAuthorizations, Set<com.aprendoz_test.data.Curso> cursos, Set<com.aprendoz_test.data.CostosAnuales> costosAnualeses) {
        this.idGrado = idGrado;
        this.nivel = nivel;
        this.grado = grado;
        this.grade = grade;
        this.gradoSapiens = gradoSapiens;
        this.costosAnualesCopies = costosAnualesCopies;
        this.asignaturas = asignaturas;
        this.costoses = costoses;
        this.asignaturaCopies = asignaturaCopies;
        this.accAuthorizations = accAuthorizations;
        this.cursos = cursos;
        this.costosAnualeses = costosAnualeses;
    }

    public Integer getIdGrado() {
        return idGrado;
    }

    public void setIdGrado(Integer idGrado) {
        this.idGrado = idGrado;
    }

    public Nivel getNivel() {
        return nivel;
    }

    public void setNivel(Nivel nivel) {
        this.nivel = nivel;
    }

    public String getGrado() {
        return grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getGradoSapiens() {
        return gradoSapiens;
    }

    public void setGradoSapiens(String gradoSapiens) {
        this.gradoSapiens = gradoSapiens;
    }

    public Set<com.aprendoz_test.data.CostosAnualesCopy> getCostosAnualesCopies() {
        return costosAnualesCopies;
    }

    public void setCostosAnualesCopies(Set<com.aprendoz_test.data.CostosAnualesCopy> costosAnualesCopies) {
        this.costosAnualesCopies = costosAnualesCopies;
    }

    public Set<com.aprendoz_test.data.Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Set<com.aprendoz_test.data.Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

    public Set<com.aprendoz_test.data.Costos> getCostoses() {
        return costoses;
    }

    public void setCostoses(Set<com.aprendoz_test.data.Costos> costoses) {
        this.costoses = costoses;
    }

    public Set<com.aprendoz_test.data.AsignaturaCopy> getAsignaturaCopies() {
        return asignaturaCopies;
    }

    public void setAsignaturaCopies(Set<com.aprendoz_test.data.AsignaturaCopy> asignaturaCopies) {
        this.asignaturaCopies = asignaturaCopies;
    }

    public Set<com.aprendoz_test.data.AccAuthorization> getAccAuthorizations() {
        return accAuthorizations;
    }

    public void setAccAuthorizations(Set<com.aprendoz_test.data.AccAuthorization> accAuthorizations) {
        this.accAuthorizations = accAuthorizations;
    }

    public Set<com.aprendoz_test.data.Curso> getCursos() {
        return cursos;
    }

    public void setCursos(Set<com.aprendoz_test.data.Curso> cursos) {
        this.cursos = cursos;
    }

    public Set<com.aprendoz_test.data.CostosAnuales> getCostosAnualeses() {
        return costosAnualeses;
    }

    public void setCostosAnualeses(Set<com.aprendoz_test.data.CostosAnuales> costosAnualeses) {
        this.costosAnualeses = costosAnualeses;
    }

}

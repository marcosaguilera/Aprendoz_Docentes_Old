
package com.aprendoz_test.data.output;



/**
 * Generated for query "dash_getAsigByDocente" on 09/03/2014 16:11:21
 * 
 */
public class Dash_getAsigByDocenteRtnType {

    private Integer idasignatura;
    private String asignatura;
    private String user;
    private Integer schoolyear;

    public Dash_getAsigByDocenteRtnType() {
    }

    public Dash_getAsigByDocenteRtnType(Integer idasignatura, String asignatura, String user, Integer schoolyear) {
        this.idasignatura = idasignatura;
        this.asignatura = asignatura;
        this.user = user;
        this.schoolyear = schoolyear;
    }

    public Integer getIdasignatura() {
        return idasignatura;
    }

    public void setIdasignatura(Integer idasignatura) {
        this.idasignatura = idasignatura;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Integer getSchoolyear() {
        return schoolyear;
    }

    public void setSchoolyear(Integer schoolyear) {
        this.schoolyear = schoolyear;
    }

}

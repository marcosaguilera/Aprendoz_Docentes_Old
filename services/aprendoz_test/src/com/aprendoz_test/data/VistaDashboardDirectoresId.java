
package com.aprendoz_test.data;

import java.io.Serializable;
import java.math.BigDecimal;


/**
 *  aprendoz_test.VistaDashboardDirectoresId
 *  11/07/2014 13:24:51
 * 
 */
public class VistaDashboardDirectoresId
    implements Serializable
{

    private String schoolYear;
    private Integer idNivel;
    private String nivel;
    private Integer idGrado;
    private String grado;
    private Integer idCurso;
    private String curso;
    private Integer idPersona;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;
    private Integer idAsignatura;
    private String asignatura;
    private Integer esperadosFecha_asignatura_idAsignatura__20140506__;
    private Integer nameExp16;
    private BigDecimal porcentaje;

    public VistaDashboardDirectoresId() {
    }

    public VistaDashboardDirectoresId(String schoolYear, Integer idNivel, String nivel, Integer idGrado, String grado, Integer idCurso, String curso, Integer idPersona, String apellido1, String apellido2, String nombre1, String nombre2, Integer idAsignatura, String asignatura, Integer esperadosFecha_asignatura_idAsignatura__20140506__, Integer nameExp16, BigDecimal porcentaje) {
        this.schoolYear = schoolYear;
        this.idNivel = idNivel;
        this.nivel = nivel;
        this.idGrado = idGrado;
        this.grado = grado;
        this.idCurso = idCurso;
        this.curso = curso;
        this.idPersona = idPersona;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
        this.idAsignatura = idAsignatura;
        this.asignatura = asignatura;
        this.esperadosFecha_asignatura_idAsignatura__20140506__ = esperadosFecha_asignatura_idAsignatura__20140506__;
        this.nameExp16 = nameExp16;
        this.porcentaje = porcentaje;
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaDashboardDirectoresId)) {
            return false;
        }
        VistaDashboardDirectoresId other = ((VistaDashboardDirectoresId) o);
        if (this.schoolYear == null) {
            if (other.schoolYear!= null) {
                return false;
            }
        } else {
            if (!this.schoolYear.equals(other.schoolYear)) {
                return false;
            }
        }
        if (this.idNivel == null) {
            if (other.idNivel!= null) {
                return false;
            }
        } else {
            if (!this.idNivel.equals(other.idNivel)) {
                return false;
            }
        }
        if (this.nivel == null) {
            if (other.nivel!= null) {
                return false;
            }
        } else {
            if (!this.nivel.equals(other.nivel)) {
                return false;
            }
        }
        if (this.idGrado == null) {
            if (other.idGrado!= null) {
                return false;
            }
        } else {
            if (!this.idGrado.equals(other.idGrado)) {
                return false;
            }
        }
        if (this.grado == null) {
            if (other.grado!= null) {
                return false;
            }
        } else {
            if (!this.grado.equals(other.grado)) {
                return false;
            }
        }
        if (this.idCurso == null) {
            if (other.idCurso!= null) {
                return false;
            }
        } else {
            if (!this.idCurso.equals(other.idCurso)) {
                return false;
            }
        }
        if (this.curso == null) {
            if (other.curso!= null) {
                return false;
            }
        } else {
            if (!this.curso.equals(other.curso)) {
                return false;
            }
        }
        if (this.idPersona == null) {
            if (other.idPersona!= null) {
                return false;
            }
        } else {
            if (!this.idPersona.equals(other.idPersona)) {
                return false;
            }
        }
        if (this.apellido1 == null) {
            if (other.apellido1 != null) {
                return false;
            }
        } else {
            if (!this.apellido1 .equals(other.apellido1)) {
                return false;
            }
        }
        if (this.apellido2 == null) {
            if (other.apellido2 != null) {
                return false;
            }
        } else {
            if (!this.apellido2 .equals(other.apellido2)) {
                return false;
            }
        }
        if (this.nombre1 == null) {
            if (other.nombre1 != null) {
                return false;
            }
        } else {
            if (!this.nombre1 .equals(other.nombre1)) {
                return false;
            }
        }
        if (this.nombre2 == null) {
            if (other.nombre2 != null) {
                return false;
            }
        } else {
            if (!this.nombre2 .equals(other.nombre2)) {
                return false;
            }
        }
        if (this.idAsignatura == null) {
            if (other.idAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.idAsignatura.equals(other.idAsignatura)) {
                return false;
            }
        }
        if (this.asignatura == null) {
            if (other.asignatura!= null) {
                return false;
            }
        } else {
            if (!this.asignatura.equals(other.asignatura)) {
                return false;
            }
        }
        if (this.esperadosFecha_asignatura_idAsignatura__20140506__ == null) {
            if (other.esperadosFecha_asignatura_idAsignatura__20140506__!= null) {
                return false;
            }
        } else {
            if (!this.esperadosFecha_asignatura_idAsignatura__20140506__.equals(other.esperadosFecha_asignatura_idAsignatura__20140506__)) {
                return false;
            }
        }
        if (this.nameExp16 == null) {
            if (other.nameExp16 != null) {
                return false;
            }
        } else {
            if (!this.nameExp16 .equals(other.nameExp16)) {
                return false;
            }
        }
        if (this.porcentaje == null) {
            if (other.porcentaje!= null) {
                return false;
            }
        } else {
            if (!this.porcentaje.equals(other.porcentaje)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.schoolYear!= null) {
            rtn = (rtn + this.schoolYear.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idNivel!= null) {
            rtn = (rtn + this.idNivel.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nivel!= null) {
            rtn = (rtn + this.nivel.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idGrado!= null) {
            rtn = (rtn + this.idGrado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grado!= null) {
            rtn = (rtn + this.grado.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idCurso!= null) {
            rtn = (rtn + this.idCurso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.curso!= null) {
            rtn = (rtn + this.curso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idPersona!= null) {
            rtn = (rtn + this.idPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido1 != null) {
            rtn = (rtn + this.apellido1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido2 != null) {
            rtn = (rtn + this.apellido2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombre1 != null) {
            rtn = (rtn + this.nombre1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombre2 != null) {
            rtn = (rtn + this.nombre2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.idAsignatura!= null) {
            rtn = (rtn + this.idAsignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignatura!= null) {
            rtn = (rtn + this.asignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.esperadosFecha_asignatura_idAsignatura__20140506__!= null) {
            rtn = (rtn + this.esperadosFecha_asignatura_idAsignatura__20140506__.hashCode());
        }
        rtn = (rtn* 37);
        if (this.nameExp16 != null) {
            rtn = (rtn + this.nameExp16 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.porcentaje!= null) {
            rtn = (rtn + this.porcentaje.hashCode());
        }
        return rtn;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public Integer getIdNivel() {
        return idNivel;
    }

    public void setIdNivel(Integer idNivel) {
        this.idNivel = idNivel;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public Integer getIdGrado() {
        return idGrado;
    }

    public void setIdGrado(Integer idGrado) {
        this.idGrado = idGrado;
    }

    public String getGrado() {
        return grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
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

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public String getNombre1() {
        return nombre1;
    }

    public void setNombre1(String nombre1) {
        this.nombre1 = nombre1;
    }

    public String getNombre2() {
        return nombre2;
    }

    public void setNombre2(String nombre2) {
        this.nombre2 = nombre2;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public Integer getEsperadosFecha_asignatura_idAsignatura__20140506__() {
        return esperadosFecha_asignatura_idAsignatura__20140506__;
    }

    public void setEsperadosFecha_asignatura_idAsignatura__20140506__(Integer esperadosFecha_asignatura_idAsignatura__20140506__) {
        this.esperadosFecha_asignatura_idAsignatura__20140506__ = esperadosFecha_asignatura_idAsignatura__20140506__;
    }

    public Integer getNameExp16() {
        return nameExp16;
    }

    public void setNameExp16(Integer nameExp16) {
        this.nameExp16 = nameExp16;
    }

    public BigDecimal getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(BigDecimal porcentaje) {
        this.porcentaje = porcentaje;
    }

}

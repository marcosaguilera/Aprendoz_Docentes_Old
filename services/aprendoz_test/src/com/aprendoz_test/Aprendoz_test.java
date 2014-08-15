
package com.aprendoz_test;

import java.util.Date;
import java.util.List;
import com.aprendoz_test.data.output.A_getCursoProcesoSVRtnType;
import com.aprendoz_test.data.output.Dash_aprendizajesRtnType;
import com.aprendoz_test.data.output.Dash_getAsigByDocenteRtnType;
import com.aprendoz_test.data.output.Dash_logDocentesRtnType;
import com.aprendoz_test.data.output.Dash_no_calificadosRtnType;
import com.aprendoz_test.data.output.EnviarMailEventualidadesRtnType;
import com.aprendoz_test.data.output.EventualitiesByDateRtnType;
import com.aprendoz_test.data.output.GetCurseByidGradeRtnType;
import com.aprendoz_test.data.output.GetListStudentsByCurseRtnType;
import com.aprendoz_test.data.output.GetScheduleByProfileRtnType;
import com.aprendoz_test.data.output.GetSubjectsByProfileGroupedRtnType;
import com.aprendoz_test.data.output.GetSubjectsByProfileRtnType;
import com.aprendoz_test.data.output.GetSyByCurDateRtnType;
import com.aprendoz_test.data.output.GetSyByCurDate_RtnType;
import com.aprendoz_test.data.output.GetTipoEventualidadByIdSubTipoRtnType;
import com.aprendoz_test.data.output.HQLlsCursosRtnType;
import com.aprendoz_test.data.output.HQLlsGradoRtnType;
import com.aprendoz_test.data.output.HQLlsPeriodoRtnType;
import com.aprendoz_test.data.output.HqlPersonaEventualidadRtnType;
import com.aprendoz_test.data.output.Hql_ls_cursosRtnType;
import com.aprendoz_test.data.output.Hql_tipo_eventualidadRtnType;
import com.aprendoz_test.data.output.InvolucradosRtnType;
import com.aprendoz_test.data.output.Last_accessHQLRtnType;
import com.aprendoz_test.data.output.OrientacionInvolucradosGrupoFamiliarRtnType;
import com.aprendoz_test.data.output.SeachEventualidadHQLRtnType;
import com.aprendoz_test.data.output.SearchReportesAlumnosRtnType;
import com.aprendoz_test.data.output.SearchStudentsByComplexNameRtnType;
import com.aprendoz_test.data.output.SendMailHQLOneRtnType;
import com.aprendoz_test.data.output.SendMailHQLRtnType;
import com.aprendoz_test.data.output.ShowInformationUser2RtnType;
import com.aprendoz_test.data.output.StudentsByCurseBySubjectRtnType;
import com.aprendoz_test.data.output.SubjectsBySyAndStudentRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "aprendoz_test"
 *  08/15/2014 11:30:02
 * 
 */
@SuppressWarnings("unchecked")
public class Aprendoz_test
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<GetSyByCurDate_RtnType> getSyByCurDate_(Date f1) {
        return ((List<GetSyByCurDate_RtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getSyByCurDate_QueryName), f1));
    }

    public List<SendMailHQLOneRtnType> sendMailHQLOne(Integer ide, Integer ppersona) {
        return ((List<SendMailHQLOneRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.sendMailHQLOneQueryName), ide, ppersona));
    }

    public List<ShowInformationUser2RtnType> showInformationUser2(String user) {
        return ((List<ShowInformationUser2RtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.showInformationUser2QueryName), user));
    }

    public List<SearchStudentsByComplexNameRtnType> searchStudentsByComplexName(String search) {
        return ((List<SearchStudentsByComplexNameRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.searchStudentsByComplexNameQueryName), search));
    }

    public List<GetListStudentsByCurseRtnType> getListStudentsByCurse(Integer pcurso) {
        return ((List<GetListStudentsByCurseRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getListStudentsByCurseQueryName), pcurso));
    }

    public List<HQLlsPeriodoRtnType> hQLlsPeriodo() {
        return ((List<HQLlsPeriodoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.HQLlsPeriodoQueryName)));
    }

    public List<OrientacionInvolucradosGrupoFamiliarRtnType> orientacionInvolucradosGrupoFamiliar(Integer pgrupo, Integer ppersona) {
        return ((List<OrientacionInvolucradosGrupoFamiliarRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.orientacionInvolucradosGrupoFamiliarQueryName), pgrupo, ppersona));
    }

    public List<HQLlsCursosRtnType> hQLlsCursos() {
        return ((List<HQLlsCursosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hQLlsCursosQueryName)));
    }

    public List<EnviarMailEventualidadesRtnType> enviarMailEventualidades(Integer ide) {
        return ((List<EnviarMailEventualidadesRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.enviarMailEventualidadesQueryName), ide));
    }

    public List<EventualitiesByDateRtnType> eventualitiesByDate(Date pfecha) {
        return ((List<EventualitiesByDateRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.eventualitiesByDateQueryName), pfecha));
    }

    public List<GetScheduleByProfileRtnType> getScheduleByProfile(Integer pcurso, Integer psy, Integer pasignatura) {
        return ((List<GetScheduleByProfileRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getScheduleByProfileQueryName), pcurso, psy, pasignatura));
    }

    public List<GetTipoEventualidadByIdSubTipoRtnType> getTipoEventualidadByIdSubTipo(Integer id) {
        return ((List<GetTipoEventualidadByIdSubTipoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getTipoEventualidadByIdSubTipoQueryName), id));
    }

    public Integer crearPlan(String p1, String p2, String p3, Integer id, Date fecha_plan) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.crearPlanQueryName), p1, p2, p3, id, fecha_plan));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<HQLlsGradoRtnType> hQLlsGrado() {
        return ((List<HQLlsGradoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hQLlsGradoQueryName)));
    }

    public List<HqlPersonaEventualidadRtnType> hqlPersonaEventualidad(Integer ide) {
        return ((List<HqlPersonaEventualidadRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hqlPersonaEventualidadQueryName), ide));
    }

    public com.aprendoz_test.data.output.GetInformacionValiosaRtnType getInformacionValiosa(String usuario) {
        List<com.aprendoz_test.data.output.GetInformacionValiosaRtnType> rtn = ((List<com.aprendoz_test.data.output.GetInformacionValiosaRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getInformacionValiosaQueryName), usuario));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<A_getCursoProcesoSVRtnType> a_getCursoProcesoSV(Integer ppersona) {
        return ((List<A_getCursoProcesoSVRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.a_getCursoProcesoSVQueryName), ppersona));
    }

    public List<GetSubjectsByProfileGroupedRtnType> getSubjectsByProfileGrouped(Integer sy, String usuario) {
        return ((List<GetSubjectsByProfileGroupedRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getSubjectsByProfileGroupedQueryName), sy, usuario));
    }

    public List<StudentsByCurseBySubjectRtnType> studentsByCurseBySubject(Integer pasignatura, Integer pcurso) {
        return ((List<StudentsByCurseBySubjectRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.studentsByCurseBySubjectQueryName), pasignatura, pcurso));
    }

    public List<Dash_getAsigByDocenteRtnType> dash_getAsigByDocente(String usuario) {
        return ((List<Dash_getAsigByDocenteRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.dash_getAsigByDocenteQueryName), usuario));
    }

    public List<Hql_tipo_eventualidadRtnType> hql_tipo_eventualidad() {
        return ((List<Hql_tipo_eventualidadRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hql_tipo_eventualidadQueryName)));
    }

    public List<GetSyByCurDateRtnType> getSyByCurDate(Date f1) {
        return ((List<GetSyByCurDateRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getSyByCurDateQueryName), f1));
    }

    public com.aprendoz_test.data.DimensionCurricular getDimensionCurricularById(Integer id) {
        List<com.aprendoz_test.data.DimensionCurricular> rtn = ((List<com.aprendoz_test.data.DimensionCurricular> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getDimensionCurricularByIdQueryName), id));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<Hql_ls_cursosRtnType> hql_ls_cursos(Integer idg) {
        return ((List<Hql_ls_cursosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hql_ls_cursosQueryName), idg));
    }

    public List<Dash_aprendizajesRtnType> dash_aprendizajes(Integer idasignatura) {
        return ((List<Dash_aprendizajesRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.dash_aprendizajesQueryName), idasignatura));
    }

    public Integer actualizarClave(String usuario, String clave) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.actualizarClaveQueryName), usuario, clave));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<SearchReportesAlumnosRtnType> searchReportesAlumnos(String search) {
        return ((List<SearchReportesAlumnosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.searchReportesAlumnosQueryName), search));
    }

    public List<Dash_logDocentesRtnType> dash_logDocentes(String usuario) {
        return ((List<Dash_logDocentesRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.dash_logDocentesQueryName), usuario));
    }

    public List<InvolucradosRtnType> involucrados(Integer peventualidad) {
        return ((List<InvolucradosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.involucradosQueryName), peventualidad));
    }

    public List<GetCurseByidGradeRtnType> getCurseByidGrade(Integer pgrado) {
        return ((List<GetCurseByidGradeRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getCurseByidGradeQueryName), pgrado));
    }

    public List<Last_accessHQLRtnType> last_accessHQL(String user) {
        return ((List<Last_accessHQLRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.last_accessHQLQueryName), user));
    }

    public List<GetSubjectsByProfileRtnType> getSubjectsByProfile(String usuario, Integer sy) {
        return ((List<GetSubjectsByProfileRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getSubjectsByProfileQueryName), usuario, sy));
    }

    public List<SendMailHQLRtnType> sendMailHQL(Integer ide) {
        return ((List<SendMailHQLRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.sendMailHQLQueryName), ide));
    }

    public com.aprendoz_test.data.output.ShowInformationUserRtnType showInformationUser(String user) {
        List<com.aprendoz_test.data.output.ShowInformationUserRtnType> rtn = ((List<com.aprendoz_test.data.output.ShowInformationUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.showInformationUserQueryName), user));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer deleteEventualidadPersona(Integer epid) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.deleteEventualidadPersonaQueryName), epid));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<SubjectsBySyAndStudentRtnType> subjectsBySyAndStudent(Integer idpersona, Integer idsyp) {
        return ((List<SubjectsBySyAndStudentRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.subjectsBySyAndStudentQueryName), idpersona, idsyp));
    }

    public List<Dash_no_calificadosRtnType> dash_no_calificados(Integer idasignatura) {
        return ((List<Dash_no_calificadosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.dash_no_calificadosQueryName), idasignatura));
    }

    public List<SeachEventualidadHQLRtnType> seachEventualidadHQL(String search) {
        return ((List<SeachEventualidadHQLRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.SeachEventualidadHQLQueryName), search));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}

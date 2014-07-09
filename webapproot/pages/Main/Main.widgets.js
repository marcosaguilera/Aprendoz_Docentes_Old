Main.widgets = {
	listGrado: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	iraformularios: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"cur_formularios"}, {}]
			}]
		}]
	}],
	listDES: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoDesempeno"}, {}],
	listRETRO: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoValoracion"}, {}],
	LOGOUT: ["wm.ServiceVariable", {"service":"securityService","operation":"logout"}, {"onResult":"iraSALIR"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	iraSALIR: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Login\""}, {}]
			}]
		}]
	}],
	getUserName: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","startUpdate":true}, {"onSuccess":"getUserNameSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	estudiantes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"calif_encabezado_opciones_sel_curso.dataValue"}, {}]
		}]
	}],
	iraCalificaciones: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"calificaciones"}, {}]
			}]
		}]
	}],
	alumnosCURSOS: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2","maxResults":40,"designMaxResults":40}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"calif_encabezado_opciones_sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"calif_encabezado_opciones_sel_sy.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.sexo","source":"calif_contenedor_sel_Genero.dataValue"}, {}]
		}]
	}],
	alumnoslv: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2","maxResults":30,"designMaxResults":30}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"calif_alumnos_panel1_sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"calif_alumnos_panel1_sel_sy.dataValue"}, {}]
		}]
	}],
	unidadlv: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Unidad","orderBy":"asc: numeroUnidad","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.asignatura.idAsignatura","source":"calif_alumnos_datagrids_datag_alumnos_asignaturas.selectedItem.asignatura.idAsignatura"}, {}]
		}]
	}],
	subtopicolv: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Subtopico"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.unidad.idUnidad","source":"unidad.selectedItem.idUnidad"}, {}]
		}]
	}],
	personaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.personaLiveView1","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.codigo","source":"inscripcion_estudiante.selectedItem.persona.codigo"}, {}]
		}]
	}],
	listapersonas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"grado2.dataValue"}, {}]
		}]
	}],
	listaGrado4: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	listaCursos4: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"grado1.dataValue"}, {}]
		}]
	}],
	asignaturaLiveVariable3: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.asignaturaLiveView3","ignoreCase":true,"orderBy":"asc: asignatura","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.asignatura","source":"textEditor3.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.intensidadHoraria","source":"textEditor4.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.idAsignatura","source":"textEditor2.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"selectEditor15.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"selectEditor16.dataValue"}, {}]
		}]
	}],
	listaPeriodo: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Sy"}, {}],
	inscalumactividadLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumactividadLiveView1","ignoreCase":true,"orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2","maxResults":100}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"activities_studentsDataGrid.selectedItem.persona.idPersona"}, {}]
		}]
	}],
	asignaturaslv1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Asignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"selectEditor17.dataValue"}, {}]
		}]
	}],
	actividadLV: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Unidad"}, {}],
	inscalumasigLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumasigLiveView3","orderBy":"asc: persona.apellido1, asc: persona.apellido2,  asc: persona.nombre1, asc: persona.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.asignatura.sy.idSy","source":"Schoolar_Year.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.asignatura.idAsignatura","source":"inscripcion_asignatura.selectedItem.id.idAsignatura"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"inscripcion_estudiante.selectedItem.id.idPersona"}, {}]
		}]
	}],
	vistaEstudiantes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false}, {}],
	vistaALUMNOS: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumAsigCurso"}, {}],
	insccursoasigLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.insccursoasigLiveView2","maxResults":40,"designMaxResults":30}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.persona.nombreLdap","source":"cur_encabezado_tex_ldapUser.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.periodo.sy.idSy","source":"cur_encabezado_sel_sy.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.asignatura.grado.idGrado","source":"cur_encabezado_sel_grado.dataValue"}, {}]
		}]
	}],
	sp_insertar_actividades: ["wm.ServiceVariable", {"service":"sp_actividad_curso","operation":"corre_proc_act_cur"}, {"onSuccess":"inscalumactividadLiveVariable1"}, {
		input: ["wm.ServiceInput", {"type":"corre_proc_act_curInputs"}, {}]
	}],
	unidadLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.unidadLiveView2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.asignatura.idAsignatura","source":"nivel_idAsignaturaAux.dataValue"}, {}]
		}]
	}],
	ls_Area1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Area"}, {}],
	ls_Area2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Area"}, {}],
	ls_Area3: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Area"}, {}],
	lv_subarea1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Subarea"}, {}],
	actualizacalifestuapren: ["wm.ServiceVariable", {"service":"actualiza_calif","operation":"corre_proc_calcula_calif_est"}, {"onSuccess":"aux200","onResult":"actualizacalifestuaprenResult"}, {
		input: ["wm.ServiceInput", {"type":"corre_proc_calcula_calif_estInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"targetProperty":"Pr_Id_Persona","source":"personaaux.dataValue"}, {}],
				wire: ["wm.Wire", {"targetProperty":"Pr_Id_Aprendizaje","source":"aprendizajeaux.dataValue"}, {}]
			}]
		}]
	}],
	subtopicoLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.subtopicoLiveView3"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.unidad.idUnidad","source":"unidadDataGrid2.selectedItem.idUnidad"}, {}]
		}]
	}],
	aprendizajeLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.aprendizajeLiveView2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"subtopicoDataGrid2.selectedItem.idSubtopico"}, {}]
		}]
	}],
	iraFormulario2: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"layer47"}, {}]
			}]
		}]
	}],
	ejesDirNivel: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {}],
	otrasmetasLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.OtrasMetasLiveView2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"subtopicoDataGrid2.selectedItem.idSubtopico"}, {}]
		}]
	}],
	actividadLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.actividadLiveView2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"subtopicoDataGrid2.selectedItem.idSubtopico"}, {}]
		}]
	}],
	recursoLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.recursoLiveView2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"subtopicoDataGrid2.selectedItem.idSubtopico"}, {}]
		}]
	}],
	actualizacalifestudiante: ["wm.ServiceVariable", {"service":"actualiza_calif","operation":"corre_proc_calcula_calif_est"}, {"onResult":"actualizacalifestudianteResult"}, {
		input: ["wm.ServiceInput", {"type":"corre_proc_calcula_calif_estInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"Pr_Id_Aprendizaje","source":"aux200.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"Pr_Id_Persona","source":"aux199.dataValue"}, {}]
			}]
		}]
	}],
	a_lista_sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy"}, {"onSuccess":"a_lista_sySuccess"}],
	a_grado: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	l_cur_asig_asignaturas_vista_docentes_asignaturas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.VProfesorAsignatura","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.nombreLdap","source":"cur_encabezado_tex_ldapUser.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"cur_encabezado_sel_sy.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.cursoIdCurso","source":"cur_encabezado_sel_grado.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.gradoIdGrado","source":"cur_encabezado_sel_grado.dataValue"}, {}]
		}]
	}],
	l_cur_unid_unidades_unidadLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.unidadLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.asignatura.idAsignatura","source":"cur_asig_datag_asignaturasDataGrid1.selectedItem.id.asignaturaIdAsignatura"}, {}]
		}]
	}],
	l_cur_subt_subtopicos_subtopicoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.subtopicoLiveView1","ignoreCase":true,"orderBy":"asc: fechaInicio","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.unidad.idUnidad","source":"cur_unid_datag_unidadesDataGrid1.selectedItem.idUnidad"}, {}]
		}]
	}],
	l_cur_apr_aprendizajes_aprendizajeLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.aprendizajeLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico"}, {}]
		}]
	}],
	l_cur_metas_metas_otrasmetasLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.otrasmetasLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico"}, {}]
		}]
	}],
	l_cur_act_actividades_actividadLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.actividadLiveView1","maxResults":30,"designMaxResults":30}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico"}, {}]
		}]
	}],
	l_cur_rec_recursos_recursoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.recursoLiveView3"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico"}, {}]
		}]
	}],
	l_cur_formularios_aprendizajes_listaEjes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaEjesBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaEjesSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subarea.idSubarea","source":"cur_asig_datag_asignaturasDataGrid1.selectedItem.id.idSubarea1"}, {}]
		}]
	}],
	l_cur_formularios_aprendizajes_listaDimension_comprension: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionComprension"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaDimension_comprensionBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaDimension_comprensionSuccess"}],
	l_cur_formularios_aprendizajes_listaDimension_curricular: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionCurricular"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaDimension_curricularBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaDimension_curricularSuccess"}],
	l_cur_formularios_aprendizajes_listaInteligencias: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaInteligenciasBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaInteligenciasSuccess"}],
	l_cur_formularios_actividad_listaTipoActividades: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoActividad"}, {"onBeforeUpdate":"l_cur_formularios_actividad_listaTipoActividadesBeforeUpdate","onSuccess":"l_cur_formularios_actividad_listaTipoActividadesSuccess"}],
	l_cur_formularios_actividad_listaTipoValoracion: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoValoracion"}, {"onBeforeUpdate":"l_cur_formularios_actividad_listaTipoValoracionBeforeUpdate","onSuccess":"l_cur_formularios_actividad_listaTipoValoracionSuccess"}],
	l_cur_formularios_actividad_listaTipoDesempeno: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoDesempeno"}, {}],
	l_cur_formularios_recursos_tipoRecurso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoRecurso"}, {"onBeforeUpdate":"l_cur_formularios_recursos_tipoRecursoBeforeUpdate","onSuccess":"l_cur_formularios_recursos_tipoRecursoSuccess"}],
	l_calif_encabezado_opciones_listaCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"calif_encabezado_opciones_sel_grado.dataValue"}, {}]
		}]
	}],
	l_calif_contenedor_tablas_asignaturas_docentes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.VProfesorAsignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.nombreLdap","source":"cur_encabezado_tex_ldapUser.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.gradoIdGrado","source":"calif_encabezado_opciones_sel_grado.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"calif_encabezado_opciones_sel_sy.dataValue"}, {}]
		}]
	}],
	l_calif_contenedor_tablas_aprendizajes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaAprendizajesAsignatura","orderBy":"asc: id.fechaEsperada"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.asignaturaIdAsignatura","source":"calif_asig_datag_asignaturasDataGrid1.selectedItem.id.asignaturaIdAsignatura"}, {}]
		}]
	}],
	l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumAsigCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2","maxResults":100,"designMaxResults":40}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"calif_encabezado_opciones_sel_sy.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"calif_encabezado_opciones_sel_curso.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.sexo","source":"calif_contenedor_sel_Genero.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.asignaturaIdAsignatura","source":"calif_asig_datag_asignaturasDataGrid1.selectedItem.id.asignaturaIdAsignatura"}, {}]
		}]
	}],
	l_calif_contenedor_tablas_calificacion_final: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaCalificacionFinal"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.aprendizajeIdAprendizaje","source":"calif_asig_datag_aprendizajesDataGrid1.selectedItem.id.idAprendizaje"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.id.personaIdPersona"}, {}]
		}]
	}],
	l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumaprendizajeLiveView3","orderBy":"desc: idInscAlumAprendizaje","maxResults":50,"designMaxResults":10}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.inscAlumCurso.persona.idPersona","source":"calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.persona.idPersona"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.aprendizaje.idAprendizaje","source":"calif_asig_datag_aprendizajesDataGrid1.selectedItem.id.idAprendizaje"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.id.personaIdPersona"}, {}]
		}]
	}],
	l_calif_alumnos_listaCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"calif_alumnos_panel1_sel_grado.dataValue"}, {}]
		}]
	}],
	l_calif_alumnos_alumnosCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.VistaInscAlumnCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"calif_encabezado_opciones_sel_sy.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"calif_encabezado_opciones_sel_curso.dataValue"}, {}]
		}]
	}],
	l_calif_alumnos_aprendizajes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaAprendizajesAsignatura","orderBy":"asc: id.fechaEsperada"}, {}],
	l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumaprendizajeLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.inscAlumCurso.persona.idPersona","source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.persona.idPersona"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.aprendizaje.idAprendizaje","source":"calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.id.idAprendizaje"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.id.idPersona"}, {}]
		}]
	}],
	l_calif_alumnos_calificaciones_finales: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaCalificacionFinal"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.id.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.aprendizajeIdAprendizaje","source":"calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.id.idAprendizaje"}, {}]
		}]
	}],
	l_inscrip_panel_lista_cursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"Grado.dataValue"}, {}]
		}]
	}],
	l_inscrip_panel_VistaAsignaturas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscipcionesVistaAsignaturas","orderBy":"asc: id.asignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.gradoIdGrado","source":"Grado.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"Schoolar_Year.dataValue"}, {}]
		}]
	}],
	l_inscrip_panel_VistaEstudiantesCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscripcionesVistaInscAlumnCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"Curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"Schoolar_Year.dataValue"}, {}]
		}]
	}],
	l_nivel_asig_asignaturas_vista_docentes_asignaturas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.VProfesorAsignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"nivel_encabezado_sel_sy.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.gradoIdGrado","source":"nivel_encabezado_sel_grado.dataValue"}, {}]
		}]
	}],
	l_dirNivel_formulario_aprendizaje_lista_Ejes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_EjesBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_EjesSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subarea.idSubarea","source":"nivel_asig_datag_asignaturasDataGrid1.selectedItem.idSubarea1"}, {}]
		}]
	}],
	l_dirNivel_formulario_aprendizaje_lista_domension_comprension: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionComprension"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_domension_comprensionBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_domension_comprensionSuccess"}],
	l_dirNivel_formulario_aprendizaje_lista_domension_curricular: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionCurricular"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_domension_curricularBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_domension_curricularSuccess"}],
	a_isAuthenticated: ["wm.ServiceVariable", {"service":"securityService","operation":"isAuthenticated","autoUpdate":true,"startUpdate":true}, {"onSuccess":"a_isAuthenticatedSuccess"}, {
		input: ["wm.ServiceInput", {"type":"isAuthenticatedInputs"}, {}]
	}],
	l_dirNivel_formulario_aprendizaje_lista_inteligencia: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_inteligenciaBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_inteligenciaSuccess"}],
	l_promocion_insc_alum_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.PromocionVistaInscAlumnCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"promocion_sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"promocion_sel_ao_escolar.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.codigo","source":"promocion_box_codigo.dataValue"}, {}]
		}]
	}],
	l_promocion_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"promocion_sel_grado.dataValue"}, {}]
		}]
	}],
	l_promocion_promocionLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.promocionLiveView2","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"promocion_container_datag_personas_x_curso.selectedItem.id.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"promocion_sel_ao_escolar.dataValue"}, {}]
		}]
	}],
	a_getTipoPersona: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getInformacionValiosa"}, {}, {
		input: ["wm.ServiceInput", {"type":"getInformacionValiosaInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"usuario","source":"cur_encabezado_tex_ldapUser.dataValue"}, {}]
			}]
		}]
	}],
	multiReporte: ["wm.ServiceVariable", {"service":"MultiReportes","operation":"getReport"}, {"onResult":"multiReporteResult"}, {
		input: ["wm.ServiceInput", {"type":"getReportInputs"}, {}]
	}],
	tipoDocumento: ["wm.Variable", {"type":"EntryData","json":"[{name: \"PDF (Adobe Reader)\", value: \"PDF\"},\n{name: \"DOCX (Microsoft Word 2007 o Superior)\", value: \"DOCX\"}]"}, {}],
	getCompleteName: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getFullName"}, {"onSuccess":"getCompleteNameSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getFullNameInputs"}, {}]
	}],
	l_cur_formularios_aprendizajes_listaEjes2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subarea.idSubarea","source":"cur_asig_datag_asignaturasDataGrid1.selectedItem.id.idSubarea2"}, {}]
		}]
	}],
	l_cur_formularios_aprendizajes_listaEjes3: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subarea.idSubarea","source":"cur_asig_datag_asignaturasDataGrid1.selectedItem.id.idSubarea3"}, {}]
		}]
	}],
	a_obtenerNombre: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getInformacionValiosa"}, {"onSuccess":"a_obtenerNombreSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getInformacionValiosaInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"usuario","source":"aux_getNameUser.dataValue"}, {}]
			}]
		}]
	}],
	a_informacionUsuario: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"showInformationUser"}, {"onSuccess":"a_informacionUsuarioSuccess"}, {
		input: ["wm.ServiceInput", {"type":"showInformationUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"user","source":"aux_getNameUser.dataValue"}, {}]
			}]
		}]
	}],
	a_actualizaClave: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"actualizarClave"}, {"onSuccess":"a_actualizaClaveSuccess","onError":"a_actualizaClaveError"}, {
		input: ["wm.ServiceInput", {"type":"actualizarClaveInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"usuario","source":"aux_getNameUser.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"clave","source":"inicio_box_clave.dataValue"}, {}]
			}]
		}]
	}],
	a_numero_unidad: ["wm.Variable", {"type":"EntryData","json":"[{name: \"Unidad #1\", dataValue: 1}, \n{name: \"Unidad #2\", dataValue: 2}, \n{name: \"Unidad #3\", dataValue: 3},\n{name: \"Unidad #4\", dataValue: 4}, \n{name: \"Unidad #5\", dataValue: 5}, \n{name: \"Unidad #6\", dataValue: 6},\n{name: \"Unidad #7\", dataValue: 7}, \n{name: \"Unidad #8\", dataValue: 8}, \n{name: \"Unidad #9\", dataValue: 9},\n{name: \"Unidad #10\", dataValue: 10}]"}, {}],
	a_numero_subtopico: ["wm.Variable", {"type":"EntryData","json":"[{name: \"Subtópico #1\", dataValue: 1}, \n{name: \"Subtópico #2\", dataValue: 2}, \n{name: \"Subtópico #3\", dataValue: 3},\n{name: \"Subtópico #4\", dataValue: 4}, \n{name: \"Subtópico #5\", dataValue: 5}, \n{name: \"Subtópico #6\", dataValue: 6},\n{name: \"Subtópico #7\", dataValue: 7}, \n{name: \"Subtópico #8\", dataValue: 8}, \n{name: \"Subtópico #9\", dataValue: 9},\n{name: \"Subtópico #10\", dataValue: 10}]"}, {}],
	a_numero_aprendizaje: ["wm.Variable", {"type":"EntryData","json":"[{name: \"Aprendizaje #1\", dataValue: 1}, \n{name: \"Aprendizaje #2\", dataValue: 2}, \n{name: \"Aprendizaje #3\", dataValue: 3},\n{name: \"Aprendizaje #4\", dataValue: 4}, \n{name: \"Aprendizaje #5\", dataValue: 5}, \n{name: \"Aprendizaje #6\", dataValue: 6},\n{name: \"Aprendizaje #7\", dataValue: 7}, \n{name: \"Aprendizaje #8\", dataValue: 8}, \n{name: \"Aprendizaje #9\", dataValue: 9},\n{name: \"Aprendizaje #10\", dataValue: 10}]"}, {}],
	a_pesos: ["wm.Variable", {"type":"EntryData","json":"[\n\t{name:\"1\", dataValue:\"1\"},\n        {name:\"2\", dataValue:\"2\"},\n\t{name:\"3\", dataValue:\"3\"},\n\t{name:\"4\", dataValue:\"4\"},\n\t{name:\"5\", dataValue:\"5\"}\n]\n"}, {}],
	l_inicio_cursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"inicio_sel_grado.dataValue"}, {}]
		}]
	}],
	l_inicio_detalles_acceso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesInicioVistaDetallesAcceso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"inicio_sel_sy.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.cursoIdCurso","source":"inicio_sel_curso.dataValue"}, {}]
		}]
	}],
	a_logInsertRecords: ["wm.Variable", {"type":"com.aprendoz_test.data.LogDocentes"}, {}],
	l_reportes_graficos_listado_reportes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DirectoresDocentesListadoReportes","matchMode":"anywhere","orderBy":"asc: id.codigo","maxResults":50}, {}],
	openUpReportes: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Reportes\""}, {}]
			}]
		}]
	}],
	a_informacionUsuario2: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"showInformationUser2"}, {}, {
		input: ["wm.ServiceInput", {"type":"showInformationUser2Inputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"user","source":"aux_getNameUser.dataValue"}, {}]
			}]
		}]
	}],
	a_getLastAccess: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"last_accessHQL","maxResults":5,"designMaxResults":10}, {"onSuccess":"a_getLastAccessSuccess"}, {
		input: ["wm.ServiceInput", {"type":"last_accessHQLInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"user","source":"aux_getNameUser.dataValue"}, {}]
			}]
		}]
	}],
	dash_dash_lv1: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"dash_logDocentes"}, {"onSuccess":"dash_dash_lv1Success"}, {
		input: ["wm.ServiceInput", {"type":"dash_logDocentesInputs"}, {}]
	}],
	dash_asig_doc: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"dash_getAsigByDocente"}, {}, {
		input: ["wm.ServiceInput", {"type":"dash_getAsigByDocenteInputs"}, {}]
	}],
	dash_chart2_lv2: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"dash_no_calificados"}, {"onSuccess":"dash_chart2_lv2Success"}, {
		input: ["wm.ServiceInput", {"type":"dash_no_calificadosInputs"}, {}]
	}],
	dash_chart3_lv3: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"dash_aprendizajes"}, {"onSuccess":"dash_chart3_lv3Success"}, {
		input: ["wm.ServiceInput", {"type":"dash_aprendizajesInputs"}, {}]
	}],
	a_nivel_esperado: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.NivelEsperado"}, {}],
	l_calif_encabezado_opciones_listaCurso: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"hql_ls_cursos"}, {}, {
		input: ["wm.ServiceInput", {"type":"hql_ls_cursosInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"idg","source":"calif_encabezado_opciones_sel_grado.dataValue"}, {}]
			}]
		}]
	}],
	l_calif_encabezado_opciones_listaCurso2: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"hql_ls_cursos"}, {}, {
		input: ["wm.ServiceInput", {"type":"hql_ls_cursosInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"idg","source":"calif_alumnos_panel1_sel_grado.dataValue"}, {}]
			}]
		}]
	}],
	sendMailHQLService: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"sendMailHQL"}, {}, {
		input: ["wm.ServiceInput", {"type":"sendMailHQLInputs"}, {}]
	}],
	cur_ls_inteligencias: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia"}, {}],
	l_calif_alumnos_alumnos_asignaturas2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaInscAlumnAsig"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.id.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"calif_alumnos_panel1_sel_sy.dataValue"}, {}]
		}]
	}],
	l_calif_alumnos_alumnos_asignaturas: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"subjectsBySyAndStudent"}, {}, {
		input: ["wm.ServiceInput", {"type":"subjectsBySyAndStudentInputs"}, {}]
	}],
	iraUpload: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Uploads\""}, {}],
				wire1: ["wm.Wire", {"targetProperty":"width","expression":"250"}, {}],
				wire2: ["wm.Wire", {"targetProperty":"height","expression":"250"}, {}]
			}]
		}]
	}],
	a_cursy: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getSyByCurDate_"}, {}, {
		input: ["wm.ServiceInput", {"type":"getSyByCurDate_Inputs"}, {}]
	}],
	a_getUserName: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","autoUpdate":true,"startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	activitiesGetSubjectsByUser: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getSubjectsByProfile"}, {}, {
		input: ["wm.ServiceInput", {"type":"getSubjectsByProfileInputs"}, {}]
	}],
	actividad_lv: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Actividad","orderBy":"asc: fecha"}, {}],
	actividad_estudiantes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2 "}, {}],
	global_log_acciones_docentes: ["wm.Variable", {"type":"com.aprendoz_test.data.LogAccionesDocentes"}, {}],
	variable1: ["wm.Variable", {"type":"wm.Variable"}, {}],
	mainLayout: ["wm.Layout", {"height":"100%","width":"802px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		FancyCentered: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			templateMain: ["wm.Template", {"_classes":{"domNode":["template-main","wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"100%","layoutKind":"left-to-right","autoScroll":true}, {}, {
				aprendoz: ["wm.Panel", {"height":"1551px","width":"100%","horizontalAlign":"left","verticalAlign":"top","freeze":true}, {}, {
					panelHeader: ["wm.Panel", {"_classes":{"domNode":["template-header-panel","wm_BackgroundColor_White"]},"height":"80px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","padding":"15","layoutKind":"left-to-right"}, {}, {
						top_Head: ["wm.Panel", {"height":"28px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
							dateEditor1: ["wm.DateEditor", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"width":"80px","captionPosition":"right","displayValue":"08/07/2014","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
								}],
								editor: ["wm._DateEditor", {}, {}]
							}],
							label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"24px","width":"10px","border":"0","align":"center","padding":"0","caption":"|"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							timeEditor1: ["wm.TimeEditor", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"displayValue":"14:10 p.m.","width":"76px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
								}],
								editor: ["wm._TimeEditor", {}, {}]
							}],
							logout_picture: ["wm.Picture", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"24px","border":"1","width":"25px","source":"resources/images/buttons/logut.png","margin":"2","borderColor":"#aaa"}, {"onclick":"LOGOUT"}]
						}]
					}],
					panel1: ["wm.Panel", {"height":"24px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
						templateTopLeft: ["wm.Panel", {"_classes":{"domNode":["template-top-left"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top"}, {}],
						templateTop: ["wm.Panel", {"_classes":{"domNode":["template-top-center"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}],
						templateTopRight: ["wm.Panel", {"_classes":{"domNode":["template-top-right"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top"}, {}]
					}],
					panel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
						templateLeft: ["wm.Panel", {"_classes":{"domNode":["template-left"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}],
						templateContent: ["wm.Panel", {"_classes":{"domNode":["template-content"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"10"}, {}, {
							main: ["wm.TabLayers", {"padding":"0"}, {}, {
								inicio: ["wm.Layer", {"caption":"Inicio","horizontalAlign":"left","verticalAlign":"top","padding":"50"}, {}, {
									image_logo: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"138px","width":"100%","horizontalAlign":"center","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
										logo_aprendoz: ["wm.Picture", {"height":"97px","border":"0","width":"389px","source":"http://aprendoz.rochester.edu.co/recursos/logo_aprendoz_nuevo.png","aspect":"v"}, {}]
									}],
									panel13: ["wm.Panel", {"height":"42px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
										label_nombreCompleto: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_28px"]},"height":"100%","width":"100%","border":"0","align":"center"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}],
									configuracion_panel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										inicio_filtros_claves: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"500px","horizontalAlign":"left","verticalAlign":"top","padding":"10","margin":"10","lock":true,"showing":false}, {}, {
											inicio_sel_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año Escolar","height":"26px"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
													}]
												}]
											}],
											inicio_sel_grado: ["wm.SelectEditor", {"width":"150%","caption":"Grado","height":"26px"}, {"onchange":"l_inicio_cursos"}, {
												editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
													}]
												}]
											}],
											inicio_sel_curso: ["wm.SelectEditor", {"width":"150%","caption":"Curso","height":"26px"}, {"onchange":"l_inicio_detalles_acceso"}, {
												editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_inicio_cursos","expression":undefined}, {}]
													}]
												}]
											}],
											detalles_alumnos: ["wm.DataGrid", {"border":"0"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_inicio_detalles_acceso","expression":undefined}, {}]
												}],
												column2: ["wm.DataGridColumn", {"caption":"*","field":"id.codigo","columnWidth":"62px","index":1}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column1: ["wm.DataGridColumn", {"caption":"Nombre","field":"id.nombre1","dataExpression":"${id.apellido1}+\" \"+${id.apellido2}+\" \"+${id.nombre1}+\" \"+${id.nombre2}","columnWidth":"100%","index":1}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column3: ["wm.DataGridColumn", {"caption":"Usuario","field":"id.nombreLdap","columnWidth":"80px","index":2}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column4: ["wm.DataGridColumn", {"caption":"Clave","field":"id.clave","columnWidth":"80px","index":3}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}]
											}]
										}],
										dashboard: ["wm.Panel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved8px","wm_BackgroundColor_White"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"10"}, {}, {
											dash_chart1: ["wm.Panel", {"height":"250px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}],
											top_filters: ["wm.Panel", {"height":"40px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","padding":"5","layoutKind":"left-to-right"}, {}, {
												dash_sy_select: ["wm.SelectEditor", {"caption":"Año escolar","captionSize":"100%","showing":false}, {"onchange":"dash_asig_doc"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"\"3\""}, {}]
													}],
													editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
														}]
													}]
												}],
												dash_asig_select: ["wm.SelectEditor", {"width":"310px","caption":"Asignaturas","captionSize":"30%","height":"26px","showing":false}, {"onchange":"dash_asig_selectChange"}, {
													editor: ["wm._SelectEditor", {"displayField":"asignatura","dataField":"idasignatura"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"dash_asig_doc","expression":undefined}, {}]
														}]
													}]
												}]
											}],
											dash_horizontal_panel: ["wm.Panel", {"height":"150px","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"0","layoutKind":"left-to-right"}, {}, {
												spacer14: ["wm.Spacer", {"height":"48px","width":"10px"}, {}],
												dash_chart2: ["wm.Panel", {"height":"100%","width":"160px","horizontalAlign":"left","verticalAlign":"top"}, {}],
												dash_chart3: ["wm.Panel", {"height":"100%","width":"160px","horizontalAlign":"left","verticalAlign":"top"}, {}],
												dash_chart4: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}]
											}],
											panel12: ["wm.Panel", {"height":"60px","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"0","layoutKind":"left-to-right"}, {}, {
												dash_chart1_label: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"160px","border":"0","align":"center","padding":"0","singleLine":false}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												dash_chart2_label: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"100%","width":"160px","border":"0","align":"center","singleLine":false}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												dash_chart3_label: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"100%","width":"160px","border":"0","align":"center","singleLine":false}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												dash_chart4_label: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"100%","width":"145px","border":"0","align":"center","singleLine":false}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}]
											}]
										}],
										spacer13: ["wm.Spacer", {"height":"48px","width":"10px"}, {}],
										tabs: ["wm.Panel", {"height":"100%","width":"44px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											layers1: ["wm.Layers", {"width":"44px"}, {}, {
												layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"right","verticalAlign":"top"}, {}, {
													spacer2: ["wm.Spacer", {"height":"20px","width":"100%","showing":false}, {}],
													inicio_abrir_preferencias: ["wm.Label", {"height":"48px","width":"100%","border":"0","align":"right","caption":"<img src=\"resources/images/ico/gear.png\" height=\"34\" width=\"34\" align=\"right\">"}, {"onclick":"inicio_abrir_preferenciasClick"}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													spacer7: ["wm.Spacer", {"height":"2px","width":"100%"}, {}],
													inicio_abrir_preferencias1: ["wm.Label", {"height":"48px","width":"100%","border":"0","align":"right","caption":"<img src=\"resources/images/ico/student.png\" height=\"34\" width=\"34\" align=\"right\">"}, {"onclick":"inicio_abrir_preferencias1Click"}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													spacer6: ["wm.Spacer", {"height":"2px","width":"100%"}, {}],
													inicio_cerrar_preferencias: ["wm.Label", {"height":"30px","width":"70%","border":"0","align":"right","caption":"<img src=\"resources/images/ico/close.png\" height=\"18\" width=\"18\" align=\"right\">"}, {"onclick":"inicio_cerrar_preferenciasClick"}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}]
											}]
										}],
										inicio_panel_opciones: ["wm.Panel", {"height":"100%","width":"275px","horizontalAlign":"left","verticalAlign":"top","padding":"10","lock":true,"showing":false}, {}, {
											aux_getNameUser: ["wm.TextEditor", {"width":"150%","showing":false,"caption":"userId","disabled":true,"height":"28px"}, {"onchange":"getCompleteName"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataValue","source":"getUserName.dataValue"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											lastAccess_Label: ["wm.Label", {"height":"38px","width":"100%","border":"0","align":"center","singleLine":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											inicio_box_id_persona: ["wm.TextEditor", {"width":"100%","caption":"•","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_tipo_persona: ["wm.TextEditor", {"width":"150%","caption":"Tipo Persona","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_nombre: ["wm.TextEditor", {"width":"150%","caption":"Nombres","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_apellido: ["wm.TextEditor", {"width":"150%","caption":"Apellidos","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_usuario: ["wm.TextEditor", {"width":"150%","caption":"Usuario","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_clave: ["wm.TextEditor", {"width":"150%","caption":"Clave","height":"28px","readonly":true}, {"onchange":"inicio_box_claveChange"}, {
												editor: ["wm._TextEditor", {"password":true,"changeOnKey":true,"changeOnEnter":true}, {}]
											}],
											inicio_box_reclave: ["wm.TextEditor", {"width":"150%","caption":"Repetir Clave","height":"28px","readonly":true}, {"onchange":"inicio_box_reclaveChange"}, {
												editor: ["wm._TextEditor", {"password":true,"changeOnKey":true,"changeOnEnter":true}, {}]
											}],
											inicio_ok_label: ["wm.Label", {"height":"22px","width":"100%","border":"0","align":"center","caption":"Comparación de contraseña correcta!","showing":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											inicio_bad_label: ["wm.Label", {"height":"22px","width":"100%","border":"0","align":"center","caption":"Verificación de contraseña erronea!","showing":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											spacer3: ["wm.Spacer", {"height":"12px","width":"96px"}, {}],
											inicio_panel_boton_actualizar: ["wm.Panel", {"height":"40px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
												inicio_boton_actualiza: ["wm.Button", {"height":"100%","width":"96px","caption":"Actualizar","disabled":true}, {"onclick":"a_actualizaClave"}],
												inicio_boton_cancelar: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightGray"]},"height":"100%","width":"96px","caption":"Cancelar"}, {"onclick":"inicio_boton_cancelarClick"}]
											}],
											inicio_forgot_password: ["wm.Label", {"height":"25px","width":"100%","border":"0","align":"center","caption":"<u>¿Desea cambiar su contraseña?</u>"}, {"onclick":"inicio_forgot_passwordClick"}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											logForm: ["wm.LiveForm", {"height":"60px","verticalAlign":"top","horizontalAlign":"left","showing":false}, {}, {
												inicio_box_fecha: ["wm.DateEditor", {"displayValue":"08/07/2014","readonly":true,"disabled":true,"caption":"hora","showing":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
													}],
													editor: ["wm._DateEditor", {}, {}]
												}],
												inicio_box_hora: ["wm.TimeEditor", {"displayValue":"14:10 p.m.","disabled":true,"caption":"fecha","showing":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
													}],
													editor: ["wm._TimeEditor", {}, {}]
												}]
											}]
										}]
									}]
								}],
								pestana_curriculo: ["wm.Layer", {"caption":"Currículo","horizontalAlign":"left","verticalAlign":"top","roles":["4","5","8","9","10","11","7","6","18","19","20","21","22","23","24"]}, {}, {
									curriculo: ["wm.TabLayers", {}, {}, {
										cur_tablas: ["wm.Layer", {"caption":"TABLAS","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											cur_tablas_panel: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","padding":"0","height":"869px","borderColor":"#CD0000"}, {}, {
												cur_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"44px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
													cur_encabezado_sel_sy: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"width":"210px","caption":"Año escolar","captionSize":"80%","height":"30px"}, {"onchange":"cur_encabezado_sel_syChange"}, {
														editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","startUpdate":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
															}]
														}]
													}],
													cur_encabezado_sel_grado: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_TextDecoration_Bold","wm_FontSizePx_16px"],"domNode":["wm_FontSizePx_16px"]},"width":"210px","caption":"Grado","captionAlign":"left","height":"30px"}, {"onchange":"cur_encabezado_sel_gradoChange"}, {
														editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado","startUpdate":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
															}]
														}]
													}],
													cur_encabezado_spacer_espacio: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
													cur_encabezado_tex_ldapUser: ["wm.TextEditor", {"showing":false,"disabled":true}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataValue","source":"getUserName.dataValue"}, {}]
														}],
														editor: ["wm._TextEditor", {}, {}]
													}],
													cur_sel_tipo_documento: ["wm.SelectEditor", {"width":"300px","caption":"Tipo","showing":false}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"PDF, DOCX"}, {}, {
															optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
														}]
													}],
													cur_encabezado_butt_reporte1: ["wm.Button", {"height":"43px","width":"48px","borderColor":"#bbb","iconUrl":"resources/images/ico/download.png","iconMargin":"2px 2px 2px 2px"}, {"onclick":"cur_encabezado_butt_reporte1Click"}],
													cur_encabezado_butt_restaurar: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"height":"43px","width":"150px","caption":"Restaurar","borderColor":"#bbb","iconUrl":"resources/images/ico/refresh.png","iconMargin":"0 0px 0 0"}, {"onclick":"cur_encabezado_butt_restaurarClick"}]
												}],
												cur_panel_asig: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
													cur_asig_panel_asignaturas: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"ASIGNATURAS","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#fff"}, {}, {
														cur_asig_datag_asignaturasDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"cur_asig_datag_asignaturasDataGrid1Selected"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_asig_asignaturas_vista_docentes_asignaturas","expression":undefined}, {}]
															}],
															column1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"100%","index":1}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":" ","field":"id.asignaturaIdAsignatura"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Subject","field":"id.subject","columnWidth":"100%","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column4: ["wm.DataGridColumn", {"caption":"Docente","field":"id.nombreLdap","index":3}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}]
														}]
													}]
												}],
												cur_panel_encabezado2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue","wm_BackgroundColor_VeryLightGray"]},"height":"44px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
													cur_encabezado2_butt_crea_unidad: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"32px","width":"32px","caption":" ","disabled":true,"margin":"","borderColor":"#bbb","iconUrl":"resources/images/news_icons/new.png","iconWidth":"32px","iconHeight":"32px","iconMargin":"6px 5px 5px 6px"}, {"onclick":"cur_encabezado2_butt_crea_unidadClick"}],
													spacer1: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
													cur_unidad_edit: ["wm.Button", {"height":"32px","width":"32px","caption":" ","disabled":true,"margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/edit.png","iconMargin":"6px 5px 5px 6px"}, {"onclick":"cur_unidad_editClick"}],
													spacer5: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
													cur_unidad_view: ["wm.Button", {"height":"32px","width":"32px","caption":" ","disabled":true,"margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/view.png","iconMargin":"6px 5px 5px 6px"}, {"onclick":"cur_unidad_viewClick"}]
												}],
												cur_panel_unid: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","height":"247px"}, {}, {
													cur_unid_panel_unidades: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"UNIDADES","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#fff","height":"244px"}, {}, {
														panel20: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															cur_unid_datag_unidadesDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"cur_unid_datag_unidadesDataGrid1Selected","onCellClick":"cur_unid_datag_unidadesDataGrid1CellClick"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_unid_unidades_unidadLiveVariable1","expression":undefined}, {}]
																}],
																idUnidad1: ["wm.DataGridColumn", {"caption":" ","field":"idUnidad","columnWidth":"80px"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																unidad1: ["wm.DataGridColumn", {"caption":"Unidad","field":"unidad","columnWidth":"100%","index":2}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																unit1: ["wm.DataGridColumn", {"caption":"Unit","field":"unit","columnWidth":"100%","index":3}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																fechaInicio1: ["wm.DataGridColumn", {"caption":"Fecha Inicio","field":"fechaInicio","display":"Date","columnWidth":"76px","index":4}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																fechaFin1: ["wm.DataGridColumn", {"caption":"Fecha Final","field":"fechaFin","display":"Date","columnWidth":"76px","index":5}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																numeroUnidad1: ["wm.DataGridColumn", {"caption":"No. Unidad","field":"numeroUnidad","display":"Number","columnWidth":"40px","index":1}, {}, {
																	format: ["wm.NumberFormatter", {}, {}]
																}]
															}],
															cur_unidad_form_panel: ["wm.Panel", {"height":"100%","width":"96%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																unidadLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"170%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"padding":"3","validateBeforeSave":true,"freeze":true}, {"onSuccess":"l_cur_unid_unidades_unidadLiveVariable1","onBeginInsert":"unidadLiveForm1BeginInsert","onInsertData":"unidadLiveForm1InsertData","onBeginUpdate":"unidadLiveForm1BeginUpdate","onUpdateData":"unidadLiveForm1UpdateData","onCancelEdit":"unidadLiveForm1CancelEdit"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_unid_datag_unidadesDataGrid1.selectedItem","expression":undefined}, {}],
																		wire1: ["wm.Wire", {"targetProperty":"dataOutput.asignatura","source":"asignaturaRelatedEditor1.dataOutput","expression":undefined}, {}]
																	}],
																	cur_formularios_unidad_panel1: ["wm.Panel", {"height":"34px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		idUnidadEditor1: ["wm.Editor", {"caption":"ID Unidad","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idUnidad"}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		asignaturaRelatedEditor1: ["wm.RelatedEditor", {"formField":"asignatura","height":"100%"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_unid_datag_unidadesDataGrid1.selectedItem.asignatura","expression":undefined}, {}]
																			}],
																			asignaturaLookup1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"ID Asignatura","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idAsignatura"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}]
																	}],
																	cur_formularios_unidad_panel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		unidadEditor1: ["wm.Editor", {"caption":"Unidad","width":"100%","height":"100%","readonly":true,"formField":"unidad","singleLine":false,"captionAlign":"left"}, {}, {
																			editor: ["wm._TextEditor", {"required":true,"promptMessage":"Inserte una descripción en Ingles de la Unidad ","invalidMessage":"Este campo es requerido *","tooltipDisplayTime":3000}, {}]
																		}],
																		unitEditor1: ["wm.Editor", {"caption":"Unit","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"unit","singleLine":false,"captionAlign":"left"}, {}, {
																			editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Inserte una descripción en Ingles de la Unidad ","invalidMessage":"Este campo es requerido *","tooltipDisplayTime":3000}, {}]
																		}]
																	}],
																	cur_formularios_unidad_panel3: ["wm.Panel", {"height":"34px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		fechaInicioEditor1: ["wm.Editor", {"caption":"Fecha Inicio","width":"100%","height":"100%","display":"Date","readonly":true,"formField":"fechaInicio"}, {}, {
																			editor: ["wm._DateEditor", {"required":true,"promptMessage":"Selecciones un Fecha Inicial para la Unidad","invalidMessage":"El campo es requerido *"}, {}]
																		}],
																		fechaFinEditor1: ["wm.Editor", {"caption":"Fecha Final","width":"100%","height":"100%","display":"Date","readonly":true,"formField":"fechaFin"}, {}, {
																			editor: ["wm._DateEditor", {"required":true,"promptMessage":"Selecciones un Fecha Final para la Unidad","invalidMessage":"El campo es requerido *"}, {}]
																		}]
																	}],
																	numeroUnidadEditor3: ["wm.TextEditor", {"width":"150%","caption":"Numero Unidad","display":"Number","readonly":true,"formField":"numeroUnidad"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	numeroUnidadEditor1: ["wm.SelectEditor", {"width":"100%","caption":"Numero Unidad","readonly":true,"showing":false,"formField":"numeroUnidad"}, {"onchange":"numeroUnidadEditor1Change"}, {
																		editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_numero_unidad","expression":undefined}, {}]
																			}]
																		}]
																	}],
																	editPanel4: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"unidadLiveForm1","savePanel":"savePanel4","operationPanel":"operationPanel4","lock":false}, {}, {
																		savePanel4: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																			saveButton4: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel4.saveData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formInvalid","expression":undefined}, {}]
																				}]
																			}],
																			cancelButton4: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel4.cancelEdit"}]
																		}],
																		operationPanel4: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			newButton4: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel4.beginDataInsert"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","expression":"selectEditor14.dataValue=1"}, {}]
																				}]
																			}],
																			updateButton4: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","disabled":true}, {"onclick":"editPanel4.beginDataUpdate"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formUneditable","expression":undefined}, {}]
																				}]
																			}],
																			deleteButton4: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel4.deleteData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formUneditable","expression":undefined}, {}]
																				}]
																			}]
																		}]
																	}]
																}],
																cur_formularios_panel_unidad: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO UNIDAD","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px wm_FontFamily_Arial","height":"347px","showing":false}, {}]
															}]
														}]
													}]
												}],
												cur_panel_encabezado3: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"44px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
													cur_encabezado3_butt_crear_subtopico: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"32px","width":"32px","caption":" ","disabled":true,"margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/new.png","iconWidth":"30px","iconHeight":"30px","iconMargin":"6px 5px 5px 6px"}, {"onclick":"cur_encabezado3_butt_crear_subtopicoClick"}],
													spacer22: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
													cur_subt_edit: ["wm.Button", {"height":"32px","width":"32px","caption":" ","disabled":true,"margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/edit.png","iconMargin":"6px 5px 5px 6px"}, {"onclick":"cur_subt_editClick"}],
													spacer27: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
													cur_subt_view: ["wm.Button", {"height":"32px","width":"32px","caption":" ","disabled":true,"margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/view.png","iconMargin":"6px 5px 5px 6px"}, {"onclick":"cur_subt_viewClick"}],
													spacer8: ["wm.Spacer", {"height":"48px","width":"5px"}, {}]
												}],
												cur_panel_subt: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","height":"239px"}, {}, {
													cur_subt_panel_subtopicos: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"SUBTOPICO","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#fff"}, {}, {
														panel23: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															cur_subt_datag_subtopicoDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"cur_subt_datag_subtopicoDataGrid1Selected","onCellClick":"cur_subt_datag_subtopicoDataGrid1CellClick"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_subt_subtopicos_subtopicoLiveVariable1","expression":undefined}, {}]
																}],
																idSubtopico1: ["wm.DataGridColumn", {"caption":" ","field":"idSubtopico","columnWidth":"50px"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																subtopico1: ["wm.DataGridColumn", {"caption":"Subtopico","field":"subtopico","columnWidth":"100%","index":2}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																fechaInicio1: ["wm.DataGridColumn", {"caption":"Fecha Inicio","field":"fechaInicio","display":"Date","columnWidth":"76px","index":4}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																fechaFin1: ["wm.DataGridColumn", {"caption":"Fecha Final","field":"fechaFin","display":"Date","columnWidth":"76px","index":5}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																subtopic1: ["wm.DataGridColumn", {"caption":"Subtopic","field":"subtopic","columnWidth":"100%","index":3}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																numeroSubtopico1: ["wm.DataGridColumn", {"caption":"No. Subtopico","field":"numeroSubtopico","display":"Number","columnWidth":"70px","index":1}, {}, {
																	format: ["wm.NumberFormatter", {}, {}]
																}]
															}],
															cur_subt_form_panel: ["wm.Panel", {"height":"100%","width":"96%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																subtopicoLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"170%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"padding":"3","validateBeforeSave":true}, {"onSuccess":"l_cur_subt_subtopicos_subtopicoLiveVariable1","onBeginInsert":"subtopicoLiveForm1BeginInsert","onInsertData":"subtopicoLiveForm1InsertData","onBeginUpdate":"subtopicoLiveForm1BeginUpdate","onUpdateData":"subtopicoLiveForm1UpdateData","onCancelEdit":"subtopicoLiveForm1CancelEdit"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem","expression":undefined}, {}],
																		wire1: ["wm.Wire", {"targetProperty":"dataOutput.unidad","source":"unidadRelatedEditor1.dataOutput","expression":undefined}, {}]
																	}],
																	cur_formularios_subtopicos_panel1: ["wm.Panel", {"height":"34px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		idSubtopicoEditor1: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		unidadRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"unidad","height":"100%","lock":true}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.unidad","expression":undefined}, {}]
																			}],
																			unidadLookup1: ["wm.Editor", {"caption":"ID Unidad","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idUnidad"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}]
																	}],
																	cur_formularios_subtopicos_panel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		subtopicoEditor1: ["wm.Editor", {"caption":"Subtopico","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"subtopico","singleLine":false,"captionAlign":"left"}, {}, {
																			editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Inserte una descripción para Subtópico","invalidMessage":"Este campo es requerido *"}, {}]
																		}],
																		subtopicEditor1: ["wm.Editor", {"caption":"Subtopic","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"subtopic","singleLine":false,"captionAlign":"left"}, {}, {
																			editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Inserte una descripción para Subtópico","invalidMessage":"Este campo es requerido *"}, {}]
																		}]
																	}],
																	cur_formularios_subtopicos_panel3: ["wm.Panel", {"height":"35px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		fechaInicioEditor2: ["wm.Editor", {"caption":"Fecha Inicio","width":"100%","height":"100%","display":"Date","readonly":true,"formField":"fechaInicio"}, {}, {
																			editor: ["wm._DateEditor", {"required":true,"promptMessage":"Seleccione un fecha","invalidMessage":"Fecha Final es un campo obligatorio"}, {}]
																		}],
																		fechaFinEditor2: ["wm.Editor", {"caption":"Fecha Final","width":"100%","height":"100%","display":"Date","readonly":true,"formField":"fechaFin"}, {}, {
																			editor: ["wm._DateEditor", {"required":true,"promptMessage":"Seleccione una Fecha","invalidMessage":"Fecha Final es un campo obligatorio"}, {}]
																		}]
																	}],
																	numeroSubtopicoEditor3: ["wm.TextEditor", {"width":"100%","caption":"Numero Subtopico","display":"Number","readonly":true,"formField":"numeroSubtopico"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	numeroSubtopicoEditor1: ["wm.Editor", {"caption":"Numero Subtopico","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"numeroSubtopico","showing":false}, {"onchange":"numeroSubtopicoEditor1Change"}, {
																		editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true}, {}, {
																			optionsVar: ["wm.Variable", {"type":"EntryData"}, {}],
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_numero_subtopico","expression":undefined}, {}]
																			}]
																		}]
																	}],
																	editPanel5: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"liveForm":"subtopicoLiveForm1","savePanel":"savePanel5","operationPanel":"operationPanel5","lock":false}, {}, {
																		savePanel5: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																			saveButton5: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel5.saveData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formInvalid","expression":undefined}, {}]
																				}]
																			}],
																			cancelButton5: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel5.cancelEdit"}]
																		}],
																		operationPanel5: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			newButton5: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel5.beginDataInsert"}],
																			updateButton5: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","disabled":true}, {"onclick":"editPanel5.beginDataUpdate"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formUneditable","expression":undefined}, {}]
																				}]
																			}],
																			deleteButton5: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel5.deleteData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formUneditable","expression":undefined}, {}]
																				}]
																			}]
																		}]
																	}]
																}],
																cur_formularios_panel_subtopico: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO SUBTOPICOS","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px wm_FontFamily_Arial","height":"373px","showing":false}, {}]
															}]
														}]
													}]
												}]
											}],
											cur_subTablas: ["wm.TabLayers", {"borderColor":"#CD0000"}, {}, {
												cur_subTablas_apr: ["wm.Layer", {"caption":"APRENDIZAJE","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_apr_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"44px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														cur_apr_encabezado_butt_crear_aprendizaje: ["wm.Button", {"_classes":{"domNode":["wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px","wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"32px","width":"32px","caption":"Crear Aprendizaje","disabled":true,"margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/new0.png","iconMargin":"6px 5px 5px 6px"}, {"onclick":"cur_apr_encabezado_butt_crear_aprendizajeClick"}],
														spacer23: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
														button7: ["wm.Button", {"height":"32px","width":"32px","caption":" ","disabled":true,"margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/edit.png","iconMargin":"6px 5px 5px 6px"}, {}],
														spacer20: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
														button6: ["wm.Button", {"height":"32px","width":"32px","caption":" ","disabled":true,"margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/view.png","iconMargin":"6px 5px 5px 6px"}, {}],
														spacer21: ["wm.Spacer", {"height":"48px","width":"5px"}, {}]
													}],
													cur_panel_apr: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
														cur_apr_panel_subtopicos: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"Aprendizaje","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#fff"}, {}, {
															panel25: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																cur_apr_datag_aprendizajeDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","scrollX":true}, {"onRowDblClick":"cur_apr_datag_aprendizajeDataGrid1RowDblClick"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_apr_aprendizajes_aprendizajeLiveVariable1","expression":undefined}, {}]
																	}],
																	idAprendizaje1: ["wm.DataGridColumn", {"caption":" ","field":"idAprendizaje","columnWidth":"50px"}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	fechaEsperada1: ["wm.DataGridColumn", {"caption":"Fecha esperada","field":"fechaEsperada","display":"Date","columnWidth":"83px","index":1}, {}, {
																		format: ["wm.DateFormatter", {}, {}]
																	}],
																	aprendizaje1: ["wm.DataGridColumn", {"caption":"Aprendizaje","field":"aprendizaje","columnWidth":"100%","index":2}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	learning1: ["wm.DataGridColumn", {"caption":"Learning","field":"learning","columnWidth":"100%","index":3}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	peso1: ["wm.DataGridColumn", {"caption":"Peso","field":"peso","display":"Number","columnWidth":"36px","index":4}, {}, {
																		format: ["wm.NumberFormatter", {}, {}]
																	}],
																	column1: ["wm.DataGridColumn", {"caption":"Dimensión <br>Comprensión","field":"dimensionCurricular.dimensionCurricular","columnWidth":"80px","index":6}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column2: ["wm.DataGridColumn", {"caption":"Dimensión <br>Curricular","field":"dimensionComprension.dimensionComprension","columnWidth":"80px","index":7}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column3: ["wm.DataGridColumn", {"caption":"Inteligencia","field":"inteligencia.inteligencia","columnWidth":"80px","index":8}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column4: ["wm.DataGridColumn", {"caption":"Nivel <br>Esperado","field":"nivelEsperado.nivelEsperado","columnWidth":"70px","index":9}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}]
																}],
																panel26: ["wm.Panel", {"height":"100%","width":"96%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																	aprendizajeLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"padding":"3","validateBeforeSave":true}, {"onSuccess":"l_cur_apr_aprendizajes_aprendizajeLiveVariable1","onBeginInsert":"aprendizajeLiveForm1BeginInsert","onBeginUpdate":"aprendizajeLiveForm1BeginUpdate","onInsertData":"aprendizajeLiveForm1InsertData","onUpdateData":"aprendizajeLiveForm1UpdateData","onCancelEdit":"aprendizajeLiveForm1CancelEdit"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem","expression":undefined}, {}],
																			wire1: ["wm.Wire", {"targetProperty":"dataOutput.dimensionComprension","source":"dimensionComprensionRelatedEditor1.dataOutput","expression":undefined}, {}],
																			wire2: ["wm.Wire", {"targetProperty":"dataOutput.dimensionCurricular","source":"dimensionCurricularRelatedEditor1.dataOutput","expression":undefined}, {}],
																			wire3: ["wm.Wire", {"targetProperty":"dataOutput.subtopico","source":"relatedEditor1.dataOutput","expression":undefined}, {}],
																			wire4: ["wm.Wire", {"targetProperty":"dataOutput.nivelEsperado","source":"relatedEditor11.dataOutput","expression":undefined}, {}],
																			wire5: ["wm.Wire", {"targetProperty":"dataOutput.inteligencia","source":"relatedEditor2.dataOutput","expression":undefined}, {}]
																		}],
																		panel16: ["wm.Panel", {"height":"38px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			idAprendizajeEditor1: ["wm.Editor", {"caption":"ID Aprendizaje","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idAprendizaje"}, {}, {
																				editor: ["wm._NumberEditor", {}, {}]
																			}],
																			relatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_BackgroundColor_VeryLightGray"]},"formField":"subtopico","height":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.subtopico","expression":undefined}, {}],
																					wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"subtopicoLookup7.selectedItem","expression":undefined}, {}]
																				}],
																				subtopicoLookup6: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																					editor: ["wm._NumberEditor", {"required":true}, {}]
																				}]
																			}]
																		}],
																		panel17: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			aprendizajeEditor1: ["wm.Editor", {"caption":"Aprendizaje","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"aprendizaje","singleLine":false}, {}, {
																				editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Ingrese la descripción del Aprendizaje","invalidMessage":"Este campo es obligatorio *","tooltipDisplayTime":3000}, {}]
																			}],
																			learningEditor1: ["wm.Editor", {"caption":"Learning","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"learning","singleLine":false}, {}, {
																				editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Ingrese la descripción del Aprendizaje","invalidMessage":"Este campo es obligatorio *","tooltipDisplayTime":3000}, {}]
																			}]
																		}],
																		panel27: ["wm.Panel", {"height":"133px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			panel28: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																				fechaEsperadaEditor1: ["wm.Editor", {"caption":"Fecha esperada","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaEsperada"}, {}, {
																					editor: ["wm._DateEditor", {"required":true,"promptMessage":"Seleccione una Fecha"}, {}]
																				}],
																				pesoEditor3: ["wm.TextEditor", {"width":"100%","caption":"Peso","display":"Select","readonly":true,"formField":"peso"}, {}, {
																					editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"1,2,3,4,5","required":true}, {}, {
																						optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																					}]
																				}],
																				ejeIdEjeEditor1: ["wm.Editor", {"caption":"Eje (Primer eje curricular)","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"ejeIdEje"}, {}, {
																					editor: ["wm._SelectEditor", {"displayField":"ejeTematico","dataField":"idEje","required":true}, {}, {
																						binding: ["wm.Binding", {}, {}, {
																							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaEjes","expression":undefined}, {}]
																						}]
																					}]
																				}],
																				eje2IdEjeEditor1: ["wm.Editor", {"caption":"Eje (Segundo eje curricular)","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"eje2IdEje"}, {}, {
																					editor: ["wm._SelectEditor", {"displayField":"ejeTematico","dataField":"idEje"}, {}, {
																						binding: ["wm.Binding", {}, {}, {
																							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaEjes2","expression":undefined}, {}]
																						}]
																					}]
																				}],
																				eje3IdEjeEditor1: ["wm.Editor", {"caption":"Eje (Tercer eje curricular)","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"eje3IdEje"}, {}, {
																					editor: ["wm._SelectEditor", {"displayField":"ejeTematico","dataField":"idEje"}, {}, {
																						binding: ["wm.Binding", {}, {}, {
																							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaEjes3","expression":undefined}, {}]
																						}]
																					}]
																				}]
																			}],
																			panel29: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																				relatedEditor11: ["wm.RelatedEditor", {"formField":"nivelEsperado","lock":true,"fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.nivelEsperado","expression":undefined}, {}],
																						wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"nivelEsperadoLookup1.selectedItem","expression":undefined}, {}]
																					}],
																					nivelEsperadoLookup1: ["wm.Editor", {"caption":"Nivel Esperado","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
																						editor: ["wm._LookupEditor", {"required":true,"displayField":"nivelEsperado","autoDataSet":false,"startUpdate":false}, {}, {
																							binding: ["wm.Binding", {}, {}, {
																								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_nivel_esperado","expression":undefined}, {}]
																							}]
																						}]
																					}]
																				}],
																				dimensionComprensionRelatedEditor1: ["wm.RelatedEditor", {"formField":"dimensionComprension","lock":true}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.dimensionComprension","expression":undefined}, {}],
																						wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"dimensionComprensionLookup1.selectedItem","expression":undefined}, {}]
																					}],
																					dimensionComprensionLookup1: ["wm.Editor", {"caption":"Dimensión de la comprensión","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
																						editor: ["wm._LookupEditor", {"required":true,"displayField":"dimensionComprension","autoDataSet":false,"startUpdate":false}, {}, {
																							binding: ["wm.Binding", {}, {}, {
																								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaDimension_comprension","expression":undefined}, {}]
																							}]
																						}]
																					}]
																				}],
																				dimensionCurricularRelatedEditor1: ["wm.RelatedEditor", {"formField":"dimensionCurricular","lock":true}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.dimensionCurricular","expression":undefined}, {}],
																						wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"dimensionCurricularLookup1.selectedItem","expression":undefined}, {}]
																					}],
																					dimensionCurricularLookup1: ["wm.Editor", {"caption":"Dimensión curricular","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
																						editor: ["wm._LookupEditor", {"required":true,"displayField":"dimensionCurricular","autoDataSet":false,"startUpdate":false}, {}, {
																							binding: ["wm.Binding", {}, {}, {
																								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaDimension_curricular","expression":undefined}, {}]
																							}]
																						}]
																					}]
																				}],
																				relatedEditor2: ["wm.RelatedEditor", {"formField":"inteligencia","lock":true,"fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.inteligencia","expression":undefined}, {}],
																						wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"inteligenciaLookup1.selectedItem","expression":undefined}, {}]
																					}],
																					inteligenciaLookup1: ["wm.Editor", {"caption":"Inteligencia ","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
																						editor: ["wm._LookupEditor", {"required":true,"displayField":"inteligencia","autoDataSet":false,"startUpdate":false}, {}, {
																							binding: ["wm.Binding", {}, {}, {
																								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_ls_inteligencias","expression":undefined}, {}]
																							}]
																						}]
																					}]
																				}]
																			}]
																		}],
																		editPanel1: ["wm.EditPanel", {"liveForm":"aprendizajeLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","lock":false}, {}, {
																			savePanel1: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																				saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
																					}]
																				}],
																				cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
																			}],
																			operationPanel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																				newButton1: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
																				updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
																					}]
																				}],
																				deleteButton1: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.deleteData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}]
																	}],
																	cur_formularios_panel_aprendizaje: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO DE APRENDIZAJES","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","height":"505px","showing":false}, {}]
																}]
															}]
														}]
													}]
												}],
												cur_subTablas_metas: ["wm.Layer", {"caption":"OTRAS METAS","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_metas_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"42px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														cur_metas_encabezado_butt_crear_meta: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"32px","width":"32px","caption":"Crear Meta","disabled":true,"margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/new.png","iconMargin":"6px 5px 5px 6px"}, {"onclick":"cur_metas_encabezado_butt_crear_metaClick"}],
														spacer24: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
														button8: ["wm.Button", {"height":"32px","width":"32px","caption":" ","margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/edit.png","iconMargin":"6px 5px 5px 6px"}, {}],
														spacer18: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
														button9: ["wm.Button", {"height":"32px","width":"32px","caption":" ","margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/view.png","iconMargin":"6px 5px 5px 6px"}, {}],
														spacer19: ["wm.Spacer", {"height":"48px","width":"5px"}, {}]
													}],
													cur_panel_metas: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
														cur_metas_panel_metas: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"Metas","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#fff"}, {}, {
															panel30: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																cur_metas_datag_otrasmetasDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onRowDblClick":"cur_metas_datag_otrasmetasDataGrid1RowDblClick"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_metas_metas_otrasmetasLiveVariable1","expression":undefined}, {}]
																	}],
																	idOtraMeta1: ["wm.DataGridColumn", {"caption":" ","field":"idOtraMeta"}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	meta1: ["wm.DataGridColumn", {"caption":"Meta (Descripción)","field":"meta","autoSize":undefined,"columnWidth":"832px","index":1}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","display":"Date","autoSize":undefined,"index":2}, {}, {
																		format: ["wm.DateFormatter", {}, {}]
																	}],
																	logrado1: ["wm.DataGridColumn", {"caption":"Logrado","field":"logrado","autoSize":undefined,"columnWidth":"67px","index":3}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}]
																}],
																panel31: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																	cur_formularios_panel_otrasmetas: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO METAS","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontFamily_Arial wm_FontSizePx_14px","height":"300px","showing":false}, {}],
																	otrasmetasLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"165%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_cur_metas_metas_otrasmetasLiveVariable1","onBeginInsert":"otrasmetasLiveForm1BeginInsert"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_metas_datag_otrasmetasDataGrid1.selectedItem","expression":undefined}, {}],
																			wire1: ["wm.Wire", {"targetProperty":"dataOutput.subtopico","source":"relatedEditor7.dataOutput","expression":undefined}, {}]
																		}],
																		cur_formularios_metas_panel1: ["wm.Panel", {"height":"38px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			idOtraMetaEditor1: ["wm.Editor", {"caption":"ID Otra Meta","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idOtraMeta"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}],
																			relatedEditor7: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"subtopico","height":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_metas_datag_otrasmetasDataGrid1.selectedItem.subtopico","expression":undefined}, {}]
																				}],
																				subtopicoLookup1: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																					editor: ["wm._NumberEditor", {"required":true}, {}]
																				}]
																			}]
																		}],
																		metaEditor1: ["wm.Editor", {"caption":"Meta","width":"100%","height":"175px","display":"TextArea","readonly":true,"formField":"meta","singleLine":false}, {}, {
																			editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Ingrese la descripción de la Meta","invalidMessage":"Este campo es obligatorio *"}, {}]
																		}],
																		fechaEditor1: ["wm.Editor", {"caption":"Fecha","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fecha"}, {}, {
																			editor: ["wm._DateEditor", {"required":true,"promptMessage":"Seleccione una Fecha","invalidMessage":"Este campo es obligatorio *"}, {}]
																		}],
																		logradoEditor1: ["wm.Editor", {"caption":"Logrado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"logrado","displayValue":true,"emptyValue":"false"}, {}, {
																			editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																		}],
																		editPanel2: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"liveForm":"otrasmetasLiveForm1","savePanel":"savePanel2","operationPanel":"operationPanel2","lock":false}, {}, {
																			savePanel2: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																				saveButton2: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel2.saveData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formInvalid","expression":undefined}, {}]
																					}]
																				}],
																				cancelButton2: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel2.cancelEdit"}]
																			}],
																			operationPanel2: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																				newButton2: ["wm.RoundedButton", {"caption":"Nueva","height":"100%"}, {"onclick":"editPanel2.beginDataInsert"}],
																				updateButton2: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","disabled":true}, {"onclick":"editPanel2.beginDataUpdate"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
																					}]
																				}],
																				deleteButton2: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel2.deleteData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}],
												cur_subTablas_act: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"ACTIVIDADES","horizontalAlign":"left","verticalAlign":"top","borderColor":"#fff"}, {}, {
													cur_act_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"42px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														cur_act_encabezado_butt_crear_actividad: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"32px","width":"32px","caption":"Crear Actividad","disabled":true,"margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/new.png","iconMargin":"6px 5px 5px 6px"}, {"onclick":"cur_act_encabezado_butt_crear_actividadClick"}],
														spacer25: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
														button11: ["wm.Button", {"height":"32px","width":"32px","caption":" ","margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/edit.png","iconMargin":"6px 5px 5px 6px"}, {}],
														spacer16: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
														button10: ["wm.Button", {"height":"32px","width":"32px","caption":" ","margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/view.png","iconMargin":"6px 5px 5px 6px"}, {}],
														spacer17: ["wm.Spacer", {"height":"48px","width":"5px"}, {}]
													}],
													cur_panel_act: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
														cur_act_panel_actividades: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"Actividad","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#fff"}, {}, {
															panel32: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																cur_act_datag_actividadDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_10px"]},"border":"0"}, {"onRowDblClick":"cur_act_datag_actividadDataGrid1RowDblClick","onSelected":"cur_act_datag_actividadDataGrid1Selected"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_act_actividades_actividadLiveVariable1","expression":undefined}, {}]
																	}],
																	idActividad1: ["wm.DataGridColumn", {"caption":" ","field":"idActividad"}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	actividad1: ["wm.DataGridColumn", {"caption":"Actividad","field":"actividad","autoSize":undefined,"columnWidth":"706px","index":1}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","display":"Date","index":2}, {}, {
																		format: ["wm.DateFormatter", {}, {}]
																	}],
																	requeridoAlternativo1: ["wm.DataGridColumn", {"caption":"Requerido","field":"requeridoAlternativo","autoSize":undefined,"columnWidth":"102px","index":3}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column1: ["wm.DataGridColumn", {"caption":"Tipo Valoracion","field":"tipoValoracion.tipoValoracion","columnWidth":"143px","index":4}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}]
																}],
																panel33: ["wm.Panel", {"height":"100%","width":"96%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																	actividadLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_FontSizePx_10px"]},"height":"224%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"padding":"3"}, {"onSuccess":"l_cur_act_actividades_actividadLiveVariable1","onBeginInsert":"actividadLiveForm1BeginInsert","onBeforeOperation":"l_cur_formularios_actividad_listaTipoActividades"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem","expression":undefined}, {}],
																			wire1: ["wm.Wire", {"targetProperty":"dataOutput.tipoActividad","source":"relatedEditor8.dataOutput","expression":undefined}, {}],
																			wire2: ["wm.Wire", {"targetProperty":"dataOutput.tipoValoracion","source":"relatedEditor9.dataOutput","expression":undefined}, {}],
																			wire3: ["wm.Wire", {"targetProperty":"dataOutput.tipoDesempeno","source":"relatedEditor10.dataOutput","expression":undefined}, {}],
																			wire4: ["wm.Wire", {"targetProperty":"dataOutput.subtopico","source":"relatedEditor3.dataOutput","expression":undefined}, {}]
																		}],
																		idActividadEditor1: ["wm.Editor", {"caption":"ID Actividad","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idActividad"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}],
																		relatedEditor3: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"subtopico","lock":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem.subtopico","expression":undefined}, {}],
																				wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"subtopicoLookup2.selectedItem","expression":undefined}, {}]
																			}],
																			subtopicoLookup3: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}],
																		fechaEditor2: ["wm.Editor", {"caption":"Fecha","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fecha"}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}],
																		cur_formularios_actividad_panel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			actividadEditor1: ["wm.Editor", {"caption":"Actividad","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"actividad","singleLine":false}, {}, {
																				editor: ["wm._TextAreaEditor", {}, {}]
																			}],
																			requeridoAlternativoEditor1: ["wm.Editor", {"caption":"Requerido","height":"26px","display":"CheckBox","readonly":true,"formField":"requeridoAlternativo","displayValue":true,"emptyValue":"false"}, {}, {
																				editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																			}]
																		}],
																		relatedEditor8: ["wm.RelatedEditor", {"formField":"tipoActividad","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem.tipoActividad","expression":undefined}, {}],
																				wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoActividadLookup1.selectedItem","expression":undefined}, {}]
																			}],
																			tipoActividadLookup1: ["wm.Editor", {"caption":"Tipo de Actividad","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {"onchange":"tipoActividadLookup1Change"}, {
																				editor: ["wm._LookupEditor", {"displayField":"tipoActividad","autoDataSet":false,"startUpdate":false,"allowNone":true}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_actividad_listaTipoActividades","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}],
																		relatedEditor9: ["wm.RelatedEditor", {"formField":"tipoValoracion","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem.tipoValoracion","expression":undefined}, {}],
																				wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoValoracionLookup1.selectedItem","expression":undefined}, {}]
																			}],
																			tipoValoracionLookup1: ["wm.Editor", {"caption":"Retroalimentación","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
																				editor: ["wm._LookupEditor", {"displayField":"tipoValoracion","autoDataSet":false,"startUpdate":false,"allowNone":true}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_actividad_listaTipoValoracion","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}],
																		relatedEditor10: ["wm.RelatedEditor", {"formField":"tipoDesempeno","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem.tipoDesempeno","expression":undefined}, {}],
																				wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoDesempenoLookup1.selectedItem","expression":undefined}, {}]
																			}],
																			tipoDesempenoLookup1: ["wm.Editor", {"caption":"Desempeño","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","disabled":true}, {}, {
																				editor: ["wm._LookupEditor", {"displayField":"tipoDesempeno","autoDataSet":false,"startUpdate":false,"allowNone":true}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_actividad_listaTipoDesempeno","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}],
																		editPanel6: ["wm.EditPanel", {"liveForm":"actividadLiveForm1","savePanel":"savePanel6","operationPanel":"operationPanel6","lock":false}, {}, {
																			savePanel6: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																				saveButton6: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel6.saveData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel6.formInvalid","expression":undefined}, {}]
																					}]
																				}],
																				cancelButton6: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel6.cancelEdit"}]
																			}],
																			operationPanel6: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																				newButton6: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel6.beginDataInsert"}],
																				updateButton6: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","disabled":true}, {"onclick":"editPanel6.beginDataUpdate"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel6.formUneditable","expression":undefined}, {}]
																					}]
																				}],
																				deleteButton6: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel6.deleteData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel6.formUneditable","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}]
																	}],
																	cur_formularios_panel_actividad: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO ACTIVIDAD","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px wm_FontFamily_Arial","height":"349px","showing":false}, {}]
																}]
															}]
														}]
													}]
												}],
												cur_subTablas_rec: ["wm.Layer", {"caption":"RECURSOS","horizontalAlign":"left","verticalAlign":"top","borderColor":"#fff"}, {}, {
													cur_rec_encabezado_recursos: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"42px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														cur_rec_encabezado_butt_crear_recurso: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"32px","width":"32px","caption":"Crear Recurso","disabled":true,"margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/new.png","iconMargin":"6px 5px 5px 6px"}, {"onclick":"cur_rec_encabezado_butt_crear_recursoClick"}],
														spacer26: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
														button12: ["wm.Button", {"height":"32px","width":"32px","caption":" ","margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/edit.png","iconMargin":"6px 5px 5px 6px"}, {}],
														spacer12: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
														button13: ["wm.Button", {"height":"32px","width":"32px","caption":" ","margin":"0","borderColor":"#bbb","iconUrl":"resources/images/news_icons/view.png","iconMargin":"6px 5px 5px 6px"}, {}],
														spacer15: ["wm.Spacer", {"height":"48px","width":"5px"}, {}]
													}],
													cur_panel_rec: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
														cur_rec_panel_recursos: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"Recurso","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#fff"}, {}, {
															panel34: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																cur_rec_datag_recursosDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onRowDblClick":"cur_rec_datag_recursosDataGrid1RowDblClick"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_rec_recursos_recursoLiveVariable1","expression":undefined}, {}]
																	}],
																	idRecurso1: ["wm.DataGridColumn", {"caption":" ","field":"idRecurso","display":"Number","autoSize":undefined}, {}, {
																		format: ["wm.NumberFormatter", {}, {}]
																	}],
																	recurso1: ["wm.DataGridColumn", {"caption":"Recurso","field":"recurso","columnWidth":"60%","index":1}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	ubicacion1: ["wm.DataGridColumn", {"caption":"Direccion Recurso http://","field":"ubicacion","dataExpression":"'<a href=\"'+${ubicacion}+'\" target=\"_blank\">'+${ubicacion}+'</a>'","columnWidth":"120%","index":3}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}]
																}],
																panel35: ["wm.Panel", {"height":"100%","width":"96%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																	recursoLiveForm2: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_10px","wm_BackgroundColor_VeryLightGray"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_cur_rec_recursos_recursoLiveVariable1","onBeginInsert":"recursoLiveForm2BeginInsert","onBeforeOperation":"l_cur_formularios_recursos_tipoRecurso"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_rec_datag_recursosDataGrid1.selectedItem","expression":undefined}, {}],
																			wire1: ["wm.Wire", {"targetProperty":"dataOutput.tipoRecurso","source":"tipoRecursoRelatedEditor2.dataOutput","expression":undefined}, {}],
																			wire2: ["wm.Wire", {"targetProperty":"dataOutput.subtopico","source":"subtopicoRelatedEditor1.dataOutput","expression":undefined}, {}]
																		}],
																		cur_formulario_recurso_panel1: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			idRecursoEditor2: ["wm.Editor", {"caption":"ID Recurso","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idRecurso"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}],
																			subtopicoRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"subtopico","height":"100%"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_rec_datag_recursosDataGrid1.selectedItem.subtopico","expression":undefined}, {}],
																					wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"subtopicoLookup5.selectedItem","expression":undefined}, {}]
																				}],
																				subtopicoLookup4: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																					editor: ["wm._NumberEditor", {"required":true}, {}]
																				}]
																			}]
																		}],
																		recursoEditor1: ["wm.Editor", {"caption":"Recurso","width":"100%","height":"119px","display":"TextArea","readonly":true,"formField":"recurso","singleLine":false}, {}, {
																			editor: ["wm._TextAreaEditor", {}, {}]
																		}],
																		ubicacionEditor2: ["wm.Editor", {"caption":"Direccion Http://","width":"100%","height":"26px","readonly":true,"formField":"ubicacion"}, {}, {
																			editor: ["wm._TextEditor", {}, {}]
																		}],
																		idSyIdIdSyEditor1: ["wm.Editor", {"caption":"IdSyIdIdSy","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSyIdIdSy","showing":false}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		tipoRecursoRelatedEditor2: ["wm.RelatedEditor", {"formField":"tipoRecurso","height":"33px"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_rec_datag_recursosDataGrid1.selectedItem.tipoRecurso","expression":undefined}, {}],
																				wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoRecursoLookup2.selectedItem","expression":undefined}, {}]
																			}],
																			tipoRecursoLookup2: ["wm.Editor", {"caption":"Tipo recurso","width":"100%","height":"100%","display":"Lookup","readonly":true,"formField":""}, {}, {
																				editor: ["wm._LookupEditor", {"required":true,"displayField":"tipoRecurso","autoDataSet":false,"startUpdate":false}, {}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_recursos_tipoRecurso","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}],
																		cur_formulario_recurso_panel2: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			cur_formularios_butt_cargar_recurso: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_16px"]},"height":"100%","width":"193px","caption":"Recursos","iconUrl":"resources/images/ico/page_up.png","iconMargin":"0 2px 0 0"}, {"onclick":"cur_formularios_butt_cargar_recursoClick"}]
																		}],
																		editPanel13: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"liveForm":"recursoLiveForm2","savePanel":"savePanel13","operationPanel":"operationPanel13","lock":false,"height":"50px"}, {}, {
																			savePanel13: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																				saveButton13: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel13.saveData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel13.formInvalid","expression":undefined}, {}]
																					}]
																				}],
																				cancelButton13: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel13.cancelEdit"}]
																			}],
																			operationPanel13: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																				newButton13: ["wm.RoundedButton", {"caption":"Nuevo","width":"131px","height":"100%"}, {"onclick":"editPanel13.beginDataInsert"}],
																				updateButton13: ["wm.RoundedButton", {"caption":"Actualizar","width":"136px","height":"100%","disabled":true}, {"onclick":"editPanel13.beginDataUpdate"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel13.formUneditable","expression":undefined}, {}]
																					}]
																				}],
																				deleteButton13: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel13.deleteData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel13.formUneditable","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}]
																	}],
																	cur_formularios_panel_recurso: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO RECURSOS","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_12px","margin":"1","height":"364px","showing":false}, {}]
																}]
															}]
														}]
													}]
												}]
											}]
										}],
										cur_formularios: ["wm.Layer", {"caption":"FORMULARIOS","horizontalAlign":"center","verticalAlign":"top","borderColor":"#CD0000"}, {}]
									}]
								}],
								calificaciones: ["wm.Layer", {"caption":"Calificaciones","horizontalAlign":"left","verticalAlign":"top","borderColor":"#CD0000","roles":["4","5","6","8","9","10","7","25","11","13","14","18","19","20","21","23","22"]}, {"onShow":"calificacionesShow"}, {
									calf_panel_encabezado_principal: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","padding":"5","layoutKind":"left-to-right","lock":true}, {}, {
										textEditor6: ["wm.TextEditor", {"width":"308px","showing":false,"caption":"idTipoPersona"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataValue","source":"a_getTipoPersona.usuario"}, {}]
											}],
											editor: ["wm._TextEditor", {}, {}]
										}],
										l_calif_alumnos_panel1_butt_cambiarPanel: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px","wm_FontSizePx_12px"]},"height":"40px","width":"135px","caption":"Aprendizajes","margin":"","borderColor":"#D14836","iconUrl":"resources/images/ico/canvas_holder.png","iconWidth":"30px","iconMargin":"","roles":["10","11","4","5","6","9","18","19","20","22","21","23","24"]}, {"onclick":"l_calif_alumnos_panel1_butt_cambiarPanelClick"}],
										l_calif_alumnos_panel1_estudiantes: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"height":"40px","width":"137px","caption":"Estudiantes","margin":"0","borderColor":"#3C9300","iconUrl":"resources/images/ico/user-comment.png","iconMargin":"0 0px 0 0","roles":["4","5","6","9","10","11","20","21","22","23","24"]}, {"onclick":"l_calif_alumnos_panel1_estudiantesClick"}],
										l_calif_alumnos_panel1_butt_promocion: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"height":"40px","width":"135px","caption":"Promoción","margin":"","borderColor":"#CD3333","iconUrl":"resources/images/ico/prom32x32.png","iconMargin":"0 0px 0 0","roles":["6","9","10","13","7","11","25"]}, {"onclick":"l_calif_alumnos_panel1_butt_promocionClick"}],
										button_activities: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"height":"40px","width":"107px","caption":"Actividades","margin":"0","borderColor":"#4D90FE","iconUrl":"resources/images/news_icons/activities.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0","roles":["4","10","11","22","21","20","23","24","5","6","18","19","9"]}, {"onclick":"button_activitiesClick"}],
										spacer9: ["wm.Spacer", {"height":"48px","width":"3px"}, {}]
									}],
									calf_panel_encabezado_opciones: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"45px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
										calif_encabezado_opciones_sel_sy: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"width":"240px","caption":"Año escolar","captionSize":"100%","height":"26px"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
												}]
											}]
										}],
										calif_encabezado_opciones_sel_grado: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"width":"200px","caption":"Grado","captionSize":"70%","height":"26px"}, {"onchange":"calif_encabezado_opciones_sel_gradoChange"}, {
											editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
												}]
											}]
										}],
										calif_encabezado_opciones_sel_curso: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_FontSizePx_16px"],"domNode":["wm_FontSizePx_16px"]},"width":"200px","caption":"Curso","captionSize":"70%","disabled":true,"height":"26px"}, {"onchange":"calif_encabezado_opciones_sel_cursoChange"}, {
											editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_encabezado_opciones_listaCurso","expression":undefined}, {}]
												}]
											}]
										}],
										calif_encabezado_opciones_butt_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"43px","width":"48px","caption":"","borderColor":"#3654a1","iconUrl":"resources/images/news_icons/icon3.png","iconWidth":"35px","iconHeight":"35px","iconMargin":"0 0px 0 0"}, {"onclick":"calif_encabezado_opciones_butt_limpiarClick"}],
										calif_encabezado_opciones_butt_reporte: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"43px","width":"48px","disabled":true,"borderColor":"#3654a1","iconUrl":"resources/images/ico/download.png"}, {"onclick":"calif_encabezado_opciones_butt_reporteClick"}],
										calif_encabezado_opciones_butt_limpiar1: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_24px"]},"height":"43px","width":"48px","caption":"☝","iconMargin":"0 0px 0 0","showing":false,"roles":["6","7","9","10","13"]}, {"onclick":"calif_encabezado_opciones_butt_limpiar1Click"}],
										calif_encabezado_opciones_butt_reporte_pendientes: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"43px","width":"48px","caption":"","disabled":true,"borderColor":"#3654a1","iconUrl":"resources/images/news_icons/icon2.png","iconMargin":"0 0px 0 0"}, {"onclick":"calif_encabezado_opciones_butt_reporte_pendientesClick"}],
										sp1: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
										calif_alumnos_panel1_butt_show: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"35px","width":"30px","caption":"","margin":"","borderColor":"#D9D9D9","iconUrl":"resources/images/buttons/left.png","iconWidth":"30px","iconHeight":"20px","iconMargin":"8px 0px 10px 5px","showing":false}, {"onclick":"calif_alumnos_panel1_butt_showClick"}],
										calif_alumnos_panel1_butt_hide: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"35px","width":"30px","caption":"","margin":"","borderColor":"#D9D9D9","iconUrl":"resources/images/buttons/right.png","iconWidth":"30px","iconHeight":"20px","iconMargin":"8px 0px 10px 5px","showing":false}, {"onclick":"calif_alumnos_panel1_butt_hideClick"}],
										l_calif_alumnos_butt_ocultar: ["wm.Button", {"_classes":{"domNode":["wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px","wm_FontSizePx_14px","wm_FontColor_Black"]},"height":"35px","width":"30px","caption":"","margin":"","borderColor":"#D9D9D9","iconUrl":"resources/images/buttons/left.png","iconWidth":"30px","iconHeight":"20px","iconMargin":"8px 0px 10px 5px"}, {"onclick":"l_calif_alumnos_butt_ocultarClick"}],
										l_calif_alumnos_butt_mostrar: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_Border_BottomStyleCurved4px","wm_FontSizePx_14px","wm_Border_TopStyleCurved4px"]},"height":"35px","width":"30px","caption":"","margin":"","borderColor":"#D9D9D9","iconUrl":"resources/images/buttons/right.png","iconWidth":"30px","iconHeight":"20px","iconMargin":"8px 0px 10px 5px"}, {"onclick":"l_calif_alumnos_butt_mostrarClick"}],
										spacer4: ["wm.Spacer", {"height":"100%","width":"3px"}, {}]
									}],
									calif_panel_contenedor_aprendizaje: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"borderColor":"#000000"}, {}, {
										calif_contendor_layer_principal: ["wm.Layers", {}, {}, {
											calif_contendor_sublayer_principal: ["wm.Layer", {"caption":"layer20","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												calif_contendor_panel1: ["wm.Panel", {"height":"50%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"3","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
													calif_asig_datag_asignaturasDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#fff","width":"380px"}, {"onSelected":"calif_asig_datag_asignaturasDataGrid1Selected","onDeselected":"calif_asig_datag_asignaturasDataGrid1Deselected"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contenedor_tablas_asignaturas_docentes","expression":undefined}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":" ","field":"id.asignaturaIdAsignatura","columnWidth":"58px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"120%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Docente","field":"id.nombreLdap","columnWidth":"85px","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													tablaUnidades: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_Unidades","expression":undefined}, {}]
														}],
														unidad1: ["wm.DataGridColumn", {"caption":"Unidad","field":"unidad","columnWidth":"213px","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idUnidad1: ["wm.DataGridColumn", {"caption":"ID Unidad","field":"idUnidad","columnWidth":"58px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Numero Unidad","field":"numeroUnidad","columnWidth":"65px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													tablaSubtopicos: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_Subtopicos","expression":undefined}, {}]
														}],
														subtopico1: ["wm.DataGridColumn", {"caption":"Subtopico","field":"subtopico","columnWidth":"259px","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"ID Subtopico","field":"idSubtopico","columnWidth":"76px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													splitter2: ["wm.Splitter", {"height":"100%","width":"4px","border":"0"}, {}],
													calif_asig_datag_aprendizajesDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#fff"}, {"onSelected":"calif_asig_datag_aprendizajesDataGrid1Selected","onSelectionChanged":"calif_asig_datag_aprendizajesDataGrid1SelectionChanged"}, {
														idAprendizaje1: ["wm.DataGridColumn", {"caption":" ","field":"id.idAprendizaje","columnWidth":"55px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														aprendizaje1: ["wm.DataGridColumn", {"caption":"Aprendizaje","field":"id.aprendizaje","columnWidth":"150%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Learning","field":"id.learning","columnWidth":"150%","index":3}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"Unidad","field":"id.unidad","columnWidth":"100%","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Subtopico","field":"id.subtopico","columnWidth":"100%","index":8}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Fecha esperada","field":"id.fechaEsperada","display":"Date","columnWidth":"80px","index":4}, {}, {
															format: ["wm.DateFormatter", {}, {}]
														}],
														column5: ["wm.DataGridColumn", {"caption":"#U","field":"id.numeroUnidad","display":"Number","columnWidth":"18px","index":5}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"#S","field":"id.numeroSubtopico","display":"Number","columnWidth":"18px","index":7}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contenedor_tablas_aprendizajes","expression":undefined}, {}]
														}],
														column7: ["wm.DataGridColumn", {"caption":"Peso","field":"id.peso","columnWidth":"40px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}],
												calif_contenedor_panel1: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"5%","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
													blink_message: ["wm.Label", {"height":"100%","width":"100%","border":"0","caption":"Importante: Seleccione un <u>Aprendizaje</u> y <u>Estudiante</u> para ver los detalles de calificaciones.","singleLine":false,"showing":false}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													calif_contenedor_cadena_curriculo: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"100%","border":"0","align":"right"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}],
												calif_contenedor_panel_datagrids: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"3","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
													calif_contenedor_datagrids_layer_principal: ["wm.Layers", {}, {}, {
														calif_contenedor_datagrids_sublayer: ["wm.Layer", {"caption":"layer13","horizontalAlign":"left","verticalAlign":"top","border":"3","borderColor":"#bf5e5e"}, {}, {
															calif_contenedor_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_20px"]},"height":"35px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
																calif_contenedor_lab_alumnos: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_TextDecoration_Bold","wm_FontColor_White"]},"height":"100%","width":"124px","border":"0","caption":"ALUMNOS"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																calif_contenedor_spacer_alumnos: ["wm.Spacer", {"height":"100%","width":"70%"}, {}],
																calif_contenedor_sel_Genero: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_FontFamily_Geneva","wm_FontColor_White"],"domNode":["wm_FontSizePx_16px"]},"width":"150%","caption":"GENERO","captionSize":"65%"}, {"onchange":"l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso"}, {
																	editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Masculino, Femenino"}, {}, {
																		optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																	}]
																}],
																calif_contenedor_img_limpiar: ["wm.Picture", {"height":"27px","border":"0","width":"39px","source":"resources/images/ico/dialog-close.png","hint":"Restaurar todos los alumnos del curso"}, {"onclick":"calif_contenedor_img_limpiarClick"}]
															}],
															calif_alumnos_curso_datag_alumnosDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#fff"}, {"onSelected":"calif_alumnos_curso_datag_alumnosDataGrid1Selected","onSelectionChanged":"calif_alumnos_curso_datag_alumnosDataGrid1SelectionChanged"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso","expression":undefined}, {}]
																}],
																column1: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","dataExpression":"${id.nombre1}+\" \"+${id.nombre2}","columnWidth":"100%","index":3}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column2: ["wm.DataGridColumn", {"caption":" ","field":"id.sexo","dataExpression":"if(${id.sexo}==\"Masculino\") {'<img src=\"resources/images/ico/Male.png\" height=\"28\" width=\"28\" /><center>'}  if(${id.sexo}==\"Femenino\") {'<img src=\"resources/images/ico/Female.png\" height=\"28\" width=\"28\" /><center>'}","columnWidth":"38px"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column3: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","dataExpression":"${id.apellido1}+\" \"+${id.apellido2}","columnWidth":"100%","index":2}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column4: ["wm.DataGridColumn", {"caption":"Curso","field":"id.curso","columnWidth":"100px","index":4}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column5: ["wm.DataGridColumn", {"caption":"ID Persona","field":"id.personaIdPersona","columnWidth":"66px","index":1}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}],
															log_acciones_docentesForm: ["wm.LiveForm", {"verticalAlign":"top","horizontalAlign":"left","showing":false}, {}]
														}]
													}],
													splitter4: ["wm.Splitter", {"height":"100%","width":"4px","border":"0"}, {}],
													spacer10: ["wm.Spacer", {"height":"48px","width":"1px"}, {}],
													layers2: ["wm.Layers", {}, {}, {
														layer12: ["wm.Layer", {"caption":"layer12","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															calif_contenedor_panel_encabezado2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_Green"]},"height":"35px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
																label4: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_TextDecoration_Bold","wm_FontColor_White"]},"height":"100%","width":"231%","border":"0","caption":"DETALLES DE CALIFICACIONES"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}],
															panel36: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"height":"262px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																liveForm1: ["wm.LiveForm", {"height":"256px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"fitToContentHeight":true}, {"onBeginInsert":"liveForm1BeginInsert","onSuccess":"alumnoCALIFICACIONES"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"calificaciones.selectedItem","expression":undefined}, {}],
																		wire1: ["wm.Wire", {"targetProperty":"dataOutput.inscAlumCurso","source":"inscAlumCursoRelatedEditor1.dataOutput","expression":undefined}, {}]
																	}],
																	panel39: ["wm.Panel", {"height":"31px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		idInscAlumAprendizajeEditor1: ["wm.Editor", {"caption":"ID","width":"113px","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumAprendizaje"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}],
																		fechaIngresoEditor1: ["wm.Editor", {"caption":"Fecha Ingreso:","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso","disabled":true,"showing":false}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}],
																		calificacionEditor1: ["wm.Editor", {"caption":"Calificación:","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"calificacion"}, {}, {
																			editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"En Progreso, Competente, Avanzado, Magistral"}, {}, {
																				optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																			}]
																		}],
																		fechaLogroEditor1: ["wm.Editor", {"caption":"Fecha Logro:","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaLogro"}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}]
																	}],
																	idSyEditor1: ["wm.Editor", {"caption":"IdSy","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSy","disabled":true,"showing":false}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	calificacionNumEditor1: ["wm.Editor", {"caption":"CalificacionNum","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"calificacionNum","disabled":true,"showing":false}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	comentarioEditor1: ["wm.Editor", {"caption":"Comentario:","width":"100%","height":"105px","display":"TextArea","readonly":true,"formField":"comentario","captionAlign":"left","captionPosition":"top"}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	personaIdPersonaEditor1: ["wm.Editor", {"caption":"ID PERSONA:","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"personaIdPersona","disabled":true}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	aprendizajeIdAprendizajeEditor1: ["wm.Editor", {"caption":"ID APRENDIZAJE","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"aprendizajeIdAprendizaje","disabled":true}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	periodoIdPeriodoEditor1: ["wm.Editor", {"caption":"PeriodoIdPeriodo","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"periodoIdPeriodo","disabled":true,"showing":false}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	inscAlumCursoRelatedEditor1: ["wm.RelatedEditor", {"formField":"inscAlumCurso"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"calificaciones.selectedItem.inscAlumCurso","expression":undefined}, {}],
																			wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"inscAlumCursoLookup2.selectedItem","expression":undefined}, {}]
																		}],
																		inscAlumCursoLookup1: ["wm.Editor", {"caption":"ID ALUMNO*CURSO:","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumCurso"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}]
																	}],
																	editPanel8: ["wm.EditPanel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_FontSizePx_10px"]},"liveForm":"liveForm1","savePanel":"savePanel8","operationPanel":"operationPanel8"}, {}, {
																		savePanel8: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																			saveButton8: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel8.saveData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel8.formInvalid","expression":undefined}, {}]
																				}]
																			}],
																			cancelButton8: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel8.cancelEdit"}]
																		}],
																		operationPanel8: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			newButton8: ["wm.RoundedButton", {"caption":"Ingresar Calificacion","width":"160px","height":"100%"}, {"onclick":"editPanel8.beginDataInsert"}],
																			updateButton8: ["wm.RoundedButton", {"caption":"Actualizar Calificación","width":"170px","height":"100%","disabled":true}, {"onclick":"editPanel8.beginDataUpdate"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel8.formUneditable","expression":undefined}, {}]
																				}]
																			}],
																			deleteButton8: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel8.deleteData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel8.formUneditable","expression":undefined}, {}]
																				}]
																			}]
																		}]
																	}]
																}]
															}],
															dataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#fff","height":"100px"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contenedor_tablas_calificacion_final","expression":undefined}, {}]
																}],
																fechaLogro1: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"id.fechaLogro","display":"Date","index":1}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																calificacion1: ["wm.DataGridColumn", {"caption":"Calificación","field":"id.calificacion","columnWidth":"120%","index":3}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																calificacionNum1: ["wm.DataGridColumn", {"caption":"Puntaje","field":"id.calificacionNum","display":"Number","columnWidth":"120%","index":4}, {}, {
																	format: ["wm.NumberFormatter", {"digits":2}, {}]
																}]
															}],
															inscalumaprendizajeLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","height":"519%"}, {}, {
																inscalumaprendizajeGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_Border_DropShadow","wm_BackgroundColor_Green"]},"horizontalAlign":"left","verticalAlign":"top","title":"CALIFICACIONES DEL APRENDIZAJE","captionClasses":"wm_Border_DropShadow wm_BackgroundColor_Green wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#fff","height":"237px","border":"3,3,3,3"}, {}, {
																	inscalumaprendizajeDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"inscalumaprendizajeDataGrid1Selected","onRowDblClick":"inscalumaprendizajeDataGrid1RowDblClick"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2","expression":undefined}, {}]
																		}],
																		idInscAlumAprendizaje1: ["wm.DataGridColumn", {"caption":" ","field":"idInscAlumAprendizaje","columnWidth":"55px"}, {}, {
																			format: ["wm.DataFormatter", {}, {}]
																		}],
																		fechaLogro1: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"fechaLogro","display":"Date","columnWidth":"78px","index":2}, {}, {
																			format: ["wm.DateFormatter", {}, {}]
																		}],
																		calificacion1: ["wm.DataGridColumn", {"caption":"Calificación","field":"calificacion","columnWidth":"78px","index":3}, {}, {
																			format: ["wm.DataFormatter", {}, {}]
																		}],
																		comentario1: ["wm.DataGridColumn", {"caption":"Comentario","field":"comentario","columnWidth":"150%","index":5}, {}, {
																			format: ["wm.DataFormatter", {}, {}]
																		}],
																		fechaIngreso1: ["wm.DataGridColumn", {"caption":"Fecha Ingreso","field":"fechaIngreso","display":"Date","columnWidth":"60%","index":6}, {}, {
																			format: ["wm.DateFormatter", {}, {}]
																		}]
																	}]
																}],
																splitter7: ["wm.Splitter", {"height":"4px","width":"100%","border":"0"}, {}],
																inscalumaprendizajeDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_Border_DropShadow","wm_BackgroundColor_Green"]},"horizontalAlign":"left","verticalAlign":"top","title":"INGRESAR/MODIFICAR CALIFICACIÓN","captionClasses":"wm_Border_DropShadow wm_BackgroundColor_Green wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#fff"}, {}, {
																	inscalumaprendizajeLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"290%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true}, {"onBeginInsert":"inscalumaprendizajeLiveForm1BeginInsert","onBeginUpdate":"inscalumaprendizajeLiveForm1BeginUpdate","onSuccess":"inscalumaprendizajeLiveForm1Success","onDeleteData":"inscalumaprendizajeLiveForm1DeleteData","onCancelEdit":"inscalumaprendizajeLiveForm1CancelEdit","onInsertData":"inscalumaprendizajeLiveForm1InsertData","onUpdateData":"inscalumaprendizajeLiveForm1UpdateData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid1.selectedItem","expression":undefined}, {}],
																			wire1: ["wm.Wire", {"targetProperty":"dataOutput.aprendizaje","source":"aprendizajeRelatedEditor1.dataOutput","expression":undefined}, {}],
																			wire2: ["wm.Wire", {"targetProperty":"dataOutput.inscAlumCurso","source":"inscAlumCursoRelatedEditor2.dataOutput","expression":undefined}, {}],
																			wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor1.dataOutput","expression":undefined}, {}]
																		}],
																		panel40: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"34px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			idInscAlumAprendizajeEditor2: ["wm.Editor", {"caption":"ID","width":"153px","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumAprendizaje"}, {}, {
																				editor: ["wm._NumberEditor", {}, {}]
																			}],
																			fechaIngresoEditor2: ["wm.Editor", {"caption":"Fecha Ingreso","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso","disabled":true,"showing":false}, {}, {
																				editor: ["wm._DateEditor", {}, {}]
																			}],
																			fechaLogroEditor2: ["wm.Editor", {"caption":"Fecha Logro","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaLogro"}, {}, {
																				editor: ["wm._DateEditor", {"required":true}, {}]
																			}]
																		}],
																		panel22: ["wm.Panel", {"height":"32px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			calificacionEditor2: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Calificación","width":"150%","height":"26px","display":"Select","readonly":true,"formField":"calificacion"}, {"onchange":"calificacionEditor2Change"}, {
																				editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"En Progreso, Competente, Avanzado, Magistral","required":true}, {}, {
																					optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																				}]
																			}],
																			label33: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_BackgroundColor_VeryLightGray"]},"height":"26px","width":"37px","border":"0","caption":"»»"}, {}, {
																				format: ["wm.DataFormatter", {}, {}]
																			}],
																			calificacionNumEditor2: ["wm.Editor", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_BackgroundColor_VeryLightGray"],"captionNode":["wm_FontColor_LightBlue","wm_BackgroundColor_VeryLightGray"]},"width":"100%","height":"26px","readonly":true,"formField":"calificacionNum","disabled":true}, {}, {
																				editor: ["wm._TextEditor", {"required":true}, {}]
																			}]
																		}],
																		comentarioEditor2: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"110px","display":"TextArea","readonly":true,"formField":"comentario","captionAlign":"left","captionPosition":"top"}, {}, {
																			editor: ["wm._TextAreaEditor", {}, {}]
																		}],
																		userNameIaa: ["wm.TextEditor", {"width":"100%","caption":"Docente","readonly":true,"formField":"usuario"}, {}, {
																			editor: ["wm._TextEditor", {}, {}]
																		}],
																		panel8: ["wm.Panel", {"height":"35px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			aprendizajeRelatedEditor1: ["wm.RelatedEditor", {"formField":"aprendizaje"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid1.selectedItem.aprendizaje","expression":undefined}, {}],
																					wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"aprendizajeLookup2.selectedItem","expression":undefined}, {}]
																				}],
																				aprendizajeLookup1: ["wm.Editor", {"caption":"ID Aprendizaje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAprendizaje"}, {}, {
																					editor: ["wm._NumberEditor", {"required":true}, {}]
																				}]
																			}],
																			personaRelatedEditor1: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid1.selectedItem.persona","expression":undefined}, {}],
																					wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"personaLookup2.selectedItem","expression":undefined}, {}]
																				}],
																				personaLookup1: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																					editor: ["wm._NumberEditor", {"required":true}, {}]
																				}],
																				label32: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"24px","width":"855px","border":"0","caption":"Apreciado Visitante: Realice con éxito la consulta de calificaciónes <b><u>siguiendo  paso a paso el proceso."}, {}, {
																					format: ["wm.DataFormatter", {}, {}]
																				}]
																			}]
																		}],
																		aprendizajeaux: ["wm.TextEditor", {"width":"309px","showing":false,"caption":"aprendizaje","display":"Number"}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		personaaux: ["wm.TextEditor", {"width":"294px","showing":false,"caption":"persona","display":"Number"}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		editPanel9: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"inscalumaprendizajeLiveForm1","savePanel":"savePanel9","operationPanel":"operationPanel9","lock":false}, {}, {
																			savePanel9: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																				saveButton9: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel9.saveData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel9.formInvalid","expression":undefined}, {}]
																					}]
																				}],
																				cancelButton9: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel9.cancelEdit"}]
																			}],
																			operationPanel9: ["wm.Panel", {"height":"40px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																				newButton9: ["wm.RoundedButton", {"caption":"Nuevo","width":"95px","height":"100%"}, {"onclick":"editPanel9.beginDataInsert"}],
																				updateButton9: ["wm.RoundedButton", {"caption":"Actualizar","width":"105px","height":"100%","disabled":true}, {"onclick":"editPanel9.beginDataUpdate"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel9.formUneditable","expression":undefined}, {}]
																					}]
																				}],
																				deleteButton9: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel9.deleteData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel9.formUneditable","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}],
									actividades: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
										activity_container: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
											layers18: ["wm.Layers", {"width":"50%","borderColor":"#ffffff"}, {}, {
												layer41: ["wm.Layer", {"caption":"layer41","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													sy_activities: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"100%","caption":"Año escolar","display":"Text","readonly":true}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													subjects_activities: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"100%","caption":"Asignaturas"}, {"onchange":"subjects_activitiesChange"}, {
														editor: ["wm._SelectEditor", {"displayField":"asignatura","dataField":"idcurso","displayExpression":"${idasignatura}+\" - \"+${asignatura}+\" - \"+${curso}"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"activitiesGetSubjectsByUser","expression":undefined}, {}]
															}]
														}]
													}],
													activitiesDataGrid: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","borderColor":"#ffffff"}, {"onSelected":"activitiesDataGridSelected","onSelectionChanged":"activitiesDataGridSelectionChanged","onRowDblClick":"activitiesDataGridRowDblClick","onCellClick":"activitiesDataGridCellClick"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"actividad_lv","expression":undefined}, {}]
														}],
														fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","display":"Date","columnWidth":"98px","index":2}, {}, {
															format: ["wm.DateFormatter", {}, {}]
														}],
														actividad1: ["wm.DataGridColumn", {"caption":"Actividad","field":"actividad","columnWidth":"100%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idActividad1: ["wm.DataGridColumn", {"caption":"+","field":"idActividad","columnWidth":"50px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}]
											}],
											layers17: ["wm.Layers", {"width":"80%","borderColor":"#ffffff"}, {}, {
												layer40: ["wm.Layer", {"caption":"layer40","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													panel19: ["wm.Panel", {"height":"30px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														actividad_form_label1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_FontSizePx_10px"]},"height":"100%","width":"100%","border":"0","caption":"Opción 1: Usa <u>Calificar a todos</u> para calificar masivamente siga los siguientes pasos:"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													top_header_form: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"350px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														inscalumactividadLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_12px"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true}, {"onSuccess":"inscalumactividadLiveVariable1","onBeginInsert":"inscalumactividadLiveForm1BeginInsert"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumactividadDataGrid1.selectedItem","expression":undefined}, {}],
																wire1: ["wm.Wire", {"targetProperty":"dataOutput.actividad","source":"actividadRelatedEditor1.dataOutput","expression":undefined}, {}],
																wire2: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor3.dataOutput","expression":undefined}, {}]
															}],
															panel15: ["wm.Panel", {"height":"65px","width":"100%","horizontalAlign":"right","verticalAlign":"bottom","layoutKind":"left-to-right"}, {}, {
																descripcion_califica_masivo: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"100%","width":"100%","border":"0","caption":"1. Seleccione una Asignatura. <br>2. Seleccione la actividad a calificar.<br>3. Haga clic en 'Calificar'. <br>4. Haga clic en 'Calificar a todos' y verifique que los registros de actividades calificadas.","singleLine":false}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}],
															panel14: ["wm.Panel", {"height":"30px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																actividad_form_label: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_FontSizePx_10px"]},"height":"100%","width":"100%","border":"0","caption":"Opción 2: Selecciona el estudiante y da clic el botón <u>Guardar</u> para calificar de manera individualmente."}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}],
															idInscAlumActividadEditor1: ["wm.Editor", {"caption":"ID Actividad","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumActividad"}, {}, {
																editor: ["wm._NumberEditor", {}, {}]
															}],
															logradoEditor2: ["wm.Editor", {"caption":"Logrado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"logrado","displayValue":true,"emptyValue":"false"}, {}, {
																editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
															}],
															fechaEditor3: ["wm.Editor", {"caption":"Fecha","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fecha"}, {}, {
																editor: ["wm._DateEditor", {"required":true}, {}]
															}],
															comentarioEditor4: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"74px","display":"TextArea","readonly":true,"formField":"comentario"}, {}, {
																editor: ["wm._TextAreaEditor", {"required":true}, {}]
															}],
															panel6: ["wm.Panel", {"height":"54px","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																actividadRelatedEditor1: ["wm.RelatedEditor", {"formField":"actividad"}, {}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumactividadDataGrid1.selectedItem.actividad","expression":undefined}, {}]
																	}],
																	actividadLookup1: ["wm.Editor", {"caption":"ID Actividad","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idActividad"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}]
																}],
																personaRelatedEditor3: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumactividadDataGrid1.selectedItem.persona","expression":undefined}, {}]
																	}],
																	personaLookup4: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}]
																}]
															}],
															editPanel12: ["wm.EditPanel", {"liveForm":"inscalumactividadLiveForm1","savePanel":"savePanel12","operationPanel":"operationPanel12","lock":false,"verticalAlign":"middle","height":"43px"}, {}, {
																savePanel12: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																	calificaTodos: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"35px","width":"184px","caption":"Calificar a todos","margin":"2","borderColor":"","iconUrl":"resources/images/news_icons/users.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"calificaTodosClick"}],
																	spacer11: ["wm.Spacer", {"height":"100%","width":"40%"}, {}],
																	saveButton12: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel12.saveData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel12.formInvalid","expression":undefined}, {}]
																		}]
																	}],
																	cancelButton12: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel12.cancelEdit"}]
																}],
																operationPanel12: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
																	newButton12: ["wm.RoundedButton", {"caption":"Calificar","width":"100px","height":"100%"}, {"onclick":"editPanel12.beginDataInsert"}],
																	updateButton12: ["wm.RoundedButton", {"caption":"Actualizar","width":"112px","height":"100%","disabled":true}, {"onclick":"editPanel12.beginDataUpdate"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel12.formUneditable","expression":undefined}, {}]
																		}]
																	}],
																	deleteButton12: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel12.deleteData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel12.formUneditable","expression":undefined}, {}]
																		}]
																	}]
																}]
															}]
														}]
													}],
													panel7: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														activities_studentsDataGrid: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","borderColor":"#ffffff"}, {"onSelected":"inscalumactividadLiveVariable1"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"actividad_estudiantes","expression":undefined}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"+","field":"persona.codigo","columnWidth":"50px"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column1: ["wm.DataGridColumn", {"caption":"Nombres","field":"persona.nombre1","dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}","columnWidth":"100%","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Apellidos","field":"persona.apellido1","dataExpression":"${persona.apellido1}+\" \"+${persona.apellido2}","columnWidth":"100%","index":1}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}]
														}],
														inscalumactividadDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]},"border":"0"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumactividadLiveVariable1","expression":undefined}, {}]
															}],
															logrado1: ["wm.DataGridColumn", {"caption":" ","field":"logrado","display":"Number","dataExpression":"if(${logrado}==\"1\") {'<img src=\"resources/images/news_icons/ok.png\" height=\"18\" width=\"18\" /><center>'}  if(${logrado}==\"0\") {'<img src=\"resources/images/news_icons/bad.png\" height=\"18\" width=\"18\" /><center>'}","columnWidth":"22px"}, {}, {
																format: ["wm.NumberFormatter", {}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"Nombre","field":"persona.nombre1","dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}","columnWidth":"100%","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Apellidos","field":"persona.apellido1","dataExpression":"${persona.apellido1}+ \" \"+${persona.apellido2}","columnWidth":"100%","index":1}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}],
									calif_panel_contenedor_alumnos: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
										layers7: ["wm.Layers", {}, {}, {
											layer21: ["wm.Layer", {"caption":"layer21","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												calif_alumnos_panel_datagrids: ["wm.Panel", {"height":"402px","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"3","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
													calif_alumnos_datagrids_datag_alumnos_cursos: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#FFF","width":"380px"}, {"onSelected":"calif_alumnos_datagrids_datag_alumnos_cursosSelected","onSelectionChanged":"calif_alumnos_datagrids_datag_alumnos_cursosSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_alumnosCursos","expression":undefined}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","dataExpression":"${id.apellido1}+\" \"+${id.apellido2}","columnWidth":"100%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column8: ["wm.DataGridColumn", {"caption":" ","field":"id.idPersona","columnWidth":"64px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","dataExpression":"${id.nombre1}+\" \"+${id.nombre2}","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													splitter6: ["wm.Splitter", {"height":"100%","width":"4px","border":"0"}, {}],
													calif_alumnos_datagrids_datag_alumnos_asignaturas: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#fff"}, {"onSelected":"calif_alumnos_datagrids_datag_alumnos_asignaturasSelected","onSelectionChanged":"calif_alumnos_datagrids_datag_alumnos_asignaturasSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_alumnos_asignaturas","expression":undefined}, {}]
														}],
														porcentaje1: ["wm.DataGridColumn", {"caption":"Porcentaje","field":"porcentaje","display":"Number","columnWidth":"68px","index":4}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														esperados1: ["wm.DataGridColumn", {"caption":"Esperados","field":"esperados","display":"Number","columnWidth":"68px","index":2}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														calificacion1: ["wm.DataGridColumn", {"caption":"Calificación","field":"calificacion","columnWidth":"57px","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														asignatura1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"asignatura","columnWidth":"300px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														logrados1: ["wm.DataGridColumn", {"caption":"Logrados","field":"logrados","display":"Number","columnWidth":"59px","index":3}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														puntaje1: ["wm.DataGridColumn", {"caption":"Puntaje","field":"puntaje","display":"Number","columnWidth":"58px","index":5}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":" ","field":"idasignatura","columnWidth":"65px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													unidad: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"unidadlv","expression":undefined}, {}]
														}],
														numeroUnidad1: ["wm.DataGridColumn", {"caption":"Nº Unidad","field":"numeroUnidad","display":"Number","columnWidth":"82px","index":2}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														unidad1: ["wm.DataGridColumn", {"caption":"Unidad","field":"unidad","columnWidth":"241px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idUnidad1: ["wm.DataGridColumn", {"caption":"ID","field":"idUnidad"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}],
												aux13: ["wm.TextEditor", {"showing":false,"caption":"aux","disabled":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												panel50: ["wm.Panel", {"height":"349px","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"3","layoutKind":"left-to-right","borderColor":"#fff"}, {}, {
													subtopico: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"subtopicolv","expression":undefined}, {}]
														}],
														idSubtopico1: ["wm.DataGridColumn", {"caption":"ID","field":"idSubtopico","columnWidth":"88px","index":4}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														subtopico1: ["wm.DataGridColumn", {"caption":"Subtopico","field":"subtopico","columnWidth":"467px","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													calif_alumnos_datagrids_datag_aprendizajes_asignaturas: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#fff","height":"345px"}, {"onSelectionChanged":"calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelectionChanged","onSelected":"calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelected"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_aprendizajes","expression":undefined}, {}]
														}],
														fechaEsperada1: ["wm.DataGridColumn", {"caption":"Fecha esperada","field":"id.fechaEsperada","display":"Date","columnWidth":"90px","index":4}, {}, {
															format: ["wm.DateFormatter", {}, {}]
														}],
														idAprendizaje1: ["wm.DataGridColumn", {"caption":" ","field":"id.idAprendizaje","columnWidth":"60px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														aprendizaje1: ["wm.DataGridColumn", {"caption":"Aprendizaje","field":"id.aprendizaje","columnWidth":"150%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Subtopico","field":"id.subtopico","columnWidth":"100%","index":8}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"Unidad","field":"id.unidad","columnWidth":"100%","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Learning","field":"id.learning","columnWidth":"150%","index":3}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column5: ["wm.DataGridColumn", {"caption":"#U","field":"id.numeroUnidad","display":"Number","columnWidth":"16px","index":5}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"#S","field":"id.numeroSubtopico","display":"Number","columnWidth":"16px","index":7}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Peso","field":"id.peso","columnWidth":"29px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}],
												panel_registro_calificaciones_modo_uduario: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"3","layoutKind":"left-to-right"}, {}, {
													panel_calificaciones_modo_usuario: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"10"}, {}, {
														inscalumaprendizajeDataGrid2: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]},"border":"0","height":"227px"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1","expression":undefined}, {}]
															}],
															idInscAlumAprendizaje1: ["wm.DataGridColumn", {"caption":" ","field":"idInscAlumAprendizaje","columnWidth":"50px"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															fechaLogro1: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"fechaLogro","display":"Date","columnWidth":"90px","index":1}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															calificacion1: ["wm.DataGridColumn", {"caption":"Calificación","field":"calificacion","columnWidth":"100px","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															comentario1: ["wm.DataGridColumn", {"caption":"Comentario","field":"comentario","columnWidth":"100%","index":3}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}]
														}],
														calif_alumnos_datag_calificacionFinal: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_calificaciones_finales","expression":undefined}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"Calificación","field":"id.calificacion","columnWidth":"140px","index":1}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"id.fechaLogro","display":"Date","columnWidth":"122px"}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															column1: ["wm.DataGridColumn", {"caption":"Puntaje","field":"id.calificacionNum","display":"Number","columnWidth":"100%","index":2}, {}, {
																format: ["wm.NumberFormatter", {"digits":2}, {}]
															}]
														}]
													}],
													inscalumaprendizajeDetailsPanel1: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundChromeBar_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"REGISTRAR/MODIFICAR CALIFICACIÓN","captionClasses":"wm_BackgroundChromeBar_Blue wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px","margin":"1","borderColor":"#3C9300","border":"3,3,3,3"}, {}, {
														inscalumaprendizajeLiveForm2: ["wm.LiveForm", {"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"inscalumaprendizajeLiveForm2Success","onBeginInsert":"inscalumaprendizajeLiveForm2BeginInsert","onCancelEdit":"inscalumaprendizajeLiveForm2CancelEdit","onBeginUpdate":"inscalumaprendizajeLiveForm2BeginUpdate","onInsertData":"inscalumaprendizajeLiveForm2InsertData","onUpdateData":"inscalumaprendizajeLiveForm2UpdateData","onDeleteData":"inscalumaprendizajeLiveForm2DeleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid2.selectedItem","expression":undefined}, {}],
																wire1: ["wm.Wire", {"targetProperty":"dataOutput.aprendizaje","source":"aprendizajeRelatedEditor2.dataOutput","expression":undefined}, {}],
																wire2: ["wm.Wire", {"targetProperty":"dataOutput.inscAlumCurso","source":"inscAlumCursoRelatedEditor3.dataOutput","expression":undefined}, {}],
																wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor2.dataOutput","expression":undefined}, {}]
															}],
															panel52: ["wm.Panel", {"height":"266px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																layers9: ["wm.Layers", {"_classes":{"domNode":["wm_FontSizePx_12px"]}}, {}, {
																	layer23: ["wm.Layer", {"caption":"layer23","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		idInscAlumAprendizajeEditor3: ["wm.Editor", {"caption":"ID","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumAprendizaje"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}],
																		fechaIngresoEditor3: ["wm.Editor", {"caption":"Fecha Ingreso","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso","disabled":true,"showing":false}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}],
																		fechaLogroEditor3: ["wm.Editor", {"caption":"Fecha Logro","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaLogro"}, {}, {
																			editor: ["wm._DateEditor", {"required":true}, {}]
																		}],
																		calificacionEditor3: ["wm.Editor", {"caption":"Calificación","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"calificacion"}, {"onchange":"calificacionEditor3Change"}, {
																			editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"En Progreso, Competente, Avanzado, Magistral"}, {}, {
																				optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																			}]
																		}],
																		calificacionNumEditor3: ["wm.Editor", {"caption":"CalificacionNum","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"calificacionNum","disabled":true,"showing":false}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		calificacionNumEditor23: ["wm.TextEditor", {"width":"100%","caption":"Puntaje","display":"Number","disabled":true,"readonly":true,"formField":"calificacionNum"}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		comentarioEditor3: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"132px","display":"TextArea","readonly":true,"formField":"comentario","captionAlign":"left","captionPosition":"top"}, {}, {
																			editor: ["wm._TextAreaEditor", {}, {}]
																		}]
																	}]
																}],
																layers8: ["wm.Layers", {"_classes":{"domNode":["wm_FontSizePx_12px"]}}, {}, {
																	layer22: ["wm.Layer", {"caption":"layer22","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		aprendizajeRelatedEditor2: ["wm.RelatedEditor", {"formField":"aprendizaje","lock":true}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid2.selectedItem.aprendizaje","expression":undefined}, {}]
																			}],
																			aprendizajeLookup3: ["wm.Editor", {"caption":"ID Aprendizaje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAprendizaje"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}],
																		personaRelatedEditor2: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid2.selectedItem.persona","expression":undefined}, {}]
																			}],
																			personaLookup3: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}],
																		registrante: ["wm.TextEditor", {"width":"100%","caption":"Docente","readonly":true,"formField":"usuario"}, {}, {
																			editor: ["wm._TextEditor", {}, {}]
																		}]
																	}]
																}]
															}],
															panel105: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
																aux199: ["wm.TextEditor", {"width":"100%","caption":"auxIDPersona"}, {}, {
																	editor: ["wm._TextEditor", {}, {}]
																}],
																aux200: ["wm.TextEditor", {"width":"100%","caption":"auxIDAprendizaje"}, {}, {
																	editor: ["wm._TextEditor", {}, {}]
																}]
															}],
															editPanel10: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"inscalumaprendizajeLiveForm2","savePanel":"savePanel10","operationPanel":"operationPanel10","lock":false}, {}, {
																savePanel10: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																	saveButton10: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel10.saveData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel10.formInvalid","expression":undefined}, {}]
																		}]
																	}],
																	cancelButton10: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel10.cancelEdit"}]
																}],
																operationPanel10: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	newButton10: ["wm.RoundedButton", {"caption":"Nuevo","width":"90px","height":"100%"}, {"onclick":"editPanel10.beginDataInsert"}],
																	updateButton10: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","disabled":true}, {"onclick":"editPanel10.beginDataUpdate"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel10.formUneditable","expression":undefined}, {}]
																		}]
																	}],
																	deleteButton10: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel10.deleteData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel10.formUneditable","expression":undefined}, {}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}],
									calif_panel_contenedor_promocion: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false,"roles":["6","7","10","9","11","13","25"]}, {}, {
										calif_panel_contenedor_top: ["wm.Layers", {}, {}, {
											calif_layer_contenedor_promocion: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												promociones_panel_top: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
													promocion_sel_ao_escolar: ["wm.SelectEditor", {"width":"220px","caption":"Año Escolar","captionSize":"70%"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
															}]
														}]
													}],
													promocion_sel_grado: ["wm.SelectEditor", {"width":"160px","caption":"Grado"}, {"onchange":"promocion_sel_gradoChange"}, {
														editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
															}]
														}]
													}],
													promocion_sel_curso: ["wm.SelectEditor", {"width":"160px","caption":"Curso"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_promocion_curso","expression":undefined}, {}]
															}]
														}]
													}],
													promocion_box_codigo: ["wm.NumberEditor", {"caption":"Codigo","display":"Text","roles":["7","25","10"]}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													promocion_butt_buscar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"96px","caption":"Buscar","borderColor":"#3366CC"}, {"onclick":"l_promocion_insc_alum_curso"}],
													promocion_butt_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_BackgroundColor_LightGray"]},"height":"38px","width":"96px","caption":"Limpiar","border":"0","borderColor":"#FFFFFF"}, {"onclick":"promocion_butt_limpiarClick"}],
													button3: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightGray","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"38px","width":"40px","caption":"","border":"0","iconUrl":"resources/images/ico/refresh.png"}, {"onclick":"l_promocion_promocionLiveVariable1"}]
												}],
												promocion_panel_container: ["wm.Panel", {"height":"804px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													promocion_container_datag_personas_x_curso: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0"}, {"onSelected":"l_promocion_promocionLiveVariable1","onSelectionChanged":"promocion_container_datag_personas_x_cursoSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_promocion_insc_alum_curso","expression":undefined}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"●","field":"id.codigo","columnWidth":"80px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","dataExpression":"${id.apellido1}+\" \"+${id.apellido2}","columnWidth":"100%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","dataExpression":"${id.nombre1}+\" \"+${id.nombre2}","columnWidth":"100%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													panel9: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														promocionLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
															promocionGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","height":"20%"}, {}, {
																promocionDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"promocionDataGrid1Selected"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_promocion_promocionLiveVariable1","expression":undefined}, {}]
																	}],
																	column2: ["wm.DataGridColumn", {"caption":"Aprobado","field":"aprobado","dataExpression":"if(${aprobado}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${aprobado}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } ","columnWidth":"90%","index":1}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column3: ["wm.DataGridColumn", {"caption":"Promovido","field":"promovido","dataExpression":"if(${promovido}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${promovido}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } ","columnWidth":"90%","index":2}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column4: ["wm.DataGridColumn", {"caption":"Autorización Docencia","field":"autorizadoAcademico","dataExpression":"if(${autorizadoAcademico}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${autorizadoAcademico}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } ","columnWidth":"90%","index":3}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column5: ["wm.DataGridColumn", {"caption":"Autorización Financiera","field":"autorizadoFinanciera","dataExpression":"if(${autorizadoFinanciera}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${autorizadoFinanciera}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } ","columnWidth":"90%","index":4}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column1: ["wm.DataGridColumn", {"caption":"Calificación","field":"calificacionChar","columnWidth":"75%","index":5}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column6: ["wm.DataGridColumn", {"caption":"Año Escolar","field":"sy.schoolYear","columnWidth":"80px","index":6}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column7: ["wm.DataGridColumn", {"caption":"•","field":"idPromocion","columnWidth":"60px"}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}]
																}]
															}],
															promocionDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Formulario Acciones de Promoción","captionClasses":"wm_BackgroundGradient_Blue wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1"}, {}, {
																promocionLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_promocion_promocionLiveVariable1","onBeginInsert":"promocionLiveForm1BeginInsert","onBeginUpdate":"promocionLiveForm1BeginUpdate","onUpdateData":"promocionLiveForm1UpdateData","onCancelEdit":"promocionLiveForm1CancelEdit","onInsertData":"promocionLiveForm1InsertData"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionDataGrid1.selectedItem","expression":undefined}, {}],
																		wire1: ["wm.Wire", {"targetProperty":"dataOutput.sy","source":"syRelatedEditor1.dataOutput","expression":undefined}, {}],
																		wire2: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor5.dataOutput","expression":undefined}, {}]
																	}],
																	editPanel3: ["wm.EditPanel", {"liveForm":"promocionLiveForm1","savePanel":"savePanel3","operationPanel":"operationPanel3","lock":false}, {}, {
																		savePanel3: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																			saveButton3: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel3.saveData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formInvalid","expression":undefined}, {}]
																				}]
																			}],
																			cancelButton3: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel3.cancelEdit"}]
																		}],
																		operationPanel3: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			newButton3: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel3.beginDataInsert"}],
																			updateButton3: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel3.beginDataUpdate"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
																				}]
																			}],
																			deleteButton3: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel3.deleteData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
																				}]
																			}]
																		}]
																	}],
																	idPromocionEditor1: ["wm.Editor", {"caption":"ID Promocion","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPromocion"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	aprobadoEditor1: ["wm.Editor", {"caption":"Aprobado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"aprobado","disabled":true,"displayValue":true,"emptyValue":"false","roles":["6","9","10","11","23","24"]}, {"onchange":"aprobadoEditor1Change"}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentaprobadoEditor1: ["wm.Editor", {"caption":"Comentario de Aprobación","width":"100%","height":"60px","display":"TextArea","readonly":true,"formField":"commentaprobado","roles":["6","9","10","11","23","24"]}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	promovidoEditor1: ["wm.Editor", {"caption":"Promovido","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"promovido","disabled":true,"displayValue":true,"emptyValue":"false","roles":["6","9","10","23","24"]}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentpromovidoEditor1: ["wm.Editor", {"caption":"Comentario de Promoción","width":"100%","height":"60px","display":"TextArea","readonly":true,"formField":"commentpromovido","disabled":true,"roles":["23","24","6","9","10","11"]}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	autorizadoAcademicoEditor1: ["wm.Editor", {"caption":"Autorización Docencia","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"autorizadoAcademico","displayValue":true,"emptyValue":"false","roles":["6","9","10","11","22","23"]}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentcomiteEditor1: ["wm.Editor", {"caption":"Comentario de Autorización Docente","width":"100%","height":"60px","display":"TextArea","readonly":true,"formField":"commentcomite","roles":["23","24","6","9","10","11"]}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	autorizadoFinancieraEditor1: ["wm.Editor", {"caption":"Autorización Financiera","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"autorizadoFinanciera","displayValue":true,"emptyValue":"false","roles":["7","25"]}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentfinancEditor1: ["wm.Editor", {"caption":"Comentario de Autorización Financiera","width":"100%","height":"60px","display":"TextArea","readonly":true,"formField":"commentfinanc","roles":["7","25"]}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	autorizadoPromAnticipadaEditor1: ["wm.Editor", {"caption":"Autorizado Promoción Anticipada","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"autorizadoPromAnticipada","displayValue":true,"emptyValue":"false","captionSize":"80%","roles":["6","9","10","11","23","24"]}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	calificacionEditor5: ["wm.Editor", {"caption":"Puntaje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"calificacion","disabled":true}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	calificacionCharEditor1: ["wm.Editor", {"caption":"Calificación","width":"100%","height":"26px","readonly":true,"formField":"calificacionChar","disabled":true}, {}, {
																		editor: ["wm._TextEditor", {}, {}]
																	}],
																	syRelatedEditor1: ["wm.RelatedEditor", {"formField":"sy"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionDataGrid1.selectedItem.sy","expression":undefined}, {}],
																			wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"syLookup1.selectedItem","expression":undefined}, {}]
																		}],
																		syLookup1: ["wm.Editor", {"caption":"ID Año Escolar","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","disabled":true,"displayValue":"2010-2011"}, {}, {
																			editor: ["wm._LookupEditor", {"required":true,"displayField":"schoolYear","autoDataSet":false,"startUpdate":false}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
																				}]
																			}]
																		}]
																	}],
																	panel10: ["wm.Panel", {"height":"36px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		personaRelatedEditor5: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionDataGrid1.selectedItem.persona","expression":undefined}, {}],
																				wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"personaLookup5.selectedItem","expression":undefined}, {}]
																			}],
																			personaLookup2: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}]
																	}],
																	panel11: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		promocion_butt_promover: ["wm.Button", {"height":"100%","width":"100%","caption":"FINALIZAR Y PROMOVER","iconUrl":"resources/images/ico/route.png","iconMargin":"0 0px 0 0","showing":false}, {}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								horarios: ["wm.Layer", {"caption":"Horarios","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["4","5","6","7","8","9","10","11","13","14","15","16","17","18","19","20","21","22","23","24"]}, {}, {
									HorarioPageContainer: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Horarios"}, {}]
								}],
								coordinadores: ["wm.Layer", {"caption":"Coordinador","horizontalAlign":"left","verticalAlign":"top","lock":true}, {}, {
									coordinador_page: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Coordinador","loadParentFirst":false}, {}]
								}],
								demografica: ["wm.Layer", {"caption":"Demográfica","horizontalAlign":"left","verticalAlign":"top","lock":true,"borderColor":"#CD0000","roles":["4","5","7","8","9","6","10","18","17","19","20","21","22","23","24"]}, {}, {
									pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Demografica"}, {}]
								}],
								asignaturas: ["wm.Layer", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"caption":"Asignaturas","horizontalAlign":"left","verticalAlign":"top","lock":true,"border":"3","borderColor":"#CD0000","showing":false,"roles":["7","10","8","11","22","23","21","24","6","5","4"]}, {"onShow":"asignaturasShow"}, {
									panel18: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","margin":"2"}, {}, {
										panel61: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											asignaturaLivePanel2: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
												asignaturaGridPanel3: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Tabla Asignatura","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","height":"573px"}, {}, {
													panel63: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"55px","width":"100%","horizontalAlign":"left","verticalAlign":"bottom","layoutKind":"left-to-right"}, {}, {
														label21: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"48px","width":"187px","border":"0","caption":"Buscar Asignaturas por:"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														textEditor2: ["wm.TextEditor", {"width":"160px","caption":"Codigo Asignatura","captionAlign":"left","height":"55px","captionPosition":"top"}, {}, {
															editor: ["wm._TextEditor", {}, {}]
														}],
														textEditor3: ["wm.TextEditor", {"width":"158px","caption":"Asignatura","captionAlign":"left","height":"55px","captionPosition":"top"}, {}, {
															editor: ["wm._TextEditor", {}, {}]
														}],
														textEditor4: ["wm.TextEditor", {"width":"139px","caption":"Intersidad Horaria","captionAlign":"left","height":"55px","captionPosition":"top"}, {}, {
															editor: ["wm._TextEditor", {}, {}]
														}],
														selectEditor15: ["wm.SelectEditor", {"width":"120px","caption":"Año escolar","captionAlign":"left","height":"55px","captionPosition":"top"}, {}, {
															editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
																}]
															}]
														}],
														selectEditor16: ["wm.SelectEditor", {"width":"135px","caption":"Grado","captionAlign":"left","height":"55px","captionPosition":"top"}, {}, {
															editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
																}]
															}]
														}],
														spacer38: ["wm.Spacer", {"height":"48px","width":"19px"}, {}],
														button16: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"39px","width":"74px","caption":"Buscar","margin":"2"}, {"onclick":"asignaturaLiveVariable3"}],
														button17: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"39px","width":"80px","caption":"Limpiar","margin":"2"}, {"onclick":"button17Click"}]
													}],
													asignaturaDataGrid2: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {"onRowDblClick":"asignaturaDataGrid2RowDblClick"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"asignaturaLiveVariable3","expression":undefined}, {}]
														}],
														idAsignatura1: ["wm.DataGridColumn", {"caption":"•","field":"idAsignatura","autoSize":undefined,"columnWidth":"64px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														asignatura1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"asignatura","columnWidth":"250px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														subject1: ["wm.DataGridColumn", {"caption":"Subject","field":"subject","columnWidth":"250px","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idArea1: ["wm.DataGridColumn", {"caption":"Area #1","field":"idArea1","display":"Number","autoSize":undefined,"columnWidth":"67px","index":3}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														idArea2: ["wm.DataGridColumn", {"caption":"Area #2","field":"idArea2","display":"Number","autoSize":undefined,"columnWidth":"64px","index":5}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														idArea3: ["wm.DataGridColumn", {"caption":"Area #3","field":"idArea3","display":"Number","autoSize":undefined,"columnWidth":"65px","index":7}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														idSubarea1: ["wm.DataGridColumn", {"caption":"Subarea #1","field":"idSubarea1","display":"Number","autoSize":undefined,"columnWidth":"57px","index":9}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														idSubarea2: ["wm.DataGridColumn", {"caption":"Subarea #2","field":"idSubarea2","display":"Number","autoSize":undefined,"columnWidth":"59px","index":10}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														idSubarea3: ["wm.DataGridColumn", {"caption":"Subarea #3","field":"idSubarea3","display":"Number","autoSize":undefined,"columnWidth":"63px","index":11}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Peso","field":"peso","columnWidth":"42px","index":12}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"I.H Area 1","field":"ihA1","columnWidth":"60px","index":4}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"I.H Area 2","field":"ihA2","columnWidth":"60px","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"I.H Area 3","field":"ihA3","columnWidth":"60px","index":8}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}],
												splitter5: ["wm.Splitter", {"height":"4px","width":"100%","border":"0"}, {}],
												asignaturaDetailsPanel1: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Asignaturas","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0"}, {}, {
													asignaturaLiveForm2: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_16px"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"asignaturaLiveVariable3"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"asignaturaDataGrid2.selectedItem","expression":undefined}, {}],
															wire3: ["wm.Wire", {"targetProperty":"dataOutput.sy","source":"syRelatedEditor2.dataOutput","expression":undefined}, {}],
															wire1: ["wm.Wire", {"targetProperty":"dataOutput.tipoInscAsig","source":"relatedEditor4.dataOutput","expression":undefined}, {}],
															wire2: ["wm.Wire", {"targetProperty":"dataOutput.grado","source":"gradoRelatedEditor2.dataOutput","expression":undefined}, {}]
														}],
														panel62: ["wm.Panel", {"height":"162px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															layers13: ["wm.Layers", {}, {}, {
																layer31: ["wm.Layer", {"caption":"layer31","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																	idAsignaturaEditor2: ["wm.Editor", {"caption":"ID Asignatura","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAsignatura"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	asignaturaEditor2: ["wm.Editor", {"caption":"Asignatura","width":"100%","height":"26px","readonly":true,"formField":"asignatura"}, {}, {
																		editor: ["wm._TextEditor", {}, {}]
																	}],
																	panel89: ["wm.Panel", {"height":"25px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		idArea1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_Yellow"]},"caption":"Area 1","width":"100%","height":"25px","display":"Select","readonly":true,"formField":"idArea1"}, {}, {
																			editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_Area1","expression":undefined}, {}]
																				}]
																			}]
																		}],
																		IhA1: ["wm.NumberEditor", {"_classes":{"domNode":["wm_BackgroundColor_Yellow"]},"disabled":true,"height":"25px","caption":"I.H","readonly":true,"formField":"ihA1"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true,"places":"2","promptMessage":"Digite aqui la Intensidad Horaria para el Area #1"}, {}]
																		}]
																	}],
																	panel90: ["wm.Panel", {"height":"25px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		idArea2: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_Purple"]},"caption":"Area 2","width":"100%","height":"25px","display":"Select","readonly":true,"formField":"idArea2"}, {}, {
																			editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_Area2","expression":undefined}, {}]
																				}]
																			}]
																		}],
																		IhA2: ["wm.NumberEditor", {"_classes":{"domNode":["wm_BackgroundColor_Purple"]},"disabled":true,"height":"25px","caption":"I.H","readonly":true,"formField":"ihA2"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true,"places":"2","promptMessage":"Digite aqui la Intensidad Horaria para el Area #2"}, {}]
																		}]
																	}],
																	panel91: ["wm.Panel", {"height":"25px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		idArea3: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_Green"]},"caption":"Area 3","width":"100%","height":"25px","display":"Select","readonly":true,"formField":"idArea3"}, {}, {
																			editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_Area3","expression":undefined}, {}]
																				}]
																			}]
																		}],
																		IhA3: ["wm.NumberEditor", {"_classes":{"domNode":["wm_BackgroundColor_Green"]},"disabled":true,"height":"25px","caption":"I.H","readonly":true,"formField":"ihA3"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true,"places":"2","promptMessage":"Digite aqui la Intensidad Horaria para el Area #3"}, {}]
																		}]
																	}],
																	intensidadHorariaEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"I.H Total Asignatura","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"intensidadHoraria","disabled":true,"captionSize":"120%"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"${IhA1.dataValue}+${IhA2.dataValue}+${IhA3.dataValue}"}, {}]
																		}],
																		editor: ["wm._NumberEditor", {"places":"1","promptMessage":"xxxx"}, {}]
																	}]
																}]
															}],
															layers12: ["wm.Layers", {}, {}, {
																layer30: ["wm.Layer", {"caption":"layer30","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																	electivaEditor2: ["wm.Editor", {"caption":"Electiva","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"electiva","displayValue":true,"emptyValue":"false"}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	subjectEditor2: ["wm.Editor", {"caption":"Subject","width":"100%","height":"26px","readonly":true,"formField":"subject"}, {}, {
																		editor: ["wm._TextEditor", {}, {}]
																	}],
																	idSubarea1: ["wm.Editor", {"caption":"Subarea 1","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"idSubarea1"}, {}, {
																		editor: ["wm._SelectEditor", {"displayField":"subarea","dataField":"idSubarea"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"lv_subarea1","expression":undefined}, {}]
																			}]
																		}]
																	}],
																	idSubarea2: ["wm.Editor", {"caption":"Subarea 2","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"idSubarea2"}, {}, {
																		editor: ["wm._SelectEditor", {"displayField":"subarea","dataField":"idSubarea"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"lv_subarea1","expression":undefined}, {}]
																			}]
																		}]
																	}],
																	idSubarea3: ["wm.Editor", {"caption":"Subarea 3","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"idSubarea3"}, {}, {
																		editor: ["wm._SelectEditor", {"displayField":"subarea","dataField":"idSubarea"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"dataSet","source":"lv_subarea1","expression":undefined}, {}]
																			}]
																		}]
																	}]
																}]
															}]
														}],
														panel92: ["wm.Panel", {"height":"174px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															aux110: ["wm.TextAreaEditor", {"height":"100%","width":"100%","caption":"Descripción español","captionAlign":"left","captionPosition":"top","singleLine":false,"readonly":true,"formField":"descripAsigEspaniol"}, {}, {
																editor: ["wm._TextAreaEditor", {}, {}]
															}],
															aux111: ["wm.TextAreaEditor", {"height":"100%","width":"100%","caption":"Descripcion Ingles","captionAlign":"left","captionPosition":"top","singleLine":false,"readonly":true,"formField":"descripAsigIngles"}, {}, {
																editor: ["wm._TextAreaEditor", {}, {}]
															}]
														}],
														textEditor5: ["wm.TextEditor", {"width":"150%","showing":false,"caption":"Peso","display":"Number","disabled":true,"readonly":true,"formField":"peso"}, {}, {
															editor: ["wm._NumberEditor", {}, {}]
														}],
														salonIdSalonEditor2: ["wm.Editor", {"caption":"Salon","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"salonIdSalon","disabled":true}, {}, {
															editor: ["wm._NumberEditor", {"required":true}, {}]
														}],
														relatedEditor4: ["wm.RelatedEditor", {"formField":"tipoInscAsig","height":"28px","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"asignaturaDataGrid2.selectedItem.tipoInscAsig","expression":undefined}, {}],
																wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoInscAsigLookup2.selectedItem","expression":undefined}, {}]
															}],
															tipoInscAsigLookup2: ["wm.Editor", {"caption":"Tipo Asignatura","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","disabled":true}, {}, {
																editor: ["wm._LookupEditor", {"required":true,"displayField":"tipo","autoDataSet":false,"startUpdate":false}, {}]
															}]
														}],
														gradoRelatedEditor2: ["wm.RelatedEditor", {"formField":"grado"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"asignaturaDataGrid2.selectedItem.grado","expression":undefined}, {}],
																wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"gradoLookup2.selectedItem","expression":undefined}, {}]
															}],
															gradoLookup2: ["wm.Editor", {"caption":"Grado ","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","disabled":true,"displayValue":"PREJARDIN"}, {}, {
																editor: ["wm._LookupEditor", {"required":true,"displayField":"grado","autoDataSet":false,"startUpdate":false}, {}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
																	}]
																}]
															}]
														}],
														syRelatedEditor2: ["wm.RelatedEditor", {"formField":"sy"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"asignaturaDataGrid2.selectedItem.sy","expression":undefined}, {}],
																wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"syLookup2.selectedItem","expression":undefined}, {}]
															}],
															syLookup2: ["wm.Editor", {"caption":"Año Escolar","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","disabled":true,"displayValue":"2010-2011"}, {}, {
																editor: ["wm._LookupEditor", {"required":true,"displayField":"schoolYear","autoDataSet":false,"startUpdate":false}, {}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
																	}]
																}]
															}]
														}],
														editPanel11: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"liveForm":"asignaturaLiveForm2","savePanel":"savePanel11","operationPanel":"operationPanel11","lock":false}, {}, {
															savePanel11: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																saveButton11: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel11.saveData"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel11.formInvalid","expression":undefined}, {}]
																	}]
																}],
																cancelButton11: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel11.cancelEdit"}]
															}],
															operationPanel11: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																newButton11: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%","showing":false,"roles":["10","11","23","22","21","24"]}, {"onclick":"editPanel11.beginDataInsert"}],
																updateButton11: ["wm.RoundedButton", {"caption":"Actualizar","width":"120px","height":"100%","disabled":true}, {"onclick":"editPanel11.beginDataUpdate"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel11.formUneditable","expression":undefined}, {}]
																	}]
																}],
																deleteButton11: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true,"showing":false}, {"onclick":"editPanel11.deleteData"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel11.formUneditable","expression":undefined}, {}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								asistencia: ["wm.Layer", {"caption":"Asistencia","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["4","10","11","21","22","23","24","8","7","6","5","18","19","20"]}, {"onShow":"asistenciaShow"}, {
									eventualidadesContainer: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Eventualidades"}, {}]
								}],
								eventualidades: ["wm.Layer", {"caption":"Eventualidades","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["4","5","6","7","8","9","10","11","13","15","14","16","17","18","19","20","21","22","23","24"]}, {}, {
									registro_eventualidades: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Reg_eventualidades"}, {}]
								}],
								Inscripciones: ["wm.Layer", {"caption":"Inscripciones","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["6","10","20","21","22","23","24","5","4","7","11","13","15","16","17","18","19"]}, {}, {
									inscripciones: ["wm.PageContainer", {"border":"0","pageName":"Inscripciones"}, {}]
								}],
								pestana_reportes_seguimiento: ["wm.Layer", {"caption":"Reportes","horizontalAlign":"left","verticalAlign":"top","padding":"40","lock":true,"roles":["4","5","6","7","8","9","10","11","13","14","15","16","17","18","19","20","21","22","23"]}, {"onShow":"pestana_reportes_seguimientoShow"}, {
									reportes_top_panel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_BackgroundColor_VeryLightGray"]},"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"2","layoutKind":"left-to-right"}, {}, {
										reports_open_report_window: ["wm.Button", {"height":"100%","width":"155px","caption":"<img src=\"resources/images/buttons/report.png\" WIDTH=32 HEIGHT=32 > Generar reporte","disabled":true,"hint":"Abrir generador de  reporte","borderColor":"#c6c6c6"}, {"onclick":"reports_open_report_windowClick"}],
										uctualizar_reportes_descripcion: ["wm.Button", {"height":"100%","width":"200px","caption":"<img src=\"resources/images/buttons/Update.png\" WIDTH=22 HEIGHT=22 > Actualizar información","disabled":true}, {}]
									}],
									panel5: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"40px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										codigoReporte: ["wm.TextEditor", {"caption":"Código","height":"32px"}, {"onchange":"codigoReporteChange"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}],
										reporte: ["wm.TextEditor", {"width":"220px","caption":"Reporte","height":"32px"}, {"onchange":"reporteChange"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}]
									}],
									panel4: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"5","layoutKind":"left-to-right"}, {}, {
										reportes_graficos_listado_reportes: ["wm.DataGrid", {"border":"0","scrollY":true}, {"onSelected":"reportes_graficos_listado_reportesSelected","onSelectionChanged":"reportes_graficos_listado_reportesSelectionChanged","onDeselected":"reportes_graficos_listado_reportesDeselected"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_reportes_graficos_listado_reportes","expression":undefined}, {}]
											}],
											column1: ["wm.DataGridColumn", {"caption":"<center>+ Código</center>","field":"id.codigo","dataExpression":"\"<center>\"+${id.codigo}+\"</center>\""}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column3: ["wm.DataGridColumn", {"caption":"Reporte","field":"id.reporte","columnWidth":"100%","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column6: ["wm.DataGridColumn", {"caption":"Tipo <br/>Persona","field":"id.tipoPersona","index":2}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column4: ["wm.DataGridColumn", {"caption":"Descripción","field":"id.descripcion","columnWidth":"100%","index":3}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}]
								}],
								transporte: ["wm.Layer", {"caption":"Transportes","horizontalAlign":"left","verticalAlign":"top","showing":false}, {}],
								mensaje: ["wm.Layer", {"caption":"Aviso","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["1","2","3","12"]}, {}, {
									panel56: ["wm.Panel", {"height":"482px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										picture6: ["wm.Picture", {"height":"100%","border":"0","width":"615px","source":"resources/images/illustrator-old-school-icon.gif","aspect":"h"}, {}],
										label18: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","width":"96%","border":"3","caption":"<font color=\"red\"><b><h3>AVISO IMPORTANTE: </h3></b></font> <font color=\"red\"><b>Aprendoz</b></font> ha detectado que usted no cumple con los requisitos de seguridad para utilizar este  servicio.</br></br> Le sugerimos ponerse en contacto con el administrador del sistema quien le podra brindar información mas precisa sobre esta restricción.</br></br>  Sentimos  las molestias causadas.","singleLine":false,"borderColor":"#FFxxyy"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}]
								}]
							}]
						}],
						templateRight: ["wm.Panel", {"_classes":{"domNode":["template-right"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}]
					}],
					panel3: ["wm.Panel", {"height":"24px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
						templateBottomLeft: ["wm.Panel", {"_classes":{"domNode":["template-bottom-left"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top"}, {}],
						templateBottom: ["wm.Panel", {"_classes":{"domNode":["template-bottom-center"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}],
						templateBottomRight: ["wm.Panel", {"_classes":{"domNode":["template-bottom-right"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top"}, {}]
					}],
					panelFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_LightGray","wm_FontSizePx_14px"]},"height":"48px","width":"100%","border":"0","align":"right","padding":"10,20","caption":"<font color=\"#bf5e5e\">Aprendoz® | Colegio Rochester  2013-2014</font>","margin":"0","singleLine":false}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}]
	}]
}
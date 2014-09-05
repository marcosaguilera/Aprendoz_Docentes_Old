import java.sql.*;

public class studentGrade extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    public studentGrade() {
       super(INFO);
    }

    public Integer getStudentGradeById(Integer idpersona){
        Integer grade= 0;
        System.out.println(idpersona);
        try{
          String myDriver = "org.gjt.mm.mysql.Driver";
          String myUrl = "jdbc:mysql://yoda.rochester.edu.co/aprendoz_desarrollo";
          Class.forName(myDriver);
          Connection conn = DriverManager.getConnection(myUrl, "root", "irc4Quag");
          
          PreparedStatement st= conn.prepareStatement("SELECT vista_alumnos_activos.Id_Grado as idgrado FROM vista_alumnos_activos WHERE vista_alumnos_activos.Id_Persona=?");
          st.setInt(1, idpersona);
          ResultSet rs= st.executeQuery();
          while (rs.next()){
            int _grado = rs.getInt("idgrado");
            grade = _grado;
            System.out.println(grade);
            System.out.format("%s", _grado);
          }
            st.close();

        }catch(Exception error){
            System.err.println("Got an exception!");
            System.err.println(error.getMessage());        
        }
        return grade;
    }
}
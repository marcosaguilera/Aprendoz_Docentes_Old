import java.sql.*;

public class faltasLevesaGrave extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    public faltasLevesaGrave() {
       super(INFO);
    }

    //public Integer faltasLeves(Integer persona, Date fecha, Integer tipo){
    public Integer faltasLeves(Integer persona, Integer tipo){
    System.out.println(persona);
    Integer result  = 0;
    try{
      String myDriver = "org.gjt.mm.mysql.Driver";
      String myUrl = "jdbc:mysql://yoda.rochester.edu.co/aprendoz_desarrollo";
      Class.forName(myDriver);
      Connection conn = DriverManager.getConnection(myUrl, "root", "irc4Quag");
     
      PreparedStatement st = conn.prepareStatement("SELECT COUNT(*) as total_semana FROM PERSONA INNER JOIN Eventualidad_Personas ON PERSONA.Id_Persona = Eventualidad_Personas.Persona_Id_Persona INNER JOIN Eventualidades ON Eventualidades.Id_Eventualidad = Eventualidad_Personas.Eventualidades_Id_Eventualidad INNER JOIN Subtipo_Eventualidad ON Subtipo_Eventualidad.Id_Subtipo_Eventualidad = Eventualidad_Personas.subtipo_eventualidad INNER JOIN Tipo_Eventualidad ON Tipo_Eventualidad.Id_Tipo_Eventualidad = Subtipo_Eventualidad.Tipo_Eventualidad_Id_Tipo_Eventualidad   WHERE PERSONA.Id_Persona=? AND eventualidades.Fecha BETWEEN '2014-07-01' AND '2015-07-01' AND Tipo_Eventualidad.Id_Tipo_Eventualidad = ? GROUP BY PERSONA.Id_Persona ORDER BY Eventualidades.fecha_ingreso desc");
      st.setInt(1, persona);
      //st.setDate(2, fecha);
      st.setInt(2, tipo);
      ResultSet rs = st.executeQuery();
      while (rs.next()){
        int total = rs.getInt("total_semana");
        result = total;
        System.out.println(result);
        System.out.format("%s", total);
      }
        st.close();
        
      }catch(Exception e){
        System.err.println("Got an exception! ");
        System.err.println(e.getMessage());
      } 
      return result;     
    }  
}
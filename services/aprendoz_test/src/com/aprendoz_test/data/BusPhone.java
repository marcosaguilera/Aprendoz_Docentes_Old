
package com.aprendoz_test.data;



/**
 *  aprendoz_test.BusPhone
<<<<<<< HEAD
 *  07/11/2014 08:22:38
=======
 *  07/15/2014 14:36:06
>>>>>>> navegacion---mostrar-paneles
 * 
 */
public class BusPhone {

    private Integer id;
    private BusDriver busDriver;
    private String phone;

    public BusPhone() {
    }

    public BusPhone(Integer id, String phone) {
        this.id = id;
        this.phone = phone;
    }

    public BusPhone(Integer id, BusDriver busDriver, String phone) {
        this.id = id;
        this.busDriver = busDriver;
        this.phone = phone;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public BusDriver getBusDriver() {
        return busDriver;
    }

    public void setBusDriver(BusDriver busDriver) {
        this.busDriver = busDriver;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

}

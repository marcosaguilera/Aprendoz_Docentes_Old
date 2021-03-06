
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.BusDriver
 *  11/07/2014 13:24:50
 * 
 */
public class BusDriver {

    private Integer id;
    private String name;
    private String lastName;
    private String identification;
    private String rh;
    private String arp;
    private String eps;
    private Set<com.aprendoz_test.data.BusPhone> busPhones = new HashSet<com.aprendoz_test.data.BusPhone>();
    private Set<com.aprendoz_test.data.BusRoute> busRoutes = new HashSet<com.aprendoz_test.data.BusRoute>();

    public BusDriver() {
    }

    public BusDriver(Integer id, String name, String lastName, String identification, String rh, String arp, String eps) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.identification = identification;
        this.rh = rh;
        this.arp = arp;
        this.eps = eps;
    }

    public BusDriver(Integer id, String name, String lastName, String identification, String rh, String arp, String eps, Set<com.aprendoz_test.data.BusPhone> busPhones, Set<com.aprendoz_test.data.BusRoute> busRoutes) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.identification = identification;
        this.rh = rh;
        this.arp = arp;
        this.eps = eps;
        this.busPhones = busPhones;
        this.busRoutes = busRoutes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getRh() {
        return rh;
    }

    public void setRh(String rh) {
        this.rh = rh;
    }

    public String getArp() {
        return arp;
    }

    public void setArp(String arp) {
        this.arp = arp;
    }

    public String getEps() {
        return eps;
    }

    public void setEps(String eps) {
        this.eps = eps;
    }

    public Set<com.aprendoz_test.data.BusPhone> getBusPhones() {
        return busPhones;
    }

    public void setBusPhones(Set<com.aprendoz_test.data.BusPhone> busPhones) {
        this.busPhones = busPhones;
    }

    public Set<com.aprendoz_test.data.BusRoute> getBusRoutes() {
        return busRoutes;
    }

    public void setBusRoutes(Set<com.aprendoz_test.data.BusRoute> busRoutes) {
        this.busRoutes = busRoutes;
    }

}

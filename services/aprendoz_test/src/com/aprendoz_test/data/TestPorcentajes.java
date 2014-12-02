
package com.aprendoz_test.data;



/**
 *  aprendoz_test.TestPorcentajes
 *  11/07/2014 13:24:49
 * 
 */
public class TestPorcentajes {

    private Integer testId;
    private Double descuentoPorcentaje;
    private String code;

    public TestPorcentajes() {
    }

    public TestPorcentajes(Integer testId, Double descuentoPorcentaje, String code) {
        this.testId = testId;
        this.descuentoPorcentaje = descuentoPorcentaje;
        this.code = code;
    }

    public Integer getTestId() {
        return testId;
    }

    public void setTestId(Integer testId) {
        this.testId = testId;
    }

    public Double getDescuentoPorcentaje() {
        return descuentoPorcentaje;
    }

    public void setDescuentoPorcentaje(Double descuentoPorcentaje) {
        this.descuentoPorcentaje = descuentoPorcentaje;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

}

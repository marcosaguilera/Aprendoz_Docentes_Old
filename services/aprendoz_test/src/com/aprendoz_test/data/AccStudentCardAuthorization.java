
package com.aprendoz_test.data;



/**
 *  aprendoz_test.AccStudentCardAuthorization
 *  11/07/2014 13:24:49
 * 
 */
public class AccStudentCardAuthorization {

    private AccStudentCardAuthorizationId id;
    private AccStudentCard accStudentCard;
    private AccAuthorization accAuthorization;

    public AccStudentCardAuthorization() {
    }

    public AccStudentCardAuthorization(AccStudentCardAuthorizationId id, AccStudentCard accStudentCard, AccAuthorization accAuthorization) {
        this.id = id;
        this.accStudentCard = accStudentCard;
        this.accAuthorization = accAuthorization;
    }

    public AccStudentCardAuthorizationId getId() {
        return id;
    }

    public void setId(AccStudentCardAuthorizationId id) {
        this.id = id;
    }

    public AccStudentCard getAccStudentCard() {
        return accStudentCard;
    }

    public void setAccStudentCard(AccStudentCard accStudentCard) {
        this.accStudentCard = accStudentCard;
    }

    public AccAuthorization getAccAuthorization() {
        return accAuthorization;
    }

    public void setAccAuthorization(AccAuthorization accAuthorization) {
        this.accAuthorization = accAuthorization;
    }

}

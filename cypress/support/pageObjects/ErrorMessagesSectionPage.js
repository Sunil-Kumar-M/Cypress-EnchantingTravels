/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />

class ErrorMessagesSectionPage {
    getTitleErrorMessage(errorValue){
        return cy.get('.error-message-div').should('contain', errorValue)
    }

    getNameTitleErrorMessage(errorValue){
        return cy.xpath('//p[text()="Title is required."]').should('contain', errorValue)
    }

    getFirstNameErrorMessage(errorValue){
        return cy.xpath('//p[text()="First name is required."]').should('contain', errorValue)
    }

    getMiddleNameErrorMessage(errorValue){
        return cy.xpath('//p[text()="Middle name is required."]').should('contain', errorValue)
    }

    getLastNameErrorMessage(errorValue){
        return cy.xpath('//p[text()="Last name is required."]').should('contain', errorValue)
    }

    getGenderErrorMessage(errorValue){
        return cy.xpath('//p[text()="Gender is required."]').should('contain', errorValue)
    }

    getDateOfBirthErrorMessage(errorValue){
        return cy.xpath('//p[text()="A valid date of birth over the age of 18 is required for the passenger."]').should('contain', errorValue)
    }

    getEmailErrorMessage(errorValue){
        return cy.xpath('//p[text()="A valid email address is required."]').should('contain', errorValue)
    }

    getPhoneNumberErrorMessage(errorValue){
        return cy.xpath('//p[text()="A valid phone number is required."]').should('contain', errorValue)
    }

    getAddressFieldErrorMessage(errorValue){
        return cy.xpath('//p[text()="Address field is required"]').should('contain', errorValue)
    }

}
export default ErrorMessagesSectionPage;
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="xpath_cypress" />

class PaymentDetailsPage {

    getPaymentPageHeading(){
        return cy.get('#paymentFormSelectionWrapper')
    }

    getCardNumberTextField(){
        return cy.get('#cardNumber') // FirstOne should be picked due to multiple duplicates
    }

    getCardHolderNameField(){
        return cy.get('#cardholderName') // FirstOne should be picked due to multiple duplicates
    }

    getExpiryMonthOptions(){
        return cy.get('#expiryMonth') // FirstOne should be picked due to multiple duplicates
    }

    getExpiryYearOptions(){
        return cy.get('#expiryYear') // FirstOne should be picked due to multiple duplicates
    }

    getCardCodeTextField(){
        return cy.get('#cardCode_masked') // FirstOne should be picked due to multiple duplicates
    }

    getContinueButton(){
        return cy.get('#nextBtn')
    }

    getCancelButton(){
        return cy.get('#cancelBtn')
    }

}
export default PaymentDetailsPage;
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />

class BookingConfirmationPage {
    getFirstUserNamePopulated() {
      return cy.xpath(
        '(//div[@class="customise-form"]//*[@class="checkbox-item"])[1]//span[1]'
      );
    }
  
    getSeconUserNamePopulated() {
      return cy.xpath(
        '(//div[@class="customise-form"]//*[@class="checkbox-item"])[2]//span[1]'
      );
    }
  
    getExtraMarketingCheckOptions() {
      return cy.xpath(
        '(//div[@class="customise-form"]//*[@class="checkbox-item"])[3]//span[1]'
      );
    }
  
    getSpecialRequestTextField() {
      return cy.get("#:r1g:");
    }
  
    getHeadingOftheSections() {
      return cy.get(".section__title.h3.margin-bottom-20");
    }
  
    getPaymentTypeCheckBox(){
      return cy.get('input[name="paymentType"]')
    }
  
    getPaymentMethodCheckBox(){
      return cy.get('input[name="paymentMethod"]')
    }
  
    getTermsAndConditionsCheckBox(){
      return cy.get('.checkbox.margin-bottom-20')
    }
  
  }
  
  export default BookingConfirmationPage;
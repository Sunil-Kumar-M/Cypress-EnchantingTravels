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

    getContactMeMarketingOptions(){
      return cy.xpath('//*[text()="Contact me about regional flight options"]')
    }

  // payOnlyDeposit
    getPayOnlyDepositAmountOptions() {
      return cy.xpath(
        '(//div[@class="payment-type"]//*[@class="checkbox-item"])//span[1]'
      );
    }
  
    getSpecialRequestTextField() {
      return cy.xpath(
        '//label[text()="Special Requests"]/..//textarea'
      )
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

    getGoToPaymentsButton(){
      return cy.xpath('//button[text()="Go to payment"]')
    }
  
  }
  
  export default BookingConfirmationPage;
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="xpath_cypress" />
import UserDetailsPage from "../../support/pageObjects/UserDetailsPage";
import BookingConfirmationPage from "../../support/pageObjects/BookingConfirmationPage";
import PaymentDetailsPage from "../../support/pageObjects/PaymentDetailsPage";
import ErrorMessagesSectionPage from "../../support/pageObjects/ErrorMessagesSectionPage";
import "cypress-iframe";

describe("Single User Registration Flow Test cases", function () {
    before(function () { // runs once before all tests in the block
        cy.fixture("singleUserDataExample").then(function (data) {
            this.data = data;
        });

        cy.fixture("userMasterCardDetails").then(function (cardData) {
            this.cardData = cardData;
        });
        cy.viewport(1920, 1080);
    });

    it("Validate on Providing the Actual possitive inputs for one user", function () {
        const userDeatilsPage = new UserDetailsPage();
        const bookingConfirmationPage = new BookingConfirmationPage();
        const paymentDetailsPage = new PaymentDetailsPage();

        cy.visit("/booking/passengers#!departureCode=TEJA241020_FI&adults=1&children=0&tripcode=TEJ");
        // Adding all the validated first user details in the below section and validatating the data.
        cy.title().should("contain", "Trip Booking | Exodus");
        userDeatilsPage.getLeadPassendersFormTitle().should("contain", "Lead passenger details");
        userDeatilsPage.getTitleDropdown().select(this.data.title);
        userDeatilsPage.getFirstNameField().type(this.data.firstName);
        userDeatilsPage.getMiddleNameField().type(this.data.middleName);
        userDeatilsPage.getLastNameField().type(this.data.lastName);
        userDeatilsPage.getgenderDropdown().select(this.data.gender);
        userDeatilsPage.getDateOfBirth().type(this.data.dob);
        // Added wait for the iFrame to get loaded, It can be handled with the help of Dev, The below code is temp
        cy.wait(20000);
        userDeatilsPage.getEmailAddressField().type(this.data.email);
        userDeatilsPage.getPhoneNumberField().type(this.data.phoneNumber);
        userDeatilsPage.getEnterAddressManualButton().click();
        userDeatilsPage.getAddressLineOneField().type(this.data.addressLine1);
        userDeatilsPage.getAddressLineTwoField().type(this.data.addressLine2);
        userDeatilsPage.getCityField().type(this.data.city);
        userDeatilsPage.getStateField().type(this.data.state);
        userDeatilsPage.getPostCodeField().type(this.data.zip);
        userDeatilsPage.getCountryDropdown().select(this.data.country);
        userDeatilsPage.getSubmitButton().click();

        // Booking confirmation page with validation steps are below
        bookingConfirmationPage.getFirstUserNamePopulated().should("contain", this.data.firstName + " " + this.data.middleName + " " + this.data.lastName);
        bookingConfirmationPage.getFirstUserNamePopulated().click();
        bookingConfirmationPage.getContactMeMarketingOptions().should("contain.text", "Contact me about regional flight options").click();
        bookingConfirmationPage.getSpecialRequestTextField().type("This is an Automated message, used for Automation purpose only. Do not try to contact this person");
        bookingConfirmationPage.getPayOnlyDepositAmountOptions().click();
        bookingConfirmationPage.getPaymentMethodCheckBox().eq(0).check();
        bookingConfirmationPage.getTermsAndConditionsCheckBox().should("include.text", "I have read, understood and accepted the booking").click();
        bookingConfirmationPage.getGoToPaymentsButton().click();

        // NOTE: Payment Details Page and with validation steps are below.
        // This code cannot be executed due to query params and the session Id's and other authentication details.
        /*cy.origin('https://www.ipg-online.com', () => {
            const paymentDetailsPage = new PaymentDetailsPage();
            cy.visit('') // Parameters are required to visit the particular page.
            paymentDetailsPage.getPaymentPageHeading().should('contain', "Please provide payment details");
            paymentDetailsPage.getCardNumberTextField().type(this.cardData.cardNumber);
            paymentDetailsPage.getCardHolderNameField().type(this.data.firstName);
            paymentDetailsPage.getExpiryMonthOptions().select(this.cardData.cardExpiryMonth);
            paymentDetailsPage.getExpiryYearOptions().select(this.cardData.cardExpiryYear);
            paymentDetailsPage.getCardCodeTextField().type(this.cardData.cardSecurityCode);
            paymentDetailsPage.getContinueButton().click();
        })*/

    });
});

const testData = require('../../fixtures/multipleUserDataExample.json')
describe("Multiple User Registration Flow Test cases", function () {
    beforeEach(function () { // runs once before all tests in the block
        cy.fixture("singleUserDataExample").then(function (data) {
            this.data = data;
        });
        cy.viewport(1920, 1080);
    });
    testData.forEach(test => {
        it('Automation testing With Multiple Set of test data' + test.testName, () => {
            const userDeatilsPage = new UserDetailsPage();
            const errorMessageSectionPage = new ErrorMessagesSectionPage();

            cy.visit("/booking/passengers#!departureCode=TEJA241020_FI&adults=1&children=0&tripcode=TEJ");
            // Adding all the validated first user details in the below section and validatating the data.
            cy.title().should("contain", "Trip Booking | Exodus");
            userDeatilsPage.getLeadPassendersFormTitle().should("contain", "Lead passenger details");
            userDeatilsPage.getTitleDropdown().select(test.title);
            userDeatilsPage.getFirstNameField().type(test.firstName);
            userDeatilsPage.getMiddleNameField().type(test.middleName);
            userDeatilsPage.getLastNameField().type(test.lastName);
            userDeatilsPage.getgenderDropdown().select(test.gender);
            userDeatilsPage.getDateOfBirth().type(test.dob);
            // Added wait for the iFrame to get loaded, It can be handled with the help of Dev, The below code is temp
            cy.wait(20000);
            userDeatilsPage.getEmailAddressField().type(test.email);
            userDeatilsPage.getPhoneNumberField().type(test.phoneNumber);
            userDeatilsPage.getEnterAddressManualButton().click();
            userDeatilsPage.getAddressLineOneField().type(test.addressLine1);
            userDeatilsPage.getAddressLineTwoField().type(test.addressLine2);
            userDeatilsPage.getCityField().type(test.city);
            userDeatilsPage.getStateField().type(test.state);
            userDeatilsPage.getPostCodeField().type(test.zip);
            userDeatilsPage.getCountryDropdown().select(test.country);

            if (test.testName === 'Invalid Data') {
                cy.log('Need to work on Error Handling')
                errorMessageSectionPage.getTitleErrorMessage(test.titleErrorMessge)
                errorMessageSectionPage.getGenderErrorMessage(test.genderErrorMessage)
                errorMessageSectionPage.getDateOfBirthErrorMessage(test.dobErrorMessage)
                errorMessageSectionPage.getEmailErrorMessage(test.emailErrorMessage)
                errorMessageSectionPage.getPhoneNumberErrorMessage(test.phoneNumberErrorMessage)
            }
        })
    })
});

describe("Single User Registration Flow Test cases", function () {
  before(function () { // runs once before all tests in the block
      cy.fixture("singleUserDataExample").then(function (data) {
          this.data = data;
      });

      cy.fixture("userMasterCardDetails").then(function (cardData) {
          this.cardData = cardData;
      });
      cy.viewport(1920, 1080);
  });

  it("Validate on Providing the Actual possitive inputs for two users", function () {
      const userDeatilsPage = new UserDetailsPage();
      const bookingConfirmationPage = new BookingConfirmationPage();

      cy.visit("/booking/passengers#!departureCode=TEJA241020_FI&adults=1&children=0&tripcode=TEJ");
      // Adding all the validated first user details in the below section and validatating the data.
      cy.title().should("contain", "Trip Booking | Exodus");
      userDeatilsPage.getLeadPassendersFormTitle().should("contain", "Lead passenger details");
      userDeatilsPage.getTitleDropdown().select(this.data.title);
      userDeatilsPage.getFirstNameField().type(this.data.firstName);
      userDeatilsPage.getMiddleNameField().type(this.data.middleName);
      userDeatilsPage.getLastNameField().type(this.data.lastName);
      userDeatilsPage.getgenderDropdown().select(this.data.gender);
      userDeatilsPage.getDateOfBirth().type(this.data.dob);
      // Added wait for the iFrame to get loaded, It can be handled with the help of Dev, The below code is temp
      cy.wait(20000);
      userDeatilsPage.getEmailAddressField().type(this.data.email);
      userDeatilsPage.getPhoneNumberField().type(this.data.phoneNumber);
      userDeatilsPage.getEnterAddressManualButton().click();
      userDeatilsPage.getAddressLineOneField().type(this.data.addressLine1);
      userDeatilsPage.getAddressLineTwoField().type(this.data.addressLine2);
      userDeatilsPage.getCityField().type(this.data.city);
      userDeatilsPage.getStateField().type(this.data.state);
      userDeatilsPage.getPostCodeField().type(this.data.zip);
      userDeatilsPage.getCountryDropdown().select(this.data.country);
      userDeatilsPage.getAddAdultPassangerButton().click()
      // Adding the 2nd Passenger data from the below code
      userDeatilsPage.getSecondPassengerDetailsButton().click()
      userDeatilsPage.getTitleDropdown().eq(1).select(this.data.titleU2);
      userDeatilsPage.getFirstNameField().eq(1).type(this.data.firstNameU2);
      userDeatilsPage.getMiddleNameField().eq(1).type(this.data.middleNameU2);
      userDeatilsPage.getLastNameField().eq(1).type(this.data.lastNameU2);
      userDeatilsPage.getgenderDropdown().eq(1).select(this.data.genderU2);
      userDeatilsPage.getDateOfBirth().eq(1).type(this.data.dobU2);
      userDeatilsPage.getSubmitButton().click();

      // Booking confirmation page with validation steps are below
      bookingConfirmationPage.getFirstUserNamePopulated().should("contain", this.data.firstName + " " + this.data.middleName + " " + this.data.lastName);
      bookingConfirmationPage.getSeconUserNamePopulated().should('contain', this.data.firstNameU2 + " " + this.data.middleNameU2 + " " + this.data.lastNameU2);
      bookingConfirmationPage.getFirstUserNamePopulated().click();
      bookingConfirmationPage.getContactMeMarketingOptions().should("contain.text", "Contact me about regional flight options").click();
      bookingConfirmationPage.getSpecialRequestTextField().type("This is an Automated message, used for Automation purpose only. Do not try to contact this person");
      bookingConfirmationPage.getPayOnlyDepositAmountOptions().click();
      bookingConfirmationPage.getPaymentMethodCheckBox().eq(0).check();
      bookingConfirmationPage.getTermsAndConditionsCheckBox().should("include.text", "I have read, understood and accepted the booking").click();
      bookingConfirmationPage.getGoToPaymentsButton().click();

  });
});

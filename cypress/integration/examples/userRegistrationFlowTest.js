/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
/// <reference types="cypress-xpath" />
import UserDetailsPage from "../../support/pageObjects/UserDetailsPage";
import BookingConfirmationPage from "../../support/pageObjects/BookingConfirmationPage";
import PaymentDetailsPage from "../../support/pageObjects/PaymentDetailsPage";
import "cypress-iframe";

describe.only("Single User Registration Flow Test cases", function () {
    before(function () { // runs once before all tests in the block
        cy.fixture("singleUserDataExample").then(function (data) {
            this.data = data;
        });

        cy.fixture("userMasterCardDetails").then(function (cardData) {
            this.cardData = cardData;
        });
        cy.viewport(1920, 1080);
    });

    // before(function () {
    // // runs once before all tests in the block
    // cy.fixture("userMasterCardDetails").then(function (cardData) {
    //     this.cardData = cardData;
    // });
    // });

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

        // Payment Details Page and with validation steps are below
        cy.origin('https://www.ipg-online.com', () => {
            const paymentDetailsPage = new PaymentDetailsPage();
            paymentDetailsPage.getPaymentPageHeading().should('contain', "Please provide payment details");
            paymentDetailsPage.getCardNumberTextField().type(this.cardData.cardNumber);
            paymentDetailsPage.getCardHolderNameField().type(this.data.firstName);
            paymentDetailsPage.getExpiryMonthOptions().select(this.cardData.cardExpiryMonth);
            paymentDetailsPage.getExpiryYearOptions().select(this.cardData.cardExpiryYear);
            paymentDetailsPage.getCardCodeTextField().type(this.cardData.cardSecurityCode);
            paymentDetailsPage.getContinueButton().click();

        })
    });
});

describe.skip("Multiple User Registration Flow Test cases", function () {
    before(function () { // runs once before all tests in the block
        cy.fixture("singleUserDataExample").then(function (data) {
            this.data = data;
        });
        cy.viewport(1920, 1080);
    });

    it("Validate on Providing the Actual possitive inputs for 2 users", function () {
        const userDeatilsPage = new UserDetailsPage();
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

        userDeatilsPage.getAddAdultPassangerButton().click();
    });
});

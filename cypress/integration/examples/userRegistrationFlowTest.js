/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import UserDetailsPage from '../../support/pageObjects/UserDetailsPage'
import 'cypress-iframe'

describe('User Registration Flow Test cases', function(){

    before(function () {
        // runs once before all tests in the block
        cy.fixture('singleUserDataExample').then(function (data) {
          this.data = data
        })
        cy.viewport(1920, 1080)
      })

    it('Validate on Providing the Actual possitive inputs', function(){
        const userDeatilsPage = new UserDetailsPage()
        cy.visit('/booking/passengers#!departureCode=TEJA241020_FI&adults=1&children=0&tripcode=TEJ')
        userDeatilsPage.getTitleDropdown().select(this.data.title)
        userDeatilsPage.getFirstNameField().type(this.data.firstName)
        userDeatilsPage.getMiddleNameField().type(this.data.middleName)
        userDeatilsPage.getLastNameField().type(this.data.lastName)
        userDeatilsPage.getChatFrame()
        userDeatilsPage.getgenderDropdown().select(this.data.gender)
        userDeatilsPage.getDateOfBirth().type(this.data.dob)
        userDeatilsPage.getEmailAddressField().type(this.data.email)
        userDeatilsPage.getPhoneNumberField().type(this.data.phoneNumber)
        userDeatilsPage.getEnterAddressManualButton().click()
        cy.wait(5000)
        userDeatilsPage.getAddressLineOneField().type(this.data.addressLine1)
        userDeatilsPage.getAddressLineTwoField().type(this.data.addressLine2)
        userDeatilsPage.getCityField().type(this.data.city)
        userDeatilsPage.getStateField().type(this.data.state)
        userDeatilsPage.getPostCodeField().type(this.data.zip)
        userDeatilsPage.getCountryDropdown().select(this.data.country)

    })
})

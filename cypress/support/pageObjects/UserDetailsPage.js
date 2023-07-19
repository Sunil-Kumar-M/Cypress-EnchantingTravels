/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

class UserDetailsPage {

    getLeadPassendersFormTitle(){
        return cy.get('.section__title')
    }

    getTitleDropdown(){
        return cy.get("select[data-testid='title']")
    }

    getFirstNameField(){
        return cy.get('input[data-testid="firstName"]')
    }

    getMiddleNameField(){
        return cy.get('input[data-testid="middleName"]')
    }

    getCheckBoxForMiddleName(){
        return cy.get('')
    }
    
    getLastNameField(){
        return cy.get('input[data-testid="lastName"]')
    }

    getDateOfBirth(){
        return cy.get('input[data-testid="dateOfBirth"]')
    }

    getgenderDropdown(){
        return cy.get('select[data-testid="gender"]')
    }

    getEmailAddressField(){
        return cy.get('input[data-testid="email"]')
    }

    getPhoneNumberField(){
        return cy.get('input[data-testid="phoneNumber"]')
    }

    getAddressField(){
        return cy.get('input[placeholder="Start typing and select your address"]')
    }

    getEnterAddressManualButton(){
        return cy.get('.btn.btn--link')
    }

    getAddressLineOneField(){
        return cy.get('input[data-testid="addressLineOne"]')
    }

    getAddressLineTwoField(){
        return cy.get('input[data-testid="addressLineTwo"]')
    }

    getCityField(){
        return cy.get('input[data-testid="city"]')
    }

    getStateField(){
        return cy.get('input[data-testid="stateOrCounty"]')
    }

    getPostCodeField(){
        return cy.get('input[data-testid="postCode"]')
    }

    getCountryDropdown(){
        return cy.get('select[data-testid="country"]')
    }

    getCheckBoxForEmail(){
        return cy.get('')
    }

    getChatFrame(){
        return cy.frameLoaded('#hubspot-conversations-iframe').its('body').should('not.be.empty')
        .then(() => {
            // cy.frameLoaded('#hubspot-conversations-iframe')
            cy.iframe().find('button[aria-label="Close live chat"]').click()
        })
    }

}

export default UserDetailsPage;
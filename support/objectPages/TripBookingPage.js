class tripBookingPage {
    elements = {
      titleDropDownIcon: () => cy.get('[data-testid="title"]'),
      liveChatCloseBtn: () => cy.get('button[aria-label="Close live chat"]'),
      firstNameInput: ()=>cy.get('[data-testid="firstName"]'),
      middleNameInput: ()=>cy.get('[data-testid="middleName"]'),
      lastNameInput: ()=>cy.get('[data-testid="lastName"]'),
      breadCumTitleText: () => cy.contains("Lead passenger details"),  
      genederDropdownIcon: () => cy.get('[data-testid="gender"]'),
      dobInputIcon: ()=> cy.get('input[data-testid="dateOfBirth"]'),
      emailInput: ()=> cy.get('[data-testid="email"]'),
      phoneNumberInput: ()=> cy.get('[data-testid="phoneNumber"]'),
      addressInput: ()=> cy.get('input[placeHolder="Start typing and select your address"]'),
      saveandContinueBtn: ()=>cy.get('button[type="Submit"]')

    };
  
    validateBreadcrumbText() {
      this.elements.breadCumTitleText().should("have.text", data.expected);
    }
  
    clickTitleDropDownBtn() {
      this.elements.titleDropDownIcon().click();
    }
  
    clickGenderDropDownBtn() {
      this.elements.genederDropdownIcon().click();
    }
  
    navigateToDobInputField() {
      this.elements.dobInputIcon().click();
    }
    clickLiveChatBtn() {
        cy.wait(30000);
        this.elements.liveChatCloseBtn().click();
      }
      typeFirstname(firstName) {
        this.elements.firstNameInput().type(firstName);
      }
    
      typeMiddleName(middleName) {
        this.elements.middleNameInput().type(middleName);
      }
      typeLastName(lastname) {
        this.elements.lastNameInput().type(lastname);
      }
      typeEmail(email) {
        this.elements.emailInput().type(email);
      }
      typeaddressPlaceHolder(address) {
        this.elements.addressInput().type(address);
      }
      typePhone(phone) {
        this.elements.phoneNumberInput().type(phone);
      }
      typeDobInput(dob) {
        this.elements.dobInputIcon().type(dob);
      }
      clickOnSaveAndContinueBtn() {
        this.elements.saveandContinueBtn().click({force:true});
      }
  }
  
  module.exports = new tripBookingPage();
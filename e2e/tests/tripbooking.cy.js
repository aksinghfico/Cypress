import TripBookingPage from "../../support/objectPages/TripBookingPage";
import PaymentPage from "../../support/objectPages/PaymentPage";
import CardDetailsPage from "../../support/objectPages/CardDetailsPage";
import { before, beforeEach } from "mocha";


let priceText;

describe('passengerDetails with card details',()=> {  
  let data; //closure variable
  before(()=> {
    cy.fixture('testData').then( (fdata)=> {
      data = fdata;
    });
});
beforeEach(()=> {
  cy.visit('https://www.exodus.co.uk/booking/passengers#!departureCode=TEJA241020_FI&adults=1&children=0&tripcode=TEJ'); 
  cy.get('select[data-testid="title"]').select('Mr.').should('have.value','Mr.');
  TripBookingPage.typeFirstname(data.firstName);
  TripBookingPage.typeMiddleName(data.middleName);
  TripBookingPage.typeLastName(data.lastName);
  //select gender as male
  cy.get('select[data-testid="gender"]').select(data.gender);

  TripBookingPage.typeEmail(data.email);
  TripBookingPage.typePhone(data.phoneNumber);
  //click on dob section
  cy.get('input[data-testid="dateOfBirth"]').click();

  cy.log('created new user on ' + Cypress.env('inputDate'));
  cy.get('input[data-testid="dateOfBirth"]').type(data.dob).trigger('input');

  cy.get('button.btn.btn--link').click();
  cy.get('[data-testid="addressLineOne"]').type(data.address);
  cy.get('[data-testid="city"]').type(data.city,{force:true});
  cy.get('[data-testid="stateOrCounty"]').type(data.state,{force:true});
  cy.get('[data-testid="postCode"]').type(data.postCode,{force:true});
  cy.get('[data-testid="country"]').select(data.country,{force:true});

  TripBookingPage.clickOnSaveAndContinueBtn();
  PaymentPage.verifyPaymentOptionSection();
      PaymentPage.verifyPaymentMethodSection();
      PaymentPage.verifyPaymentMethodSectionText();
      PaymentPage.verifypaymentOptionValueVisacard();
      PaymentPage.verifypaymentOptionValueMastercard();
     // PaymentPage.selectPaymentMethodVisa();
      PaymentPage.selectCheckBoxedTermConditions();
      PaymentPage.clickOnPaymentPageSection();
      PaymentPage.verifyTotalPrice();
});

   it('TC_01_Negative it will enter passenger details and invalid card details for masterCard for pay in full', () => {

      PaymentPage.selectPaymentMethodMasterCard();
 
      CardDetailsPage.enterCardNumberUnderCardDetailsPage(data.cardNumber);
      CardDetailsPage.selectCarDHolderNameOnCardDetailsPage(data.cardHolderName);
      CardDetailsPage.selectExpiryMonthOnCardDetailsPage(data.cardExpiryMonth);
      CardDetailsPage.selectExpiryYearOnCardDetailsPage(data.cardExpiryYear);
      CardDetailsPage.typeCVVUnderCardDetailsPage(data.cardCode);
      CardDetailsPage.clickOnContinueBtnOnCardDetailsPage();  
      CardDetailsPage.verifyInvalidCardEntryMessage();
      CardDetailsPage.verifyInvalidCardMonthMessage();
      CardDetailsPage.verifyInvalidCardYearMessage();

 
  })
  it('TC_01_Positive it will enter passenger details and valid card details for master card for pay in full', () => {
    
        PaymentPage.selectPaymentMethodMasterCard();
   
      CardDetailsPage.enterCardNumberUnderCardDetailsPage(data.cardNumber);
      CardDetailsPage.selectCarDHolderNameOnCardDetailsPage(data.cardHolderName);
      CardDetailsPage.selectExpiryMonthOnCardDetailsPage("08");
      CardDetailsPage.selectExpiryYearOnCardDetailsPage("2023");
      CardDetailsPage.typeCVVUnderCardDetailsPage(data.cardCode);
      CardDetailsPage.clickOnContinueBtnOnCardDetailsPage();  
      //expect valid card details that need to read from fixtures and user can receive valid bookingId for the same
      //implement logic to get valid bookingID

    
 
 
  })
  it('TC_03_Negative it will enter passenger details and invalid card details for visa for pay in full', () => {
        
      PaymentPage.selectPaymentMethodVisa();
     
      CardDetailsPage.enterCardNumberUnderCardDetailsPage(data.cardNumber);
      CardDetailsPage.selectCarDHolderNameOnCardDetailsPage(data.cardHolderName);
      CardDetailsPage.selectExpiryMonthOnCardDetailsPage(data.cardExpiryMonth);
      CardDetailsPage.selectExpiryYearOnCardDetailsPage(data.cardExpiryYear);
      CardDetailsPage.typeCVVUnderCardDetailsPage(data.cardCode);
      CardDetailsPage.clickOnContinueBtnOnCardDetailsPage();  
      CardDetailsPage.verifyInvalidCardEntryMessage();
      CardDetailsPage.verifyInvalidCardMonthMessage();
      CardDetailsPage.verifyInvalidCardYearMessage();

    
 
 
  })
  it('TC_04_Positive it will enter passenger details and valid card details with visa for pay in full', () => {
      PaymentPage.selectPaymentMethodVisa();
      CardDetailsPage.enterCardNumberUnderCardDetailsPage(data.cardNumber);
      CardDetailsPage.selectCarDHolderNameOnCardDetailsPage(data.cardHolderName);
      CardDetailsPage.selectExpiryMonthOnCardDetailsPage(data.cardExpiryMonth);
      CardDetailsPage.selectExpiryYearOnCardDetailsPage(data.cardExpiryYear);
      CardDetailsPage.typeCVVUnderCardDetailsPage(data.cardCode);
      CardDetailsPage.clickOnContinueBtnOnCardDetailsPage();  
      //expect valid card details that need to read from fixtures and user can receive valid bookingId for the same
      //implement logic to get valid bookingID

    
 
 
  })
  // same way we will implemement for pay in Deposite section for both visa and master card with positive and negative
  // so total 8 test case will be there to validate payment functionality is working fine or not
})
class cardDetailsPage {
    
    elements = {
        paymentPageCardNumberInput: () =>cy.get('input#cardNumber[type="tel"]').first(),
        paymentPageCardholderNameInput: ()=>cy.get('input#cardholderName[type="text"]').first(),
        paymentPageExpireMonthDropDown: ()=>cy.get('select#expiryMonth').first(),
        paymentPageExpireYearDropDown: ()=>cy.get('select#expiryYear').first(),
        paymentPageCardCodeInput: ()=>cy.get('#cardCode_masked').first(),
        paymentPageContinueBtn: ()=>cy.get('button#nextBtn'),
        cardDetailsPageTitle:()=>cy.get('.container h1'),
        invalidCardNumberErrorMsge: ()=>cy.get('.help-block ul.error-messages').first(),
        invalidCardMonthErrorMsge: ()=>cy.get('#expiryMonth + .help-block ul.error-messages').first(),
        invalidCardYearErrorMsge: ()=>cy.get('#expiryYear + .help-block ul.error-messages').first(),
        finalTotalPriceOnCardDetailsPage: ()=>cy.get('.total .amount'),
        cardeDetailsPagePaymentMethodCardText: ()=> cy.get('#paymentMethodBlock span')
      };
      verifyCardDetailsPageTitle(){
        return this.elements.cardDetailsPageTitle().should('have.value','Exodus Travels Limited');
      }
      enterCardNumberUnderCardDetailsPage(cardNumber){
        return this.elements.paymentPageCardNumberInput().type(cardNumber);
      }
      selectCarDHolderNameOnCardDetailsPage(cardHolderName){
        return this.elements.paymentPageCardholderNameInput().type(cardHolderName);
      }
      selectExpiryMonthOnCardDetailsPage(month){
        return this.elements.paymentPageExpireMonthDropDown().select(month,{force:true});
      }
      selectExpiryYearOnCardDetailsPage(year){
        return this.elements.paymentPageExpireYearDropDown().select(year,{force:true});
      }
      typeCVVUnderCardDetailsPage(cvv){
        return this.elements.paymentPageCardCodeInput().type(cvv,{force:true});
      }
      clickOnContinueBtnOnCardDetailsPage(){
        return this.elements.paymentPageContinueBtn().click({force:true});
      }
      verifyInvalidCardEntryMessage(){
        return this.elements.invalidCardNumberErrorMsge().contains('Invalid card number');
      }
      verifyInvalidCardMonthMessage(){
        return this.elements.invalidCardMonthErrorMsge().contains('Card expired');
      }
      verifyInvalidCardYearMessage(){
        return this.elements.invalidCardMonthErrorMsge().contains('Card expired');
      }
      verifyFinalTotalPriceOnCardDetailsPage(){
        return this.elements.finalTotalPriceOnCardDetailsPage().should('not.be.NaN');
      }
      verifySelectedPaymentMethodOnCardDetailsPage(){
        return this.elements.cardeDetailsPagePaymentMethodCardText().should('not.be.NaN');
      }
}    
module.exports = new cardDetailsPage();
class paymentPage {
    elements = {
        paymentOptionsSection: () => cy.get('.payment-options'),
        paymentMethodSection: () => cy.get('.payment-methods'),
        paymentMethodSectionText: ()=>cy.get('.payment-methods p'),
        paymentOptionValueMastercard: ()=>cy.get('input[value="Mastercard"]'),
        paymentOptionValueVisacard: ()=>cy.get('input[value="Visa"]'),
        termandsubmissionCheckbox: ()=>cy.get('input[data-testid="termsAndConditionInput"]'),
        paymentTypeFull: () => cy.get('input[name="paymentType"][value="Full"]'),  
        paymentTypeDeposite: () => cy.get('input[name="paymentType"][value="Deposit"]'),
        goToPaymentPageBtn: ()=>cy.get('.actions-div >button[class="btn "]'),
        totalguidePrice:() => cy.get('.pricing-summary .body-text-small:nth-child(2)'),
        masterCardTextOnPaymentPage:()=> cy.get('#paymentMethodReadonlyValue'),
        paymentPageCardNumberInput: ()=>cy.get('#cardnumber[fdprocessedid]'),
        paymentPageCardholderNameInput: ()=>cy.get('#cardholderName[fdprocessedid]'),
        paymentPageExpireMonthDropDown: ()=>cy.get('#expiryMonth[fdprocessedid]'),
        paymentPageExpireYearDropDown: ()=>cy.get('#expiryYear[fdprocessedid]'),
        paymentPageCardCodeInput: ()=>cy.get('#cardCode_masked[fdprocessedid]'),
        paymentPageContinueBtn: ()=>cy.get('button#nextBtn'),
        paymentPagePayInDepositeCheckBox: ()=>cy.get('input[name="paymentType"][value="Deposit"]')
      };
      verifyPaymentOptionSection(){
        return this.elements.paymentOptionsSection().should('be.visible');
      }
      verifyPaymentMethodSection(){
        return this.elements.paymentMethodSection().should('have.text','Payment methodPlease select your preferred payment method:*MastercardVisa');
      }
      verifyPaymentMethodSectionText(){
        return this.elements.paymentMethodSectionText().should('have.text','Please select your preferred payment method:*');
      }
      verifypaymentOptionValueVisacard(){
        return this.elements.paymentOptionValueVisacard().should('not.be.checked');
      }
      verifypaymentOptionValueMastercard(){
        return this.elements.paymentOptionValueMastercard().should('not.be.checked');
      }
      verifytermandsubmissionCheckbox(){
        return this.elements.termandsubmissionCheckbox().should('not.be.checked');
      }
      verifyPaymentTypeFull(){
        return this.elements.paymentTypeFull().should('be.checked');
      }
      selectPaymentMethodMasterCard(){
        return this.elements.paymentOptionValueMastercard().click({force:true});
        paymentOptionValueVisacard
      }
      selectPaymentMethodVisa(){
        return this.elements.paymentOptionValueVisacard().click({force:true});
        paymentOptionValueVisacard
      }
      selectCheckBoxedTermConditions(){
        return this.elements.termandsubmissionCheckbox().click({force:true});
      }
      clickOnPaymentPageSection(){
        return this.elements.goToPaymentPageBtn().click({force:true});
      }
      verifyTotalPrice(){
        return this.elements.totalguidePrice().should('not.be.NaN');
      }
      verifyMasterCardSelectionOnPaymentPage(){
        return this.elements.masterCardTextOnPaymentPage().should('have.value','MASTERCARD');
      }
      selectPayInDepositeMethodOnPaymentPage(){
        return this.elements.paymentPagePayInDepositeCheckBox().click({force:true});
      }


}
module.exports = new paymentPage();
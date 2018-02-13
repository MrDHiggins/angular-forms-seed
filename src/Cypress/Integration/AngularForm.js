/*
Description: AngularForms(Positive + negative)
Created By: Dyllan Higgins
Date Created: 13/02/2018
Date Modified: N/A
Mpdified By: N/A
*/

//Enter first name
describe('User enters first name:Positive test', function() {
	it('Should have have a name entered', function () {

		//uses base URL within cypress.JSON
		cy.visit('/')

		//positive test
		cy.get('input[name=firstName]').click()
			.clear()
			.type('Thembi')

		cy.expect('input[name=firstName]').to.have.length.above(0)
		cy.get('.alert alert-danger').should('not.exist')
	})
})


//delete first name entry
describe('FirstName empty: Negative test', function(){
	it('Should not have a name entered', function() {

		//clear previous name to be removed
		cy.get('input[name=firstName]')
			.clear()
			
		cy.contains('First name is required')

	})
})


//user selects a payments date
describe('User selects payment type', function(){
	it('Payment should be 1099', function() {


		//radio button of payment type
		cy.get('input[value=1099]')
			.click()
			.should('be.checked')
	})
})


//user selects their preferred language
describe('A Langusge is selected',function(){
	it('User selects a primary language',function() {

		cy.get('select[name=primaryLanguage]').select('Venda')

	})
})


//user enters date hired
describe('User requried to enter date hired', function() {
	it('Should have a date selected', function() {

		//dateHired = new date("2018, 3, 14")
		 //dateHired = Cypress.moment().format("yyyy-MM-dd")
		 
		 //var dateHired = new Date(2017, 3, 14)


		//user enters a date
		cy.get('input[type=date]')
			.type('2017-03-14')

	})	
})


	



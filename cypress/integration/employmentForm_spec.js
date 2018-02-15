/*
Description: Employment form
Created By: Dyllan Higgins
Date Created: 13/02/2018
Date Modified: 14/02/2018
Mpdified By: Dyllan Higgins
*/

//Enter first name
describe('Employment form', function() {
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

		it('Should not have a name entered', function() {

		//uses base URL within cypress.JSON
		cy.visit('/')

		//clear previous name to be removed
		cy.get('input[name=firstName]')
			.clear()
			
		cy.contains('First name is required')

	})

	it('User selects a primary language',function() {

		//uses base URL within cypress.JSON
		cy.visit('/')

		cy.get('select[name=primaryLanguage]').select('Venda')

	})

	it('Payment should be 1099', function() {

		//uses base URL within cypress.JSON
		cy.visit('/')

		//radio button of payment type
		cy.get('input[value=1099]')
			.click()
			.should('be.checked')
	})

	it('Should have a date selected', function() {

		//uses base URL within cypress.JSON
		cy.visit('/')

		//dateHired = new date("2018, 3, 14")
		 //dateHired = Cypress.moment().format("yyyy-MM-dd")
		 
		 //var dateHired = new Date(2017, 3, 14)


		//user enters a date
		cy.get('input[type=date]')
			.type('2017-03-14')

	})

					
})//end describe
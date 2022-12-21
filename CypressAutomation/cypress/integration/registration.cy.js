/// <reference types ="Cypress" />

describe('Register User', () => 
{
  it('Go to Parabank Site', () => 
  
  {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.url().should('include','parabank')
    cy.wait(10000)
  })

  it('Register Valid User', () => 
  
  {
    cy.get('div:nth-child(3) div:nth-child(1) div:nth-child(2) p:nth-child(3) > a:nth-child(1)').click()
    cy.get("input[name='customer.firstName']").type('SIFATUL')
    cy.get("input[name='customer.lastName']").type('JANNAT')
    cy.get("input[name='customer.address.street']").type('Alfred-Jung-Straße')
    cy.get("input[name='customer.address.city']").type('Berlin')
    cy.get("input[name='customer.address.state']").type('Germany')
    cy.get("input[name='customer.address.zipCode']").type('10369')
    cy.get("input[name='customer.phoneNumber']").type('01735222211')
    cy.get("input[name='customer.ssn']").type('N/A')
    cy.get("input[name='customer.username']").type('jannat.sifat22') //change username if this TC shows fail(TC should show failed if same username is used repeteadly)
    cy.get("input[name='customer.password']").type('123456')
    cy.get("input[name='repeatedPassword']").type('123456')
    cy.wait(5000)
    cy.get('table.form2:nth-child(1) tbody:nth-child(1) tr:nth-child(13) td:nth-child(2) > input.button').click()  

    cy.wait(5000)
    cy.get("div:nth-child(3) div:nth-child(1) ul:nth-child(3) li:nth-child(8) > a:nth-child(1)").click()
    //cy.xpath("//a[contains(text(),'Log Out')]").click()


  })

  it('Register User with Blank Data', () => 
  
  {
    cy.get('div:nth-child(3) div:nth-child(1) div:nth-child(2) p:nth-child(3) > a:nth-child(1)').click()
    cy.get('table.form2:nth-child(1) tbody:nth-child(1) tr:nth-child(13) td:nth-child(2) > input.button').click() 

  })

  it('Put space on every field', () => 
  
  {
    cy.get('div:nth-child(3) div:nth-child(1) div:nth-child(2) p:nth-child(3) > a:nth-child(1)').click()
    cy.get("input[name='customer.firstName']").type(' ')
    cy.get("input[name='customer.lastName']").type(' ')
    cy.get("input[name='customer.address.street']").type(' ')
    cy.get("input[name='customer.address.city']").type(' ')
    cy.get("input[name='customer.address.state']").type(' ')
    cy.get("input[name='customer.address.zipCode']").type(' ')
    cy.get("input[name='customer.phoneNumber']").type(' ')
    cy.get("input[name='customer.ssn']").type('N/A')
    cy.get("input[name='customer.username']").type(' ')
    cy.get("input[name='customer.password']").type(' ')
    cy.get("input[name='repeatedPassword']").type(' ')
    cy.wait(5000)
    cy.get('table.form2:nth-child(1) tbody:nth-child(1) tr:nth-child(13) td:nth-child(2) > input.button').click() 

  }) 
  
})
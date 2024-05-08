/// <reference types="cypress-xpath" />
"use strict";
const log = cy.log

//Case 1
describe('template spec', () => {
    it.skip('Task 1 Description: Write tests in Cypress which will select correct MCI', () => {
      cy.visit('https://qa-test.cuat.marcura.com/dashboard')
      cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
      cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
      cy.get('#search-box-mcis').should('have.value','Agency Fee')     
      })
  }) //Case 1 End

//Case 2
describe('template spec', () => {
  it.skip('Task 2  Description: Write tests in Cypress which will select any Annotation from the list', () => {
    cy.visit('https://qa-test.cuat.marcura.com/dashboard')
    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Drydoc').wait(2000)
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Drydock")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Drydock')
    cy.get('#master-cost-input').type('500').wait(2000)  
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})

    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Externa').wait(2000) 
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"External")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','External')  
    cy.get('#master-cost-input').type('500').wait(2000)
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})

    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Interna').wait(2000)
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Internal")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Internal')  
    cy.get('#master-cost-input').type('500').wait(2000)
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})

    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Transportation').wait(2000) 
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Transportation")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Transportation')  
    cy.get('#master-cost-input').type('500').wait(2000) 
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})   
    })
})//Case 2 End

//Case 3
describe('template spec', () => {
  it.skip('Task 3 Description: Write tests in Cypress which will add value', () => {
    cy.visit('https://qa-test.cuat.marcura.com/dashboard')
    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Drydoc').wait(2000)
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Drydock")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Drydock')
    cy.get('#master-cost-input').type('222').wait(2000)  
    cy.get('#master-cost-usd-rate').clear().type('80.53999999999999').wait(1000)
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})
    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Externa').wait(2000) 
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"External")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','External')  
    cy.get('#master-cost-input').type('222').wait(2000)
    cy.get('#master-cost-usd-rate').clear().type('80.53999999999999').wait(1000)
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})

    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Interna').wait(2000)
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Internal")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Internal')  
    cy.get('#master-cost-input').type('222').wait(2000)
    cy.get('#master-cost-usd-rate').clear().type('80.53999999999999').wait(1000)
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})

    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Transportation').wait(2000) 
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Transportation")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Transportation')  
    cy.get('#master-cost-input').type('222').wait(2000) 
    cy.get('#master-cost-usd-rate').clear().type('80.53999999999999').wait(1000)
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})   
    })
})//Case 3 End

//Case 4
describe('template spec', () => {
  it('Task 4 Description: Write tests in Cypress which will check Total', () => {
    cy.visit('https://qa-test.cuat.marcura.com/dashboard')
    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Drydoc').wait(2000)
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Drydock")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Drydock')
    cy.get('#master-cost-input').type('222').wait(2000)  
    cy.get('#master-cost-usd-rate').clear().type('80.53999999999999').wait(1000)
    cy.get('#master-cost-input').invoke('val').then((Valuetext)=>{
      log('INR : ', Valuetext)
    })
   cy.get('#master-cost-usd-rate').invoke('val').then((Valuetext)=>{
      log('US $ Rate : ', Valuetext)
    })
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})

    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Externa').wait(2000) 
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"External")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','External')  
    cy.get('#master-cost-input').type('222').wait(2000)
    cy.get('#master-cost-usd-rate').clear().type('80.53999999999999').wait(1000)
    cy.get('#master-cost-input').invoke('val').then((Valuetext)=>{
      log('INR : ', Valuetext)
    })
    cy.get('#master-cost-usd-rate').invoke('val').then((Valuetext)=>{
      log('US $ Rate : ', Valuetext)
    })
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})
   
    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Interna').wait(2000)
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Internal")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Internal')  
    cy.get('#master-cost-input').type('222').wait(2000)
    cy.get('#master-cost-usd-rate').clear().type('80.53999999999999').wait(1000)
    cy.get('#master-cost-input').invoke('val').then((Valuetext)=>{
      log('INR : ', Valuetext)
    })
    cy.get('#master-cost-usd-rate').invoke('val').then((Valuetext)=>{
      log('US $ Rate : ', Valuetext)
    })
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})
    
    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Transportation').wait(2000) 
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Transportation")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Transportation')  
    cy.get('#master-cost-input').type('222').wait(2000) 
    cy.get('#master-cost-usd-rate').clear().type('80.53999999999999').wait(1000)
    cy.get('#master-cost-input').invoke('val').then((Valuetext)=>{
      log('INR : ', Valuetext)
    })
    cy.get('#master-cost-usd-rate').invoke('val').then((Valuetext)=>{
      log('US $ Rate : ', Valuetext)
    })
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})
    })
})//Case 4 End
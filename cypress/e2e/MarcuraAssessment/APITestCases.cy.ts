"use strict";

//Case 1
describe('APIs Test Suite 1', () => {
    it('Task 1  Description: Write tests in Cypress which are checking public API -> https://exchange.da-desk.com/agency-api/1.1/info ', () => {
        cy.request('GET', 'https://exchange.da-desk.com/agency-api/1.1/info')
        .then((response) => {
          expect(response.status).to.eq(200);
          cy.log(JSON.stringify(response.body));         
          cy.log(response.body.name)
          cy.log(response.body.telephone)
          cy.log(response.body.fax)
          cy.log(response.body.email)
          const contentType = response.headers['content-type'];
          cy.log(`Content-Type: ${contentType}`);
          expect(response.body.name).to.not.be.null
          expect(response.body.telephone).to.not.be.null
          expect(response.body.fax).to.not.be.null
          expect(response.body.email).to.not.be.null
          expect(contentType).to.include('application/json');         
        });  
      })
  }) //Case 1 End

  //Case 2
describe('APIs Test Suite 2', () => {
    const apiUrl = 'https://exchange.da-desk.com/agency-api/1.1/search/masterCostItems';
    const token = '123'; //
      it('Should check GET response code and authentication failure redirection', () => {
      cy.request({
        method: 'GET',
        url: `${apiUrl}?name=test&token=${token}&serviceId=web/edge&serviceVersion=1.5.18.2`,
        failOnStatusCode: false
      }).then((response) => {        
        expect(response.status).to.eq(401);                
        if (response.headers.hasOwnProperty('location')) {
            const locationHeader = response.headers['location'];
            expect(locationHeader).to.include('/authentication-failed');
          } else {            
            cy.log('Location header not found in response. No redirection.......');
          }
      });
    });
    
    it('Should check different results for different "name" parameters', () => {     
      const namesArray = ['Vipul', 'Jhon', 'Warner'];
      cy.wrap(namesArray).each((name) => {
        cy.request({
          method: 'GET',
          url: `${apiUrl}?name=${name}&token=${token}&serviceId=web/edge&serviceVersion=1.5.18.2`,
          failOnStatusCode: false
        }).then((response) => {          
          expect(response.status).to.eq(401);
          if (response.headers.hasOwnProperty('location')) {
            const locationHeader = response.headers['location'];
            expect(locationHeader).to.include('/authentication-failed');
          } else {            
            cy.log('Location header not found in response. No redirection.....');
          }
        });
      });
    });
  }); //End Case 2

  //Case 3
describe('APIs Test Suite 3', () => {
    it('Task 3  Description: Write tests in Cypress which are checking non-public API', () => {
        cy.request({
            method:'GET', 
            url:'https://exchange.da-desk.com/agency-api/1.1/search/masterCostItems',
            failOnStatusCode: false
        })
        .then((response) => {          
          cy.log(`Status Code: ${response.status}`);
          if (response.headers.hasOwnProperty('date')) {
             const dateHeader = new Date(response.headers['date'] as string);
             const formattedDateIST = dateHeader.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
             //const formattedDateUserTimeZone = new Intl.DateTimeFormat(undefined, { timeZone: 'auto' }).format(dateHeader);
             cy.log(`Date IST: ${formattedDateIST}`);            
             //cy.log(`Date USER Time Zone: ${formattedDateUserTimeZone}`);            
          } else {           
            cy.log('Date Header not found in response.');
          }                            
        });  
      })
  }) //Case 3 End
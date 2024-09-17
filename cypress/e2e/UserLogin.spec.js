/// <reference types="cypress" />

describe('User Login Test', () => {
  //wrong username and wrong password
  it('wrong username and wrong password scenario', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"]').eq(3).click();
    cy.get('[placeholder="Email"]').type('sanithtt@gmail.com');
    cy.get('[placeholder="Password"]').type('Test');
    cy.get('[class="ant-btn ant-btn-primary login-form-button"]').click();
    cy.wait(500);
    cy.get('[class="ant-message-custom-content ant-message-error"]').should('contain', 'User not found');
  });
  //wrong username and empty password
  it('wrong username and empty password scenario', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"]').eq(3).click();
    cy.get('[placeholder="Email"]').type('sanithtt@gmail.com');

    cy.get('[class="ant-btn ant-btn-primary login-form-button"]').click();
    cy.wait(4000);
    cy.get('[class="login-form-error"]').should('contain', 'Password is required');
  });

  //wrong username and correct passsword
  it('wrong username and correct passsword scenario', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"]').eq(3).click();
    cy.get('[placeholder="Email"]').type('sanithtt@gmail.com');
    cy.get('[placeholder="Password"]').type('Kyle@123');
    cy.get('[class="ant-btn ant-btn-primary login-form-button"]').click();
    cy.wait(500);
    cy.get('[class="ant-message-custom-content ant-message-error"]').should('contain', 'User not found');
  });
  //correct username and wrong password
  it('correct username and wrong password scenario', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"]').eq(3).click();
    cy.get('[placeholder="Email"]').type('sanithjithnuka+testprodreg@gmail.com');
    cy.get('[placeholder="Password"]').type('Test');
    cy.get('[class="ant-btn ant-btn-primary login-form-button"]').click();
    cy.wait(500);
    cy.get('[class="ant-message-custom-content ant-message-error"]').should('contain', 'Invalid password');
  });
  //correct username and empty password
  it('correct username and empty password scenario', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"]').eq(3).click();
    cy.get('[placeholder="Email"]').type('sanithjithnuka+testprodreg@gmail.com');

    cy.get('[class="ant-btn ant-btn-primary login-form-button"]').click();
    cy.wait(4000);
    cy.get('[class="login-form-error"]').should('contain', 'Password is required');
  });
  //empty username and empty password
  it('empty username and empty password scenario', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"]').eq(3).click();

    cy.get('[class="ant-btn ant-btn-primary login-form-button"]').click();
    cy.wait(4000);
    cy.get('[class="login-form-error"]').eq(0).should('contain', 'Email is required');
    cy.get('[class="login-form-error"]').eq(1).should('contain', 'Password is required');
  });
  //empty username and wrong password
  it('empty username and wrong password scenario', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"]').eq(3).click();

    cy.get('[placeholder="Password"]').type('Test');
    cy.get('[class="ant-btn ant-btn-primary login-form-button"]').click();
    cy.wait(4000);
    cy.get('[class="login-form-error"]').eq(0).should('contain', 'Email is required');
  });
  //correct username and correct password
  it('correct username and correct password scenario', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"]').eq(3).click();
    cy.get('[placeholder="Email"]').type('sanithjithnuka+testprodreg@gmail.com');
    cy.get('[placeholder="Password"]').type('Kyle@123');
    cy.get('[class="ant-btn ant-btn-primary login-form-button"]').click();
    cy.wait(4000);
    cy.get('[type="button"]').should('contain', 'Create Your First Trip!');
  });
});

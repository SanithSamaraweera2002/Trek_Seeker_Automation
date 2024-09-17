/// <reference types="cypress" />
describe('Create Trip', () => {
  beforeEach('Login with registered user', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"]').eq(3).click();
    cy.get('[placeholder="Email"]').type('sanithjithnuka+testprodreg@gmail.com');
    cy.get('[placeholder="Password"]').type('Kyle@123');

    cy.get('[class="ant-btn ant-btn-primary login-form-button"]').click();
  });

  // To verify create your first trip button availability

  it('verify the availabitlity of create your first trip button', () => {
    cy.wait(4000);
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').should('contain', 'Create Your First Trip!');
  });

  // To verify the clickablity of create your first trip button

  it('verify the clickablity of create your first trip button', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]')
      .should('be.visible')
      .should('not.be.disabled')
      .click();
  });

  // To verify the Availablity of Craft your next adventure heading

  it('verify availablity of Craft your next adventure heading', () => {
    cy.wait(1000);

    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('[class="ant-typography title"]').should('be.visible');
  });

  // To verify the Where do you want to go? text

  it('verify Where do you want to go? text', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('label').eq(0).should('have.text', 'Where do you want to go? ');
  });

  // To verify select a city input field

  it('verify select a city input field', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('[class="ant-select-selection-search-input"]').should('be.visible');
  });

  // To verify select a city placeholder

  it('verify select a city placeholder', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('[class="ant-select-selection-placeholder"]').should('have.text', 'Select a city');
  });

  // To verify select a city dropdown list

  it(' verify select a city dropdown list', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('[class="ant-select-selection-search-input"]').click();
    cy.get('[class="rc-virtual-list-holder-inner"]').should('have.text', 'KandyColomboNuwara EliyaGalle');
  });

  // To verify selected city from the dropdown

  it('verify selected city from the dropdown', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('[class="ant-select-selection-search-input"]').click();
    cy.get('[class="ant-select-item ant-select-item-option ant-select-item-option-active"]').click();
    cy.get('[class="ant-select-selector"]').should('have.text', 'Kandy');
  });

  // To verify the Trip Dates text

  it('verify Trip Dates text', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('label').eq(1).should('have.text', 'Trip Dates');
  });

  // To verify range picker

  it('verify range date picker', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    cy.get('[placeholder="Start date"]').click();

    // cy.get('[class="ant-picker-panels"]').contains('10').click()

    // cy.get('[class="ant-picker-panels"]').contains('20').click()

    cy.get('.ant-picker-cell-inner').contains('10').click();
    // cy.get('.ant-picker-panel')
    //   .first()
    //   .within(() => {
    //     cy.get('.ant-picker-cell-inner').contains('10').click();
    //   });

    cy.get('.ant-picker-input input').first().should('have.value', '2024-09-10');

    cy.wait(500);

    cy.get('.ant-picker-cell-inner').contains('12').click();

    // cy.get('.ant-picker-panel')
    //   .last()
    //   .within(() => {
    //     cy.get('.ant-picker-cell-inner').contains('20').click();
    //   });

    cy.get('.ant-picker-input input').last().should('have.value', '2024-09-12');

    /*cy.get('[class="ant-picker-panels"]').contains('20').click()

       
        cy.get('#datePickerInput').should('have.value', '10/10/2024 - 10/20/2024')

        
        cy.get('.selected-range-display').should('contain.text', 'October 10, 2024 - October 20, 2024')*/
  });

  // To verify the Where do you want to go?Select your preferences/interests text

  it('verify Select your preferences/interests text', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('label').eq(2).should('have.text', 'Select your preferences/interests');
  });

  //  To verify the availability of preferences/interests tags

  it('verify the availability of preferences/interests tags ', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    // Historical tag
    cy.get('[class="ant-tag interest-tag "]')
      .eq(0)
      .invoke('text')
      .then((text) => text.trim())
      .should('equal', 'Historical');

    // Art & Cultural tag
    cy.get('[class="ant-tag interest-tag "]')
      .eq(1)
      .invoke('text')
      .then((text) => text.trim())
      .should('equal', 'Art & Cultural');

    // Nature & Wildlife tag
    cy.get('[class="ant-tag interest-tag "]')
      .eq(2)
      .invoke('text')
      .then((text) => text.trim())
      .should('equal', 'Nature & Wildlife');

    // Outdoor Activites, Hiking & Adventure tag
    cy.get('[class="ant-tag interest-tag "]')
      .eq(3)
      .invoke('text')
      .then((text) => text.trim())
      .should('equal', 'Outdoor Activites, Hiking & Adventure');

    // Kid Friendly  tag
    cy.get('[class="ant-tag interest-tag "]')
      .eq(4)
      .invoke('text')
      .then((text) => text.trim())
      .should('equal', 'Kid Friendly');

    // Scenic tag
    cy.get('[class="ant-tag interest-tag "]')
      .eq(5)
      .invoke('text')
      .then((text) => text.trim())
      .should('equal', 'Scenic');

    // Shopping & Local Markets tag
    cy.get('[class="ant-tag interest-tag "]')
      .eq(6)
      .invoke('text')
      .then((text) => text.trim())
      .should('equal', 'Shopping & Local Markets');

    // Relaxation & Wellness tag
    cy.get('[class="ant-tag interest-tag "]')
      .eq(7)
      .invoke('text')
      .then((text) => text.trim())
      .should('equal', 'Relaxation & Wellness');

    // Religious tag
    cy.get('[class="ant-tag interest-tag "]')
      .eq(8)
      .invoke('text')
      .then((text) => text.trim())
      .should('equal', 'Religious');
  });

  // To verify preferences/interests selection

  it('verify Select your preferences/interests selection', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    cy.get('[class="ant-tag interest-tag "]').eq(0).click();

    // verify selected tag color
    cy.get('[class="ant-tag interest-tag selected-tag"]')
      .should('have.css', 'background-color')
      .then((color) => {
        expect(color).to.equal('rgb(181, 218, 243)');
      });
  });

  // To verify the Budget text

  it('verify Select your preferences/interests text', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('label').eq(3).should('have.text', 'Budget');
  });

  // To verify the Budget slider availability

  it('verify the availability of Budget slider', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    cy.get('[class="ant-slider ant-slider-horizontal ant-slider-with-marks"]').should('be.visible');
  });

  // To verify the Budget slider value

  it('verify the Budget slider value', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    cy.get('.ant-slider.ant-slider-horizontal.ant-slider-with-marks').click('center');

    cy.get('.ant-slider').find('.ant-slider-handle').should('have.attr', 'aria-valuenow', '1');
  });

  // To verify the Age Category text

  it('verify the Age Category text', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('label').eq(4).should('have.text', 'Age Category');
  });

  // To verify the Age Category options

  it('verify the Age Category options', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    cy.get('input[type="radio"]').eq(0).should('have.value', '18-24');
    cy.get('input[type="radio"]').eq(1).should('have.value', '25-35');
    cy.get('input[type="radio"]').eq(2).should('have.value', '36-45');
    cy.get('input[type="radio"]').eq(3).should('have.value', '46-60');
  });

  // To verify the Age Category option selection

  it('verify the Age Category option selection', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    cy.get('input[type="radio"]').eq(1).check().should('be.checked');

    // Verify the others are not checked
    cy.get('input[type="radio"]').eq(0).should('not.be.checked');
    cy.get('input[type="radio"]').eq(2).should('not.be.checked');
    cy.get('input[type="radio"]').eq(3).should('not.be.checked');
  });

  // To verify the Gender text

  it('verify the Gender text', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('label').eq(9).should('have.text', 'Gender');
  });

  // To verify the Gender options

  it('verify the Gender options', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    cy.get('input[type="radio"]').eq(4).should('have.value', 'Male');
    cy.get('input[type="radio"]').eq(5).should('have.value', 'Female');
    cy.get('input[type="radio"]').eq(6).should('have.value', 'Other');
  });

  // To verify the Gender option selection

  it('verify the Gender option selection', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    cy.get('input[type="radio"]').eq(4).check().should('be.checked');

    // Verify the others are not checked
    cy.get('input[type="radio"]').eq(5).should('not.be.checked');
    cy.get('input[type="radio"]').eq(6).should('not.be.checked');
  });

  // To verify the Gender text

  it('verify the Gender text', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('label').eq(9).should('have.text', 'Gender');
  });

  // To verify the Gender options

  it('verify the Gender options', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    cy.get('input[type="radio"]').eq(4).should('have.value', 'Male');
    cy.get('input[type="radio"]').eq(5).should('have.value', 'Female');
    cy.get('input[type="radio"]').eq(6).should('have.value', 'Other');
  });

  // To verify the Gender option selection

  it('verify the Gender option selection', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    cy.get('input[type="radio"]').eq(4).check().should('be.checked');

    // Verify the others are not checked
    cy.get('input[type="radio"]').eq(5).should('not.be.checked');
    cy.get('input[type="radio"]').eq(6).should('not.be.checked');
  });

  // To verify the Traveler Category text

  it('verify the Traveler Category text', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('label').eq(13).should('have.text', 'Traveler Category');
  });

  // To verify the Gender options

  it('verify the Traveler Category options', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    cy.get('input[type="radio"]').eq(7).should('have.value', 'Solo');
    cy.get('input[type="radio"]').eq(8).should('have.value', 'Couple');
    cy.get('input[type="radio"]').eq(9).should('have.value', 'Group');
  });

  // To verify the Traveler Category option selection

  it('verify the Traveler Category option selection', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();

    cy.get('input[type="radio"]').eq(9).check().should('be.checked');

    // Verify the others are not checked
    cy.get('input[type="radio"]').eq(7).should('not.be.checked');
    cy.get('input[type="radio"]').eq(8).should('not.be.checked');
  });

  // To verify create new trip button availability

  it('verify create new trip button availability', () => {
    cy.wait(1000);

    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('[type="button"]').should('be.visible');
  });

  // To verify create new trip button naming

  it('verify create new trip button naming', () => {
    cy.wait(1000);

    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('[type="button"]').should('have.text', 'Create New Trip');
  });

  // To verify the clickablity of create new trip button

  it('verify the clickablity of create new trip button', () => {
    cy.get('[class="ant-btn ant-btn-primary ant-btn-lg plan-button"]').click();
    cy.get('[type="button"]').should('be.visible').should('not.be.disabled').click();
  });
});

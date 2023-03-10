describe('My First Test', () => {
    it('Visits the app root url', () => {
      cy.visit('/');
      cy.contains('Rethink your living');
      cy.contains('& renting');
    });
  });
  
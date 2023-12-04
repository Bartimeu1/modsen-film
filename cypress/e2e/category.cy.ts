describe('category spec', () => {
  it('category bar should exist', () => {
    cy.visit('/');
    cy.get('[data-testid="category-bar"]').should('exist');
  });

  it('should display categories after data fetching', () => {
    cy.visit('/');
    cy.get('[data-testid="category-button"]').should(
      'have.length.greaterThan',
      1,
    );
  });

  it('should select a category when button clicked', () => {
    cy.visit('/');
    cy.get('[data-testid="category-button"]').first().click();
    cy.get('[data-testid="category-button"]')
      .first()
      .should('have.attr', 'iscurrent', 'true');
    cy.get('[data-testid="category-button"]').contains('Action').click();
    cy.get('[data-testid="category-button"]')
      .contains('Action')
      .should('have.attr', 'iscurrent', 'true');
  });

  it('should display an error icon after fetch error', () => {
    cy.intercept('GET', 'https://api.themoviedb.org/3/genre/movie/list', {
      statusCode: 500,
      body: {},
    }).as('getCategories');

    cy.visit('/');
    cy.get('[data-testid="category-error-icon"]').should('exist');
  });
});

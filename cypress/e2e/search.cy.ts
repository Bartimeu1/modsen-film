describe('search spec', () => {
  it('search bar should exist', () => {
    cy.visit('/');
    cy.get('[data-testid="search-bar"]').should('exist');
  });

  it('video titles should contain the entered text after searching', () => {
    cy.visit('/');
    cy.get('[data-testid="search-bar"] input').type('Harry');
    cy.get('[data-testid="search-bar"] button').click();
    cy.get('[data-testid="movie-item"]')
      .should('exist')
      .and('contain', 'Harry');
  });

  it('the movie category should be "All" after searching', () => {
    cy.visit('/');
    cy.get('[data-testid="category-button"]').contains('Action').click();
    cy.get('[data-testid="search-bar"] input').type('Harry');
    cy.get('[data-testid="search-bar"] button').click();
    cy.get('[data-testid="category-button"][iscurrent="true"]').should(
      'contain',
      'All',
    );
  });

  it('the search text should reset after category changing', () => {
    cy.visit('/');
    cy.get('[data-testid="search-bar"] input').type('Harry');
    cy.get('[data-testid="category-button"]').contains('Action').click();
    cy.get('[data-testid="search-bar"] input').should('have.value', '');
  });
});

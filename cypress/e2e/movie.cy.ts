describe('movie spec', () => {
  it('movie list should exist', () => {
    cy.visit('/');
    cy.get('[data-testid="movie-list"]').should('exist');
  });

  it('should display 16 movies items after base data fetching', () => {
    cy.visit('/');
    cy.get('[data-testid="movie-item"]').should('have.length', 16);
  });

  it('video titles should contain the entered text after searching', () => {
    cy.visit('/');
    cy.get('[data-testid="search-bar"] input').type('Harry');
    cy.get('[data-testid="search-bar"] button').click();
    cy.get('[data-testid="movie-item"]')
      .should('exist')
      .and('contain', 'Harry');
  });

  it('should display 32 movies after show more click', () => {
    cy.visit('/');
    cy.get('[data-testid="show-more-button"]').should('exist').click();
    cy.get('[data-testid="movie-item"]').should('have.length', 32);
  });

  it('should open a modal after item click', () => {
    cy.visit('/');
    cy.get('[data-testid="movie-item"]').first().click();
    cy.get('[data-testid="movie-modal"]').should('be.visible');
  });

  it('should hide modal after close button click', () => {
    cy.visit('/');
    cy.get('[data-testid="movie-item"]').first().click();
    cy.get('[data-testid="movie-modal-close"]').click();
    cy.get('[data-testid="movie-modal"]').should('not.exist');
  });

  it('empty list should show "not found" text', () => {
    cy.visit('/');
    cy.get('[data-testid="search-bar"] input').type('nothingFoundText');
    cy.get('[data-testid="search-bar"] button').click();
    cy.get('[data-testid="movie-list-empty"]').should('exist');
  });

  it('should display an error text after fetch error', () => {
    cy.intercept(
      'GET',
      'https://api.themoviedb.org/3/discover/movie?with_genres=&page=1',
      (req) => {
        req.reply({
          statusCode: 500,
          body: {},
        });
      },
    ).as('getCategories');

    cy.visit('/');
    cy.get('[data-testid="movie-list-error"]').should('exist');
  });
});

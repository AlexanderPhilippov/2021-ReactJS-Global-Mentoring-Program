/// <reference types="cypress" />

describe('E2E Tests', () => {
    it('Search, open details and close it after assert', () => {
        // Open site
        cy.visit('http://127.0.0.1:3000')
        // Assert redirect on search
        cy.url().should('eq', 'http://127.0.0.1:3000/search')
        cy.screenshot('search page', { overwrite: true })
        // Find Movie by name
        cy.get('#searchMovieInput').type('Black Panther')
        cy.get('.header__search > [type="button"]').click()
        // Assert query contains request
        cy.url().should('include', '/search/All/Black%20Panther')
        // Assert search result
        cy.get('.movie-list-header__total > span').contains(1)
        cy.screenshot('search result', { overwrite: true })
        // Opean Movie Details component
        cy.get('.movie-card__title').click()
        // Assert query contains movieId
        cy.url().should('include', '/search/All/Black%20Panther?movie=')
        cy.screenshot('header with movie details', {
            overwrite: true,
        })
        // Assert Movie details card is open and contains correct value
        cy.get('.movie-details__info-title').contains('Black Panther')
        // Assert Movie details contains description
        cy.get('.movie-details__info-overview').contains(
            'returns home from America to the reclusive'
        )
        // Close Movie details card
        cy.get('.header__search-icon').click()
        // Assert query does not contains movieId
        cy.url().should(
            'eq',
            'http://127.0.0.1:3000/search/All/Black%20Panther'
        )
        cy.scrollTo(0, 0)
    })
})

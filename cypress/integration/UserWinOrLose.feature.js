describe("user win or lose", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        cy.get('[data-cy="rock"]').contains('Choose Fire').click()
        cy.get("#me").should("contain", "You have chosen Rock")
    })
    
    it("user picks rock", () => {
        cy.get("#you").contains("rock")
        cy.get("[data-cy='winner']").should("contain", "Pokemons don't fight there friends")
    })

    it("user picks paper", () => {
        cy.get("#you").contains("paper")
        cy.get("[data-cy='winner']").should("contain", "You lose!")
    })

    it("user picks scissor", () => {
        cy.get("#you").contains("scissor")
        cy.get("[data-cy='winner']").should("contain", "You are the Champion")
    })
})
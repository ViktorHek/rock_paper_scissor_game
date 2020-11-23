describe("user win or lose", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        cy.get('#rock').contains('Choose Rock').click()
        cy.get("#playerSelection").should("contain", "You have chosen Rock")
    })
    
    it("user picks rock", () => {
        cy.get("#ComputerCharacter").contains(1)
        cy.get("#scoreMessage").should("contain", "it's a tie")
        // cy.get("#ScoreBoardUser").should("contain", "0")
        // cy.get("#ScoreBoardComputer").should("contain", "0")
    })

    it("user picks paper", () => {
        cy.get("#ComputerCharacter").contains(2)
        cy.get("#scoreMessage").should("contain", "You lose")
        // cy.get("#ScoreBoardUser").should("contain", "0")
        // cy.get("#ScoreBoardComputer").should("contain", "1")
    })

    it("user picks scissor", () => {
        cy.get("#ComputerCharacter").contains(3)
        cy.get("#scoreMessage").should("contain", "You win!")
        // cy.get("#ScoreBoardUser").should("contain", "1")
        // cy.get("#ScoreBoardComputer").should("contain", "0")
    })
})
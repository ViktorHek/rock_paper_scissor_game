describe("user win or lose", () => {
    beforeEach(() => {
        cy.get('#button').contains('Choose Rock').click()
        cy.get("#playerSelection").should("contain", "You have chosen Rock")
    })
    
    it("user picks rock", () => {
        cy.get("#ComputerCharacter").contains(1)
        cy.get("#scoreMessage").should("contain", "it's a tie")
    })

    it("user picks paper", () => {
        cy.get("#ComputerCharacter").contains(2)
        cy.get("#scoreMessage").should("contain", "You lose")
    })

    it("user picks scissor", () => {
        cy.get("#ComputerCharacter").contains(3)
        cy.get("#scoreMessage").should("contain", "You win!")
    })
})
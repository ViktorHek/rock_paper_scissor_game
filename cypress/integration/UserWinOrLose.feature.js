describe("user win or lose", () => {
    beforeEach(() => {
        cy.get('button').contains('Choose Rock').click()
        cy.get("#playerSelection").should("contain", "You have chosen Rock")
    })
    
    it("user picks rock", () => {
        cy.get("#playerSelection").then(("#computerCharacter") => {
            if ("#computerCharacter"(3))) {
                should("contain", "You Win")
            } else {
                should("contain", "You lost or tied")
            }
        })
    })
})
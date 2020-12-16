describe("user win or lose", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000", {
            OnBeforeLoad(window) {
                cy.stub(window.Math, "random").returns(1)
            }
        })
    })
    
    it("user picks fire", () => {
        cy.get("[data-cy='fire']").contains('Choose Fire').click()
        cy.get("[data-cy='startFight']").click()
        cy.get("[data-cy='winner']").should("contain", "You lose!")
    })

    it("user picks water", () => {
        cy.get("[data-cy='water']").contains("Choose Water").click()
        cy.get("[data-cy='startFight']").click()
        cy.get("[data-cy='winner']").should("contain", "Pokemons don't fight there friends")
    })

    it("user picks grass", () => {
        cy.get("[data-cy='grass']").contains("Choose Grass").click()
        cy.get("[data-cy='startFight']").click()
        cy.get("[data-cy='winner']").should("contain", "You are the Champion")
    })
})
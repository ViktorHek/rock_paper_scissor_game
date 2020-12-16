describe("user win or lose", () => {
  describe("computer choose fire", () => {
    it("user picks fire and they tie", () => {
      cy.visit("/", {
        onBeforeLoad(window) {
          cy.stub(window.Math, "floor").returns(0);
        },
      });
      cy.get("[data-cy='fire']").contains("Choose Fire").click();
      cy.get("[data-cy='startFight']").click();
      cy.get("[data-cy='winner']").should(
        "contain",
        "Pokemons don't fight there friends"
      );
    });

    it("user picks water and wins", () => {
      cy.visit("/", {
        onBeforeLoad(window) {
          cy.stub(window.Math, "floor").returns(0);
        },
      });
      cy.get("[data-cy='water']").contains("Choose Water").click();
      cy.get("[data-cy='startFight']").click();
      cy.get("[data-cy='winner']").should("contain", "You are the Champion");
    });

    it("user picks grass and lose", () => {
      cy.visit("/", {
        onBeforeLoad(window) {
          cy.stub(window.Math, "floor").returns(0);
        },
      });
      cy.get("[data-cy='grass']").contains("Choose Grass").click();
      cy.get("[data-cy='startFight']").click();
      cy.get("[data-cy='winner']").should("contain", "You lose!");
    });
  });

  describe("computer choose water", () => {
    it("user picks fire and lose", () => {
      cy.visit("/", {
        onBeforeLoad(window) {
          cy.stub(window.Math, "floor").returns(1);
        },
      });
      cy.get("[data-cy='fire']").contains("Choose Fire").click();
      cy.get("[data-cy='startFight']").click();
      cy.get("[data-cy='winner']").should("contain", "You lose!");
    });

    it("user picks water and they tie", () => {
      cy.visit("/", {
        onBeforeLoad(window) {
          cy.stub(window.Math, "floor").returns(1);
        },
      });
      cy.get("[data-cy='water']").contains("Choose Water").click();
      cy.get("[data-cy='startFight']").click();
      cy.get("[data-cy='winner']").should(
        "contain",
        "Pokemons don't fight there friends"
      );
    });

    it("user picks grass and wins", () => {
      cy.visit("/", {
        onBeforeLoad(window) {
          cy.stub(window.Math, "floor").returns(1);
        },
      });
      cy.get("[data-cy='grass']").contains("Choose Grass").click();
      cy.get("[data-cy='startFight']").click();
      cy.get("[data-cy='winner']").should("contain", "You are the Champion");
    });
  });

  describe("computer choose grass", () => {
    it("user picks fire and wins", () => {
      cy.visit("/", {
        onBeforeLoad(window) {
          cy.stub(window.Math, "floor").returns(2);
        },
      });
      cy.get("[data-cy='fire']").contains("Choose Fire").click();
      cy.get("[data-cy='startFight']").click();
      cy.get("[data-cy='winner']").should("contain", "You are the Champion");
    });

    it("user picks water and lose", () => {
      cy.visit("/", {
        onBeforeLoad(window) {
          cy.stub(window.Math, "floor").returns(2);
        },
      });
      cy.get("[data-cy='water']").contains("Choose Water").click();
      cy.get("[data-cy='startFight']").click();
      cy.get("[data-cy='winner']").should("contain", "You lose!");
    });

    it("user picks grass and they tie", () => {
      cy.visit("/", {
        onBeforeLoad(window) {
          cy.stub(window.Math, "floor").returns(2);
        },
      });
      cy.get("[data-cy='grass']").contains("Choose Grass").click();
      cy.get("[data-cy='startFight']").click();
      cy.get("[data-cy='winner']").should(
        "contain",
        "Pokemons don't fight there friends"
      );
    });
  });
});

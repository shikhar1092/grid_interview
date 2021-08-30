import webpageOperations from "../support/pageObject/operationsLogic.page";
import * as constants from "../support/pageObject/operationsLogic.page";

describe("Functionality tests for D3A", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.log("Execute Login before each test case");
    cy.get("#email").clear().type("shikharshr@gmail.com");
    // log: false will prevent the password from being shown in logs.
    cy.get("#password").clear().type("test@123", { log: false });
    cy.get("button").click();
    cy.log("Login Successful");
  });

  // Instantiate the object of page class to access the logic methods
  const pageObj = new webpageOperations();

  it("Login", () => {
    cy.log("Starting login test..");
    pageObj.getHomePageIcon().should("be.visible");
    cy.log("Login test completed successfully.");
  });

  it(`Create a new project: ${constants.PROJECT_NAME_TEXT}`, () => {
    cy.log("Started the new project test case...");
    pageObj.createNewProject().should("be.visible");
    cy.log("Create new project test case completed successfully.");
  });

  it(`Add new simulation to ${constants.PROJECT_NAME_TEXT}`, () => {
    cy.log("Starting new simulation test case...");
    pageObj.createNewSimulation().should("be.visible");
    cy.log("Check is Simulation listed correctly");
    pageObj.isSimulationCorrectlyListed().should("be.visible");
    cy.log("Create new simulation test completed succuessfully.");
  });
});

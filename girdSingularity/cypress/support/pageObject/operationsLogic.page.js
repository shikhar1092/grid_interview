//CONSTANTS
export const PROJECT_NAME_TEXT = "Project-1";
export const PROJECT_DESCRIPTION_TEXT =
  "This is a dummy project for created for testing purpose.";
export const SIMULATION_NAME_TEXT = "Test simulation - 1";
export const SIMULATION_DESCRIPTION_TEXT = "Testing simulation creation";
export const HOME_ICON = ".icon-home ";
export const PROJECT_ICON = '[class="icon-projects "]';
export const XPATH_NEW_PROJECT_BUTTON = "//span[text()='new project']";
export const ID_FOR_PROJECT_NAME = "#input-field-name";
export const ID_FOR_DESCRIPTION_OF_NEW_PROJECT = "#textarea-field-nameTextArea";
export const XPATH_ADD_BUTTON_IN_PROJECT = '//span[text()="Add"]';
export const PROJECTS_URL_KEYWORD = "/projects";
export const XPATH_NEW_SIMULATION_BUTTON = '//span[text()="new simulation"]';
export const ID_SIMULATION_NAME = "#input-field-name";
export const ID_SIMULATION_DESCRIPTION = "#textarea-field-description";
export const XPATH_NEXT_BUTTON = '//span[text()="Next"]';
export const SIMULATION_HEADER_BUTTON =
  ".header-simulation-button-group--active";

class webpageOperations {
  getHomePageIcon() {
    // this return the home icon which is only visible after successful login.
    return cy.get(HOME_ICON);
  }

  createNewProject() {
    // this method click on the project icon and then create new project.
    cy.get(PROJECT_ICON).click();
    cy.xpath(XPATH_NEW_PROJECT_BUTTON).click();
    cy.get(ID_FOR_PROJECT_NAME).click().type(PROJECT_NAME_TEXT);
    cy.get(ID_FOR_DESCRIPTION_OF_NEW_PROJECT)
      .click()
      .type(PROJECT_DESCRIPTION_TEXT);
    cy.xpath(XPATH_ADD_BUTTON_IN_PROJECT).click();
    return cy.xpath('//span[text()="' + PROJECT_NAME_TEXT + '"]');
  }

  createNewSimulation() {
    // this is helper method for creating a new simulation under a project.
    cy.visit(PROJECTS_URL_KEYWORD);
    cy.xpath('//span[text()="' + PROJECT_NAME_TEXT + '"]').click();
    cy.xpath(XPATH_NEW_SIMULATION_BUTTON).click();
    cy.get(ID_SIMULATION_NAME).clear().type(SIMULATION_NAME_TEXT);
    cy.get(ID_SIMULATION_DESCRIPTION).click().type(SIMULATION_DESCRIPTION_TEXT);
    cy.xpath(XPATH_NEXT_BUTTON).click();
    return cy.get(SIMULATION_HEADER_BUTTON);
  }

  isSimulationCorrectlyListed() {
    // this is helper method to ensure if new simulation is correctly listed.
    cy.visit(PROJECTS_URL_KEYWORD);
    cy.xpath('//span[text()="' + PROJECT_NAME_TEXT + '"]').click();
    return cy.xpath('//p[text()="' + SIMULATION_NAME_TEXT + '"]');
  }
}

export default webpageOperations;

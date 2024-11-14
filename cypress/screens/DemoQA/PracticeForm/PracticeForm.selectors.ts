export const chooseFileButton = () => cy.get('#uploadPicture')
export const cityOption = () => cy.get('[id^="react-select-4"]')
export const citySelect = () => cy.get('#city')
export const closeButton = () => cy.get('#closeLargeModal')
export const currentAddress = () => cy.get('#currentAddress')
export const dateOfBirth = () => cy.get('#dateOfBirthInput')
export const emailAddress = () => cy.get('#userEmail')
export const firstName = () => cy.get('#firstName')
export const firstSubject = () => cy.get('#react-select-2-option-0')
export const formTable = () => cy.get('table')
export const lastName = () => cy.get('#lastName')
export const mobileNumber = () => cy.get('#userNumber')
export const monthSelect = () => cy.get('.react-datepicker__month-select')
export const stateOption = () => cy.get('[id^="react-select-3"]')
export const stateSelect = () => cy.get('#state')
export const subjectsInput = () => cy.get('#subjectsInput')
export const submitButton = () => cy.get('#submit')
export const valueCell = () => cy.get('td:nth-child(even)')
export const yearSelect = () => cy.get('.react-datepicker__year-select')

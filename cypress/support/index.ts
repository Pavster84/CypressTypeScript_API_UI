declare namespace Cypress {
    interface Chainable {
        login(email: string, password: string): void
        getLinks(): Chainable<Element>
        getText(): any
        getFullNameTxtBox()
        setTelephone(tel: string): void
    }
}
type ElementSelector<T extends HTMLElement = HTMLElement> = Cypress.Chainable<
  JQuery<T>
>

export const isInViewport = <T extends HTMLElement | HTMLHeadingElement>(
  selector: ElementSelector<T>
) => {
  cy.window().then((window) => {
    selector.then(($element) => {
      const bounding = $element[0].getBoundingClientRect()
      const windowHeight = window.innerHeight

      expect(bounding.top, 'Top is in viewport').to.be.within(-1, windowHeight)
      expect(bounding.bottom, 'Bottom is in viewport').to.be.at.most(
        windowHeight
      )
    })
  })
}

export const isNotInViewport = <T extends HTMLElement | HTMLHeadingElement>(
  selector: ElementSelector<T>
) => {
  cy.window().then((window) => {
    selector.then(($element) => {
      const bounding = $element[0].getBoundingClientRect()
      const windowHeight = window.innerHeight

      expect(bounding.top, 'Top is not in viewport').to.be.greaterThan(
        windowHeight
      )
      expect(bounding.bottom, 'Bottom is not in viewport').to.be.greaterThan(
        windowHeight
      )
    })
  })
}

import Page from 'classes/Page'

export default class About extends Page {
  constructor() {
    super({
      id: 'about',
      element: '.about',
      elements: {
        navigation: document.querySelector('.navigation'),
        title: '.about__title',
      },
    })
  }
}

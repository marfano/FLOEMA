import each from 'lodash/each'

import Detection from 'classes/Detection'

import Navigation from 'components/Navigation'
import Preloader from 'components/Preloader'

import About from 'pages/About'
import Collections from 'pages/Collections'
import Home from 'pages/Home'
import Detail from 'pages/Detail'

class App {
  constructor() {
    this.createContent()

    this.createPreloader()
    this.createNavigation()
    this.createPages()

    this.addEventListeners()
    this.addLinkListeners()

    this.update()
  }

  createNavigation() {
    this.navigation = new Navigation({
      template: this.template,
    })
  }

  createPreloader() {
    this.preloader = new Preloader({})
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  createContent() {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createPages() {
    this.pages = {
      about: new About(),
      collections: new Collections(),
      home: new Home(),
      detail: new Detail(),
    }

    this.page = this.pages[this.template]
    this.page.create()
  }

  /*
   * Events
   */

  onPreloaded() {
    this.preloader.destroy()

    this.onResize()

    this.page.show()
  }

  onPopState() {
    this.onChange({
      url: window.location.pathname,
      push: false,
    })
  }

  async onChange({ url, push = true }) {
    await this.page.hide()

    const res = await window.fetch(url)
    if (res.status === 200) {
      const html = await res.text()
      const div = document.createElement('div')

      if (push) {
        window.history.pushState({}, '', url)
      }

      div.innerHTML = html

      const divContent = div.querySelector('.content')
      this.content.innerHTML = divContent.innerHTML

      this.template = divContent.getAttribute('data-template')

      this.navigation.onChange(this.template)

      this.content.setAttribute('data-template', this.template)

      this.page = this.pages[this.template]

      this.page.create()

      this.onResize()

      this.page.show()

      this.addLinkListeners()
    } else {
      console.error(`response status: ${res.status}`)
    }
  }

  onResize() {
    if (this.page && this.page.onResize) {
      this.page.onResize()
    }
  }

  /*
   *  Loop
   */

  update() {
    if (this.page && this.page.update) {
      this.page.update()
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

  /*
   * Listeners
   */

  addEventListeners() {
    window.addEventListener('popstate', this.onPopState.bind(this))
    window.addEventListener('resize', this.onResize.bind(this))
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a')

    each(links, (link) => {
      link.onclick = (event) => {
        event.preventDefault()

        const { href } = link
        this.onChange({ url: href })
      }
    })
  }
}

new App()

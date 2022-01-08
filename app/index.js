/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable semi */
import each from 'lodash/each'

import About from 'pages/About'
import Collections from 'pages/Collections'
import Home from 'pages/Home'
import Detail from 'pages/Detail'

class App {
  constructor() {
    this.createContent()
    this.createPages()
    this.addLinkListeners()
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
    this.page.show()
  }

  async onChange(url) {
    await this.page.hide()

    const res = await window.fetch(url)
    if (res.status === 200) {
      const html = await res.text()

      const div = document.createElement('div')
      div.innerHTML = html

      const divContent = div.querySelector('.content')
      this.content.innerHTML = divContent.innerHTML

      this.template = divContent.getAttribute('data-template')
      this.content.setAttribute('data-template', this.template)

      this.page = this.pages[this.template]
      this.page.create()
      this.page.show()
    } else {
      console.error(`response status: ${res.status}`)
    }
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a')

    each(links, (link) => {
      link.onclick = (event) => {
        event.preventDefault()

        const { href } = link
        this.onChange(href)
      }
    })
  }
}

new App()

import { Plane, Transform } from 'ogl'

import GSAP from 'gsap'

import map from 'lodash/map'

import Prefix from 'prefix'

import Media from './Media'

export default class {
  constructor({ gl, scene, sizes, transition }) {
    this.id = 'collections'

    this.gl = gl
    this.scene = scene
    this.sizes = sizes
    this.transition = transition

    this.transformPrefix = Prefix('transform')

    this.group = new Transform()

    this.galleryElement = document.querySelector( '.collections__gallery' ) // prettier-ignore
    this.galleryWrapperElement = document.querySelector( '.collections__gallery__wrapper' ) // prettier-ignore

    this.titlesElement = document.querySelector('.collections__titles')
    this.collectionsElements = document.querySelectorAll('.collections__article') // prettier-ignore
    this.collectionsElementsActive = 'collections__article--active'
    this.mediasElements = document.querySelectorAll( '.collections__gallery__media' ) // prettier-ignore

    this.x = {
      current: 0,
      target: 0,
      lerp: 0.1,
    }

    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      lerp: 0.1,
      velocity: 1,
    }

    this.createGeometry()
    this.createGallery()

    this.onResize({
      sizes: this.sizes,
    })

    this.group.setParent(this.scene)

    this.show()
  }

  createGeometry() {
    this.geometry = new Plane(this.gl)
  }

  createGallery() {
    this.medias = map(this.mediasElements, (element, index) => {
      return new Media({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes,
      })
    })
  }

  // Animations
  async show() {
    if (this.transition) {
      const { src } = this.transition.mesh.program.uniforms.tMap.value.image
      const texture = window.TEXTURES[src]
      const media = this.medias.find((media) => media.texture === texture)

      GSAP.delayedCall(1, (_) => {
        this.scroll.current =
          this.scroll.target =
          this.scroll.last =
          this.scroll.start =
            -media.mesh.position.x

        console.log(media.mesh.position.x, this.scroll.current)
      })

      this.transition.animate(this.medias[0].mesh, (_) => {})
    }

    map(this.medias, (media) => media.show())
  }

  hide() {
    map(this.medias, (media) => media.hide())
  }

  // Events

  onResize(e) {
    this.sizes = e.sizes

    this.bounds = this.galleryWrapperElement.getBoundingClientRect()

    this.scroll.last = this.scroll.target = 0

    map(this.medias, (media) => media.onResize(e, this.scroll))

    this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth
  }

  onTouchDown({ x, y }) {
    this.scroll.last = this.scroll.current
  }

  onTouchMove({ x, y }) {
    const distance = x.start - x.end

    this.scroll.target = this.scroll.last - distance
  }

  onTouchUp({ x, y }) {}

  onWheel({ pixelY }) {
    this.scroll.target += pixelY
  }

  //   Changed
  onChange(index) {
    this.index = index
    const selectedCollection = parseInt(this.mediasElements[this.index].getAttribute('data-index')) // prettier-ignore

    map(this.collectionsElements, (element, elementIndex) => {
      if (elementIndex === selectedCollection) {
        element.classList.add(this.collectionsElementsActive)
      } else {
        element.classList.remove(this.collectionsElementsActive)
      }
    })

    this.titlesElement.style[this.transformPrefix] = `translateY(-${25 * selectedCollection}%) translate(-50%, -50%) rotate(-90deg)` // prettier-ignore
  }

  // Update

  update() {
    this.scroll.target = GSAP.utils.clamp(-this.scroll.limit, 0, this.scroll.target) // prettier-ignore

    this.scroll.current = GSAP.utils.interpolate( this.scroll.current, this.scroll.target, this.scroll.lerp ) // prettier-ignore

    this.galleryElement.style[this.transformPrefix] = `translateX(${this.scroll.current}px)` // prettier-ignore

    if (this.scroll.last < this.scroll.current) {
      this.x.direction = 'right'
    } else if (this.scroll.last > this.scroll.current) {
      this.x.direction = 'left'
    }

    this.scroll.last = this.scroll.current

    const index = Math.floor(Math.abs(this.scroll.current / this.scroll.limit) * this.medias.length) // prettier-ignore

    if (this.index !== index) {
      this.onChange(index)
    }

    map(this.medias, (media, index) => {
      media.update(this.scroll.current, this.index)
      // media.mesh.rotation.z = Math.abs(GSAP.utils.mapRange(0, 1, -0.2, 0.2, index / (this.medias.length - 1))) - 0.1

      media.mesh.position.y += Math.cos((media.mesh.position.x / this.sizes.width) * Math.PI * 0.1) * 40 - 40 // prettier-ignore
    })
  }

  // Destroy
  destroy() {
    this.scene.removeChild(this.group)
  }
}

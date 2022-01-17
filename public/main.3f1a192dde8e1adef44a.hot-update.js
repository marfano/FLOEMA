/*! For license information please see main.3f1a192dde8e1adef44a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),r=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s.n(l),n=s("./app/components/Canvas/Home/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.scene=e,this.sizes=s,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.speed={current:0,target:0,lerp:.1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new r.Plane(this.gl,{heightSegments:20,widthSegments:20})}createGallery(){this.medias=o()(this.mediasElements,((t,e)=>new n.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){o()(this.medias,(t=>t.show()))}hide(){o()(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={width:this.galleryBounds.width/window.innerWidth*this.sizes.width,height:this.galleryBounds.height/window.innerHeight*this.sizes.height},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,o()(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.speed.target=1,this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){this.speed.target=0}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){this.galleryBounds&&(this.speed.current=h.default.utils.interpolate(this.speed.current,this.speed.target,this.speed.lerp),this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,o()(this.medias,((t,e)=>{const s=.6*this.sizes.width,i=t.mesh.scale.x/2;if("left"===this.x.direction){t.mesh.position.x+i<-s&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-i>s&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}const r=.6*this.sizes.height,l=t.mesh.scale.y/2;if("top"===this.y.direction){t.mesh.position.y+l<-r&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y-l>r&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll,this.speed.current)})))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"f751a96974f2e3876ff8"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG4gICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJyApIC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgdGhpcy54ID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMSxcbiAgICB9XG5cbiAgICB0aGlzLnkgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGVycDogMC4xLFxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfVxuXG4gICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjEsXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVHZW9tZXRyeSgpXG4gICAgdGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cbiAgICB0aGlzLnNob3coKVxuICB9XG5cbiAgY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XG4gICAgICBoZWlnaHRTZWdtZW50czogMjAsXG4gICAgICB3aWR0aFNlZ21lbnRzOiAyMCxcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXMsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyBBbmltYXRpb25zXG4gIHNob3coKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEpID0+IG1lZGlhLnNob3coKSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEpID0+IG1lZGlhLmhpZGUoKSlcbiAgfVxuXG4gIC8vIEV2ZW50c1xuXG4gIG9uUmVzaXplKGUpIHtcbiAgICB0aGlzLmdhbGxlcnlCb3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnNpemVzID0gZS5zaXplc1xuXG4gICAgdGhpcy5nYWxsZXJ5U2l6ZXMgPSB7XG4gICAgICB3aWR0aDogKHRoaXMuZ2FsbGVyeUJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6ICh0aGlzLmdhbGxlcnlCb3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0KSAqIHRoaXMuc2l6ZXMuaGVpZ2h0LCAvLyBwcmV0dGllci1pZ25vcmVcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC54ID0gdGhpcy54LnRhcmdldCA9IDBcbiAgICB0aGlzLnNjcm9sbC55ID0gdGhpcy55LnRhcmdldCA9IDBcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhKSA9PiBtZWRpYS5vblJlc2l6ZShlLCB0aGlzLnNjcm9sbCkpXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc3BlZWQudGFyZ2V0ID0gMVxuXG4gICAgdGhpcy5zY3JvbGxDdXJyZW50LnggPSB0aGlzLnNjcm9sbC54XG4gICAgdGhpcy5zY3JvbGxDdXJyZW50LnkgPSB0aGlzLnNjcm9sbC55XG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgIGNvbnN0IHhEaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuICAgIGNvbnN0IHlEaXN0YW5jZSA9IHkuc3RhcnQgLSB5LmVuZFxuXG4gICAgdGhpcy54LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC54IC0geERpc3RhbmNlXG4gICAgdGhpcy55LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC55IC0geURpc3RhbmNlXG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNwZWVkLnRhcmdldCA9IDBcbiAgfVxuXG4gIG9uV2hlZWwoeyBwaXhlbFgsIHBpeGVsWSB9KSB7XG4gICAgdGhpcy54LnRhcmdldCArPSBwaXhlbFhcbiAgICB0aGlzLnkudGFyZ2V0ICs9IHBpeGVsWVxuICB9XG5cbiAgLy8gVXBkYXRlXG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cblxuICAgIHRoaXMuc3BlZWQuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zcGVlZC5jdXJyZW50LCB0aGlzLnNwZWVkLnRhcmdldCwgdGhpcy5zcGVlZC5sZXJwKSAvLyBwcmV0dGllci1pZ25vcmVcblxuICAgIHRoaXMueC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSggdGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIHRoaXMueC5sZXJwICkgLy8gcHJldHRpZXItaWdub3JlXG4gICAgdGhpcy55LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKCB0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgdGhpcy55LmxlcnAgKSAvLyBwcmV0dGllci1pZ25vcmVcblxuICAgIGlmICh0aGlzLnNjcm9sbC54IDwgdGhpcy54LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMueC5kaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC54ID4gdGhpcy54LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMueC5kaXJlY3Rpb24gPSAnbGVmdCdcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGwueSA8IHRoaXMueS5jdXJyZW50KSB7XG4gICAgICB0aGlzLnkuZGlyZWN0aW9uID0gJ3RvcCdcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnkgPiB0aGlzLnkuY3VycmVudCkge1xuICAgICAgdGhpcy55LmRpcmVjdGlvbiA9ICdib3R0b20nXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwueCA9IHRoaXMueC5jdXJyZW50XG4gICAgdGhpcy5zY3JvbGwueSA9IHRoaXMueS5jdXJyZW50XG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldFggPSB0aGlzLnNpemVzLndpZHRoICogMC42XG4gICAgICBjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG4gICAgICBpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuICAgICAgICBpZiAoeCA8IC1vZmZzZXRYKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEueCArPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXG4gICAgICAgICAgbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMykgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPiBvZmZzZXRYKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXG4gICAgICAgICAgbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMykgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2Zmc2V0WSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogMC42XG4gICAgICBjb25zdCBzY2FsZVkgPSBtZWRpYS5tZXNoLnNjYWxlLnkgLyAyXG5cbiAgICAgIGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAndG9wJykge1xuICAgICAgICBjb25zdCB5ID0gbWVkaWEubWVzaC5wb3NpdGlvbi55ICsgc2NhbGVZXG5cbiAgICAgICAgaWYgKHkgPCAtb2Zmc2V0WSkge1xuICAgICAgICAgIG1lZGlhLmV4dHJhLnkgKz0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG5cbiAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKSAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICBjb25zdCB5ID0gbWVkaWEubWVzaC5wb3NpdGlvbi55IC0gc2NhbGVZXG5cbiAgICAgICAgaWYgKHkgPiBvZmZzZXRZKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEueSAtPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcblxuICAgICAgICAgIG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbCwgdGhpcy5zcGVlZC5jdXJyZW50KVxuICAgIH0pXG4gIH1cblxuICAvLyBEZXN0cm95XG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNzUxYTk2OTc0ZjJlMzg3NmZmOFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwieCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwieSIsInNjcm9sbEN1cnJlbnQiLCJzY3JvbGwiLCJzcGVlZCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsIlBsYW5lIiwiaGVpZ2h0U2VnbWVudHMiLCJ3aWR0aFNlZ21lbnRzIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJtZWRpYSIsImhpZGUiLCJvblJlc2l6ZSIsImUiLCJnYWxsZXJ5Qm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2FsbGVyeVNpemVzIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwieERpc3RhbmNlIiwic3RhcnQiLCJlbmQiLCJ5RGlzdGFuY2UiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxYIiwicGl4ZWxZIiwidXBkYXRlIiwiR1NBUCIsImRpcmVjdGlvbiIsIm9mZnNldFgiLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwicm90YXRpb24iLCJ6IiwiTWF0aCIsIlBJIiwib2Zmc2V0WSIsInNjYWxlWSIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==
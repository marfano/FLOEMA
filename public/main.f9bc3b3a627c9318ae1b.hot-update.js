/*! For license information please see main.f9bc3b3a627c9318ae1b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),n=a.n(s);Object(function(){var e=new Error("Cannot find module 'classes/components/Preloader'");throw e.code="MODULE_NOT_FOUND",e}());var o=a("./app/pages/About/index.js"),i=a("./app/pages/Collections/index.js"),r=a("./app/pages/Home/index.js"),c=a("./app/pages/Detail/index.js");new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addLinkListeners()}createPreloader(){this.preloader=new Object(function(){var e=new Error("Cannot find module 'classes/components/Preloader'");throw e.code="MODULE_NOT_FOUND",e}())(),this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new o.default,collections:new i.default,home:new r.default,detail:new c.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}onPreloaded(){this.preloader.destroy()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.content.innerHTML=s.innerHTML,this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.page=this.pages[this.template],this.page.create(),this.page.show(),this.addLinkListeners()}else console.error(`response status: ${t.status}`)}addLinkListeners(){const e=document.querySelectorAll("a");n()(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:a}=e;this.onChange(a)}}))}}}},(function(e){e.h=()=>"a3286bd2e062c19cb77c"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mOWJjM2IzYTYyN2M5MzE4YWUxYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7b1pBcUZBLElBNUVBLE1BQ0VBLGNBQ0VDLEtBQUtDLGtCQUNMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksbUJBR1BILGtCQUNFRCxLQUFLSyxVQUFZLElBQUlDLE9BQUFBLFdBQUFBLElBQUFBLEVBQUFBLElBQUFBLE1BQUFBLHFEQUFBQSxNQUFBQSxFQUFBQSxLQUFBQSxtQkFBQUEsRUFBQUEsR0FBSixHQUNqQk4sS0FBS0ssVUFBVUUsS0FBSyxZQUFhUCxLQUFLUSxZQUFZQyxLQUFLVCxPQUd6REUsZ0JBQ0VGLEtBQUtVLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENaLEtBQUthLFNBQVdiLEtBQUtVLFFBQVFJLGFBQWEsaUJBRzVDWCxjQUNFSCxLQUFLZSxNQUFRLENBQ1hDLE1BQU8sSUFBSUMsRUFBQUEsUUFDWEMsWUFBYSxJQUFJQyxFQUFBQSxRQUNqQkMsS0FBTSxJQUFJQyxFQUFBQSxRQUNWQyxPQUFRLElBQUlDLEVBQUFBLFNBR2R2QixLQUFLd0IsS0FBT3hCLEtBQUtlLE1BQU1mLEtBQUthLFVBQzVCYixLQUFLd0IsS0FBS0MsU0FDVnpCLEtBQUt3QixLQUFLRSxPQUdabEIsY0FDRVIsS0FBS0ssVUFBVXNCLFVBR0gsZUFBQ0MsU0FDUDVCLEtBQUt3QixLQUFLSyxPQUVoQixNQUFNQyxRQUFZQyxPQUFPQyxNQUFNSixHQUMvQixHQUFtQixNQUFmRSxFQUFJRyxPQUFnQixDQUN0QixNQUFNQyxRQUFhSixFQUFJSyxPQUVqQkMsRUFBTXpCLFNBQVMwQixjQUFjLE9BQ25DRCxFQUFJRSxVQUFZSixFQUVoQixNQUFNSyxFQUFhSCxFQUFJeEIsY0FBYyxZQUNyQ1osS0FBS1UsUUFBUTRCLFVBQVlDLEVBQVdELFVBRXBDdEMsS0FBS2EsU0FBVzBCLEVBQVd6QixhQUFhLGlCQUN4Q2QsS0FBS1UsUUFBUThCLGFBQWEsZ0JBQWlCeEMsS0FBS2EsVUFFaERiLEtBQUt3QixLQUFPeEIsS0FBS2UsTUFBTWYsS0FBS2EsVUFDNUJiLEtBQUt3QixLQUFLQyxTQUNWekIsS0FBS3dCLEtBQUtFLE9BRVYxQixLQUFLSSx3QkFFTHFDLFFBQVFDLE1BQU8sb0JBQW1CWixFQUFJRyxVQUkxQzdCLG1CQUNFLE1BQU11QyxFQUFRaEMsU0FBU2lDLGlCQUFpQixLQUV4Q0MsR0FBQUEsQ0FBS0YsR0FBUUcsSUFDWEEsRUFBS0MsUUFBV0MsSUFDZEEsRUFBTUMsaUJBRU4sTUFBTSxLQUFFQyxHQUFTSixFQUNqQjlDLEtBQUttRCxTQUFTRCx3QkMvRXRCRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnY2xhc3Nlcy9jb21wb25lbnRzL1ByZWxvYWRlcidcblxuaW1wb3J0IEFib3V0IGZyb20gJ3BhZ2VzL0Fib3V0J1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJ3BhZ2VzL0NvbGxlY3Rpb25zJ1xuaW1wb3J0IEhvbWUgZnJvbSAncGFnZXMvSG9tZSdcbmltcG9ydCBEZXRhaWwgZnJvbSAncGFnZXMvRGV0YWlsJ1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIgKCkge1xuICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgY3JlYXRlQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICAgIGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXG4gICAgICBkZXRhaWw6IG5ldyBEZXRhaWwoKSxcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgb25QcmVsb2FkZWQgKCkge1xuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UodXJsKSB7XG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzLnRleHQoKVxuXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWxcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcblxuICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCB0aGlzLnRlbXBsYXRlKVxuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICAgIHRoaXMucGFnZS5zaG93KClcblxuICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgcmVzcG9uc2Ugc3RhdHVzOiAke3Jlcy5zdGF0dXN9YClcbiAgICB9XG4gIH1cblxuICBhZGRMaW5rTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcbiAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxubmV3IEFwcCgpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhMzI4NmJkMmUwNjJjMTljYjc3Y1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJob21lIiwiSG9tZSIsImRldGFpbCIsIkRldGFpbCIsInBhZ2UiLCJjcmVhdGUiLCJzaG93IiwiZGVzdHJveSIsInVybCIsImhpZGUiLCJyZXMiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsIm9uQ2hhbmdlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9
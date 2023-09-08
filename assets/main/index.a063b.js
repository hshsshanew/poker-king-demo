window.__require=function t(e,n,r){function o(c,u){if(!n[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var s="function"==typeof __require&&__require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var l=n[c]={exports:{}};e[c][0].call(l.exports,function(t){return o(e[c][1][t]||t)},l,l.exports,t,e,n,r)}return n[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<r.length;c++)o(r[c]);return o}({Main:[function(t,e,n){"use strict";cc._RF.push(e,"022d1gTM8lBgqQ3HmGbTRuq","Main");var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=t("./Wheel"),u=cc._decorator,a=u.ccclass,s=u.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.editboxes=new Array(3),e.wheel=null,e}return o(e,t),e.prototype.spin=function(){for(var t=this.editboxes.map(function(t){return parseInt(t.string)}),e=0;e<t.length;e++){if(t[e]<0)return;if(t[e]>9)return}this.wheel.spinTo(t)},i([s([cc.EditBox])],e.prototype,"editboxes",void 0),i([s(c.default)],e.prototype,"wheel",void 0),i([a],e)}(cc.Component);n.default=l,cc._RF.pop()},{"./Wheel":"Wheel"}],PKMain:[function(t,e,n){"use strict";cc._RF.push(e,"6cdcc855S5OKLLxga9fOSTF","PKMain");var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=t("./PKWheel"),u=cc._decorator,a=u.ccclass,s=u.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.toggles=new Array(2),e.wheel=null,e.numberMap=new Map([[0,c.PokerNumber.J],[1,c.PokerNumber.Q],[2,c.PokerNumber.K]]),e.suitMap=new Map([[0,c.PokerSuit.Club],[1,c.PokerSuit.Diamond],[2,c.PokerSuit.Spade],[3,c.PokerSuit.Heart]]),e}return o(e,t),e.prototype.spin=function(){var t=[this.numberMap.get(this.toggles[0].toggleItems.findIndex(function(t){return!0===t.isChecked})),this.suitMap.get(this.toggles[1].toggleItems.findIndex(function(t){return!0===t.isChecked}))];this.wheel.spinTo(t)},i([s([cc.ToggleContainer])],e.prototype,"toggles",void 0),i([s(c.default)],e.prototype,"wheel",void 0),i([a],e)}(cc.Component);n.default=l,cc._RF.pop()},{"./PKWheel":"PKWheel"}],PKWheel:[function(t,e,n){"use strict";cc._RF.push(e,"1f2fb+4V2lCrqKbPC4Ozixl","PKWheel");var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function c(t){try{a(r.next(t))}catch(e){i(e)}}function u(t){try{a(r.throw(t))}catch(e){i(e)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(c,u)}a((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(t){return function(e){return a([t,e])}}function a(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0}),n.PokerNumber=n.PokerSuit=void 0;var a=cc._decorator,s=a.ccclass,l=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.wheels=new Array(2),e.rotateDurations=new Array(2),e.rotateTimes=new Array(2),e.isSpinning=!1,e.PER_ANGLE=30,e}return o(e,t),e.prototype.start=function(){this.init()},e.prototype.init=function(){},e.prototype.spinTo=function(t){var e=this;if(!this.isSpinning){this.isSpinning=!0;for(var n=[],r=0;r<this.wheels.length;r++)n.push(this.spin(r,t[r]));Promise.all(n).then(function(){e.isSpinning=!1})}},e.prototype.spin=function(t,e){return c(this,void 0,Promise,function(){var n=this;return u(this,function(){return[2,new Promise(function(r){cc.tween(n.wheels[t]).to(n.rotateDurations[t],{angle:360*n.rotateTimes[t]+(360-n.PER_ANGLE*e)},{easing:"smooth"}).call(function(){return n.wheels[t].angle=360-n.PER_ANGLE*e,r()}).start()})]})})},i([l([cc.Node])],e.prototype,"wheels",void 0),i([l([cc.Integer])],e.prototype,"rotateDurations",void 0),i([l([cc.Integer])],e.prototype,"rotateTimes",void 0),i([s],e)}(cc.Component);n.default=p,function(t){t[t.Club=0]="Club",t[t.Heart=1]="Heart",t[t.Spade=2]="Spade",t[t.Diamond=3]="Diamond"}(n.PokerSuit||(n.PokerSuit={})),function(t){t[t.J=0]="J",t[t.K=1]="K",t[t.Q=2]="Q"}(n.PokerNumber||(n.PokerNumber={})),cc._RF.pop()},{}],Wheel:[function(t,e,n){"use strict";cc._RF.push(e,"185f3GV2epBbLUfBqFZBzwC","Wheel");var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function c(t){try{a(r.next(t))}catch(e){i(e)}}function u(t){try{a(r.throw(t))}catch(e){i(e)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(c,u)}a((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(t){return function(e){return a([t,e])}}function a(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var a=cc._decorator,s=a.ccclass,l=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.wheels=new Array(3),e.angle=new Array(10),e.rotateDurations=new Array(3),e.rotateTimes=new Array(3),e.isSpinning=!1,e}return o(e,t),e.prototype.start=function(){this.init()},e.prototype.init=function(){},e.prototype.spinTo=function(t){var e=this;if(!this.isSpinning){this.isSpinning=!0;for(var n=[],r=0;r<this.wheels.length;r++)n.push(this.spin(r,t[r]));Promise.all(n).then(function(){e.isSpinning=!1})}},e.prototype.spin=function(t,e){return c(this,void 0,Promise,function(){var n=this;return u(this,function(){return[2,new Promise(function(r){cc.tween(n.wheels[t]).to(n.rotateDurations[t],{angle:360*n.rotateTimes[t]+n.angle[e]},{easing:"smooth"}).call(function(){return n.wheels[t].angle=n.angle[e],r()}).start()})]})})},i([l([cc.Node])],e.prototype,"wheels",void 0),i([l([cc.Integer])],e.prototype,"angle",void 0),i([l([cc.Integer])],e.prototype,"rotateDurations",void 0),i([l([cc.Integer])],e.prototype,"rotateTimes",void 0),i([s],e)}(cc.Component);n.default=p,cc._RF.pop()},{}]},{},["Main","Wheel","PKMain","PKWheel"]);
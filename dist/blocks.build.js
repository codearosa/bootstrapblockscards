!function(e){function t(r){if(a[r])return a[r].exports;var c=a[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){e.exports=wp.blocks},function(e,t){e.exports=wp.editor},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(3),a(6),a(9)},function(e,t,a){"use strict";var r=a(0),c=(a.n(r),a(1)),s=(a.n(c),a(4)),n=(a.n(s),a(5)),o=(a.n(n),wp.editor.RichText,wp.i18n.__),l=[["bootstrapblocks/icon",{className:"fas fa-font"}],["core/image",{className:"card-img-top"}],["core/heading",{className:"card-title"}],["core/heading",{className:"card-sub-title text-muted"}],["core/paragraph",{placeholder:"Write your card text",className:"card-text"}],["bootstrapblocks/button",{placeholder:"Link me",className:"btn btn-primary"}]];Object(r.registerBlockType)("bootstrapblockscards/card",{title:"card",icon:"index-card",category:"bootstrapblocks-cards",description:o("I am a simple card. Add bootstrap classes to the parts to style.","card"),edit:function(e){var t=(e.attributes,e.className);e.setAttributes;return wp.element.createElement("div",{className:"card "+t},wp.element.createElement(c.InnerBlocks,{template:l}))},save:function(e){var t=(e.attributes,e.className);return wp.element.createElement("div",{className:"card "+t},wp.element.createElement(c.InnerBlocks.Content,null))}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var r=a(0),c=(a.n(r),a(1)),s=(a.n(c),a(7)),n=(a.n(s),a(8)),o=(a.n(n),wp.editor.RichText,wp.i18n.__),l=[["core/image",{className:"card-img"}],["bootstrapblocks/div",{className:"card-img-overlay"},[["core/heading",{className:"card-title"}],["core/heading",{className:"card-sub-title text-muted"}],["core/paragraph",{placeholder:"Write your card text",className:"card-text"}],["bootstrapblocks/button",{placeholder:"Link me",className:"btn btn-primary"}]]]];Object(r.registerBlockType)("bootstrapblockscards/cardoverlay",{title:"cardoverlay",icon:"index-card",category:"bootstrapblocks-cards",description:o("I am a simple card. Add bootstrap classes to the parts to style.","card"),edit:function(e){var t=(e.attributes,e.className);e.setAttributes;return wp.element.createElement("div",{className:"card bg-dark text-white "+t},wp.element.createElement(c.InnerBlocks,{template:l}))},save:function(e){var t=(e.attributes,e.className);return wp.element.createElement("div",{className:"card "+t},wp.element.createElement(c.InnerBlocks.Content,null))}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var r=a(0),c=(a.n(r),a(1)),s=(a.n(c),a(10)),n=(a.n(s),a(11)),o=(a.n(n),wp.editor.RichText,wp.i18n.__),l=[["core/cover",{className:"card-img m-0"}],["bootstrapblocks/div",{className:"card-img-overlay semitransparent"}],["bootstrapblocks/div",{className:"card-img-overlay h-50 m-auto text-center"},[["core/heading",{className:"card-title"}],["core/heading",{className:"card-sub-title text-muted"}],["core/paragraph",{placeholder:"Write your card text",className:"card-text"}],["core/paragraph",{placeholder:"Link me",className:"btn btn-primary text-white"}]]]];Object(r.registerBlockType)("bootstrapblockscards/coveroverlay",{title:"cover overlay",icon:"index-card",category:"bootstrapblocks-cards",description:o("I am a simple cover with overlay. Add bootstrap classes to the parts to style.","coveroverlay"),edit:function(e){var t=(e.attributes,e.className);e.setAttributes;return wp.element.createElement("div",{className:"mycard "+t},wp.element.createElement(c.InnerBlocks,{template:l}))},save:function(e){var t=(e.attributes,e.className);return wp.element.createElement("div",{className:"card "+t},wp.element.createElement(c.InnerBlocks.Content,null))}})},function(e,t){},function(e,t){}]);
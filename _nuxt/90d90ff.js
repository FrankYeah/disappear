(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1090:function(t,e,n){t.exports=n.p+"img/bg3.e10e597.png"},1091:function(t,e,n){t.exports=n.p+"img/backmap.b3e554e.png"},1101:function(t,e,n){t.exports=n.p+"img/none.1e5bec4.png"},1154:function(t,e,n){"use strict";n.r(e);n(61);var o={layout:"default",components:{},props:{},data:function(){return{isFBReady:!1,isFromIndexPage:!1}},beforeRouteEnter:function(t,e,n){n((function(t){e.name&&(console.log(e.name.substr(0,5)),"collect"==e.name.substr(0,8)&&(console.log(e.name.substr(0,8)),console.log(e.name),t.isFromIndexPage=!0)),t.prevRoute=e}))},mounted:function(){this.isFromIndexPage&&location.reload()},beforeDestroy:function(){},methods:{onFBReady:function(){}},watch:{}},c=n(50),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"map",style:{backgroundImage:"url("+n(1090)+")"}},[o("div",{staticClass:"map-row0"},[o("img",{staticClass:"map-img",attrs:{src:n(1101),alt:"fb"}}),t._v(" "),o("nuxt-link",{attrs:{to:"/collect"}},[o("img",{staticClass:"map-img",attrs:{src:n(1091),alt:"fb"}})])],1)])}),[],!1,null,"51836659",null);e.default=component.exports}}]);
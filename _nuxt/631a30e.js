(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1092:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIUSURBVFiFvddPS1RhFMfxcyWiRabF4NAmaJEJ6SIiWhYU2KZWggTtege9ANct2rUUF72FKFJKaqlg/0cxon+ki9JNuDHTPi3uFa+D48xl5vpbDfee83x/89z7nHNuRAlCF25hCqvYwHdMYKgMZh5ewUuNtYUxJGXAq1jIwTZRwySW64yMlQ1/jf66mFGs5XZisCz4DHoaxI7m4sYPFJ7L2X4cX9qFd2O+CDzLm8zi19s1cLkoPMurZTm/2jVwCA8wXgA+kJ0OeNyWgaJCD97kdm3koOGzOfhzRYsRruMh3mERz3AXxwrC51EpAj6BpxprBcP7wGdysYs4WQRetfuokTaYj9Jqtq2/GCgb/hYXcvd7cR//MjPnyoTvV14v4nwn4X34kFtgDsdbzC0Xjhu4h749cnvr4POodhJ+GOvZvR+4gzM4jdv4VBo8F/dCc70vCq9o/YU7Iq3/G3uAN6Vz39FW2Qm6ImI6Iq5k12YjYjhJkt9NTJ+KiJsR0R8RSUR8johHSZIU6/HS6XVbrxr989JkZzjYVDfDHZSB1cxArcX4HmkTWsGldvldEdGd/V5qBR4RUxFxLSIqEXG1XQOBb9kOLDeD211kFhRpqfssPJFbdLQAvPVz3sTAkJ22ulZvAmelHxmdh+cgY3UFZSk7HTU7A2Q58MxAkpnY0ljTHXnmTYwMSkfsr/iDn3iCEWV8zUbEf1nYzfMGE//OAAAAAElFTkSuQmCC"},1106:function(t,o,r){var content=r(1139);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("514d0caa",content,!0,{sourceMap:!1})},1133:function(t,o,r){t.exports=r.p+"img/bg1.93824e6.webp"},1134:function(t,o,r){t.exports=r.p+"img/smallruo1.56fa558.webp"},1135:function(t,o,r){t.exports=r.p+"img/sona1.1e41612.webp"},1136:function(t,o,r){t.exports=r.p+"img/tamdrum1.4e2616f.webp"},1137:function(t,o,r){t.exports=r.p+"img/yehu2.4d3c3f8.webp"},1138:function(t,o,r){"use strict";r(1106)},1139:function(t,o,r){var e=r(33)(!1);e.push([t.i,".north[data-v-6b569f2e]{min-height:100vh;position:relative}.north-bg[data-v-6b569f2e]{position:absolute;top:0;left:0;width:100%;height:100%;background-repeat:no-repeat;background-size:cover;background-position-x:center;background-position-y:center;z-index:-1;opacity:.3}.north-box[data-v-6b569f2e]{display:flex;flex-wrap:wrap;align-items:center}.north-music[data-v-6b569f2e]{width:200px;cursor:pointer}.north-music[data-v-6b569f2e]:hover{opacity:.4}.north-music1[data-v-6b569f2e]:hover,.north-music2[data-v-6b569f2e]:hover,.north-music3[data-v-6b569f2e]:hover,.north-music4[data-v-6b569f2e]:hover{transition:.3s}.north-text[data-v-6b569f2e]{color:#000}",""]),t.exports=e},1167:function(t,o,r){"use strict";r.r(o);var e=r(19),n=(r(84),{layout:"default",components:{},props:{},data:function(){return{}},mounted:function(){return Object(e.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},destroyed:function(){},computed:{},methods:{playSound1:function(){this.$refs.audioPlayer1.play()},playSound2:function(){this.$refs.audioPlayer2.play()},playSound3:function(){this.$refs.audioPlayer3.play()},playSound4:function(){this.$refs.audioPlayer4.play()}},watch:{}}),c=(r(1138),r(50)),component=Object(c.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"north"},[e("div",{staticClass:"north-bg",style:{backgroundImage:"url("+r(1133)+")"}}),t._v(" "),e("div",{staticClass:"north-box"},[e("img",{staticClass:"north-music north-music1",attrs:{src:r(1134),alt:"music"},on:{click:t.playSound1}}),t._v(" "),e("div",{staticClass:"north-text"},[t._v("小鑼")]),t._v(" "),e("img",{staticClass:"north-music north-music2",attrs:{src:r(1135),alt:"music"},on:{click:t.playSound2}}),t._v(" "),e("div",{staticClass:"north-text"},[t._v("嗩吶")]),t._v(" "),e("img",{staticClass:"north-music north-music2",attrs:{src:r(1136),alt:"music"},on:{click:t.playSound3}}),t._v(" "),e("div",{staticClass:"north-text"},[t._v("堂鼓")]),t._v(" "),e("img",{staticClass:"north-music north-music2",attrs:{src:r(1137),alt:"music"},on:{click:t.playSound4}}),t._v(" "),e("div",{staticClass:"north-text"},[t._v("椰胡")]),t._v(" "),e("audio",{ref:"audioPlayer1",attrs:{src:"smallruo.m4a"}}),t._v(" "),e("audio",{ref:"audioPlayer2",attrs:{src:"sona.m4a"}}),t._v(" "),e("audio",{ref:"audioPlayer3",attrs:{src:"tamdrum.m4a"}}),t._v(" "),e("audio",{ref:"audioPlayer4",attrs:{src:"yehu.m4a"}}),t._v(" "),e("img",{staticClass:"about-box-link",attrs:{src:r(1092),alt:"fb"}})])])}),[],!1,null,"6b569f2e",null);o.default=component.exports}}]);
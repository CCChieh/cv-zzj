(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"21f5":function(t,e,a){"use strict";a("fea94")},"54d9":function(t,e,a){t.exports=a.p+"img/head.0e60da67.png"},e0f5:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"bg-blue-grey-3",attrs:{view:"HHh LpR lff"}},[a("layout-header",{attrs:{left:t.left},on:{"update:left":function(e){t.left=e}}}),a("layout-drawer",{attrs:{left:t.left}}),a("q-page-container",[a("router-view")],1),a("layout-footer")],1)},o=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-header",{staticClass:"header text-white print-hide",attrs:{elevated:"","height-hint":"98"}},[r("q-toolbar",{staticClass:"row justify-between"},[r("q-btn",{staticClass:"col-auto",attrs:{dense:"",flat:"",round:"",icon:t.$store.getters["app/leftDrawer"]?"format_indent_decrease":"format_indent_increase"},on:{click:function(e){return t.$store.commit("app/SET_Left_Drawer",!t.$store.getters["app/leftDrawer"])}}}),r("q-toolbar-title",{staticClass:"col-auto"},[t._v("\n      郑智杰\n      "),r("q-avatar",[r("img",{attrs:{src:a("54d9"),alt:"头像"}})])],1)],1),r("q-tabs",{staticClass:"a4-container q-tabs__content--align-justify",attrs:{"inline-label":"",align:"justify"},on:{input:t.jump}},[r("q-tab",{attrs:{name:"zhihu",icon:"fab fa-zhihu"}},[r("q-tooltip",[t._v("\n        "+t._s(t.link.zhihu)+"\n      ")])],1),r("q-tab",{attrs:{name:"github",icon:"fab fa-github"}},[r("q-tooltip",[t._v("\n        "+t._s(t.link.github)+"\n      ")])],1)],1)],1)},i=[],s=a("b06b"),l=a("e782"),c={name:"LayoutHeader",data(){return{link:l["a"]}},beforeCreate(){this.$q.screen.gt.md?this.$store.commit("app/SET_Left_Drawer",!0):this.$store.commit("app/SET_Left_Drawer",!1)},methods:{jump(t){Object(s["a"])(l["a"][t])}}},u=c,p=(a("21f5"),a("2877")),b=a("e359"),h=a("65c6"),f=a("9c40"),d=a("6ac5"),m=a("cb32"),v=a("429b"),g=a("7460"),w=a("05c0"),_=a("eebe"),q=a.n(_),C=Object(p["a"])(u,n,i,!1,null,"3461308e",null),y=C.exports;q()(C,"components",{QHeader:b["a"],QToolbar:h["a"],QBtn:f["a"],QToolbarTitle:d["a"],QAvatar:m["a"],QTabs:v["a"],QTab:g["a"],QTooltip:w["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-drawer",{staticClass:"print-hide",attrs:{"content-class":"bg-blue-grey-1",breakpoint:0,value:t.$store.getters["app/leftDrawer"],overlay:!t.$q.screen.gt.md,side:"left",bordered:""}},[a("div",{staticClass:"column q-pa-md"},[a("q-btn",{attrs:{unelevated:"",color:"blue-grey-8",label:"打印简历"},on:{click:function(e){return t.print()}}},[a("q-tooltip",[t._v("\n          为了保证打印效果，请使用Chromium内核浏览器(Chrome)\n        ")])],1),a("q-separator",{attrs:{spaced:"12px",color:"blue-grey-8"}}),a("div",{staticClass:"q-gutter-y-md"},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"text-subtitle1 text-weight-bold"},[t._v("\n            技术栈:\n          ")]),a("div",[a("q-chip",{attrs:{color:"blue-grey-6","text-color":"white"}},[t._v("Vue")]),a("q-chip",{attrs:{color:"blue-grey-6","text-color":"white"}},[t._v("Quasar")])],1)]),a("div",{staticClass:"row items-center"},[a("div",{staticClass:"text-subtitle1 text-weight-bold"},[t._v("\n            项目地址:\n          ")]),a("q-chip",{attrs:{clickable:"",color:"blue-grey-9","text-color":"white",icon:"fab fa-github-alt"},on:{click:function(e){return t.openURL("https://github.com/CCChieh/cv-zzj")}}},[t._v("\n            CCChieh/cv-zzj\n          ")])],1),a("div")])],1)])},x=[],L={name:"LayoutDrawer",methods:{openURL:s["a"],print(){window.print()}}},T=L,j=a("9404"),$=a("eb85"),z=a("b047"),k=Object(p["a"])(T,Q,x,!1,null,"29fcd6f7",null),D=k.exports;q()(k,"components",{QDrawer:j["a"],QBtn:f["a"],QTooltip:w["a"],QSeparator:$["a"],QChip:z["a"]});var E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-footer",{staticClass:"bg-blue-grey text-white print-hide"},[r("q-toolbar",[r("q-toolbar-title",[r("q-avatar",[r("img",{attrs:{src:a("54d9")}})]),t._v("\n      Title\n    ")],1)],1)],1)},H=[],O={name:"LayoutFooter"},S=O,F=a("7ff0"),R=Object(p["a"])(S,E,H,!1,null,"34f05a41",null),A=R.exports;q()(R,"components",{QFooter:F["a"],QToolbar:h["a"],QToolbarTitle:d["a"],QAvatar:m["a"]});var B={name:"MainLayout",components:{LayoutFooter:A,LayoutDrawer:D,LayoutHeader:y},data(){return{left:!0}}},J=B,P=a("4d5a"),U=a("09e3"),M=Object(p["a"])(J,r,o,!1,null,null,null);e["default"]=M.exports;q()(M,"components",{QLayout:P["a"],QPageContainer:U["a"]})},e782:function(t,e,a){"use strict";const r={homePage:"https://zzj.cool",zhihu:"https://www.zhihu.com/people/toi-toi-toi",github:"https://github.com/CCChieh"};e["a"]=r},fea94:function(t,e,a){}}]);
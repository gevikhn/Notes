(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{464:function(r,a,t){"use strict";t.r(a);var e=t(29),s=Object(e.a)({},(function(){var r=this,a=r.$createElement,t=r._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"io"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#io"}},[r._v("#")]),r._v(" IO")]),r._v(" "),t("p",[r._v("用户程序进行IO读写依赖read,write两个系统调用"),t("br"),r._v("\nread系统调用:")]),r._v(" "),t("center",[t("div",{staticClass:"language-mermaid extra-class"},[t("pre",{pre:!0,attrs:{class:"language-mermaid"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("graph")]),r._v(" TB\n用户程序 "),t("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[t("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[r._v("--")]),t("span",{pre:!0,attrs:{class:"token label property"}},[r._v("调用")]),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[r._v("--\x3e")])]),r._v(" A"),t("span",{pre:!0,attrs:{class:"token text string"}},[r._v('["系统调用: read"]')]),r._v("\nA "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[r._v("--\x3e")]),r._v(" 内核缓存\n内核缓存 "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[r._v("--\x3e")]),r._v(" 应用程序的进程缓冲区\n")])])])]),r._v("\nwrite系统调用：  \n"),t("center",[t("div",{staticClass:"language-mermaid extra-class"},[t("pre",{pre:!0,attrs:{class:"language-mermaid"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[r._v("graph")]),r._v(" TB\n用户程序 "),t("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[t("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[r._v("--")]),t("span",{pre:!0,attrs:{class:"token label property"}},[r._v("调用")]),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[r._v("--\x3e")])]),r._v(" A"),t("span",{pre:!0,attrs:{class:"token text string"}},[r._v('["系统调用: write"]')]),r._v("\nA "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[r._v("--\x3e")]),r._v(" 应用程序的进程缓冲区\n应用程序的进程缓冲区 "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[r._v("--\x3e")]),r._v(" 内核缓存\n")])])])]),r._v(" "),t("hr"),r._v(" "),t("p",[t("a",{staticStyle:{color:"red"}},[r._v("应用程序的IO操作实际上并不是物理设备级别的读写，而是缓存的复制")])]),r._v(" "),t("p",[t("kbd",[r._v("read")]),r._v(" "),t("code",[r._v("&")]),r._v(" "),t("kbd",[r._v("write")]),r._v(" 两个系统调用都不负责内核缓冲区和物理设备之间的交换\n所有底层的读写操作，是由操作系统内核完成的")])],1)}),[],!1,null,null,null);a.default=s.exports}}]);
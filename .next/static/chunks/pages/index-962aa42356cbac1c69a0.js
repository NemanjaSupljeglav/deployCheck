_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"Gf/z":function(e,t,n){e.exports={post:"post-item_post__3XTCn",image:"post-item_image__1Nx-U",content:"post-item_content__3VHsU"}},JHKd:function(e,t,n){"use strict";var o=n("nKUr"),c=n("YFqc"),a=n.n(c),r=n("Aiso"),s=n.n(r),i=n("Gf/z"),l=n.n(i);var u=function(e){var t=e.post,n=t.title,c=t.image,r=t.excerpt,i=t.date,u=t.slug,f=new Date(i).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),p="/images/posts/".concat(u,"/").concat(c),d="/posts/".concat(u);return Object(o.jsx)("li",{className:l.a.post,children:Object(o.jsx)(a.a,{href:d,children:Object(o.jsxs)("a",{children:[Object(o.jsx)("div",{className:l.a.image,children:Object(o.jsx)(s.a,{src:p,alt:n,width:300,height:200,layout:"responsive"})}),Object(o.jsxs)("div",{className:l.a.content,children:[Object(o.jsx)("h3",{children:n}),Object(o.jsx)("time",{children:f}),Object(o.jsx)("p",{children:r})]})]})})})},f=n("Mzr7"),p=n.n(f);t.a=function(e){var t=e.posts;return Object(o.jsx)("ul",{className:p.a.grid,children:t.map((function(e){return Object(o.jsx)(u,{post:e},e.slug)}))})}},Mzr7:function(e,t,n){e.exports={grid:"posts-grid_grid__zccI4"}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return m}));var o=n("nKUr"),c=n("q1tI"),a=n("g4pe"),r=n.n(a),s=n("JHKd"),i=n("i4SY"),l=n.n(i);var u=function(e){return Object(o.jsxs)("section",{className:l.a.latest,children:[Object(o.jsx)("h2",{children:"Featured Posts"}),Object(o.jsx)(s.a,{posts:e.posts})]})},f=n("Aiso"),p=n.n(f),d=n("x+QA"),h=n.n(d);var j=function(){return Object(o.jsxs)("section",{className:h.a.hero,children:[Object(o.jsx)("div",{className:h.a.image,children:Object(o.jsx)(p.a,{src:"/images/site/max.png",alt:"An image showing Max",width:300,height:300})}),Object(o.jsx)("h1",{children:"Hi, I'm Max"}),Object(o.jsx)("p",{children:"I blog about web development - especially frontend frameworks like Angular or React."})]})};var m=!0;t.default=function(e){return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsxs)(r.a,{children:[Object(o.jsx)("title",{children:"Max' Blog"}),Object(o.jsx)("meta",{name:"description",content:"I post about programming and web development."})]}),Object(o.jsx)(j,{}),Object(o.jsx)(u,{posts:e.posts})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),r=n("elyg"),s=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,o){if(e&&(0,r.isLocalURL)(t)){e.prefetch(t,n,o).catch((function(e){0}));var c=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),c=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,r.resolveHref)(c,e.href,!0),n=o(t,2),a=n[0],s=n[1];return{href:a,as:e.as?(0,r.resolveHref)(c,e.as):s||a}}),[c,e.href,e.as]),p=f.href,d=f.as,h=e.children,j=e.replace,m=e.shallow,x=e.scroll,_=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=a.Children.only(h),v=b&&"object"===typeof b&&b.ref,g=(0,i.useIntersection)({rootMargin:"200px"}),O=o(g,2),y=O[0],w=O[1],N=a.default.useCallback((function(e){y(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,y]);(0,a.useEffect)((function(){var e=w&&t&&(0,r.isLocalURL)(p),o="undefined"!==typeof _?_:n&&n.locale,c=l[p+"%"+d+(o?"%"+o:"")];e&&!c&&u(n,p,d,{locale:o})}),[d,p,w,_,t,n]);var E={ref:N,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,o,c,a,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=o.indexOf("#")<0),t[c?"replace":"push"](n,o,{shallow:a,locale:i,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,p,d,j,m,x,_)},onMouseEnter:function(e){(0,r.isLocalURL)(p)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(n,p,d,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var L="undefined"!==typeof _?_:n&&n.locale,M=(0,r.getDomainLocale)(d,L,n&&n.locales,n&&n.domainLocales);E.href=M||(0,r.addBasePath)((0,r.addLocale)(d,L,n&&n.defaultLocale))}return a.default.cloneElement(b,E)};t.default=f},i4SY:function(e,t,n){e.exports={latest:"featured-posts_latest__2Tq4V"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},"x+QA":function(e,t,n){e.exports={hero:"hero_hero__1246b",image:"hero_image__APzai"}}},[["vlRD",0,1,2,3,4]]]);
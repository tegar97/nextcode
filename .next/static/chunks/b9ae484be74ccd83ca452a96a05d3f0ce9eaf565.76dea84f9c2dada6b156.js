(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"9ixD":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a("g4pe"),r=a.n(o),n=a("q1tI"),p=a.n(n);function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},h=function(e){var t=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var a="";e.title&&(a=e.title,l.templateTitle&&(a=l.templateTitle.replace(/%s/g,(function(){return a}))),t.push(p.a.createElement("title",{key:"title"},a)));var o=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,r=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow;if(o||r?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),t.push(p.a.createElement("meta",{key:"robots",name:"robots",content:(o?"noindex":"index")+","+(r?"nofollow":"follow")})),t.push(p.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(o?"noindex":"index")+","+(r?"nofollow":"follow")}))):(t.push(p.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),t.push(p.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),e.description&&t.push(p.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(p.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){t.push(p.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(p.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(p.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(p.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(p.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(p.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var n=e.openGraph.type.toLowerCase();t.push(p.a.createElement("meta",{key:"og:type",property:"og:type",content:n})),"profile"===n&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(p.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(p.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(p.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(p.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===n&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,a){t.push(p.a.createElement("meta",{key:"book:author:0"+a,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(p.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(p.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,a){t.push(p.a.createElement("meta",{key:"book:tag:0"+a,property:"book:tag",content:e}))}))):"article"===n&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(p.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(p.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(p.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,a){t.push(p.a.createElement("meta",{key:"article:author:0"+a,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(p.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,a){t.push(p.a.createElement("meta",{key:"article:tag:0"+a,property:"article:tag",content:e}))}))):"video.movie"!==n&&"video.episode"!==n&&"video.tv_show"!==n&&"video.other"!==n||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,a){e.profile&&t.push(p.a.createElement("meta",{key:"video:actor:0"+a,property:"video:actor",content:e.profile})),e.role&&t.push(p.a.createElement("meta",{key:"video:actor:role:0"+a,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,a){t.push(p.a.createElement("meta",{key:"video:director:0"+a,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,a){t.push(p.a.createElement("meta",{key:"video:writer:0"+a,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(p.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(p.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,a){t.push(p.a.createElement("meta",{key:"video:tag:0"+a,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(p.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&t.push(p.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||a})),(e.openGraph.description||e.description)&&t.push(p.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,a){t.push(p.a.createElement("meta",{key:"og:image:0"+a,property:"og:image",content:e.url})),e.alt&&t.push(p.a.createElement("meta",{key:"og:image:alt0"+a,property:"og:image:alt",content:e.alt})),e.width?t.push(p.a.createElement("meta",{key:"og:image:width0"+a,property:"og:image:width",content:e.width.toString()})):l.defaultOpenGraphImageWidth&&t.push(p.a.createElement("meta",{key:"og:image:width0"+a,property:"og:image:width",content:l.defaultOpenGraphImageWidth.toString()})),e.height?t.push(p.a.createElement("meta",{key:"og:image:height"+a,property:"og:image:height",content:e.height.toString()})):l.defaultOpenGraphImageHeight&&t.push(p.a.createElement("meta",{key:"og:image:height"+a,property:"og:image:height",content:l.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,a){t.push(p.a.createElement("meta",{key:"og:video:0"+a,property:"og:video",content:e.url})),e.alt&&t.push(p.a.createElement("meta",{key:"og:video:alt0"+a,property:"og:video:alt",content:e.alt})),e.width?t.push(p.a.createElement("meta",{key:"og:video:width0"+a,property:"og:video:width",content:e.width.toString()})):l.defaultOpenGraphVideoWidth&&t.push(p.a.createElement("meta",{key:"og:video:width0"+a,property:"og:video:width",content:l.defaultOpenGraphVideoWidth.toString()})),e.height?t.push(p.a.createElement("meta",{key:"og:video:height"+a,property:"og:video:height",content:e.height.toString()})):l.defaultOpenGraphVideoHeight&&t.push(p.a.createElement("meta",{key:"og:video:height"+a,property:"og:video:height",content:l.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&t.push(p.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(p.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(p.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){t.push(p.a.createElement("meta",Object.assign({key:e.name?e.name:e.property},e)))})),t},c=(n.Component,function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.noindex,o=void 0!==a&&a,n=e.nofollow,i=e.description,l=e.canonical,c=e.openGraph,d=e.facebook,m=e.twitter,s=e.additionalMetaTags,g=e.titleTemplate,u=e.mobileAlternate,f=e.languageAlternates;return p.a.createElement(r.a,null,h({title:t,noindex:o,nofollow:n,description:i,canonical:l,facebook:d,openGraph:c,additionalMetaTags:s,twitter:m,titleTemplate:g,mobileAlternate:u,languageAlternates:f}))},t}(n.Component))}}]);
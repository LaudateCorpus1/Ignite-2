(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{68:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,i=t(s(3)),o=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,s):{};n.get||n.set?Object.defineProperty(a,s,n):a[s]=e[s]}return a.default=e,a}(s(0));t(s(2)),t(s(80));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,a,s,i){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,t=arguments.length-3;if(a||0===t||(a={children:void 0}),a&&o)for(var r in o)void 0===a[r]&&(a[r]=o[r]);else a||(a=o||{});if(1===t)a.children=i;else if(t>1){for(var l=new Array(t),d=0;d<t;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:n,type:e,key:void 0===s?null:""+s,ref:null,props:a,_owner:null}}function l(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var s,n,i=function(e,a){if(null==e)return{};var s,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],a.indexOf(s)>=0||(i[s]=e[s]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)s=o[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}const p=e=>{let{to:a}=e,s=c(e,["to"]);return a.includes("http")?o.default.createElement("a",d({},e,{href:a})):("#"===a[0]&&(a=i.default.join("/Ignite/","pages/IgnitePlugins.html")+a),o.default.createElement("a",d({},s,{href:a,onClick:s=>{if(s.preventDefault(),"#"===e.to)return!1;const n=new URL(i.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(n),null,a),e.onClick();const o=new CustomEvent("changeLocation",{detail:n});return dispatchEvent(o),!1}})))};p.defaultProps={href:"",onClick:()=>{}};var h=r("div",{});const m=e=>{let{plugins:a,name:s,options:n,children:i}=e,t=c(e,["plugins","name","options","children"]),r=a[s];const l=r.options;return r?(r=r.component,o.default.createElement(r,d({},l,{options:n?n.options:{}},n?n.props:t,{children:i,plugins:a}))):h};const u=e=>{var a,s;return s=a=class extends o.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?o.default.createElement(e,this.props,this.props.children||null):null}},l(a,"defaultProps",{shouldLoad:!0}),s};u(()=>s.e(26).then(s.bind(null,59))),u(()=>s.e(26).then(s.bind(null,81)));var g=r("h1",{},void 0,"Ignite Plugins"),v=r("p",{},void 0,"Ignite plugins are incredibly easy to write. If you know how to write a react component, then you already know how to write an Ignite plugin."),f=r("p",{},void 0,"Ignite works by parsing all of you markdown files into react components and loading them into a single page documentation app. Since we are already building the app in react, it makes sense to have the plugins just be react components."),b=r("pre",{},void 0,r("code",{className:"language-javascript"},void 0,r("span",{className:"hljs-keyword"},void 0,"import")," React ",r("span",{className:"hljs-keyword"},void 0,"from")," ",r("span",{className:"hljs-string"},void 0,"'react'"),";",r("br",{}),r("br",{}),r("span",{className:"hljs-keyword"},void 0,"const")," myPlugin = ",r("span",{className:"hljs-function"},void 0,r("span",{className:"hljs-params"},void 0,"props")," =>")," (",r("br",{}),"  ",r("span",{className:"xml"},void 0,r("span",{className:"hljs-tag"},void 0,"<",r("span",{className:"hljs-name"},void 0,"div"),">"),r("br",{}),"    ",r("span",{className:"hljs-tag"},void 0,"<",r("span",{className:"hljs-name"},void 0,"h1"),">"),"This is pretty awesome.",r("span",{className:"hljs-tag"},void 0,"</",r("span",{className:"hljs-name"},void 0,"h1"),">"),r("br",{}),"    {props.children}",r("br",{}),"  ",r("span",{className:"hljs-tag"},void 0,"</",r("span",{className:"hljs-name"},void 0,"div"),">")),r("br",{}),");",r("br",{}),r("br",{}),r("span",{className:"hljs-keyword"},void 0,"export")," ",r("span",{className:"hljs-keyword"},void 0,"default")," myPlugin;",r("br",{}))),j=r("p",{},void 0,"Your plugin might need to do some ",r("code",{},void 0,"node")," based initialization. These can take a long time to run in the browser. Ignite lets you define an init function to accomplish this during the build. This function can either return just a piece of data or a promise."),N=r("p",{},void 0,"Ignite will look for this init function either where you store the plugin:"),y=r("pre",{},void 0,r("code",{},void 0,"path/",r("br",{}),"  to/",r("br",{}),"    myPlugin/",r("br",{}),"      index.js",r("br",{}),"      init.js",r("br",{}))),w=r("p",{},void 0,"Or you can define a path to it in your packages.json."),k=r("pre",{},void 0,r("code",{className:"language-json"},void 0,"{",r("br",{}),'  "name": "myPlugin",',r("br",{}),'  "main": "dist/index.js",',r("br",{}),'  "init": "dist/init",',r("br",{}),"  ...",r("br",{}),"}",r("br",{}))),P=r("p",{},void 0,"Your plugin also might want use user defined function or components. i.e Plugins for your plugins. To accomplish this simply export a function from your ",r("code",{},void 0,"init.js")," called ",r("code",{},void 0,"injectComponents"),". This function needs to return a map of component names to paths. This will result in your component being called with a prop called `_injectedComponents' containing the injected function/components."),O=r("p",{},void 0,r("em",{},void 0,"Example"),":"),S=r("pre",{},void 0,r("code",{className:"language-json"},void 0,"{",r("br",{}),"  ",r("span",{className:"hljs-attr"},void 0,'"plugins"'),": {",r("br",{}),"    ",r("span",{className:"hljs-attr"},void 0,'"firstPlugin"'),": ",r("span",{className:"hljs-string"},void 0,'"path/to/plugin"'),r("br",{}),"  }",r("br",{}),"}",r("br",{}))),C=r("pre",{},void 0,r("code",{className:"language-js"},void 0,r("span",{className:"hljs-keyword"},void 0,"export")," ",r("span",{className:"hljs-function"},void 0,r("span",{className:"hljs-keyword"},void 0,"function")," ",r("span",{className:"hljs-title"},void 0,"injectComponents"),"(",r("span",{className:"hljs-params"},void 0,"config = {}"),") "),"{",r("br",{}),"  ",r("span",{className:"hljs-keyword"},void 0,"return")," config.plugins;",r("br",{}),"}",r("br",{}))),x=r("p",{},void 0,"To register a component just add an entry to the plugins array defined in your config."),A=r("p",{},void 0,"Ignite will load strings as markdown-it plugins. If an entry in the plugin array is an array, then the first element of that array is used as the plugin name and the second is used to load it. This can be either a path or a package name."),I=r("pre",{},void 0,r("code",{className:"language-json"},void 0,"{",r("br",{}),"  ",r("span",{className:"hljs-attr"},void 0,'"ignite"'),": {",r("br",{}),"    ",r("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",r("br",{}),"      [",r("span",{className:"hljs-string"},void 0,'"Boom"'),", ",r("span",{className:"hljs-string"},void 0,'"/path/to/myPlugin/"'),"],",r("br",{}),"      ",r("span",{className:"hljs-string"},void 0,'"some-markdown-plugin"'),",",r("br",{}),"      ",r("span",{className:"hljs-string"},void 0,'"another-markdown-plugin"'),r("br",{}),"    ]",r("br",{}),"  }",r("br",{}),"}",r("br",{}))),L=r("p",{},void 0,"Now that you have defined the behavior of your plugin and registered it with Ignite, you can use your plugin in any of your markdown pages."),T=r("p",{},void 0,"You can use the plugin with a markdown syntax or just plain old JSX. To use the plugin as JSX make sure that the plugin is capitalized just like in normal JSX."),D=r("p",{},void 0,r("em",{},void 0,"Markdown:")),E=r("pre",{},void 0,r("code",{className:"language-markdown"},void 0,"::: Boom",r("br",{}),r("br",{}),r("span",{className:"hljs-section"},void 0,"# Anything inside"),r("br",{}),r("br",{}),r("span",{className:"hljs-section"},void 0,"## is passed in as props.children"),r("br",{}),r("br",{}),":::",r("br",{}))),J=r("p",{},void 0,r("em",{},void 0,"JSX:")),_=r("pre",{},void 0,r("code",{className:"language-html"},void 0,r("span",{className:"hljs-tag"},void 0,"<",r("span",{className:"hljs-name"},void 0,"Boom"),">"),r("br",{}),"  ",r("span",{className:"hljs-tag"},void 0,"<",r("span",{className:"hljs-name"},void 0,"h1"),">"),"Anything inside",r("span",{className:"hljs-tag"},void 0,"</",r("span",{className:"hljs-name"},void 0,"h1"),">"),r("br",{}),"  ",r("span",{className:"hljs-tag"},void 0,"<",r("span",{className:"hljs-name"},void 0,"h2"),">"),"is passed in as props.children",r("span",{className:"hljs-tag"},void 0,"</",r("span",{className:"hljs-name"},void 0,"h2"),">"),r("br",{}),r("span",{className:"hljs-tag"},void 0,"</",r("span",{className:"hljs-name"},void 0,"Boom"),">"),r("br",{}))),M=r("p",{},void 0,"Will render this to the dom:"),B=r("pre",{},void 0,r("code",{className:"language-html"},void 0,r("span",{className:"hljs-tag"},void 0,"<",r("span",{className:"hljs-name"},void 0,"div"),">"),r("br",{}),"  ",r("span",{className:"hljs-tag"},void 0,"<",r("span",{className:"hljs-name"},void 0,"h1"),">"),"This is pretty awesome.",r("span",{className:"hljs-tag"},void 0,"</",r("span",{className:"hljs-name"},void 0,"h1"),">"),r("br",{}),"  ",r("span",{className:"hljs-tag"},void 0,"<",r("span",{className:"hljs-name"},void 0,"h1"),">"),"Anything inside",r("span",{className:"hljs-tag"},void 0,"</",r("span",{className:"hljs-name"},void 0,"h1"),">"),r("br",{}),"  ",r("span",{className:"hljs-tag"},void 0,"<",r("span",{className:"hljs-name"},void 0,"h2"),">"),"is passed in as props.children",r("span",{className:"hljs-tag"},void 0,"</",r("span",{className:"hljs-name"},void 0,"h2"),">"),r("br",{}),r("span",{className:"hljs-tag"},void 0,"</",r("span",{className:"hljs-name"},void 0,"div"),">"),r("br",{}))),R=r("p",{},void 0,"Any single token arguments following the keyword become an array of ",r("code",{},void 0,"options")," passed to the component as a prop."),X=r("pre",{},void 0,r("code",{},void 0,"::: boom these are individual props",r("br",{}),r("br",{}),"## Anything inside",r("br",{}),r("br",{}),"## is passed in as props.children",r("br",{}),r("br",{}),":::",r("br",{}))),q=r("p",{},void 0,"Any token after the arg with an equal sign in it is treated as a property. All matching tokens fill an object the is spread onto the component."),G=r("pre",{},void 0,r("code",{},void 0,'::: boom first=string second=2 third=["Array", "of, "Things"] fourth={ "some": "JSON Structure" }',r("br",{}),r("br",{}),"# Anything inside",r("br",{}),r("br",{}),"## is passed in as props.children",r("br",{}),r("br",{}),":::",r("br",{}))),Y=r("article",{className:"message column is-warning is-three-fifths is-offset-one-fifth has-text-centered"},void 0,r("div",{className:"message-body"},void 0,r("p",{},void 0,"\u26a0\ufe0f Properties with arrays or objects must be valid JSON"))),U=r("p",{},void 0,"CSS Modules is supported for all plugins. To style your component simply import your styles and use them."),z=r("pre",{},void 0,r("code",{className:"language-javascript"},void 0,r("span",{className:"hljs-keyword"},void 0,"import")," React ",r("span",{className:"hljs-keyword"},void 0,"from")," ",r("span",{className:"hljs-string"},void 0,"'react'"),";",r("br",{}),r("span",{className:"hljs-keyword"},void 0,"import")," styles ",r("span",{className:"hljs-keyword"},void 0,"from")," ",r("span",{className:"hljs-string"},void 0,"'./styles.css'"),";",r("br",{}),r("br",{}),r("span",{className:"hljs-keyword"},void 0,"const")," myPlugin = ",r("span",{className:"hljs-function"},void 0,r("span",{className:"hljs-params"},void 0,"props")," =>")," (",r("br",{}),"  ",r("span",{className:"xml"},void 0,r("span",{className:"hljs-tag"},void 0,"<",r("span",{className:"hljs-name"},void 0,"div")," ",r("span",{className:"hljs-attr"},void 0,"className"),"=",r("span",{className:"hljs-string"},void 0,"{styles.unicorn}"),">"),r("br",{}),"    ",r("span",{className:"hljs-tag"},void 0,"<",r("span",{className:"hljs-name"},void 0,"h1"),">"),"This is pretty awesome.",r("span",{className:"hljs-tag"},void 0,"</",r("span",{className:"hljs-name"},void 0,"h1"),">"),r("br",{}),"    {props.children}",r("br",{}),"  ",r("span",{className:"hljs-tag"},void 0,"</",r("span",{className:"hljs-name"},void 0,"div"),">")),r("br",{}),");",r("br",{}),r("br",{}),r("span",{className:"hljs-keyword"},void 0,"export")," myPlugin;",r("br",{}))),$=r("p",{},void 0,"Since we can render a react component as a plugin that means we can use ",r("em",{},void 0,"ANY")," react component as plugin to our docs. If the component doesn't require state to be handled by the parent, using it is as simple as giving it a name!"),F=r("pre",{},void 0,r("code",{className:"language-bash"},void 0,"yarn add react-gist",r("br",{}))),H=r("p",{},void 0,"Add an entry to your configuration's plugin section. The first item in the entry should be the name you want to give the plugin and the second is just the package name."),W=r("pre",{},void 0,r("code",{className:"language-json"},void 0,"{",r("br",{}),"  ",r("span",{className:"hljs-attr"},void 0,'"plugins"'),": [[",r("span",{className:"hljs-string"},void 0,'"Gist"'),", ",r("span",{className:"hljs-string"},void 0,'"react-gist"'),"]]",r("br",{}),"}",r("br",{}))),K=r("p",{},void 0,"Now you can use the new component anywhere! The possibilities for new components in your app are endless."),Q=r("p",{},void 0,r("strong",{},void 0,"Markdown")),V=r("pre",{},void 0,r("code",{className:"language-markdown"},void 0,'::: Gist id="5995ea726914f280afb3" file="Chef-Dockerfile"',r("br",{}),":::",r("br",{}))),Z=r("p",{},void 0,r("strong",{},void 0,"JSX")),ee=r("pre",{},void 0,r("code",{className:"language-jsx"},void 0,"<Gist id=",r("span",{className:"hljs-string"},void 0,'"5995ea726914f280afb3"')," file=",r("span",{className:"hljs-string"},void 0,'"Chef-Dockerfile"')," />",r("br",{}))),ae=r("pre",{},void 0,r("code",{className:"language-json"},void 0,"{",r("br",{}),"  ",r("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",r("span",{className:"hljs-string"},void 0,'"ColorPicker, { SketchPicker, AlphaPicker }"'),", ",r("span",{className:"hljs-string"},void 0,'"react-color"'),"]",r("br",{}),"}",r("br",{}))),se=r("p",{},void 0,"ColorPicker:"),ne=r("br",{}),ie=r("p",{},void 0,"SketchPicker:"),oe=r("br",{}),te=r("p",{},void 0,"AlphaPicker:");var re=e=>r("div",{className:e.className},void 0,r("section",{},void 0,g,v,f,r("h2",{id:"define-your-plugin"},void 0,"Define your plugin ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#define-your-plugin","aria-hidden":"true"})),b,r("h3",{id:"init"},void 0,"Init ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#init","aria-hidden":"true"})),j,N,y,w,k,r("h3",{id:"inject-components"},void 0,"Inject Components ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#inject-components","aria-hidden":"true"})),P,O,S,C,r("h2",{id:"register-plugin"},void 0,"Register Plugin ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#register-plugin","aria-hidden":"true"})),x,A,I,r("h2",{id:"use-your-plugins"},void 0,"Use your plugins ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#use-your-plugins","aria-hidden":"true"})),L,T,D,E,J,_,M,B,r("h3",{id:"options"},void 0,"Options ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),R,X,r("h3",{id:"properties"},void 0,"Properties ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#properties","aria-hidden":"true"})),q,G,Y,r("h3",{id:"style"},void 0,"Style ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#style","aria-hidden":"true"})),U,z,r("h2",{id:"using-any-react-component"},void 0,"Using Any React Component ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#using-any-react-component","aria-hidden":"true"})),$,r("h2",{id:"download"},void 0,"Download ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#download","aria-hidden":"true"})),r("p",{},void 0,"Find some random react component you would like to use in your docs. Here we are gonna use ",r(p,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/tleunen/react-gist",className:"external-link"},void 0,"react-gist")," a react gist component"),F,r("h2",{id:"definition"},void 0,"Definition ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#definition","aria-hidden":"true"})),H,W,r("h2",{id:"all-done"},void 0,"All Done ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#all-done","aria-hidden":"true"})),K,Q,V,Z,ee,r(m,{name:"Gist",plugins:e.plugins,id:"5995ea726914f280afb3",file:"Chef-Dockerfile"}),r("h2",{id:"es6-imports"},void 0,"ES6 Imports ",r(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#es6-imports","aria-hidden":"true"})),ae,se,r(m,{name:"ColorPicker",plugins:e.plugins}),ne,ie,r(m,{name:"SketchPicker",plugins:e.plugins,style:{paddingBottom:20}}),oe,te,r(m,{name:"AlphaPicker",plugins:e.plugins})));a.default=re,e.exports=a.default}}]);
//# sourceMappingURL=IgnitePlugins.js.map
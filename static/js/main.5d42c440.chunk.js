(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(68)},24:function(e,t,n){},26:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),l=n.n(o),c=(n(24),n(14)),i=n(15),s=n(17),u=n(16),m=n(18),h=(n(26),n(7)),f="https://api.github.com/users/StealthMcCloud",b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},active:!1},n.componentDidMount=function(e){fetch(f).then(function(e){return e.json()}).then(function(e){n.setState({user:e}),console.log({githubInfo:e})}).catch(function(e){return console.log("".concat(e," error error error"))})},n.clickButton=function(e){n.setState(function(e){return{active:!e.active}})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("br",null),r.a.createElement(h.Container,null,r.a.createElement(h.Button,{floating:!0,large:!0,className:"orange waves-effect waves-red",onClick:this.clickButton},"Click Here"),this.state.active?r.a.createElement("div",null,r.a.createElement(h.Card,{horizontal:!0,header:r.a.createElement(h.CardTitle,{image:this.state.user.avatar_url}),actions:[r.a.createElement("p",null,r.a.createElement("b",null,"Portfolio:")," ",r.a.createElement("a",{href:this.state.user.blog,target:"_blank"},this.state.user.blog))]},r.a.createElement("p",null,r.a.createElement("b",null,"Name:")," ",this.state.user.name),r.a.createElement("p",null,r.a.createElement("b",null,"Username:")," ",this.state.user.login),r.a.createElement("p",null,r.a.createElement("b",null,"Public Repositories:")," ",this.state.user.public_repos))):null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.5d42c440.chunk.js.map
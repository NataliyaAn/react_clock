(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=(n(12),n(0));function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={date:new Date,clockName:"Clock-0"},e.clockId=0,e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){var t=new Date;console.info(t.toLocaleTimeString()),e.setState({date:t})}),1e3),this.clockId=window.setInterval((function(){var t=e.state.clockName;e.setState({clockName:d()}),console.debug("Renamed from ".concat(t," to ").concat(e.state.clockName))}),3300)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),window.clearInterval(this.clockId)}},{key:"render",value:function(){var e=this.state,t=e.date,n=e.clockName;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:n})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:t.toLocaleTimeString()})]})}}]),n}(l.Component),m=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0},e.handleLeftMouse=function(){e.setState({hasClock:!0})},e.handleRightMouse=function(t){e.setState({hasClock:!1}),t.preventDefault()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleLeftMouse),document.addEventListener("contextmenu",this.handleRightMouse)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleLeftMouse),document.removeEventListener("contextmenu",this.handleRightMouse)}},{key:"render",value:function(){var e=this.state.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(h,{})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.00c9881b.chunk.js.map
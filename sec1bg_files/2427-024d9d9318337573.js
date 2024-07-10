"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2427],{69246:function(t,n,e){function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,i,o=[],a=!0,s=!1;try{for(e=e.call(t);!(a=(r=e.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(u){s=!0,i=u}finally{try{a||null==e.return||e.return()}finally{if(s)throw i}}return o}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(t){var n=t.rootRef,e=t.rootMargin,r=t.disabled||!s,c=o.useRef(),f=i(o.useState(!1),2),p=f[0],d=f[1],h=i(o.useState(n?n.current:null),2),E=h[0],x=h[1],m=o.useCallback((function(t){c.current&&(c.current(),c.current=void 0),r||p||t&&t.tagName&&(c.current=function(t,n,e){var r=function(t){var n,e={root:t.root||null,margin:t.rootMargin||""},r=l.find((function(t){return t.root===e.root&&t.margin===e.margin}));r?n=u.get(r):(n=u.get(e),l.push(e));if(n)return n;var i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n=i.get(t.target),e=t.isIntersecting||t.intersectionRatio>0;n&&e&&n(e)}))}),t);return u.set(e,n={id:e,observer:o,elements:i}),n}(e),i=r.id,o=r.observer,a=r.elements;return a.set(t,n),o.observe(t),function(){if(a.delete(t),o.unobserve(t),0===a.size){o.disconnect(),u.delete(i);var n=l.findIndex((function(t){return t.root===i.root&&t.margin===i.margin}));n>-1&&l.splice(n,1)}}}(t,(function(t){return t&&d(t)}),{root:E,rootMargin:e}))}),[r,E,e,p]),v=o.useCallback((function(){d(!1)}),[]);return o.useEffect((function(){if(!s&&!p){var t=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(t)}}}),[p]),o.useEffect((function(){n&&x(n.current)}),[n]),[m,p,v]};var o=e(67294),a=e(44686),s="undefined"!==typeof IntersectionObserver;var u=new Map,l=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),t.exports=n.default)},98885:function(t,n,e){e.d(n,{ZP:function(){return m}});var r=e(63366),i=e(75068),o=e(67294),a=e(73935),s=!1,u=e(220),l=e(59391),c="unmounted",f="exited",p="entering",d="entered",h="exiting",E=function(t){function n(n,e){var r;r=t.call(this,n,e)||this;var i,o=e&&!e.isMounting?n.enter:n.appear;return r.appearStatus=null,n.in?o?(i=f,r.appearStatus=p):i=d:i=n.unmountOnExit||n.mountOnEnter?c:f,r.state={status:i},r.nextCallback=null,r}(0,i.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===c?{status:f}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==p&&e!==d&&(n=p):e!==p&&e!==d||(n=h)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,r=this.props.timeout;return t=n=e=r,null!=r&&"number"!==typeof r&&(t=r.exit,n=r.enter,e=void 0!==r.appear?r.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){if(void 0===t&&(t=!1),null!==n)if(this.cancelNextCallback(),n===p){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this);e&&(0,l.Q)(e)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:c})},e.performEnter=function(t){var n=this,e=this.props.enter,r=this.context?this.context.isMounting:t,i=this.props.nodeRef?[r]:[a.findDOMNode(this),r],o=i[0],u=i[1],l=this.getTimeouts(),c=r?l.appear:l.enter;!t&&!e||s?this.safeSetState({status:d},(function(){n.props.onEntered(o)})):(this.props.onEnter(o,u),this.safeSetState({status:p},(function(){n.props.onEntering(o,u),n.onTransitionEnd(c,(function(){n.safeSetState({status:d},(function(){n.props.onEntered(o,u)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),r=this.props.nodeRef?void 0:a.findDOMNode(this);n&&!s?(this.props.onExit(r),this.safeSetState({status:h},(function(){t.props.onExiting(r),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(r)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(r){e&&(e=!1,n.nextCallback=null,t(r))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(e&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],o=i[0],s=i[1];this.props.addEndListener(o,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===c)return null;var n=this.props,e=n.children,i=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,r.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(u.Z.Provider,{value:null},"function"===typeof e?e(t,i):o.cloneElement(o.Children.only(e),i))},n}(o.Component);function x(){}E.contextType=u.Z,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},E.UNMOUNTED=c,E.EXITED=f,E.ENTERING=p,E.ENTERED=d,E.EXITING=h;var m=E},220:function(t,n,e){var r=e(67294);n.Z=r.createContext(null)},59391:function(t,n,e){e.d(n,{Q:function(){return r}});var r=function(t){return t.scrollTop}}}]);
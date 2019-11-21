(this["webpackJsonpcustomizable-tic-tac-toe"]=this["webpackJsonpcustomizable-tic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),s=n.n(i),h=(n(16),n(17),n(10)),u=n(9),l=n(2),c=n(3),o=n(5),d=n(4),m=n(1),p=n(6);n(18);function g(e){var t={width:e.squareWidth+"px",height:e.squareHeight+"px",fontSize:Math.min(e.squareWidth,e.squareHeight)-20+"px"},n=["square"];return e.winnerSquars.includes(e.id)&&n.push("winnerSquare"),r.a.createElement("button",{className:n.join(" "),onClick:e.onClick,style:t},e.value)}var w=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(g,{value:this.props.squares[e],id:e,onClick:function(){return t.props.onClick(e)},squareWidth:this.props.squareWidth,squareHeight:this.props.squareHeight,winnerSquars:this.props.winnerSquars})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",null,this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",null,this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(a.Component),f=(n(19),function(e){return r.a.createElement("div",{className:"dimensions"},r.a.createElement("div",{className:"input"},r.a.createElement("span",null,"Width:"),r.a.createElement("input",{type:"number",placeholder:"width",onChange:e.widthChanged,value:e.width})),r.a.createElement("div",{className:"input"},r.a.createElement("span",null,"Height:"),r.a.createElement("input",{type:"number",placeholder:"height",onChange:e.heightChanged,value:e.height})))});n(20);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={isXNext:!0,stepNumber:0,squares:Array(9).fill(null),width:80,height:80,winner:null,winnerLine:[]},O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(d.a)(t).call(this,e))).state=q,n.handleWidthChange=n.handleWidthChange.bind(Object(m.a)(n)),n.handleHeightChange=n.handleHeightChange.bind(Object(m.a)(n)),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares;if(!this.state.winner&&!t[e]){t[e]=this.state.isXNext?"X":"O",this.setState(b({},this.state,{squares:t,isXNext:!this.state.isXNext,stepNumber:t.length}));var n,a,r=this.calculateWinner(t);n=r.winner,a=r.winnerLine,n&&this.setState(b({},this.state,{winner:n,winnerLine:a}))}}},{key:"resetGame",value:function(){this.setState({isXNext:!0,stepNumber:0,squares:Array(9).fill(null),width:80,height:80,winner:null,winnerLine:[]})}},{key:"calculateWinner",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(h.a)(t[n],3),r=a[0],i=a[1],s=a[2];if(e[r]&&e[r]===e[i]&&e[i]===e[s])return{winner:e[r],winnerLine:t[n]}}return{winner:null,winnerLine:null}}},{key:"handleWidthChange",value:function(e){this.setState(b({},this.state,{width:e.target.value}))}},{key:"handleHeightChange",value:function(e){this.setState(b({},this.state,{height:e.target.value}))}},{key:"render",value:function(){var e,t,n=this;return 0===this.state.stepNumber&&(e=r.a.createElement(f,{width:this.state.width,height:this.state.height,widthChanged:function(e){return n.handleWidthChange(e)},heightChanged:function(e){return n.handleHeightChange(e)}})),t=this.state.winner?"Winner is: "+this.state.winner:this.state.squares.includes(null)||this.state.winner?"Next player is "+(this.state.isXNext?"X":"O"):"Draw",r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"board"},r.a.createElement("h1",null,t),r.a.createElement(w,{onClick:function(e){return n.handleClick(e)},squares:this.state.squares,squareWidth:this.state.width,squareHeight:this.state.height,winnerSquars:this.state.winnerLine}),r.a.createElement("button",{className:"reset-btn",onClick:function(){return n.resetGame()}},"reset game")),r.a.createElement("div",null,e))}}]),t}(a.Component);var y=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.a0e343b8.chunk.js.map
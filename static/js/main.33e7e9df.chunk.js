(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(3),c=a(5),r=a(4),o=a(6),s=a(10),l=a.n(s),m=a(0),d=a.n(m),u=a(11),v=a.n(u),h=a(12),p=a.n(h),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={term:""},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"onInputChange",value:function(e){this.setState({term:e}),this.props.onSearchTermChange(e)}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"search-bar"},d.a.createElement("input",{value:this.state.term,onChange:function(t){return e.onInputChange(t.target.value)}}))}}]),t}(m.Component),f=function(e){var t=e.video,a=e.onVideoSelect,n=t.snippet.thumbnails.default.url;return d.a.createElement("li",{onClick:function(){return a(t)},className:"list-group-item"},d.a.createElement("div",{className:"video-list media"},d.a.createElement("div",{className:"media-left"},d.a.createElement("img",{className:"media-object",src:n,alt:""}))),d.a.createElement("div",{className:"media-body"},d.a.createElement("div",{className:"media-heading"},t.snippet.title)))},E=function(e){var t=e.videos.map(function(t){return d.a.createElement(f,{key:t.etag,onVideoSelect:e.onVideoSelect,video:t})});return d.a.createElement("div",{className:"col-md-4"},d.a.createElement("ul",{className:"list-group "},t))},w=function(e){var t=e.video;if(!t)return d.a.createElement("div",{className:"empty-search col-md-12"},d.a.createElement("p",null,"Search for any YouTube videos"));var a=t.id.videoId,n="https://www.youtube.com/embed/".concat(a);return d.a.createElement("div",{className:"col-md-8 video-detail "},d.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},d.a.createElement("iframe",{className:"embed-responsive-item",src:n,title:"youtube"})),d.a.createElement("div",{className:"details "},d.a.createElement("div",null," ",t.snippet.title," "),d.a.createElement("div",null," ",t.snippet.description," ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={videos:[],selectedVideo:null},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"videoSearch",value:function(e){var t=this;p()({key:"AIzaSyAX0A1GPj-uie_wODy0UdjYqv-NxKVwMmc",term:e},function(e){t.setState({videos:e,selectedVideo:e[0]})})}},{key:"render",value:function(){var e=this,t=l.a.debounce(function(t){e.videoSearch(t)},300);return d.a.createElement("div",{className:"col-md-12"},d.a.createElement(b,{onSearchTermChange:t}),d.a.createElement(w,{video:this.state.selectedVideo}),d.a.createElement(E,{onVideoSelect:function(t){return e.setState({selectedVideo:t})},videos:this.state.videos}))}}]),t}(m.Component);v.a.render(d.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.33e7e9df.chunk.js.map
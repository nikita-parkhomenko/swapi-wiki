(this["webpackJsonpswapi-wiki"]=this["webpackJsonpswapi-wiki"]||[]).push([[0],{22:function(e,t,n){e.exports=n(42)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(19),c=n.n(l),o=(n(27),n(5)),i=n(6),s=n(8),u=n(7),p=n(9),m=n(10),h=n(11),d=(n(28),function(e){var t=e.planet;return r.a.createElement("div",{className:"planet"},r.a.createElement("h1",null," ",t.name," "),r.a.createElement("p",null,"Population: ",t.population),r.a.createElement("p",null,"Climate: ",t.climate))}),f=(n(29),function(e){var t=e.placeholder,n=e.handlerChanged;return r.a.createElement("input",{className:"search-box",type:"search",placeholder:t,onChange:n})}),E=(n(30),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={planets:[],searchField:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.co/api/planets/").then((function(e){return e.json()})).then((function(t){return e.setState({planets:t.results})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.planets,a=t.searchField,l=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{placeholder:"search planet",handlerChanged:function(t){return e.setState({searchField:t.target.value})}}),r.a.createElement("div",{className:"planets-list"},l.map((function(e){return r.a.createElement(d,{key:e.diameter,planet:e})}))))}}]),t}(a.Component)),v=(n(31),function(e){var t=e.person,n=e.onItemSelected;return r.a.createElement("div",{onClick:function(){return n(t.id)},className:"person"},r.a.createElement("h1",null," ",t.name," "),r.a.createElement("p",null," Gender: ",t.gender," "),r.a.createElement("p",null," Birth Year: ",t.birth_year," "))}),b=(n(32),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={persons:[],searchField:""},n.onItemSelected=function(e){var t=n.props.history;console.log(e),t.push("/persons/".concat(e))},n.extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},n.transformPerson=function(e){return{id:n.extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year}},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.co/api/people/").then((function(e){return e.json()})).then((function(t){return t.results.map(e.transformPerson)})).then((function(t){return e.setState({persons:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.persons,a=t.searchField,l=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{placeholder:"search persons",handlerChanged:function(t){return e.setState({searchField:t.target.value})}}),r.a.createElement("div",{className:"persons-list"},l.map((function(t){return r.a.createElement(v,{onItemSelected:e.onItemSelected,key:t.id,person:t})}))))}}]),t}(a.Component)),y=Object(h.e)(b),j=(n(38),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,r.a.createElement(m.b,{to:"/"},"Swapi-Wiki")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/planets"},"Planets")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/persons"},"Persons")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/favorites"},"Favorites"))))}),g=(n(39),function(){return r.a.createElement("div",{className:"lds-ripple"},r.a.createElement("div",null),r.a.createElement("div",null))}),O=(n(40),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={person:null,loading:!0},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;fetch("https://swapi.co/api/people/".concat(t,"/")).then((function(e){return e.json()})).then((function(t){return e.setState({person:t,loading:!1})}))}},{key:"render",value:function(){if(this.state.loading)return r.a.createElement(g,null);var e=this.state.person,t=e.name,n=e.birth_year,a=e.eye_color,l=e.gender,c=e.hair_color,o=e.height,i=e.mass;return r.a.createElement("div",{className:"person-details"},r.a.createElement("h1",null," ",t," "),r.a.createElement("p",null,"Birth year: ",n," "),r.a.createElement("p",null,"Eye color: ",a," "),r.a.createElement("p",null,"Gender: ",l," "),r.a.createElement("p",null,"Hair color: ",c," "),r.a.createElement("p",null,"Height: ",o," "),r.a.createElement("p",null,"Mass: ",i," "))}}]),t}(a.Component)),w=(n(41),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(h.a,{path:"/",exact:!0,render:function(){return r.a.createElement("h1",{className:"title"},"Welcome to Swapi Wikipedia!")}}),r.a.createElement(h.a,{path:"/planets",component:E}),r.a.createElement(h.a,{path:"/persons",exact:!0,component:y}),r.a.createElement(h.a,{path:"/persons/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(O,{id:t})}})))}}]),t}(a.Component));c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.fa7eab98.chunk.js.map
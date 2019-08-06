(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){e.exports=n.p+"static/media/jumble.a6ec563b.gif"},37:function(e,t,n){e.exports=n(76)},42:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),o=n.n(c),i=(n(42),n(1)),s=n(2),l=n(4),u=n(3),d=n(5),m=n(13),h=n(12),p={checkAuth:function(){return fetch("/auth",{method:"GET",credentials:"include",mode:"cors"})},handleLogin:function(e){return fetch("/signin",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e),credentials:"include",mode:"cors"})},handleSignup:function(e){return fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e),credentials:"include",mode:"cors"})},handlelogout:function(){return fetch("/logout",{method:"GET",credentials:"include",mode:"cors"})}},g=n(6),f=n.n(g),b={createTask:function(e){return f.a.post("/api/task",e)},getTasks:function(e){return f.a.get("/api/task/"+e)},updateTask:function(e,t){return f.a.put("/api/task/"+e,t)},removeTask:function(e){return f.a.delete("/api/task/"+e)}},j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={tasks:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.getTasks(this.props.projectID).then(function(t){console.log(t.data),e.setState({tasks:t.data})}).catch(function(e){return console.log(e.message)})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.tasks.map(function(e,t){return r.a.createElement("p",{key:t},e.task)}))}}]),t}(a.Component),E={createBudget:function(e){return f.a.post("/api/budget",e)},getBudget:function(e){return f.a.get("/api/budget/"+e)},updateBudget:function(e,t){return f.a.put("/api/budget/"+e,t)}},v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={budgetTotal:"",budgetDesign:"",budgetEngineering:"",budgetFinance:"",budgetHR:"",budgetMarketing:"",budgetSales:"",budgetSecurity:""},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.getBudget(this.props.projectID).then(function(t){console.log(t.data),e.setState({budgetTotal:t.data.total,budgetDesign:t.data.Design,budgetEngineering:t.data.Engineering,budgetFinance:t.data.Finance,budgetHR:t.data.HR,budgetMarketing:t.data.Marketing,budgetSales:t.data.Sales,budgetSecurity:t.data.Security})}).catch(function(e){return console.log(e.message)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,this.state.budgetTotal))}}]),t}(a.Component),k={createAssignee:function(e){return f.a.post("/api/assignee",e)},getAssignees:function(e){return f.a.get("/api/assignee/"+e)},updateAssignee:function(e,t){return f.a.put("/api/assignee/"+e,t)},removeAssignee:function(e){return f.a.delete("/api/assignee/"+e)}},y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={assignees:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.getAssignees(this.props.projectID).then(function(t){console.log(t.data),e.setState({assignees:t.data})}).catch(function(e){return console.log(e.message)})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.assignees.map(function(e,t){return r.a.createElement("p",{key:t},e.name)}))}}]),t}(a.Component);var O=function(e){return r.a.createElement("div",null,-1!=e.projectID?r.a.createElement("div",null,r.a.createElement(j,{projectID:e.projectID}),r.a.createElement(y,{projectID:e.projectID}),r.a.createElement(v,{projectID:e.projectID})):r.a.createElement("div",null,"OK"),e.children)};n(30);function C(e){var t=e.id,n=e.className,a=e.children;return r.a.createElement("div",{id:t,className:n||"row"},a)}function S(e){var t=e.padding,n=e.id,a=e.className,c=e.children;return r.a.createElement("div",{id:n,className:a,style:{padding:"".concat(t||"0")}},c)}n(60);var I=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"topnavBar"}))};n(61);var w=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navBar"},e.children))};var N=function(e){return r.a.createElement("button",{className:"sideBtn active",onClick:function(){return e.edit()},style:{width:100}},"+ Project")};var D=function(e){return r.a.createElement("button",{onClick:function(){return e.click(e.id)},id:e.id,className:"sideBtn active"},e.name)},T=n(16),P=(n(62),{findProjects:function(){return f.a.get("/api/project")},createProject:function(e){return f.a.post("/api/project",e)},getProject:function(e){return f.a.get("/api/project/"+e)},updateProject:function(e,t){return f.a.put("/api/project/"+e,t)},deleteProject:function(e){return f.a.delete("/api/project/"+e)}}),x=(a.Component,function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",savedTitle:!1,budget:"",projectID:0,task:"",assignee:""},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(T.a)({},a,r))},n.saveProject=function(e){e.preventDefault();var t={name:n.state.title};n.setState({savedTitle:!0}),P.createProject(t).then(function(e){console.log(e.data.id),n.setState({projectID:e.data.id}),console.log("--------------"+n.state.projectID)}).catch(function(e){return console.log(e.message)})},n.addTask=function(e){e.preventDefault();var t=n.state.tasks;t.push({name:"",assignees:[""]}),n.setState({tasks:t})},n.saveBudgetTask=function(e){e.preventDefault();var t={total:n.state.budget,ProjectId:n.state.projectID};E.createBudget(t).then(function(e){console.log("lets hope this works!!!!!!!!",e)}).catch(function(e){return console.log(e.message)});var a={task:n.state.task,ProjectId:n.state.projectID};b.createTask(a).then(function(e){console.log(e)}).catch(function(e){return console.log(e.message)});var r={name:n.state.assignee,ProjectId:n.state.projectID};k.createAssignee(r).then(function(e){}).catch(function(e){return console.log(e.message)}),n.dashboard(n.props)},n.dashboard=function(e){e.edit()},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"formRender",value:function(){return!1===this.state.savedTitle?r.a.createElement("div",null,r.a.createElement("form",{id:"styling"},r.a.createElement("p",{id:"typedTitle"},this.state.title),r.a.createElement("input",{required:!0,id:"inputName",type:"text",value:this.state.title,placeholder:"Project Name",onChange:this.handleInputChange,name:"title"}),r.a.createElement("button",{id:"submitNewProject",onClick:this.saveProject}," Next "))):r.a.createElement("div",null,r.a.createElement("form",{id:"styling"},r.a.createElement("p",{id:"typedBudget"},this.state.budget),r.a.createElement("input",{required:!0,id:"inputBudget",type:"text",value:this.state.budget,placeholder:"Budget",onChange:this.handleInputChange,name:"budget"}),r.a.createElement("input",{required:!0,type:"text",value:this.state.task,placeholder:"Task",onChange:this.handleInputChange,name:"task"}),r.a.createElement("input",{required:!0,type:"text",value:this.state.assignee,placeholder:"Assignee",onChange:this.handleInputChange,name:"assignee"}),r.a.createElement("button",{id:"submit",onClick:this.saveBudgetTask},"Submit")))}},{key:"render",value:function(){return r.a.createElement("div",null,this.formRender())}}]),t}(a.Component)),A=(n(63),function(e){return r.a.createElement("button",{className:"logout",onClick:e.logout},"Logout")}),R=(n(64),n(31)),B=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).chart1Ref=r.a.createRef(),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.chart1=new R(this.chart1Ref.current,{type:"doughnut",data:{labels:["Red","Yellow","Blue"],datasets:[{data:[10,20,30],backgroundColor:["#a8e0ff","#8ee3f5","#70cad1"]}]}})}},{key:"render",value:function(){return r.a.createElement("canvas",{className:"chart",ref:this.chart1Ref})}}]),t}(a.Component),M=n(31),L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).chart2Ref=r.a.createRef(),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.chart2=new M(this.chart2Ref.current,{type:"line",options:{scales:{xAxes:[{type:"time",time:{unit:"week",isoWeekday:!1}}],yAxes:[{ticks:{min:0,max:100}}]}},data:{labels:["Monday","Tuesday","Wednesday","Thursday","Friday"],datasets:[{label:["Progress (%)"],data:[90,80,50,46,90],fill:"none",backgroundColor:"#3E517A",pointRadius:2,borderColor:"#3E517A",borderWidth:1,lineTension:0}]}})}},{key:"render",value:function(){return r.a.createElement("canvas",{className:"chart",ref:this.chart2Ref})}}]),t}(a.Component),F=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).loadProject=function(e){var t=n.state.projects.find(function(t){return t.id===e});n.setState({selectedProject:t.id})},n.handleEdit=function(){!1===n.state.edit?n.setState({edit:!0}):n.setState({edit:!1})},n.state={userAccount:!1,edit:!1,selectedProject:-1,budgetTotal:"",budgetDesign:"",budgetEngineering:"",budgetFinance:"",budgetHR:"",budgetMarketing:"",budgetSales:"",budgetSecurity:"",tasks:[],assignees:[],projects:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;P.findProjects().then(function(t){e.setState({projects:t.data})})}},{key:"handlelogout",value:function(){var e=this;p.handlelogout().then(function(e){return e.json()}).then(function(t){e.setState({isLoggedIn:t}),t||(window.location.href="/")}).catch(function(e){return console.log("err",e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(C,null,r.a.createElement(I,null)),r.a.createElement(C,null,r.a.createElement(S,{className:"xl2 l3"},r.a.createElement(w,null,r.a.createElement("div",{className:"centerButtons"},this.state.projects.map(function(t){return r.a.createElement(D,{click:e.loadProject,id:t.id,name:t.name,key:t.id})}),r.a.createElement(N,{edit:this.handleEdit}),r.a.createElement(A,{logout:this.handlelogout.bind(this)})))),r.a.createElement(S,{className:"xl10 l9"},this.state.edit?r.a.createElement(x,{edit:this.handleEdit}):r.a.createElement(O,{projectID:this.state.selectedProject},r.a.createElement(B,null),r.a.createElement(L,null)))))}}]),t}(a.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:F}),r.a.createElement(h.a,{exact:!0,path:"/home",component:F}),r.a.createElement(h.a,{path:"*",component:F}))}}]),t}(a.Component),z=(n(71),n(72),function(e){return r.a.createElement("div",{id:"panel"},r.a.createElement("div",{className:"panel-content"},e.children))}),H=(n(73),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("input",{id:this.props.elementID,name:this.props.name,className:"input",type:this.props.inputType,placeholder:this.props.placeholder,style:{backgroundSize:"16px"},required:this.props.required,minLength:this.props.size,size:this.props.size,onChange:function(t){return e.props.handleChange(t)}})}}]),t}(r.a.Component)),J=(n(74),function(e){return r.a.createElement("button",{className:"btn ".concat(e.float),onClick:e.handleBtnClick}," ",e.children," ")}),W=n(36),_=n.n(W),G=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).resetError=function(){n.setState({errClassName:"",errorMsg:""})},n.handleSubmitAuth=function(e){if(n.refs.submitForm.reportValidity()){e.preventDefault(),n.setState({loading:!0});var t={email:n.state.email,local_pw:n.state.local_pw},a=e.target.innerText;a=a.toLowerCase(),n.refs.submitForm.reset(),"signup"===a?n.handleSignup(t):n.handleLogin(t)}},n.validateRes=function(e){e.success?(n.setState({isLoggedIn:e,errorMsg:"",errClassName:""}),window.location.href="/"):n.setState({loading:!1,errorMsg:"UH-OH!\n                ".concat(e.message,"\n                "),errClassName:"error"})},n.handleSignup=function(e){n.setState({new:!0}),p.handleSignup(e).then(function(e){return e.json()}).then(function(e){n.validateRes(e)}).catch(function(e){return console.log("err",e)})},n.handleLogin=function(e){n.setState({new:!1}),p.handleLogin(e).then(function(e){return e.json()}).then(function(e){n.validateRes(e)}).catch(function(e){return console.log("err",e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(T.a)({},a,r))},n.renderAuthForm=function(){return r.a.createElement(C,{id:"home-form-grid"},r.a.createElement(S,{className:"xl6",id:"main-left-col"}),r.a.createElement(S,{id:"home-form-col",className:"xl6"},r.a.createElement("header",null,r.a.createElement("img",{src:_.a,className:"App-logo",alt:"logo"})),r.a.createElement("form",{id:"home-form",ref:"submitForm",onClick:n.resetError},r.a.createElement("p",{id:"form-error",className:n.state.errClassName},n.state.errorMsg),r.a.createElement(H,{elementID:"user-email",inputType:"email",placeholder:"email",img:"email",required:!0,size:"3",name:"email",handleChange:n.handleInputChange}),r.a.createElement(H,{elementID:"user-pw",inputType:"password",placeholder:"password",img:"password",required:!0,size:"6",name:"local_pw",handleChange:n.handleInputChange}),r.a.createElement(J,{handleBtnClick:n.handleSubmitAuth},"login"),r.a.createElement(J,{handleBtnClick:n.handleSubmitAuth},"signup"))))},n.renderLoading=function(){return n.state.new?r.a.createElement("div",null,r.a.createElement("h2",null,"Creating your shiney new account!"),r.a.createElement("p",null,"Please wait...")):r.a.createElement("div",null,r.a.createElement("h2",null,"Loading your Profile!"),r.a.createElement("p",null,"Please wait..."))},n.state={isLoggedIn:!1,loading:!1,new:!1,error:!1,errorMsg:"",errClassName:"",email:"",local_pw:""},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(z,null,this.state.loading?this.renderLoading():this.renderAuthForm())}}]),t}(a.Component),K=function(e){return r.a.createElement(z,null,r.a.createElement("h1",null,"404 Page not found"))},U=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:G}),r.a.createElement(h.a,{exact:!0,path:"/home",component:G}),r.a.createElement(h.a,{exact:!0,path:"/profile",component:G}),r.a.createElement(h.a,{exact:!0,path:"/account",component:G}),r.a.createElement(h.a,{path:"*",component:K}))}}]),t}(a.Component),V=(n(75),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).guestRouting=function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"content"},r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"*",component:U})))))},n.userRouting=function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"content"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:q}),r.a.createElement(h.a,{exact:!0,path:"/account",component:q}),r.a.createElement(h.a,{path:"/account/*",component:q}),r.a.createElement(h.a,{path:"/profile",component:q}),r.a.createElement(h.a,{path:"/profile/*",component:q}),r.a.createElement(h.a,{path:"*",component:U})))))},n.state={isLoggedIn:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.checkAuth()}},{key:"checkAuth",value:function(){var e=this;p.checkAuth().then(function(e){return e.json()}).then(function(t){e.setState({isLoggedIn:t})}).catch(function(e){return console.log("err",e)})}},{key:"render",value:function(){switch(this.state.isLoggedIn){case!1:return this.guestRouting();case!0:return this.userRouting();default:return this.guestRouting()}}}]),t}(a.Component));o.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.78b1788f.chunk.js.map
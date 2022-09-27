(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"info":{"name":"Raghul Raj Valuparambil","email":"raghulraj@gmail.com","links":[{"name":"LinkedIn","url":"https://www.linkedin.com/in/raghul22/"},{"name":"Github","url":"https://github.com/raghulraj"},{"name":"Twitter","url":"https://twitter.com/raghul22"}]},"experience":[{"company":"Infinite Computer Solutions Inc","jobTitle":"Principal Software Engineer in Test","location":"Rockville, MD","startDate":"June 2022","endDate":"Present","bullets":["Build infrastructure and automation framework for web and mobile applications using open source tools and technologies.","Build a continuous integration/deployment setup for release activities.","Build and maintain dashboards for team to track project progress and test status.","Mentor team members in test executions and automation."]},{"company":"Verizon","jobTitle":"Principal Software Engineer in Test","location":"San jose, CA","startDate":"August 2018","endDate":"June 2022","bullets":["Develop automation frameworks for UI automation using Protractor, Testcafe, Selenium, TestNG","Develop automation frameworks for testing Microservices using Rest Assured","Build productivity tools to improve the team performance.","Write Performance tests using Jmeter and K6.","Write Security tests using Zaproxy."]},{"company":"Yahoo! Inc","jobTitle":"Senior Software Engineer in Test","location":"Sunnyvale, CA","startDate":"June 2008","endDate":"August 2018","bullets":["Write test cases and mind map for new projects.","Write test plans and execute it.","Help the team and guide them in test plans and strategy in execution.","Responsible for release activities."]}],"skills":[{"name":"Languages","items":["Java","JavaScript/TypeScript","Nodejs"]},{"name":"Frameworks & Libraries","items":["Selenium","Appium","Webdriver","Protractor","Testcafe","Rest Assured","Zaproxy","Hygieia","Jmeter","K6","MySQL","Mongodb","React","ExpressJS"]}],"education":[{"institute":"Birla Institute of Technology","graduationDate":"March 2011","degree":"Master of science in Software Systems"},{"institute":"Anna University","graduationDate":"May 2005","degree":"Bachelor of science in Information Technology"}]}')},,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(4),r=n.n(s),c=(n(10),n(5)),o=n(0),l=function(e){var t=e.education.map((function(e){return Object(o.jsx)("li",{className:"education-item",children:Object(o.jsxs)("div",{className:"summary",children:[Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("h3",{children:e.institute}),Object(o.jsx)("div",{children:e.degree})]}),Object(o.jsx)("div",{className:"context",children:Object(o.jsx)("div",{className:"when",children:e.graduationDate})})]})},e.institute)}));return Object(o.jsxs)("div",{className:"education",children:[Object(o.jsx)("h2",{children:"Education"}),Object(o.jsx)("ul",{className:"education-list",children:t})]})},u=function(e){var t=e.experiences.map((function(e){return Object(o.jsxs)("li",{className:"experience-item",children:[Object(o.jsxs)("div",{className:"summary",children:[Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("h3",{children:e.company}),Object(o.jsx)("h4",{children:e.jobTitle})]}),Object(o.jsxs)("div",{className:"context",children:[Object(o.jsxs)("div",{className:"when",children:[e.startDate," \u2014 ",e.endDate]}),Object(o.jsx)("div",{className:"where",children:e.location})]})]}),Object(o.jsx)("ul",{className:"details",children:e.bullets.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})]},e.company)}));return Object(o.jsxs)("div",{className:"experience",children:[Object(o.jsx)("h2",{children:"Experience"}),Object(o.jsx)("ul",{className:"experience-list",children:t})]})};function d(e){e.preventDefault(),window.print()}var m=function(e){var t=e.resumeInfo,n=t.links.map((function(e){return Object(o.jsx)("span",{children:"Download"===e.name?Object(o.jsx)("a",{href:"#",onClick:d,children:"Download"}):Object(o.jsx)("a",{href:e.url,target:"blank",children:e.name})},e.name)})).reduce((function(e,t){return[e," | ",t]}));return Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{className:"name",children:Object(o.jsx)("h1",{children:t.name})}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)("div",{className:"email",children:Object(o.jsx)("a",{href:"mailto:"+t.email,children:t.email})}),Object(o.jsx)("div",{className:"other",children:n})]})]})};function j(e){if(e.items){var t=e.items.map((function(e){return j(e)})).join(", ");return e.name+" (".concat(t,")")}return e}var h,b=function(e){var t=e.skills.map((function(e){return Object(o.jsxs)("div",{className:"category",children:[Object(o.jsx)("div",{className:"category-name",children:Object(o.jsx)("h3",{children:e.name})}),Object(o.jsx)("div",{className:"skills",children:e.items.map((function(e){return j(e)})).join(", ")})]},e.name)}));return Object(o.jsxs)("div",{className:"skills",children:[Object(o.jsx)("h2",{children:"Skills"}),Object(o.jsx)("div",{className:"skills-list",children:t})]})};function x(e,t){return h[e.toUpperCase()]===t}!function(e){e[e.LIGHT=0]="LIGHT",e[e.DARK=1]="DARK"}(h||(h={}));var p,f=function(e){var t=x(e.currentTheme,h.LIGHT)?"Dark Mode":"Light Mode",n=function(t){var n,i;t.preventDefault(),n=e.currentTheme,i=e.setThemeFn,x(n,h.LIGHT)?i(h[h.DARK].toLowerCase()):i(h[h.LIGHT].toLowerCase())};return e.enabled?Object(o.jsx)("div",{className:"theme-switcher",role:"button",title:t,"aria-label":t,tabIndex:"0",onClick:n,onKeyDown:function(e){return"Enter"===e.key?n(e):""},children:Object(o.jsx)("span",{className:"theme-switcher-text","aria-hidden":"true",children:Object(o.jsx)("i",{className:"material-icons",children:x(e.currentTheme,h.LIGHT)?"dark_mode":"light_mode"})})}):""},O=n(2);n(12);!function(e){e[e.SWITCHABLE=0]="SWITCHABLE",e[e.LIGHT_ONLY=1]="LIGHT_ONLY",e[e.DARK_ONLY=2]="DARK_ONLY"}(p||(p={}));var v=p.SWITCHABLE;var g=function(){var e=a.a.useState(localStorage.getItem("theme")||""),t=Object(c.a)(e,2),n=t[0],i=t[1];a.a.useEffect((function(){localStorage.setItem("theme",n)}),[n]),""===n&&(window.matchMedia("(prefers-color-scheme: dark)").matches?i("dark"):i("light")),v===p.SWITCHABLE?document.documentElement.setAttribute("data-theme",n):v===p.DARK_ONLY&&document.documentElement.setAttribute("data-theme","dark");var s=v===p.SWITCHABLE;return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(f,{enabled:s,currentTheme:n,setThemeFn:i}),Object(o.jsxs)("div",{className:"Resume",children:[Object(o.jsx)(m,{resumeInfo:O.info}),Object(o.jsxs)("main",{children:[Object(o.jsx)(u,{experiences:O.experience}),Object(o.jsxs)("div",{className:"sidebar",children:[Object(o.jsx)(b,{skills:O.skills}),Object(o.jsx)(l,{education:O.education})]})]})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),N()}],[[13,1,2]]]);
//# sourceMappingURL=main.d00bfff3.chunk.js.map
(function(){var m=window.__PH,f=window.__PHLangs,b=m._;if(!m._loaded){var e=Function("return this")();e.fest||(e.fest={});e.fest.ph_projectsMenu=function(b){function c(a){t(a+'\nin block "'+u+'" at line: '+v+"\nfile: "+z)}function k(a){return A[a]}function g(a){if("string"===typeof a){if(n.test(a))return a.replace(n,k)}else if("undefined"===typeof a)return"";return a}var a,e=[],d,i,r,h,f,l,B="",q={},p,z="",v="",u="",n=/[&<>\"]/g,A={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},t;t="undefined"===
typeof __fest_error?"undefined"!==typeof console&&console.error?function(){return Function.prototype.apply.call(console.error,console,arguments)}:function(){}:__fest_error;q.link=function(a){var d="";try{var k=b.projects.config[a.name]}catch(i){c(i.message)}d+='<a rel="nofollow" target="';try{d+=g(m.settings.target)}catch(e){c(e.message+"9")}d+='" href="';try{d+=g(k.href)}catch(h){c(h.message+"12")}d+='" class="js-link x-ph__projects__link';try{r=a.icon}catch(j){r=!1,c(j.message)}if(r){d+=" x-ph__projects__link_icon x-ph__projects__link_";
try{d+=g(a.name)}catch(f){c(f.message+"20")}}d+='">';try{r=a.icon}catch(n){r=!1,c(n.message)}if(r){d+='<i class="x-ph__projects__link_icon__pic x-ph__projects__link_icon__pic_';try{d+=g(a.name)}catch(p){c(p.message+"30")}d+='"></i>'}try{d+=k.text||b.translations[k.translation||a.name]}catch(x){c(x.message+"35")}return d+"</a>"};a='<div class="x-ph__menu__dropdown x-ph__projects" id="PH_projectsMenu_dropdown"><div class="w-x-ph__menu__dropdown w-x-ph__projects">';var s;try{i=b.projects.order||[],d=
i.length}catch(w){i=[],d=0,c(w.message)}for(s=0;s<d;s++){try{h=b.projects.order[s]}catch(x){c(x.message)}a+='<div class="x-ph__projects__col">';try{r=2==s}catch(G){r=!1,c(G.message)}if(r){a+='<div class="x-ph__projects__col_separator">';var j;try{l=h[0]||[],f=l.length}catch(H){l=[],f=0,c(H.message)}for(j=0;j<f;j++){try{var y=h[0][j]}catch(I){c(I.message)}i="link";p={};try{p={name:y}}catch(J){c(J.message)}e.push(a,{name:i,params:p});a=""}a+="</div>";var C,D;try{D=h[1]||[],C=D.length}catch(K){D=[],
C=0,c(K.message)}for(j=0;j<C;j++){try{y=h[1][j]}catch(L){c(L.message)}i="link";p={};try{p={icon:!0,name:y}}catch(M){c(M.message)}e.push(a,{name:i,params:p});a=""}}else{var E,N;try{N=h||[],E=N.length}catch(O){N=[],E=0,c(O.message)}for(j=0;j<E;j++){try{y=h[j]}catch(P){c(P.message)}i="link";p={};try{p={name:y}}catch(Q){c(Q.message)}e.push(a,{name:i,params:p});a=""}}a+="</div>"}a+='<div class="w-x-ph__menu__dropdown__clearfix"></div></div></div>';if(f=e.length){for(h=0;h<f;h++)d=e[h],"string"===typeof d?
B+=d:(l=q[d.name])&&(B+=l.call(this,d.params));return B+a}return a};e=Function("return this")();e.fest||(e.fest={});e.fest.ph_authMenu=function(b){function c(a){v(a+'\nin block "'+F+'" at line: '+q+"\nfile: "+l)}function k(a){return z[a]}function g(a){if("string"===typeof a){if(p.test(a))return a.replace(p,k)}else if("undefined"===typeof a)return"";return a}var a,e=[],d,i,r,h="",f={},l="",q="",F="",p=/[&<>\"]/g,z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},v;v="undefined"===typeof __fest_error?
"undefined"!==typeof console&&console.error?function(){return Function.prototype.apply.call(console.error,console,arguments)}:function(){}:__fest_error;a='<div class="x-ph__menu__dropdown x-ph__menu__dropdown_auth" id="PH_authMenu_dropdown"><div class="w-x-ph__menu__dropdown w-x-ph__menu__dropdown_auth"><div class="x-ph__menu__dropdown_auth__loader"></div><div class="x-ph__menu__dropdown_auth__error">';try{a+=g(b.translations.error)}catch(u){c(u.message+"6")}a+='</div><div class="x-ph__auth_list" id="PH_authMenu_list"></div><div class="x-ph__menu__dropdown_auth__login"><a id="PH_loginAnotherLink" class="x-ph__menu__dropdown_auth__login__link js-login" href="';
try{a+=g(m.settings.loginLink+(-1===m.settings.loginLink.indexOf("?")?"?":"&")+"from=multi")}catch(n){c(n.message+"16")}a+='" xname="';try{a+=g(m.settings.loginLinkXName)}catch(A){c(A.message+"19")}a+='"><span class="x-ph__menu__dropdown_auth__login__link__button"><span class="x-ph__button"><span class="x-ph__button__fake"><span class="x-ph__button__fake__icon x-ph__button__fake__icon_plus"></span></span></span></span>';try{a+=b.translations.change_account}catch(t){c(t.message+"29")}a+='</a></div><div class="x-ph__menu__dropdown_auth__info"><div class="x-ph__menu__dropdown_auth__info__arrow"></div><a rel="nofollow" href="http://r.mail.ru/clb1126001/help.mail.ru/mail-help/auth/multiauth" target="_blank" class="x-ph__menu__dropdown_auth__info__link"><span class="x-ph__menu__dropdown_auth__info__link__text">';
try{a+=b.translations.change_account_description}catch(s){c(s.message+"36")}a+='</span><br/><span class="x-ph__menu__dropdown_auth__info__link__link">';try{a+=b.translations.more}catch(w){c(w.message+"40")}a+="&nbsp;&rarr;</span></a></div></div></div>";if(i=e.length){for(d=0;d<i;d++)b=e[d],"string"===typeof b?h+=b:(r=f[b.name])&&(h+=r.call(this,b.params));return h+a}return a};e=Function("return this")();e.fest||(e.fest={});e.fest.ph_accountsList=function(b){function c(a){v(a+'\nin block "'+F+'" at line: '+
q+"\nfile: "+m)}function k(a){return z[a]}function g(a){if("string"===typeof a){if(p.test(a))return a.replace(p,k)}else if("undefined"===typeof a)return"";return a}var a="",e=[],d,i,f,h="",l={},m="",q="",F="",p=/[&<>\"]/g,z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},v;v="undefined"===typeof __fest_error?"undefined"!==typeof console&&console.error?function(){return Function.prototype.apply.call(console.error,console,arguments)}:function(){}:__fest_error;try{i=b.accounts;f=null;for(var u={},n=
0,A=i.length;n<A;n++){var t=i[n];u[t.email]=n;if(t.active){f=t.email;break}}!f&&(b.activeEmailByResponse&&b.activeEmailByResponse in u)&&(i[u[b.activeEmailByResponse]].active=!0)}catch(s){c(s.message)}var w,x;try{x=i||[],w=x.length}catch(G){x=[],w=0,c(G.message)}for(n=0;n<w;n++){try{var j=i[n]}catch(H){c(H.message)}a+='<div tabindex="';try{d=j.active}catch(y){d=!1,c(y.message)}a=d?a+"-1":a+"0";a+='" class="x-ph__auth_list__item ';try{d=0==n}catch(I){d=!1,c(I.message)}if(d)a+=" x-ph__auth_list__item_first";
else{try{d=n==i.length}catch(J){d=!1,c(J.message)}d&&(a+=" x-ph__auth_list__item_last")}a+=" ";try{d=j.active}catch(C){d=!1,c(C.message)}a=d?a+"x-ph__auth_list__item_current":a+"js-list-user";a+='" data-email="';try{a+=g(j.email)}catch(D){c(D.message+"57")}a+='" onkeypress="\n\t\t\t\t\tif ((event.which || event.charCode || event.keyCode) === 13){var t = (event.target || event.srcElement); t.nodeType == 3 && (t = t.parentNode); t.click();}\n\t\t\t\t"><div class="x-ph__auth_list__item__avatar" style="background-image:url(//filin.mail.ru/pic?from=ph&email=';
try{a+=g(j.email)}catch(K){c(K.message+"67")}a+='&width=45&height=45);"></div><div class="x-ph__auth_list__item__info"><div class="x-ph__auth_list__item__info__email">';try{a+=g(j.email)}catch(L){c(L.message+"74")}a+='</div><div class="x-ph__auth_list__item__info__text">';try{a+=g(j.firstName)}catch(M){c(M.message+"77")}a+=" ";try{a+=g(j.lastName)}catch(E){c(E.message+"79")}a+='</div></div><div class="x-ph__auth_list__item__logout js-logout"><span class="x-ph__button"><span class="x-ph__button__fake"><span class="x-ph__button__fake__icon x-ph__button__fake__icon_exit"></span></span></span></div></div>'}if(i=
e.length){for(d=0;d<i;d++)b=e[d],"string"===typeof b?h+=b:(f=l[b.name])&&(h+=f.call(this,b.params));return h+a}return a};b.extend(b.AccountManager.prototype,{_listTransport:new b.Transport("//swa.mail.ru/cgi-bin/counters?mac=1&ldata=1",{JSONPCallbackParam:"JSONP_call"}),loadAccountsList:function(e){var c={},k=this.activeUser();k&&(c.Login=k);this._listTransport.get({params:c,complete:b.bind(function(b){"function"===typeof e&&(b=this.__getAccountsList(b),e(b))},this),timeout:3E4})},__getAccountsList:function(b){var c=
{status:b.status,accounts:[],activeEmailByResponse:b.data&&b.data.email},b=b.data&&(b.data.accounts||b.data.ldata),e;for(e in b)if(b.hasOwnProperty(e)){var g=b[e],a=e==this.activeUser();c.accounts[a?"unshift":"push"]({email:e,active:a,firstName:g.first_name||"",lastName:g.last_name||""})}return c}});b.projectsMenu.on("click",function(e,c){var k=e.data.clickEvent,k=k.target||k.srcElement;(b.hasClass(k,"js-link")||b.hasParent(k,"js-link"))&&"function"===typeof c&&c()});b.authMenu.on("show",function(e,
c){function k(){g&&(b.PHAuthMenu.emit("show"),b.radar("updateAccountsList",1),c(),g=!1)}var g=!0,a,f=(new Date).getTime();b.addClass(this._rootNode,"x-ph__menu__dropdown_auth_loading");b.removeClass(this._rootNode,"x-ph__menu__dropdown_auth_error");a=b.setTimeout(k,100);var d=b.bind(function(c){b.clearTimeout(a);"timeout"==c.status||"error"==c.status?(b.removeClass(this._rootNode,"x-ph__menu__dropdown_auth_loading"),b.addClass(this._rootNode,"x-ph__menu__dropdown_auth_error"),b.radar("updateAccountsError",
(new Date).getTime()-f)):(b.radar("updateAccountsOk",(new Date).getTime()-f),this.updateEmailsList(c),b.removeClass(this._rootNode,"x-ph__menu__dropdown_auth_loading"));k()},this);b.accountManager.loadAccountsList(d)});b.authMenu.on("hide",function(e,c){b.PHAuthMenu.emit("hide");"function"===typeof c&&c()});b.authMenu.on("click",function(e,c){var f=e.data.clickEvent,g=f.target||f.srcElement,a;(a=b.hasParent(g,"js-logout")||b.hasClass(g,"js-logout")&&(a=g))?(b.count("home"==b.project?"clb1126048":
"mail"==b.project?"clb1126050":"my"==b.project?"clb1312343":"clb1126056"),b.accountManager.logoutAccount(b.hasParent(a,"js-list-user").getAttribute("data-email"),b.bind(function(){b.accountManager.loadAccountsList(b.bind(function(a){this.updateEmailsList(a)},this))},this)),b.eventPreventDefault(f)):(a=b.hasParent(g,"js-list-user")||b.hasClass(g,"js-list-user")&&(a=g))?(b.count("home"==b.project?"clb1126018":"mail"==b.project?"clb1126017":"my"==b.project?"clb1270900":"clb1126019"),b.accountManager.switchAccount(a.getAttribute("data-email")),
b.eventPreventDefault(f),c()):b.hasParent(g,"js-login")||b.hasClass(g,"js-login")&&g?(m.listeners("loginRequest")&&(b.eventPreventDefault(f),m.emit("loginRequest")),c()):b.isNode(g)&&"a"==g.tagName.toLowerCase()&&c()});b.authMenu.updateEmailsList=function(e){var c=e.accounts;1<c.length?(b.addClass(this._rootNode,"x-ph__menu_auth_multi"),4<c.length?b.addClass(this._rootNode,"x-ph__menu_auth_multi_limit"):b.removeClass(this._rootNode,"x-ph__menu_auth_multi_limit")):(b.removeClass(this._rootNode,"x-ph__menu_auth_multi"),
b.removeClass(this._rootNode,"x-ph__menu_auth_multi_limit"));this._opts.emailList.innerHTML=window.fest.ph_accountsList(e)};b.accountManager.on("authChange",function(){b.authMenu._triggerShowOnInit=!1;b.authMenu._triggerHideOnInit=!1;b.authMenu.hide()});e={externalTranslations:["change_account","change_account_description","more","error"],projects:{order:["auto afisha video horo money deti health calendar maps".split(" "),"lady realty answer cards pogoda travel work raiting sport".split(" "),[["tv",
"torg","files","hitech"],["agent","browser","sputnik","icq"]]],config:{auto:{href:"http://auto.mail.ru/"},afisha:{href:"http://afisha.mail.ru/"},video:{href:"http://video.mail.ru/"},horo:{href:"http://horo.mail.ru/"},money:{href:"http://money.mail.ru/"},deti:{href:"http://deti.mail.ru/"},health:{href:"http://health.mail.ru/"},calendar:{href:"http://calendar.mail.ru/"},maps:{href:"http://map.mail.ru/"},lady:{href:"http://lady.mail.ru/"},realty:{href:"http://realty.mail.ru/"},answer:{href:"http://otvet.mail.ru/"},
cards:{href:"http://cards.mail.ru/"},pogoda:{href:"http://pogoda.mail.ru/"},travel:{href:"http://travel.mail.ru/"},work:{href:"http://rabota.mail.ru/"},raiting:{href:"http://top.mail.ru/"},sport:{href:"http://sport.mail.ru/"},tv:{href:"http://tv.mail.ru/"},torg:{href:"http://torg.mail.ru/"},files:{href:"http://files.mail.ru/"},hitech:{href:"http://hi-tech.mail.ru/"},agent:{href:"http://agent.mail.ru/?partnerid=navi",translation:"mra"},browser:{href:"http://internet.mail.ru/"},sputnik:{href:"http://sputnik.mail.ru/"},
icq:{href:'http://icq.mail.ru/{% if project == "home" %}?cln=10277{% else %}{% if project == "ok" %}?cln=10279{% endif %}{% endif %}'}}}};"undefined"!==typeof f&&(e.translations=f);"undefined"!==typeof b&&(b.externalConfig=e);"function"===typeof require&&(module.exports=e);var l=document.createElement("style");l.type="text/css";l.styleSheet?l.styleSheet.cssText='.x-ph__button,.x-ph__button:link,.x-ph__button:visited,.x-ph__button:hover,.x-ph__button:focus,.x-ph__button:active{position:relative;display:inline-block;padding-top:4px;padding-bottom:4px;font:13px/16px Arial,Tahoma,sans-serif;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:baseline}.x-ph__button__fake{padding:4px 12px;border:1px solid #c1c1c1;font:13px/16px Arial,Tahoma,sans-serif;text-align:center;color:#000;text-shadow:0 1px rgba(255,255,255,0.6);background-position:0 0;background-repeat:repeat-x;background-size:5px 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAbCAYAAAC0s0UOAAAAQUlEQVR42mL8////ZgY0wMSABRAvyALE/7EJ/sEm+JtowZ/YBH9hE/xBtCBWM78Trf07DQR/0EDlT8oEMQIZIMAARCEab4wmjV8AAAAASUVORK5CYII=);background-color:#e4e4e4;-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);-moz-box-shadow:0 1px 1px rgba(0,0,0,0.1);box-shadow:0 1px 1px rgba(0,0,0,0.1);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;cursor:pointer;vertical-align:baseline}.x-ph__button__fake:hover,.x-ph__button__fake:focus,.x-ph__button:hover .x-ph__button__fake,.x-ph__button:focus .x-ph__button__fake,a:hover .x-ph__button__fake,a:focus .x-ph__button__fake{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAbCAYAAAC0s0UOAAAAM0lEQVR42mL8DwQMaICJAQtgAeL/2AT/YhP8R7TKP/QS/E20IIXaf1GmfWAFiQtPgAADAB2iHPmjCLtlAAAAAElFTkSuQmCC)}.x-ph__button__fake:active,.x-ph__button:active .x-ph__button__fake,.x-ph__button:hover .x-ph__button__fake:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAbCAIAAAA70dJZAAAAKklEQVR42mI8dOgQAxJgYkAF6HwWRkZGStQT0k+p+aTaT6n76O0/gAADADXcAsIL7ZukAAAAAElFTkSuQmCC)}.x-ph__button__fake__icon{position:relative;display:inline-block;width:16px;height:16px;font:0/0 a;background-repeat:no-repeat;vertical-align:baseline;overflow:hidden}.x-ph__button__fake__icon{width:11px;margin-bottom:-4px;background-image:url("//img.imgsmail.ru/p/h/d/0.10.3/blocks/auth/icons.gif")}.x-ph__button__fake__icon_plus{background-position:0 0}.x-ph__button__fake__icon_exit{background-position:0 -20px}.x-ph__menu_open{z-index:1006}.x-ph__menu_open .x-ph__menu__button,.x-ph__menu_open .x-ph__menu__button:link,.x-ph__menu_open .x-ph__menu__button:visited,.x-ph__menu_open .x-ph__menu__button:hover,.x-ph__menu_open .x-ph__menu__button:active,.x-ph__menu_open .x-ph__menu__button:focus{border-color:#d8d8d8;padding-bottom:4px;z-index:1010;background:#fff;-webkit-transition:border-color 0.5s;-moz-transition:border-color 0.5s;-o-transition:border-color 0.5s;transition:border-color 0.5s}.ff.win .x-ph__menu_open .x-ph__menu__button,.ff.win .x-ph__menu_open .x-ph__menu__button:link,.ff.win .x-ph__menu_open .x-ph__menu__button:visited,.ff.win .x-ph__menu_open .x-ph__menu__button:hover,.ff.win .x-ph__menu_open .x-ph__menu__button:active,.ff.win .x-ph__menu_open .x-ph__menu__button:focus{padding-bottom:5px}.x-ph__menu_open_left .w-x-ph__menu__button__shadow_left{left:0;height:25px;clip:rect(0, 0px, 35px, -10px)}.x-ph__menu_open_right .w-x-ph__menu__button__shadow_left{left:0;height:25px;clip:rect(0, 0px, 25px, -10px)}.x-ph__menu_open_left .w-x-ph__menu__button__shadow_right{right:0;height:25px;clip:rect(0, 60px, 25px, 50px)}.x-ph__menu_open_right .w-x-ph__menu__button__shadow_right{right:0;height:25px;clip:rect(0, 60px, 35px, 50px)}.x-ph__menu_open .w-x-ph__menu__button__shadow{opacity:1;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;-o-transition:opacity 0.5s;transition:opacity 0.5s}.x-ph__menu__dropdown{display:none;position:absolute;top:-9999px;left:-9999px;z-index:1009;visibility:hidden;opacity:0}.w-x-ph__menu__dropdown{position:relative;border:1px solid #d8d8d8;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 4px 9px rgba(0,0,0,0.3);-moz-box-shadow:0 4px 9px rgba(0,0,0,0.3);box-shadow:0 4px 9px rgba(0,0,0,0.3);background:#fff}.w-x-ph__menu__dropdown__clearfix{display:block;height:0;clear:both;overflow:hidden;font:0/0 a}.x-ph__menu_open .x-ph__menu__dropdown{top:25px;visibility:visible;opacity:1;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;-o-transition:opacity 0.5s;transition:opacity 0.5s}.x-ph__menu_open_left .x-ph__menu__dropdown{left:0}.x-ph__menu_open_left .w-x-ph__menu__dropdown{-webkit-border-top-left-radius:0;-moz-border-top-left-radius:0;border-top-left-radius:0}.x-ph__menu_open_right .x-ph__menu__dropdown{left:auto;right:0}.x-ph__menu_open_right .w-x-ph__menu__dropdown{-webkit-border-top-right-radius:0;-moz-border-top-right-radius:0;border-top-right-radius:0}.x-ph__projects{width:380px}.x-ph__projects__col{float:left;width:120px;padding-top:4px;padding-bottom:4px;padding-left:4px}.x-ph__projects__col_separator{margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid #d9deed}.x-ph__projects__link,.x-ph__projects__link:link,.x-ph__projects__link:visited,.x-ph__projects__link:hover,.x-ph__projects__link:active,.x-ph__projects__link:focus{display:block;padding:4px 8px 4px 8px;border-bottom:1px solid #fff;color:#0857a6;text-align:left;text-decoration:none;white-space:nowrap;cursor:pointer;outline:none}.x-ph__projects__link:hover,.x-ph__projects__link:focus,.x-ph__projects__link:active{color:#0857a6;background:#e7efff}.x-ph__projects__link_icon,.x-ph__projects__link_icon:link,.x-ph__projects__link_icon:visited,.x-ph__projects__link_icon:hover,.x-ph__projects__link_icon:active,.x-ph__projects__link_icon:focus{padding-left:30px}.x-ph__projects__link_icon__pic{position:absolute;width:18px;height:18px;margin-top:-1px;margin-left:-22px;background-image:url("//img.imgsmail.ru/p/h/d/0.10.3/blocks/projects/projectsicons.png");background-repeat:no-repeat}.x-ph__projects__link_icon__pic_agent{background-position:0 2px}.x-ph__projects__link_icon__pic_sputnik{background-position:0 -18px}.x-ph__projects__link_icon__pic_icq{background-position:0 -40px}.x-ph__projects__link_icon__pic_browser{background-position:0 -61px}.x-ph__menu__dropdown_auth{text-align:left;min-width:358px;max-width:110%;white-space:normal}.w-x-ph__menu__dropdown_auth{padding:18px}.x-ph__menu__dropdown_auth__loader{display:none;position:relative;height:45px;outline:none;overflow:hidden;background:#edf3f8 url("//img.imgsmail.ru/p/h/d/0.10.3/blocks/auth/loader.gif") no-repeat center center}.x-ph__menu__dropdown_auth_loading .x-ph__menu__dropdown_auth__loader{display:block}.x-ph__menu__dropdown_auth__error{display:none;position:relative;height:16px;padding:15px 18px 14px;outline:none;overflow:hidden;background:#fefbd6;color:#db130c;font:normal 12px/16px Arial,sans-serif}.x-ph__menu__dropdown_auth_error .x-ph__menu__dropdown_auth__error{display:block}.x-ph__auth_list{display:block}.x-ph__menu__dropdown_auth_error .x-ph__auth_list,.x-ph__menu__dropdown_auth_loading .x-ph__auth_list{display:none}.x-ph__auth_list__item{position:relative;display:block;height:45px;margin-bottom:7px;padding:0 54px;outline:none;overflow:hidden;cursor:pointer}.x-ph__auth_list__item_last{margin-bottom:0}.x-ph__auth_list__item:link,.x-ph__auth_list__item:visited,.x-ph__auth_list__item:hover,.x-ph__auth_list__item:focus,.x-ph__auth_list__item:active{background:#e7efff}.x-ph__auth_list__item_current,.x-ph__auth_list__item_current:link,.x-ph__auth_list__item_current:visited,.x-ph__auth_list__item_current:hover,.x-ph__auth_list__item_current:focus,.x-ph__auth_list__item_current:active{background:#edf3f8;cursor:default;padding-right:15px}.x-ph__auth_list__item__avatar{position:absolute;left:0;top:0;height:45px;width:45px;background-position:50% 50%;background-size:contain;background-repeat:no-repeat}.x-ph__auth_list__item__info{width:100%;padding-top:5px;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.x-ph__auth_list__item__info__email{width:100%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;color:#0c59a1;font:14px/18px Arial,sans-serif}.x-ph__auth_list__item:hover .x-ph__auth_list__item__info__email,.x-ph__auth_list__item:focus .x-ph__auth_list__item__info__email,.x-ph__auth_list__item:active .x-ph__auth_list__item__info__email{color:#f7690c}.x-ph__auth_list__item_current .x-ph__auth_list__item__info__email,.x-ph__auth_list__item_current:link .x-ph__auth_list__item__info__email,.x-ph__auth_list__item_current:visited .x-ph__auth_list__item__info__email,.x-ph__auth_list__item_current:hover .x-ph__auth_list__item__info__email,.x-ph__auth_list__item_current:focus .x-ph__auth_list__item__info__email,.x-ph__auth_list__item_current:active .x-ph__auth_list__item__info__email{color:#333333}.x-ph__auth_list__item__info__text{width:100%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;color:#999999;font:12px/18px Arial,sans-serif}.x-ph__auth_list__item_current .x-ph__auth_list__item__info__text,.x-ph__auth_list__item_current:link .x-ph__auth_list__item__info__text,.x-ph__auth_list__item_current:visited .x-ph__auth_list__item__info__text,.x-ph__auth_list__item_current:hover .x-ph__auth_list__item__info__text,.x-ph__auth_list__item_current:focus .x-ph__auth_list__item__info__text,.x-ph__auth_list__item_current:active .x-ph__auth_list__item__info__text{color:#666666}.x-ph__auth_list__item__logout{display:none;position:absolute;top:9px;right:9px;opacity:0}.x-ph__auth_list__item:hover .x-ph__auth_list__item__logout,.x-ph__auth_list__item:focus .x-ph__auth_list__item__logout,.x-ph__auth_list__item:active .x-ph__auth_list__item__logout{display:block;opacity:0.4}.x-ph__auth_list__item .x-ph__auth_list__item__logout:hover,.x-ph__auth_list__item .x-ph__auth_list__item__logout:focus,.x-ph__auth_list__item .x-ph__auth_list__item__logout:active{display:block;opacity:1}.x-ph__auth_list__item_current .x-ph__auth_list__item__logout,.x-ph__auth_list__item_current:link .x-ph__auth_list__item__logout,.x-ph__auth_list__item_current:visited .x-ph__auth_list__item__logout,.x-ph__auth_list__item_current:hover .x-ph__auth_list__item__logout,.x-ph__auth_list__item_current:focus .x-ph__auth_list__item__logout,.x-ph__auth_list__item_current:active .x-ph__auth_list__item__logout{display:none}.x-ph__menu__dropdown_auth__login{margin-top:18px}.x-ph__menu__dropdown_auth_error .x-ph__menu__dropdown_auth__login,.x-ph__menu__dropdown_auth_loading .x-ph__menu__dropdown_auth__login,.x-ph__menu_auth_multi_limit .x-ph__menu__dropdown_auth__login{display:none}.x-ph__menu__dropdown_auth__login__link,.x-ph__menu__dropdown_auth__login__link:link,.x-ph__menu__dropdown_auth__login__link:visited,.x-ph__menu__dropdown_auth__login__link:hover,.x-ph__menu__dropdown_auth__login__link:active,.x-ph__menu__dropdown_auth__login__link:focus{position:relative;padding-left:54px;color:#0857a6;outline:none;font:14px/26px Arial,sans-serif;text-decoration:none}.x-ph__menu__dropdown_auth__login__link:hover,.x-ph__menu__dropdown_auth__login__link:active,.x-ph__menu__dropdown_auth__login__link:focus{color:#f26d00}.x-ph__menu__dropdown_auth__login__link__button{position:absolute;top:-5px;left:4px}.x-ph__menu__dropdown_auth__info{position:relative;margin-top:18px;margin-bottom:-6px;padding:0 54px;font:12px/18px Arial,sans-serif;color:#666}.x-ph__menu__dropdown_auth_error .x-ph__menu__dropdown_auth__info,.x-ph__menu__dropdown_auth_loading .x-ph__menu__dropdown_auth__info,.x-ph__menu_auth_multi .x-ph__menu__dropdown_auth__info{display:none}.x-ph__menu__dropdown_auth__info__arrow{position:absolute;top:-11px;left:24px;width:27px;height:23px;background:url("//img.imgsmail.ru/p/h/d/0.10.3/blocks/auth/icons.gif") no-repeat 0 -40px;background-size:27px 63px}.x-ph__menu__dropdown_auth__info__link,.x-ph__menu__dropdown_auth__info__link:link,.x-ph__menu__dropdown_auth__info__link:visited,.x-ph__menu__dropdown_auth__info__link:hover,.x-ph__menu__dropdown_auth__info__link:focus,.x-ph__menu__dropdown_auth__info__link:active{display:block;width:210px;font:12px/18px Arial,sans-serif;text-decoration:none}.x-ph__menu__dropdown_auth__info__link .x-ph__menu__dropdown_auth__info__link__text,.x-ph__menu__dropdown_auth__info__link:link .x-ph__menu__dropdown_auth__info__link__text,.x-ph__menu__dropdown_auth__info__link:visited .x-ph__menu__dropdown_auth__info__link__text,.x-ph__menu__dropdown_auth__info__link:hover .x-ph__menu__dropdown_auth__info__link__text,.x-ph__menu__dropdown_auth__info__link:focus .x-ph__menu__dropdown_auth__info__link__text,.x-ph__menu__dropdown_auth__info__link:active .x-ph__menu__dropdown_auth__info__link__text{color:#666;text-decoration:none;font:12px/18px Arial,sans-serif}.x-ph__menu__dropdown_auth__info__link .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:link .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:visited .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:hover .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:active .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:focus .x-ph__menu__dropdown_auth__info__link__link{color:#0857a6;outline:none;font:12px/18px Arial,sans-serif;text-decoration:none}.x-ph__menu__dropdown_auth__info__link:hover .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:active .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:focus .x-ph__menu__dropdown_auth__info__link__link{color:#f26d00}\n':
l.appendChild(document.createTextNode('.x-ph__button,.x-ph__button:link,.x-ph__button:visited,.x-ph__button:hover,.x-ph__button:focus,.x-ph__button:active{position:relative;display:inline-block;padding-top:4px;padding-bottom:4px;font:13px/16px Arial,Tahoma,sans-serif;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:baseline}.x-ph__button__fake{padding:4px 12px;border:1px solid #c1c1c1;font:13px/16px Arial,Tahoma,sans-serif;text-align:center;color:#000;text-shadow:0 1px rgba(255,255,255,0.6);background-position:0 0;background-repeat:repeat-x;background-size:5px 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAbCAYAAAC0s0UOAAAAQUlEQVR42mL8////ZgY0wMSABRAvyALE/7EJ/sEm+JtowZ/YBH9hE/xBtCBWM78Trf07DQR/0EDlT8oEMQIZIMAARCEab4wmjV8AAAAASUVORK5CYII=);background-color:#e4e4e4;-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);-moz-box-shadow:0 1px 1px rgba(0,0,0,0.1);box-shadow:0 1px 1px rgba(0,0,0,0.1);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;cursor:pointer;vertical-align:baseline}.x-ph__button__fake:hover,.x-ph__button__fake:focus,.x-ph__button:hover .x-ph__button__fake,.x-ph__button:focus .x-ph__button__fake,a:hover .x-ph__button__fake,a:focus .x-ph__button__fake{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAbCAYAAAC0s0UOAAAAM0lEQVR42mL8DwQMaICJAQtgAeL/2AT/YhP8R7TKP/QS/E20IIXaf1GmfWAFiQtPgAADAB2iHPmjCLtlAAAAAElFTkSuQmCC)}.x-ph__button__fake:active,.x-ph__button:active .x-ph__button__fake,.x-ph__button:hover .x-ph__button__fake:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAbCAIAAAA70dJZAAAAKklEQVR42mI8dOgQAxJgYkAF6HwWRkZGStQT0k+p+aTaT6n76O0/gAADADXcAsIL7ZukAAAAAElFTkSuQmCC)}.x-ph__button__fake__icon{position:relative;display:inline-block;width:16px;height:16px;font:0/0 a;background-repeat:no-repeat;vertical-align:baseline;overflow:hidden}.x-ph__button__fake__icon{width:11px;margin-bottom:-4px;background-image:url("//img.imgsmail.ru/p/h/d/0.10.3/blocks/auth/icons.gif")}.x-ph__button__fake__icon_plus{background-position:0 0}.x-ph__button__fake__icon_exit{background-position:0 -20px}.x-ph__menu_open{z-index:1006}.x-ph__menu_open .x-ph__menu__button,.x-ph__menu_open .x-ph__menu__button:link,.x-ph__menu_open .x-ph__menu__button:visited,.x-ph__menu_open .x-ph__menu__button:hover,.x-ph__menu_open .x-ph__menu__button:active,.x-ph__menu_open .x-ph__menu__button:focus{border-color:#d8d8d8;padding-bottom:4px;z-index:1010;background:#fff;-webkit-transition:border-color 0.5s;-moz-transition:border-color 0.5s;-o-transition:border-color 0.5s;transition:border-color 0.5s}.ff.win .x-ph__menu_open .x-ph__menu__button,.ff.win .x-ph__menu_open .x-ph__menu__button:link,.ff.win .x-ph__menu_open .x-ph__menu__button:visited,.ff.win .x-ph__menu_open .x-ph__menu__button:hover,.ff.win .x-ph__menu_open .x-ph__menu__button:active,.ff.win .x-ph__menu_open .x-ph__menu__button:focus{padding-bottom:5px}.x-ph__menu_open_left .w-x-ph__menu__button__shadow_left{left:0;height:25px;clip:rect(0, 0px, 35px, -10px)}.x-ph__menu_open_right .w-x-ph__menu__button__shadow_left{left:0;height:25px;clip:rect(0, 0px, 25px, -10px)}.x-ph__menu_open_left .w-x-ph__menu__button__shadow_right{right:0;height:25px;clip:rect(0, 60px, 25px, 50px)}.x-ph__menu_open_right .w-x-ph__menu__button__shadow_right{right:0;height:25px;clip:rect(0, 60px, 35px, 50px)}.x-ph__menu_open .w-x-ph__menu__button__shadow{opacity:1;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;-o-transition:opacity 0.5s;transition:opacity 0.5s}.x-ph__menu__dropdown{display:none;position:absolute;top:-9999px;left:-9999px;z-index:1009;visibility:hidden;opacity:0}.w-x-ph__menu__dropdown{position:relative;border:1px solid #d8d8d8;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 4px 9px rgba(0,0,0,0.3);-moz-box-shadow:0 4px 9px rgba(0,0,0,0.3);box-shadow:0 4px 9px rgba(0,0,0,0.3);background:#fff}.w-x-ph__menu__dropdown__clearfix{display:block;height:0;clear:both;overflow:hidden;font:0/0 a}.x-ph__menu_open .x-ph__menu__dropdown{top:25px;visibility:visible;opacity:1;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;-o-transition:opacity 0.5s;transition:opacity 0.5s}.x-ph__menu_open_left .x-ph__menu__dropdown{left:0}.x-ph__menu_open_left .w-x-ph__menu__dropdown{-webkit-border-top-left-radius:0;-moz-border-top-left-radius:0;border-top-left-radius:0}.x-ph__menu_open_right .x-ph__menu__dropdown{left:auto;right:0}.x-ph__menu_open_right .w-x-ph__menu__dropdown{-webkit-border-top-right-radius:0;-moz-border-top-right-radius:0;border-top-right-radius:0}.x-ph__projects{width:380px}.x-ph__projects__col{float:left;width:120px;padding-top:4px;padding-bottom:4px;padding-left:4px}.x-ph__projects__col_separator{margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid #d9deed}.x-ph__projects__link,.x-ph__projects__link:link,.x-ph__projects__link:visited,.x-ph__projects__link:hover,.x-ph__projects__link:active,.x-ph__projects__link:focus{display:block;padding:4px 8px 4px 8px;border-bottom:1px solid #fff;color:#0857a6;text-align:left;text-decoration:none;white-space:nowrap;cursor:pointer;outline:none}.x-ph__projects__link:hover,.x-ph__projects__link:focus,.x-ph__projects__link:active{color:#0857a6;background:#e7efff}.x-ph__projects__link_icon,.x-ph__projects__link_icon:link,.x-ph__projects__link_icon:visited,.x-ph__projects__link_icon:hover,.x-ph__projects__link_icon:active,.x-ph__projects__link_icon:focus{padding-left:30px}.x-ph__projects__link_icon__pic{position:absolute;width:18px;height:18px;margin-top:-1px;margin-left:-22px;background-image:url("//img.imgsmail.ru/p/h/d/0.10.3/blocks/projects/projectsicons.png");background-repeat:no-repeat}.x-ph__projects__link_icon__pic_agent{background-position:0 2px}.x-ph__projects__link_icon__pic_sputnik{background-position:0 -18px}.x-ph__projects__link_icon__pic_icq{background-position:0 -40px}.x-ph__projects__link_icon__pic_browser{background-position:0 -61px}.x-ph__menu__dropdown_auth{text-align:left;min-width:358px;max-width:110%;white-space:normal}.w-x-ph__menu__dropdown_auth{padding:18px}.x-ph__menu__dropdown_auth__loader{display:none;position:relative;height:45px;outline:none;overflow:hidden;background:#edf3f8 url("//img.imgsmail.ru/p/h/d/0.10.3/blocks/auth/loader.gif") no-repeat center center}.x-ph__menu__dropdown_auth_loading .x-ph__menu__dropdown_auth__loader{display:block}.x-ph__menu__dropdown_auth__error{display:none;position:relative;height:16px;padding:15px 18px 14px;outline:none;overflow:hidden;background:#fefbd6;color:#db130c;font:normal 12px/16px Arial,sans-serif}.x-ph__menu__dropdown_auth_error .x-ph__menu__dropdown_auth__error{display:block}.x-ph__auth_list{display:block}.x-ph__menu__dropdown_auth_error .x-ph__auth_list,.x-ph__menu__dropdown_auth_loading .x-ph__auth_list{display:none}.x-ph__auth_list__item{position:relative;display:block;height:45px;margin-bottom:7px;padding:0 54px;outline:none;overflow:hidden;cursor:pointer}.x-ph__auth_list__item_last{margin-bottom:0}.x-ph__auth_list__item:link,.x-ph__auth_list__item:visited,.x-ph__auth_list__item:hover,.x-ph__auth_list__item:focus,.x-ph__auth_list__item:active{background:#e7efff}.x-ph__auth_list__item_current,.x-ph__auth_list__item_current:link,.x-ph__auth_list__item_current:visited,.x-ph__auth_list__item_current:hover,.x-ph__auth_list__item_current:focus,.x-ph__auth_list__item_current:active{background:#edf3f8;cursor:default;padding-right:15px}.x-ph__auth_list__item__avatar{position:absolute;left:0;top:0;height:45px;width:45px;background-position:50% 50%;background-size:contain;background-repeat:no-repeat}.x-ph__auth_list__item__info{width:100%;padding-top:5px;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.x-ph__auth_list__item__info__email{width:100%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;color:#0c59a1;font:14px/18px Arial,sans-serif}.x-ph__auth_list__item:hover .x-ph__auth_list__item__info__email,.x-ph__auth_list__item:focus .x-ph__auth_list__item__info__email,.x-ph__auth_list__item:active .x-ph__auth_list__item__info__email{color:#f7690c}.x-ph__auth_list__item_current .x-ph__auth_list__item__info__email,.x-ph__auth_list__item_current:link .x-ph__auth_list__item__info__email,.x-ph__auth_list__item_current:visited .x-ph__auth_list__item__info__email,.x-ph__auth_list__item_current:hover .x-ph__auth_list__item__info__email,.x-ph__auth_list__item_current:focus .x-ph__auth_list__item__info__email,.x-ph__auth_list__item_current:active .x-ph__auth_list__item__info__email{color:#333333}.x-ph__auth_list__item__info__text{width:100%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;color:#999999;font:12px/18px Arial,sans-serif}.x-ph__auth_list__item_current .x-ph__auth_list__item__info__text,.x-ph__auth_list__item_current:link .x-ph__auth_list__item__info__text,.x-ph__auth_list__item_current:visited .x-ph__auth_list__item__info__text,.x-ph__auth_list__item_current:hover .x-ph__auth_list__item__info__text,.x-ph__auth_list__item_current:focus .x-ph__auth_list__item__info__text,.x-ph__auth_list__item_current:active .x-ph__auth_list__item__info__text{color:#666666}.x-ph__auth_list__item__logout{display:none;position:absolute;top:9px;right:9px;opacity:0}.x-ph__auth_list__item:hover .x-ph__auth_list__item__logout,.x-ph__auth_list__item:focus .x-ph__auth_list__item__logout,.x-ph__auth_list__item:active .x-ph__auth_list__item__logout{display:block;opacity:0.4}.x-ph__auth_list__item .x-ph__auth_list__item__logout:hover,.x-ph__auth_list__item .x-ph__auth_list__item__logout:focus,.x-ph__auth_list__item .x-ph__auth_list__item__logout:active{display:block;opacity:1}.x-ph__auth_list__item_current .x-ph__auth_list__item__logout,.x-ph__auth_list__item_current:link .x-ph__auth_list__item__logout,.x-ph__auth_list__item_current:visited .x-ph__auth_list__item__logout,.x-ph__auth_list__item_current:hover .x-ph__auth_list__item__logout,.x-ph__auth_list__item_current:focus .x-ph__auth_list__item__logout,.x-ph__auth_list__item_current:active .x-ph__auth_list__item__logout{display:none}.x-ph__menu__dropdown_auth__login{margin-top:18px}.x-ph__menu__dropdown_auth_error .x-ph__menu__dropdown_auth__login,.x-ph__menu__dropdown_auth_loading .x-ph__menu__dropdown_auth__login,.x-ph__menu_auth_multi_limit .x-ph__menu__dropdown_auth__login{display:none}.x-ph__menu__dropdown_auth__login__link,.x-ph__menu__dropdown_auth__login__link:link,.x-ph__menu__dropdown_auth__login__link:visited,.x-ph__menu__dropdown_auth__login__link:hover,.x-ph__menu__dropdown_auth__login__link:active,.x-ph__menu__dropdown_auth__login__link:focus{position:relative;padding-left:54px;color:#0857a6;outline:none;font:14px/26px Arial,sans-serif;text-decoration:none}.x-ph__menu__dropdown_auth__login__link:hover,.x-ph__menu__dropdown_auth__login__link:active,.x-ph__menu__dropdown_auth__login__link:focus{color:#f26d00}.x-ph__menu__dropdown_auth__login__link__button{position:absolute;top:-5px;left:4px}.x-ph__menu__dropdown_auth__info{position:relative;margin-top:18px;margin-bottom:-6px;padding:0 54px;font:12px/18px Arial,sans-serif;color:#666}.x-ph__menu__dropdown_auth_error .x-ph__menu__dropdown_auth__info,.x-ph__menu__dropdown_auth_loading .x-ph__menu__dropdown_auth__info,.x-ph__menu_auth_multi .x-ph__menu__dropdown_auth__info{display:none}.x-ph__menu__dropdown_auth__info__arrow{position:absolute;top:-11px;left:24px;width:27px;height:23px;background:url("//img.imgsmail.ru/p/h/d/0.10.3/blocks/auth/icons.gif") no-repeat 0 -40px;background-size:27px 63px}.x-ph__menu__dropdown_auth__info__link,.x-ph__menu__dropdown_auth__info__link:link,.x-ph__menu__dropdown_auth__info__link:visited,.x-ph__menu__dropdown_auth__info__link:hover,.x-ph__menu__dropdown_auth__info__link:focus,.x-ph__menu__dropdown_auth__info__link:active{display:block;width:210px;font:12px/18px Arial,sans-serif;text-decoration:none}.x-ph__menu__dropdown_auth__info__link .x-ph__menu__dropdown_auth__info__link__text,.x-ph__menu__dropdown_auth__info__link:link .x-ph__menu__dropdown_auth__info__link__text,.x-ph__menu__dropdown_auth__info__link:visited .x-ph__menu__dropdown_auth__info__link__text,.x-ph__menu__dropdown_auth__info__link:hover .x-ph__menu__dropdown_auth__info__link__text,.x-ph__menu__dropdown_auth__info__link:focus .x-ph__menu__dropdown_auth__info__link__text,.x-ph__menu__dropdown_auth__info__link:active .x-ph__menu__dropdown_auth__info__link__text{color:#666;text-decoration:none;font:12px/18px Arial,sans-serif}.x-ph__menu__dropdown_auth__info__link .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:link .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:visited .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:hover .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:active .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:focus .x-ph__menu__dropdown_auth__info__link__link{color:#0857a6;outline:none;font:12px/18px Arial,sans-serif;text-decoration:none}.x-ph__menu__dropdown_auth__info__link:hover .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:active .x-ph__menu__dropdown_auth__info__link__link,.x-ph__menu__dropdown_auth__info__link:focus .x-ph__menu__dropdown_auth__info__link__link{color:#f26d00}\n'));
b.rootNode.insertBefore(l,b.rootNode.firstChild);var l=e.projects,q;for(q in l.config)l.config.hasOwnProperty(q)&&(l.config[q].href=b.byId("PH_link_"+q).href);q=b.byId("PH_innerHTML");m.settings.multiAuthEnabled&&(m.loadAccountsList.replace(function(e){b.accountManager.loadAccountsList(e)}),q.innerHTML=window.fest.ph_authMenu({translations:f}),f=b.byId("PH_authMenu_dropdown"),f.style.display="none",b.authMenu.init(f),b.authMenu._opts.emailList=b.byId("PH_authMenu_list"));m.settings.projectsMenuEnabled&&
(q.innerHTML=window.fest.ph_projectsMenu(e),f=b.byId("PH_projectsMenu_dropdown"),f.style.display="none",b.projectsMenu.init(f));b.countEl(b.byId("PH_loginAnotherLink"));m._loaded=!0;m.emit("loaded");m.on("newlistener",function(b){"loaded"==b.data.type&&m.emit("loaded")})}})();
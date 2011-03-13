AUI.add("aui-node-base",function(u){var e=u.Lang,o=e.isArray,n=e.isObject,p=e.isString,c=e.isUndefined,C=e.isValue,j=u.ClassNameManager.getClassName,G=u.config,g=u.Node.prototype,v="",q=[v,v],b="helper",F=j(b,"hidden"),w=j(b,"unselectable"),z="childNodes",D="createDocumentFragment",y="innerHTML",E="nextSibling",l="none",k="parentNode",m="script",t=false,f="value",h={b:"borderBottomWidth",l:"borderLeftWidth",r:"borderRightWidth",t:"borderTopWidth"},d={b:"marginBottom",l:"marginLeft",r:"marginRight",t:"marginTop"},x={b:"paddingBottom",l:"paddingLeft",r:"paddingRight",t:"paddingTop"};var s=document.createElement("div");s.style.display="none";s.innerHTML="   <table></table>&nbsp;";if(s.attachEvent&&s.fireEvent){s.attachEvent("onclick",function(){t=true;s.detachEvent("onclick",arguments.callee);});s.cloneNode(true).fireEvent("onclick");}var i=!s.getElementsByTagName("tbody").length;var B=/^\s+/,a=/=([^=\x27\x22>\s]+\/)>/g,r=/<([\w:]+)/;s=null;u.mix(g,{ancestors:function(H){var A=this;var J=[];var K=A.getDOM();while(K&&K.nodeType!==9){if(K.nodeType===1){J.push(K);}K=K.parentNode;}var I=new u.all(J);if(H){I=I.filter(H);}return I;},ancestorsByClassName:function(J){var A=this;var I=[];var H=new RegExp("\\b"+J+"\\b");var K=A.getDOM();while(K&&K.nodeType!==9){if(K.nodeType===1&&H.test(K.className)){I.push(K);}K=K.parentNode;}return u.all(I);},appendTo:function(H){var A=this;u.one(H).append(A);return A;},attr:function(H,K){var A=this;if(!c(K)){var J=A.getDOM();if(H in J){A.set(H,K);}else{A.setAttribute(H,K);}return A;}else{if(n(H)){for(var I in H){A.attr(I,H[I]);}return A;}return A.get(H)||A.getAttribute(H);}},clone:(function(){var A;if(t){A=function(){var H=this.getDOM();var J;if(H.nodeType!=3){var I=this.outerHTML();I=I.replace(a,'="$1">').replace(B,"");J=u.Node.create(I);}else{J=u.one(H.cloneNode());}return J;};}else{A=function(){return this.cloneNode(true);};}return A;})(),center:function(L){var A=this;L=(L&&u.one(L))||u.getBody();var J=L.get("region");var I=A.get("region");var K=J.left+(J.width/2);var H=J.top+(J.height/2);A.setXY([K-(I.width/2),H-(I.height/2)]);},empty:function(){var A=this;A.all(">*").remove().purge();var H=u.Node.getDOMNode(A);while(H.firstChild){H.removeChild(H.firstChild);}return A;},getDOM:function(){var A=this;return u.Node.getDOMNode(A);},getBorderWidth:function(H){var A=this;return A._getBoxStyleAsNumber(H,h);},getMargin:function(H){var A=this;return A._getBoxStyleAsNumber(H,d);},getPadding:function(H){var A=this;return A._getBoxStyleAsNumber(H,x);},guid:function(I){var H=this;var A=H.get("id");if(!A){A=u.stamp(H);H.set("id",A);}return A;},hover:function(I,H){var A=this;var J;var K=A._defaultHoverOptions;if(n(I,true)){J=I;J=u.mix(J,K);I=J.over;H=J.out;}else{J=u.mix({over:I,out:H},K);}A._hoverOptions=J;J.overTask=u.debounce(A._hoverOverTaskFn,J.overDelay,A);J.outTask=u.debounce(A._hoverOutTaskFn,J.outDelay,A);A.on(J.overEventType,A._hoverOverHandler,A);A.on(J.outEventType,A._hoverOutHandler,A);},html:function(){var A=arguments,H=A.length;if(H){this.set(y,A[0]);}else{return this.get(y);}return this;},outerHTML:function(){var A=this;var I=A.getDOM();if("outerHTML" in I){return I.outerHTML;}var H=u.Node.create("<div></div>").append(this.clone());try{return H.html();}catch(J){}finally{H=null;}},placeAfter:function(H){var A=this;return A._place(H,A.get(E));},placeBefore:function(H){var A=this;return A._place(H,A);},prependTo:function(H){var A=this;u.one(H).prepend(A);return A;},radioClass:function(H){var A=this;A.siblings().removeClass(H);A.addClass(H);return A;},resetId:function(H){var A=this;A.attr("id",u.guid(H));return A;},selectText:function(M,I){var A=this;var H=A.getDOM();var K=A.val().length;I=C(I)?I:K;M=C(M)?M:0;try{if(H.setSelectionRange){H.setSelectionRange(M,I);}else{if(H.createTextRange){var J=H.createTextRange();J.moveStart("character",M);J.moveEnd("character",I-K);J.select();}else{H.select();}}if(H!=document.activeElement){H.focus();}}catch(L){}return A;},selectable:function(){var A=this;A.getDOM().unselectable="off";A.detach("selectstart");A.setStyles({"MozUserSelect":"","KhtmlUserSelect":""});A.removeClass(w);return A;},swallowEvent:function(H,I){var A=this;var J=function(K){K.stopPropagation();if(I){K.preventDefault();K.halt();}return false;};if(o(H)){u.Array.each(H,function(K){A.on(K,J);});return this;}else{A.on(H,J);}return A;},text:function(I){var A=this;var H=A.getDOM();if(!c(I)){I=u.DOM._getDoc(H).createTextNode(I);return A.empty().append(I);}return A._getText(H.childNodes);},toggle:function(H,I){var A=this;A._toggleView.apply(A,arguments);return A;},unselectable:function(){var A=this;A.getDOM().unselectable="on";A.swallowEvent("selectstart",true);A.setStyles({"MozUserSelect":l,"KhtmlUserSelect":l});A.addClass(w);return A;},val:function(H){var A=this;if(c(H)){return A.get(f);}else{return A.set(f,H);}},_getBoxStyleAsNumber:function(K,N){var A=this;var M=K.match(/\w/g);var L=0;var J;var H;for(var I=M.length-1;I>=0;I--){H=M[I];J=0;if(H){J=parseFloat(A.getComputedStyle(N[H]));J=Math.abs(J);L+=J||0;}}return L;},_getText:function(L){var A=this;var J=L.length;var I;var K=[];for(var H=0;H<J;H++){I=L[H];if(I&&I.nodeType!=8){if(I.nodeType!=1){K.push(I.nodeValue);}if(I.childNodes){K.push(A._getText(I.childNodes));}}}return K.join("");},_hoverOutHandler:function(H){var A=this;A._hoverOptions.outTask(H);},_hoverOverHandler:function(H){var A=this;A._hoverOptions.overTask(H);},_hoverOutTaskFn:function(I){var A=this;var H=A._hoverOptions;H.overTask.cancel();H.out.apply(H.context||I.currentTarget,arguments);},_hoverOverTaskFn:function(I){var A=this;var H=A._hoverOptions;H.outTask.cancel();H.over.apply(H.context||I.currentTarget,arguments);},_place:function(I,H){var A=this;var J=A.get(k);if(J){if(p(I)){I=u.Node.create(I);}J.insertBefore(I,H);}return A;},_defaultHoverOptions:{overEventType:"mouseenter",outEventType:"mouseleave",overDelay:0,outDelay:0,over:e.emptyFn,out:e.emptyFn}},true);g.__show=g._show;g.__hide=g._hide;g.__isHidden=g._isHidden;g._isHidden=function(){var A=this;
return g.__isHidden.call(A)||A.hasClass(A._hideClass||F);};g._hide=function(){var A=this;A.addClass(A._hideClass||F);return A;};g._show=function(){var A=this;A.removeClass(A._hideClass||F);return A;};if(!i){u.DOM._ADD_HTML=u.DOM.addHTML;u.DOM.addHTML=function(K,J,A){var L=(K.nodeName&&K.nodeName.toLowerCase())||"";var H;if(!c(J)){if(p(J)){H=(r.exec(J)||q)[1];}else{if(J.nodeType&&J.nodeType==11&&J.childNodes.length){H=J.childNodes[0].nodeName;}else{if(J.nodeName){H=J.nodeName;}}}H=H.toLowerCase();}if(L=="table"&&H=="tr"){K=K.getElementsByTagName("tbody")[0]||K.appendChild(K.ownerDocument.createElement("tbody"));var I=((A&&A.nodeName)||v).toLowerCase();if(I=="tbody"&&A.childNodes.length>0){A=A.firstChild;}}return u.DOM._ADD_HTML(K,J,A);};}u.NodeList.importMethod(g,["after","appendTo","attr","before","empty","hover","html","outerHTML","prepend","prependTo","purge","selectText","selectable","text","toggle","unselectable","val"]);u.mix(u.NodeList.prototype,{all:function(I){var H=this;var M=[];var J=H._nodes;var L=J.length;var A;for(var K=0;K<L;K++){A=u.Selector.query(I,J[K]);if(A&&A.length){M.push.apply(M,A);}}M=u.Array.unique(M);return u.all(M);},first:function(){var A=this;return A.item(0);},getDOM:function(){var A=this;return u.NodeList.getDOMNodes(this);},last:function(){var A=this;return A.item(A._nodes.length-1);},one:function(H){var A=this;var K=null;var I=A._nodes;var L=I.length;for(var J=0;J<L;J++){K=u.Selector.query(H,I[J],true);if(K){K=u.one(K);break;}}return K;}});u.mix(u.NodeList,{create:function(H){var A=u.getDoc().invoke(D);return A.append(H).get(z);}});u.mix(u,{getBody:function(){var A=this;if(!A._bodyNode){A._bodyNode=u.one(G.doc.body);}return A._bodyNode;},getDoc:function(){var A=this;if(!A._documentNode){A._documentNode=u.one(G.doc);}return A._documentNode;},getWin:function(){var A=this;if(!A._windowNode){A._windowNode=u.one(G.win);}return A._windowNode;}});},"@VERSION@",{requires:["aui-base"]});
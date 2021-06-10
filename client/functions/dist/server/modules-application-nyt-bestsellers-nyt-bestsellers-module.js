exports.ids=[11],exports.modules={IOzI:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"NytBestsellersModule",function(){return NytBestsellersModule});var common=__webpack_require__("ofXK"),router=__webpack_require__("tyNb"),core=__webpack_require__("fXoL"),throwError=__webpack_require__("z6cu"),take=__webpack_require__("IzEk"),catchError=__webpack_require__("JIr8"),environment=__webpack_require__("AytR"),http=__webpack_require__("tk/3");const apiKey=environment.a.NYT_BEST_KEY;class nyt_bestsellers_service_NytBestsellersService{constructor(http){this.http=http}getBooks(){const booksUrl=`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}`;return this.http.get(booksUrl).pipe(Object(take.a)(1),Object(catchError.a)(err=>Object(throwError.a)("Problem fetching bestsellers from API, error: ",err)))}}function BestsellerItemComponent_img_6_Template(rf,ctx){if(1&rf&&core.Kc(0,"img",6),2&rf){const ctx_r0=core.Zc();core.dd("src",ctx_r0.bestseller.books[0].book_image,core.nd)}}nyt_bestsellers_service_NytBestsellersService.\u0275fac=function NytBestsellersService_Factory(t){return new(t||nyt_bestsellers_service_NytBestsellersService)(core.Tc(http.b))},nyt_bestsellers_service_NytBestsellersService.\u0275prov=core.Fc({token:nyt_bestsellers_service_NytBestsellersService,factory:nyt_bestsellers_service_NytBestsellersService.\u0275fac,providedIn:"root"});class BestsellerItemComponent{constructor(){}ngOnInit(){}}function NytBestsellersComponent_div_12_Template(rf,ctx){if(1&rf){const _r4=core.Qc();core.Pc(0,"div",9),core.Pc(1,"app-bestseller-item",10),core.Wc("click",function NytBestsellersComponent_div_12_Template_app_bestseller_item_click_1_listener(){core.ld(_r4);const bestseller_r1=ctx.$implicit;return core.Zc().onGoToBestsellerDetail(bestseller_r1)}),core.Oc(),core.Oc()}if(2&rf){const bestseller_r1=ctx.$implicit;core.zc(1),core.dd("bestseller",bestseller_r1)}}BestsellerItemComponent.\u0275fac=function BestsellerItemComponent_Factory(t){return new(t||BestsellerItemComponent)},BestsellerItemComponent.\u0275cmp=core.Dc({type:BestsellerItemComponent,selectors:[["app-bestseller-item"]],inputs:{bestseller:"bestseller"},decls:7,vars:2,consts:[[1,"card","rounded"],[1,"card-header"],[1,"category-text"],[1,"fas","fa-clipboard-list","text-info"],[1,"card-body","p-0","text-center"],["class","text-center","style","width: 100%; height: 242px","alt","bestseller logo",3,"src",4,"ngIf"],["alt","bestseller logo",1,"text-center",2,"width","100%","height","242px",3,"src"]],template:function BestsellerItemComponent_Template(rf,ctx){1&rf&&(core.Pc(0,"div",0),core.Pc(1,"div",1),core.Pc(2,"p",2),core.Kc(3,"i",3),core.rd(4),core.Oc(),core.Oc(),core.Pc(5,"div",4),core.pd(6,BestsellerItemComponent_img_6_Template,1,1,"img",5),core.Oc(),core.Oc()),2&rf&&(core.zc(4),core.td(" ",ctx.bestseller.list_name," "),core.zc(2),core.dd("ngIf",ctx.bestseller.books[0].book_image))},directives:[common.m],styles:[".card[_ngcontent-%COMP%]{align-items:center;min-width:160px;max-width:160px}.card-header[_ngcontent-%COMP%]{padding:8px;height:58.33px;min-width:160px}.card-body[_ngcontent-%COMP%]{height:auto;min-width:160px;max-width:160px;align-items:center;padding:auto;margin:auto}.card[_ngcontent-%COMP%]:hover{box-shadow:3px 3px 16px -2px rgba(0,0,0,.5)}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.category-text[_ngcontent-%COMP%]{font-size:14px;margin:0;color:#0d47a1}"]});class NytBestsellersComponent{constructor(nytBestsellersService,router){this.nytBestsellersService=nytBestsellersService,this.router=router}ngOnInit(){this.getBestsellers()}getBestsellers(){this.nytBestsellersService.getBooks().subscribe(data=>{this.bestsellerLists=data.results.lists})}onGoToBestsellerDetail(bestseller){const navigationExtras={state:{bestseller:bestseller}};this.router.navigate(["/bestseller-detail"],navigationExtras)}}NytBestsellersComponent.\u0275fac=function NytBestsellersComponent_Factory(t){return new(t||NytBestsellersComponent)(core.Jc(nyt_bestsellers_service_NytBestsellersService),core.Jc(router.b))},NytBestsellersComponent.\u0275cmp=core.Dc({type:NytBestsellersComponent,selectors:[["app-nyt-bestsellers"]],decls:13,vars:1,consts:[["name","description","content","Shows data from the New York Times Bestsellers API"],[1,"main"],[1,"title-card","text-white","backgroundSecondaryBlue","mb-2"],[1,"card-header","bg-light"],["src","../../../../assets/params/images/logo/book.png","alt","Nasa logo",1,"header-image","float-left"],[1,"card-title","text-dark"],[1,"card-subtitle","font-italic"],[1,"row"],["class","bestseller-card align-center col-lg-2 col-md-4 col-sm-4 col-xs-6 pb-3",4,"ngFor","ngForOf"],[1,"bestseller-card","align-center","col-lg-2","col-md-4","col-sm-4","col-xs-6","pb-3"],[3,"bestseller","click"]],template:function NytBestsellersComponent_Template(rf,ctx){1&rf&&(core.Pc(0,"head"),core.Kc(1,"meta",0),core.Oc(),core.Pc(2,"body"),core.Pc(3,"div",1),core.Pc(4,"div",2),core.Pc(5,"div",3),core.Kc(6,"img",4),core.Pc(7,"h6",5),core.rd(8,"New York Times"),core.Oc(),core.Pc(9,"h5",6),core.rd(10,"Bestsellers"),core.Oc(),core.Oc(),core.Oc(),core.Pc(11,"div",7),core.pd(12,NytBestsellersComponent_div_12_Template,2,1,"div",8),core.Oc(),core.Oc(),core.Oc()),2&rf&&(core.zc(12),core.dd("ngForOf",ctx.bestsellerLists))},directives:[common.l,BestsellerItemComponent],styles:[".main[_ngcontent-%COMP%]{justify-content:center;align-items:center}.title-card[_ngcontent-%COMP%]{max-width:230px;margin:auto}.bestseller-card[_ngcontent-%COMP%]{padding:12px auto}.card-subtitle[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]{padding-left:60px}.card-text[_ngcontent-%COMP%]{margin:16px 0}.header-image[_ngcontent-%COMP%]{width:48px;height:48px}"]});const routes=[{path:"",component:NytBestsellersComponent}];class NytBestsellersRoutingModule{}NytBestsellersRoutingModule.\u0275fac=function NytBestsellersRoutingModule_Factory(t){return new(t||NytBestsellersRoutingModule)},NytBestsellersRoutingModule.\u0275mod=core.Hc({type:NytBestsellersRoutingModule}),NytBestsellersRoutingModule.\u0275inj=core.Gc({imports:[[router.f.forChild(routes)],router.f]});var svg_list_module=__webpack_require__("gukk");class NytBestsellersModule{}NytBestsellersModule.\u0275fac=function NytBestsellersModule_Factory(t){return new(t||NytBestsellersModule)},NytBestsellersModule.\u0275mod=core.Hc({type:NytBestsellersModule}),NytBestsellersModule.\u0275inj=core.Gc({imports:[[common.b,NytBestsellersRoutingModule,svg_list_module.a]]})},z6cu:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return throwError});var _Observable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("HDdC");function throwError(error,scheduler){return scheduler?new _Observable__WEBPACK_IMPORTED_MODULE_0__.a(subscriber=>scheduler.schedule(dispatch,0,{error:error,subscriber:subscriber})):new _Observable__WEBPACK_IMPORTED_MODULE_0__.a(subscriber=>subscriber.error(error))}function dispatch({error:error,subscriber:subscriber}){subscriber.error(error)}}};
webpackJsonp([9],{"5PlU":function(t,e,i){var n=i("RY/4"),a=i("dSzd")("iterator"),o=i("/bQp");t.exports=i("FeBl").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||o.hasOwnProperty(n(e))}},"7rVV":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{class:["button","is-primary",{"is-large":!t.hasText},{"is-medium":t.hasText}],attrs:{href:t.to}},[i("span",{staticClass:"icon"},[i("i",{class:["mdi","mdi-"+t.icon,"mdi-"+t.iconSize+"px"]})]),t.hasText?i("span",[t._t("default")],2):t._e()])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},C0UM:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{class:["publication",{"has-download":t.showLink}]},[t.showLink?i("span",{staticClass:"download-link"},[t.json.file?i("a",{class:["mdi",t.iconName],attrs:{title:"View",href:t.file}}):i("i",{class:["mdi",t.iconName]})]):t._e(),i("span",{staticClass:"citation"},[i("span",{staticClass:"author",domProps:{innerHTML:t._s(t.authorsFirstLast+". ")}}),t.json.year?i("span",{staticClass:"year",domProps:{innerHTML:t._s(t.json.year+". ")}}):t._e(),i("span",{staticClass:"pubtitle",domProps:{innerHTML:t._s(t.json.title+". ")}}),t.pubInfo?i("span",{staticClass:"publisher-info",domProps:{innerHTML:t._s(t.pubInfo)}}):t._e(),t.json.location?i("span",{staticClass:"location",domProps:{innerHTML:t._s(t.json.location+". ")}}):t._e(),t.json.doi?i("span",{staticClass:"doi",domProps:{innerHTML:t._s(t.doi)}}):t._e(),t.json.note?i("span",{staticClass:"note",domProps:{innerHTML:t._s(t.json.note+".")}}):t._e()])])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},CoQ1:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},"FH+1":function(t,e,i){"use strict";var n=i("fZjL"),a=i.n(n),o=i("kHw/"),r=i("WKuD"),s=i.n(r);e.a={props:{typeFilter:Array,pubKeyFilter:Array,keywordFilter:Array,showYears:{type:Boolean,default:!1},highlightAuthor:String,showLinks:{type:Boolean,default:!0}},data:function(){return{citations:s.a}},components:{Publication:o.a},computed:{publications:function(){var t=this;return a()(this.citations).filter(function(e){return t.pubFilter(e,t.citations[e])}).map(function(e){var i=t.citations[e];return i.key=e,i})},publicationsByYear:function(){var t=this.publications.reduce(function(t,e){return t[e.year]+=[e],t},{});return a()(t).map(function(e){var i={};return i.publications=t[e],i.year=e,i}).sort(function(t,e){return e.year-t.year})}},methods:{pubFilter:function(t,e){return(!this.pubKeyFilter||this.pubKeyFilter.includes(t))&&(!this.typeFilter||this.typeFilter.includes(e.type))&&(!this.keywordFilter||e.keywords&&this.keywordFilter.filter(function(t){return e.keywords.includes(t)}).length>0)}}}},GPxz:function(t,e,i){"use strict";var n=i("ltPX"),a=i("Rgus"),o=i("TZiu");e.a={components:{IconButtonLink:o.a,PrimarySection:a.a,PublicationList:n.a},data:function(){return{title:"Publications"}},head:function(){return{title:this.title+" - 格瑞迪创新科技有限公司",meta:[{hid:"publications"}]}}}},KfeV:function(t,e,i){var n=i("CoQ1");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("rjj0").default)("48a26568",n,!1,{sourceMap:!1})},Mhc6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("GPxz"),a=i("Okhi"),o=i("VU/8")(n.a,a.a,!1,null,null,null);o.options.__file="pages/publications.vue",e.default=o.exports},ORum:function(t,e,i){!function(e,i,n){t.exports=n(),t.exports.default=n()}(0,0,function(){var t=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');function e(e,i){if("string"!=typeof e)throw new Error("slugify: string argument expected");i="string"==typeof i?{replacement:i}:i||{};var n=e.split("").reduce(function(e,n){return e+(t[n]||n).replace(i.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").trim().replace(/[-\s]+/g,i.replacement||"-");return i.lower?n.toLowerCase():n}return e.extend=function(e){for(var i in e)t[i]=e[i]},e})},Okhi:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("primary-section",{attrs:{title:this.title,subtitle:"Making the world a better place, one peer-reviewed article at a time",texture:"bank-note"}},[e("div",{attrs:{slot:"links"},slot:"links"},[e("p",{staticClass:"buttons"},[e("icon-button-link",{attrs:{to:"https://scholar.google.com/citations?user=dsoLpEQAAAAJ&hl=en",icon:"school"}},[this._v("Google Scholar")])],1)]),e("div",{staticClass:"block-content content"},[e("h1",[this._v("Papers")]),e("publication-list",{attrs:{"highlight-author":"Ebert","type-filter":["inproceedings","article"]}}),e("h1",[this._v("Conference Abstracts and Posters")]),e("publication-list",{attrs:{"highlight-author":"Ebert","type-filter":["poster"]}})],1)])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},OwRa:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"publication-list"},t._l(t.publications,function(e){return i("publication",{key:e.key,attrs:{json:e,highlightAuthor:t.highlightAuthor,showLink:t.showLinks}})}),1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},Rgus:function(t,e,i){"use strict";var n=i("jHuS"),a=i("nzCj"),o=i("VU/8")(n.a,a.a,!1,null,null,null);o.options.__file="components/PrimarySection.vue",e.a=o.exports},Rzrk:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},TZiu:function(t,e,i){"use strict";var n=i("jShC"),a=i("7rVV"),o=!1;var r=function(t){o||i("qKGz")},s=i("VU/8")(n.a,a.a,!1,r,null,null);s.options.__file="components/IconButtonLink.vue",e.a=s.exports},WKuD:function(t,e){t.exports={farkhatdinov2019:{type:"article",title:"Assisting Human Balance in Standing with a Robotic Exoskeleton",author:["Farkhatdinov, Ildar","Ebert, Julia","van Oort, Gijs","Vlutters, Mark","van Asseldonk, Edwin","Burdet, Etienne"],year:2019,month:"April",journal:"IEEE Robotics and Automation Letters",publisher:"IEEE",doi:"10.1109/LRA.2018.2890671",pages:"414--421",volume:4,number:2,file:"2019_ral.pdf",keywords:["Prosthetics and Exoskeletons","Physically Assistive Devices","Human Performance Augmentation"]},ebert2018aamas:{type:"inproceedings",title:"Multi-feature collective decision making in robot swarms",author:["Ebert, Julia","Gauci, Melvin","Nagpal, Radhika"],series:"AAMAS '18",location:"Stockholm, Sweden",booktitle:"Proceedings of the 17th International Conference on Autonomous Agents and MultiAgent Systems",pages:"1711--1719",year:2018,organization:"IFAAMAS",file:"2018_aamas.pdf",keywords:["kilobots","decision making","swarms","collective behavior"]},bazzi2018icra:{type:"inproceedings",title:"Stability and Predictability in Dynamically Complex Physical Interactions",author:["Bazzi, Salah","Ebert, Julia","Hogan, Neville","Sternad, Dagmar"],booktitle:"2018 IEEE International Conference on Robotics and Automation (ICRA)",doi:"10.1109/ICRA.2018.8460774",pages:"5540--5545",year:2018,file:"2018_icra.pdf",keywords:["stability","contraction","motor learning"]},bazzi2018chaos:{type:"article",title:"Stability and predictability in human control of complex objects",author:["Bazzi, Salah","Ebert, Julia","Hogan, Neville","Sternad, Dagmar"],year:2018,journal:"Chaos",publisher:"American Institute of Physics",doi:"10.1063/1.5042090",volume:28,number:10,file:"2018_chaos.pdf",keywords:["stability","contraction","motor learning"]},park2018:{type:"article",title:"Asymmetric Learning in an Asymmetric Bimanual Task",author:["Park, Se-Woong","Ebert, Julia","Sternad, Dagmar"],note:"In preparation",keywords:["motor learning","bimanual"]},ebert2018llnl:{type:"poster",title:"Collaborative Autonomy for Space Situational Awareness",author:["Ebert, Julia","Meyers, Joshua","Dawson, William","Schneider, Michael"],year:"2018",location:"Livermore, CA",booktitle:"Lawrence Livermore National Laboratory Summer Student Poster Symposium",issue_date:"8 August 2018",keywords:["satellites"],file:"2018_llnl.pdf"},ebert2018csgf:{type:"poster",title:"Multi-Feature Collective Decision Making in Robot Swarms",author:["Ebert, Julia","Gauci, Melvin","Nagpal, Radhika"],year:2018,location:"Washington, DC",booktitle:"DOE CSGF Program Review",issue_date:"15--19 July 2018",keywords:["kilobots","decision making","swarms","collective behavior"],file:"2018_csgf.pdf"},ebert2017csgf:{type:"poster",title:"Infotaxis in a Multi-agent Sensor Network",author:["Ebert, Julia","Teeple, Clark","Steinhardt, Emma","Ramanathan, Sharad"],year:2018,location:"Washington, DC",booktitle:"DOE CSGF Program Review",issue_date:"24--27 July 2017",keywords:["collective behavior"],file:"2017_csgf.pdf"},ebert2017rehabweek:{type:"poster",title:"Human Balance Augmentation with Lower Limb Exoskeleton Robot",author:["Farkhatdinov, Ildar","Ebert, Julia","van Oort, Gijs","van Asseldonk, Edwin","Burdet, Etienne"],year:2017,location:"London, UK",booktitle:"RehabWeek 2017 workshop: Towards a next generation of wearable robotic devices for human-oriented assistance and therapy",issue_date:"17 July 2017",keywords:["human robot interaction","control","exoskeleton"]},ebert2016eurohaptics:{type:"poster",title:"Preliminary Study on Assisting Balance Recovery with Lower Limb Exoskeleton",author:["Ebert, Julia","Farkhatdinov, Ildar","van Oort, Gijs","van Asseldonk, Edwin","Burdet, Etienne"],year:2016,location:"London, UK",booktitle:"EuroHaptics 2016",issue_date:"4--7 July 2016",keywords:["human robot interaction","control","exoskeleton"],file:"2016_eurohaptics.pdf"},sternad2016biomech:{type:"poster",title:"Dynamic Stability in the Control of Complex Objects",author:["Sternad, Dagmar","Mukovskiy, Albert","Ebert, Julia","Dijkstra, Tjeerd"],year:2016,location:"Mt. Sterling, OH",booktitle:"Biomechanics and Neural Control of Movement 2016",issue_date:"12--17 June 2016",keywords:["contraction","stability","motor learning"]},ebert2015ncm:{type:"poster",title:"Asymmetric Learning in an Asymmetric Bimanual Task",author:["Ebert, Julia","Park, Se-Woong","Sternad, Dagmar"],year:2015,location:"Charleston, SC",booktitle:"Society for the Neural Control of Movement 25th Annual Meeting",issue_date:"20--24 April 2015",keywords:["motor learning","bimanual"],file:"2015_ncm.pdf"},ebert2015rise:{type:"poster",title:"Why You Don't Spill Your Coffee",author:["Ebert, Julia","Mukovskiy, Albert","Dijkstra, T","Sternad, Dagmar"],year:2015,location:"Boston, MA",booktitle:"Northeastern University Research, Innovation, and Scholarship Expo (RISE)",issue_date:"9 April 2015",keywords:["contraction","stability","motor learning"]},ebert2014ncm:{type:"poster",title:"Learning and exploration in a novel dimensionality-reduction task",author:["Ebert, Julia","Kim, S","Sternad, Dagmar","Schaal, Stefan"],year:2014,location:"Amsterdam, NL",booktitle:"Society for the Neural Control of Movement 24th Annual Meeting",issue_date:"20--25 April 2014",keywords:["motor learning","dimensionality reduction"],file:"2014_ncm.pdf"},ebert2014rise:{type:"poster",title:"Asymmetric Learning in an Asymmetric Bimanual Task",author:["Ebert, Julia","Park, Se-Woong","Sternad, Dagmar"],year:2014,location:"Boston, MA",booktitle:"Northeastern University Research, Innovation, and Scholarship Expo (RISE)",issue_date:"10 April 2014",keywords:["motor learning","bimanual"],file:"2014_rise.pdf"},ebert2013nurds:{type:"poster",title:"Asymmetric Learning in an Asymmetric Bimanual Task",author:["Ebert, Julia","Park, Se-Woong","Sternad, Dagmar"],year:2013,location:"Biddeford, ME",booktitle:"Northeast Undergraduate Research and Development Symposium",issue_date:"2--3 March 2013",keywords:["motor learning","bimanual"],file:"2013_nurds.pdf"},ebert2012rise:{type:"poster",title:"Central Fatigue in Cognitive and Motor Performance",author:["Ebert, Julia","Park, Se-Woong","Griffen, L","O'Neil Pirozzi, T","Sternad, Dagmar"],year:2012,location:"Boston, MA",booktitle:"Northeastern University Research, Innovation, and Scholarship Expo (RISE)",issue_date:"29 March 2012",keywords:["motor control"],file:"2012_rise.pdf"},ebert2017uq:{type:"talk",title:"Bioinspired Collective Robotics",author:["Ebert, Julia"],year:2018,location:"University of Queensland",issue_date:"14 May 2018"},ebert2017wyss:{type:"talk",title:"Collective Perception and Decision Making in Heterogeneous Swarms",author:["Ebert, Julia","Gauci, Melvin","Nagpal, Radhika"],year:2017,location:"Wyss Institute Molecular Robotics Initiative",issue_date:"14 September 2017"}}},Xd32:function(t,e,i){i("+tPU"),i("zQR9"),t.exports=i("5PlU")},d7EF:function(t,e,i){"use strict";e.__esModule=!0;var n=o(i("us/S")),a=o(i("BO1k"));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,n.default)(Object(t)))return function(t,e){var i=[],n=!0,o=!1,r=void 0;try{for(var s,l=(0,a.default)(t);!(n=(s=l.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw r}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},gghS:function(t,e,i){var n=i("pNw5");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("rjj0").default)("808dc466",n,!1,{sourceMap:!1})},jHuS:function(t,e,i){"use strict";var n=i("ORum"),a=i.n(n);e.a={props:["texture","title","subtitle"],computed:{slug:function(){return a()(this.title,{lower:!0})},textureClass:function(){return this.texture?"has-texture-"+this.texture:""}}}},jShC:function(t,e,i){"use strict";e.a={props:["icon","to"],computed:{hasText:function(){return this.$slots.default},iconSize:function(){return this.hasText?24:36}}}},"kHw/":function(t,e,i){"use strict";var n=i("kset"),a=i("C0UM"),o=!1;var r=function(t){o||i("KfeV")},s=i("VU/8")(n.a,a.a,!1,r,null,null);s.options.__file="components/Publication.vue",e.a=s.exports},kset:function(t,e,i){"use strict";var n=i("d7EF"),a=i.n(n);e.a={props:{json:Object,highlightAuthor:String,showLink:{type:Boolean,default:!0}},computed:{iconName:function(){switch(this.json.type){case"poster":return"mdi-file mdi-rotate-90";case"article":case"inproceedings":return"mdi-book";default:return"mdi-download"}},file:function(){return"/pdfs/"+this.json.type+"/"+this.json.file},authorsFirstLast:function(){var t=this,e=this.json.author,i=e.map(this.authorFirstLast);if(this.highlightAuthor){var n=e.findIndex(function(e){return e.includes(t.highlightAuthor)});i[n]="<span class='highlight-author'>"+i[n]+"</span>"}if(i.length>1){var a=i.pop();return i.join(", ")+" and "+a}return i},pubInfo:function(){var t=[this.pubLocation,this.json.volume,this.json.number].filter(function(t){return t});if(this.issueDate&&(t[t.length-1]+=" "+this.issueDate),this.pages&&t.push(this.pages),t.length>0)return t.join(", ")+". "},pubLocation:function(){if(this.json.booktitle){var t="<i>"+this.json.booktitle+"</i>";return"poster"===this.json.type?"Poster at "+t:"inproceedings"===this.json.type?"In "+t:t}if(this.json.journal)return"<i>"+this.json.journal+"</i>"},pages:function(){if(this.json.pages)return this.json.pages.replace("--","–")},date:function(){if(this.json.year)return this.json.year.replace("--","–")},issueDate:function(){if(this.json.issue_date)return"("+this.json.issue_date.replace("--","–")+")"},addendum:function(){if(this.json.addendum)return this.json.addendum.replace("--","–")},doi:function(){return'DOI: <a href="'+("https://doi.org/"+this.json.doi)+'">'+this.json.doi+"</a>"}},methods:{authorLastFI:function(t){var e=t.split(",").map(function(t){return t.trim()}),i=a()(e,2);return i[0]+" "+i[1].split(" ").map(function(t){return t.charAt(0)}).join(". ").split("-").map(function(t){return t.charAt(0)+"."}).join(".-")},authorFirstLast:function(t){var e,i=t.split(",").map(function(t){return t.trim()}),n=a()(i,2);return e=n[0],n[1]+" "+e}}}},ltPX:function(t,e,i){"use strict";var n=i("FH+1"),a=i("OwRa"),o=!1;var r=function(t){o||i("gghS")},s=i("VU/8")(n.a,a.a,!1,r,null,null);s.options.__file="components/PublicationList.vue",e.a=s.exports},nzCj:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section is-block",class:t.textureClass,attrs:{id:t.slug}},[i("div",{staticClass:"container"},[i("div",{staticClass:"section is-light is-unpadded"},[i("div",{staticClass:"block-content has-title"},[i("div",{staticClass:"title-block"},[i("div",{staticClass:"title-block-title"},[i("h1",{staticClass:"title is-1"},[t._v(t._s(t.title))]),t.subtitle?i("h3",{staticClass:"section-subtitle subtitle is-4"},[t._v(t._s(t.subtitle))]):t._e()]),i("div",{staticClass:"title-block-links"},[t._t("links")],2)]),this.$slots.intro?i("div",{staticClass:"intro content"},[t._t("intro")],2):t._e()]),t._t("default")],2)])])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},pNw5:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},qKGz:function(t,e,i){var n=i("Rzrk");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("rjj0").default)("2c673759",n,!1,{sourceMap:!1})},"us/S":function(t,e,i){t.exports={default:i("Xd32"),__esModule:!0}}});
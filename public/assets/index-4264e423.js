var re=Object.defineProperty;var le=(a,n,t)=>n in a?re(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;var P=(a,n,t)=>(le(a,typeof n!="symbol"?n+"":n,t),t);import{H as ae}from"./index-3eb03158.js";import{d as oe,c as N,a as ce,u as he,e as ue,f as Q,g as I,h as q,w as pe,n as j,m as fe,N as ge,aI as H}from"./index-2a868905.js";import{_ as de}from"./titleBar.vue_vue_type_script_setup_true_lang-03b2fda6.js";function K(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let E=K();function ke(a){E=a}const Y=/[&<>"']/,me=new RegExp(Y.source,"g"),ee=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,xe=new RegExp(ee.source,"g"),be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},F=a=>be[a];function w(a,n){if(n){if(Y.test(a))return a.replace(me,F)}else if(ee.test(a))return a.replace(xe,F);return a}const we=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function te(a){return a.replace(we,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const _e=/(^|[^\[])\^/g;function m(a,n){a=typeof a=="string"?a:a.source,n=n||"";const t={replace:(e,i)=>(i=i.source||i,i=i.replace(_e,"$1"),a=a.replace(e,i),t),getRegex:()=>new RegExp(a,n)};return t}const ye=/[^\w:]/g,$e=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function V(a,n,t){if(a){let e;try{e=decodeURIComponent(te(t)).replace(ye,"").toLowerCase()}catch{return null}if(e.indexOf("javascript:")===0||e.indexOf("vbscript:")===0||e.indexOf("data:")===0)return null}n&&!$e.test(t)&&(t=Te(n,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const B={},ze=/^[^:]+:\/*[^/]*$/,Se=/^([^:]+:)[\s\S]*$/,Re=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Te(a,n){B[" "+a]||(ze.test(a)?B[" "+a]=a+"/":B[" "+a]=Z(a,"/",!0)),a=B[" "+a];const t=a.indexOf(":")===-1;return n.substring(0,2)==="//"?t?n:a.replace(Se,"$1")+n:n.charAt(0)==="/"?t?n:a.replace(Re,"$1")+n:a+n}const v={exec:function(){}};function X(a,n){const t=a.replace(/\|/g,(s,r,l)=>{let c=!1,d=r;for(;--d>=0&&l[d]==="\\";)c=!c;return c?"|":" |"}),e=t.split(/ \|/);let i=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),e.length>n)e.splice(n);else for(;e.length<n;)e.push("");for(;i<e.length;i++)e[i]=e[i].trim().replace(/\\\|/g,"|");return e}function Z(a,n,t){const e=a.length;if(e===0)return"";let i=0;for(;i<e;){const s=a.charAt(e-i-1);if(s===n&&!t)i++;else if(s!==n&&t)i++;else break}return a.slice(0,e-i)}function Ae(a,n){if(a.indexOf(n[1])===-1)return-1;const t=a.length;let e=0,i=0;for(;i<t;i++)if(a[i]==="\\")i++;else if(a[i]===n[0])e++;else if(a[i]===n[1]&&(e--,e<0))return i;return-1}function Ie(a){a&&a.sanitize&&!a.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function W(a,n){if(n<1)return"";let t="";for(;n>1;)n&1&&(t+=a),n>>=1,a+=a;return t+a}function G(a,n,t,e){const i=n.href,s=n.title?w(n.title):null,r=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){e.state.inLink=!0;const l={type:"link",raw:t,href:i,title:s,text:r,tokens:e.inlineTokens(r)};return e.state.inLink=!1,l}return{type:"image",raw:t,href:i,title:s,text:w(r)}}function Ee(a,n){const t=a.match(/^(\s+)(?:```)/);if(t===null)return n;const e=t[1];return n.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[r]=s;return r.length>=e.length?i.slice(e.length):i}).join(`
`)}class M{constructor(n){this.options=n||E}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Z(e,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const e=t[0],i=Ee(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let e=t[2].trim();if(/#$/.test(e)){const i=Z(e,"#");(this.options.pedantic||!i||/ $/.test(i))&&(e=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(e);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:s,text:e}}}list(n){let t=this.rules.block.list.exec(n);if(t){let e,i,s,r,l,c,d,f,g,k,h,z,_=t[1].trim();const R=_.length>1,x={type:"list",raw:"",ordered:R,start:R?+_.slice(0,-1):"",loose:!1,items:[]};_=R?`\\d{1,9}\\${_.slice(-1)}`:`\\${_}`,this.options.pedantic&&(_=R?_:"[*+-]");const b=new RegExp(`^( {0,3}${_})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;n&&(z=!1,!(!(t=b.exec(n))||this.rules.block.hr.test(n)));){if(e=t[0],n=n.substring(e.length),f=t[2].split(`
`,1)[0].replace(/^\t+/,S=>" ".repeat(3*S.length)),g=n.split(`
`,1)[0],this.options.pedantic?(r=2,h=f.trimLeft()):(r=t[2].search(/[^ ]/),r=r>4?1:r,h=f.slice(r),r+=t[1].length),c=!1,!f&&/^ *$/.test(g)&&(e+=g+`
`,n=n.substring(g.length+1),z=!0),!z){const S=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),y=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),$=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),L=new RegExp(`^ {0,${Math.min(3,r-1)}}#`);for(;n&&(k=n.split(`
`,1)[0],g=k,this.options.pedantic&&(g=g.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!($.test(g)||L.test(g)||S.test(g)||y.test(n)));){if(g.search(/[^ ]/)>=r||!g.trim())h+=`
`+g.slice(r);else{if(c||f.search(/[^ ]/)>=4||$.test(f)||L.test(f)||y.test(f))break;h+=`
`+g}!c&&!g.trim()&&(c=!0),e+=k+`
`,n=n.substring(k.length+1),f=g.slice(r)}}x.loose||(d?x.loose=!0:/\n *\n *$/.test(e)&&(d=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(h),i&&(s=i[0]!=="[ ] ",h=h.replace(/^\[[ xX]\] +/,""))),x.items.push({type:"list_item",raw:e,task:!!i,checked:s,loose:!1,text:h}),x.raw+=e}x.items[x.items.length-1].raw=e.trimRight(),x.items[x.items.length-1].text=h.trimRight(),x.raw=x.raw.trimRight();const C=x.items.length;for(l=0;l<C;l++)if(this.lexer.state.top=!1,x.items[l].tokens=this.lexer.blockTokens(x.items[l].text,[]),!x.loose){const S=x.items[l].tokens.filter($=>$.type==="space"),y=S.length>0&&S.some($=>/\n.*\n/.test($.raw));x.loose=y}if(x.loose)for(l=0;l<C;l++)x.items[l].loose=!0;return x}}html(n){const t=this.rules.block.html.exec(n);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(t[0]):w(t[0]);e.type="paragraph",e.text=i,e.tokens=this.lexer.inline(i)}return e}}def(n){const t=this.rules.block.def.exec(n);if(t){const e=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:i,title:s}}}table(n){const t=this.rules.block.table.exec(n);if(t){const e={type:"table",header:X(t[1]).map(i=>({text:i})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){e.raw=t[0];let i=e.align.length,s,r,l,c;for(s=0;s<i;s++)/^ *-+: *$/.test(e.align[s])?e.align[s]="right":/^ *:-+: *$/.test(e.align[s])?e.align[s]="center":/^ *:-+ *$/.test(e.align[s])?e.align[s]="left":e.align[s]=null;for(i=e.rows.length,s=0;s<i;s++)e.rows[s]=X(e.rows[s],e.header.length).map(d=>({text:d}));for(i=e.header.length,r=0;r<i;r++)e.header[r].tokens=this.lexer.inline(e.header[r].text);for(i=e.rows.length,r=0;r<i;r++)for(c=e.rows[r],l=0;l<c.length;l++)c[l].tokens=this.lexer.inline(c[l].text);return e}}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:w(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):w(t[0]):t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const r=Z(e.slice(0,-1),"\\");if((e.length-r.length)%2===0)return}else{const r=Ae(t[2],"()");if(r>-1){const c=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],s=r[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(e)?i=i.slice(1):i=i.slice(1,-1)),G(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(n,t){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let i=(e[2]||e[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){const s=e[0].charAt(0);return{type:"text",raw:s,text:s}}return G(e,i,e[0],this.lexer)}}emStrong(n,t,e=""){let i=this.rules.inline.emStrong.lDelim.exec(n);if(!i||i[3]&&e.match(/[\p{L}\p{N}]/u))return;const s=i[1]||i[2]||"";if(!s||s&&(e===""||this.rules.inline.punctuation.exec(e))){const r=i[0].length-1;let l,c,d=r,f=0;const g=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,t=t.slice(-1*n.length+r);(i=g.exec(t))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(c=l.length,i[3]||i[4]){d+=c;continue}else if((i[5]||i[6])&&r%3&&!((r+c)%3)){f+=c;continue}if(d-=c,d>0)continue;c=Math.min(c,c+d+f);const k=n.slice(0,r+i.index+(i[0].length-l.length)+c);if(Math.min(r,c)%2){const z=k.slice(1,-1);return{type:"em",raw:k,text:z,tokens:this.lexer.inlineTokens(z)}}const h=k.slice(2,-2);return{type:"strong",raw:k,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let e=t[2].replace(/\n/g," ");const i=/[^ ]/.test(e),s=/^ /.test(e)&&/ $/.test(e);return i&&s&&(e=e.substring(1,e.length-1)),e=w(e,!0),{type:"codespan",raw:t[0],text:e}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n,t){const e=this.rules.inline.autolink.exec(n);if(e){let i,s;return e[2]==="@"?(i=w(this.options.mangle?t(e[1]):e[1]),s="mailto:"+i):(i=w(e[1]),s=i),{type:"link",raw:e[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(n,t){let e;if(e=this.rules.inline.url.exec(n)){let i,s;if(e[2]==="@")i=w(this.options.mangle?t(e[0]):e[0]),s="mailto:"+i;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(r!==e[0]);i=w(e[0]),e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(n,t){const e=this.rules.inline.text.exec(n);if(e){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):w(e[0]):e[0]:i=w(this.options.smartypants?t(e[0]):e[0]),{type:"text",raw:e[0],text:i}}}}const p={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:v,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};p._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;p._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;p.def=m(p.def).replace("label",p._label).replace("title",p._title).getRegex();p.bullet=/(?:[*+-]|\d{1,9}[.)])/;p.listItemStart=m(/^( *)(bull) */).replace("bull",p.bullet).getRegex();p.list=m(p.list).replace(/bull/g,p.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+p.def.source+")").getRegex();p._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";p._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;p.html=m(p.html,"i").replace("comment",p._comment).replace("tag",p._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();p.paragraph=m(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.blockquote=m(p.blockquote).replace("paragraph",p.paragraph).getRegex();p.normal={...p};p.gfm={...p.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};p.gfm.table=m(p.gfm.table).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.gfm.paragraph=m(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",p.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.pedantic={...p.normal,html:m(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",p._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:v,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:m(p.normal._paragraph).replace("hr",p.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",p.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const o={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:v,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:v,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};o._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";o.punctuation=m(o.punctuation).replace(/punctuation/g,o._punctuation).getRegex();o.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;o.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;o._comment=m(p._comment).replace("(?:-->|$)","-->").getRegex();o.emStrong.lDelim=m(o.emStrong.lDelim).replace(/punct/g,o._punctuation).getRegex();o.emStrong.rDelimAst=m(o.emStrong.rDelimAst,"g").replace(/punct/g,o._punctuation).getRegex();o.emStrong.rDelimUnd=m(o.emStrong.rDelimUnd,"g").replace(/punct/g,o._punctuation).getRegex();o._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;o._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;o._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;o.autolink=m(o.autolink).replace("scheme",o._scheme).replace("email",o._email).getRegex();o._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;o.tag=m(o.tag).replace("comment",o._comment).replace("attribute",o._attribute).getRegex();o._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;o._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;o._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;o.link=m(o.link).replace("label",o._label).replace("href",o._href).replace("title",o._title).getRegex();o.reflink=m(o.reflink).replace("label",o._label).replace("ref",p._label).getRegex();o.nolink=m(o.nolink).replace("ref",p._label).getRegex();o.reflinkSearch=m(o.reflinkSearch,"g").replace("reflink",o.reflink).replace("nolink",o.nolink).getRegex();o.normal={...o};o.pedantic={...o.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:m(/^!?\[(label)\]\((.*?)\)/).replace("label",o._label).getRegex(),reflink:m(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",o._label).getRegex()};o.gfm={...o.normal,escape:m(o.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};o.gfm.url=m(o.gfm.url,"i").replace("email",o.gfm._extended_email).getRegex();o.breaks={...o.gfm,br:m(o.br).replace("{2,}","*").getRegex(),text:m(o.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function Ce(a){return a.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function J(a){let n="",t,e;const i=a.length;for(t=0;t<i;t++)e=a.charCodeAt(t),Math.random()>.5&&(e="x"+e.toString(16)),n+="&#"+e+";";return n}class T{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||E,this.options.tokenizer=this.options.tokenizer||new M,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:p.normal,inline:o.normal};this.options.pedantic?(t.block=p.pedantic,t.inline=o.pedantic):this.options.gfm&&(t.block=p.gfm,this.options.breaks?t.inline=o.breaks:t.inline=o.gfm),this.tokenizer.rules=t}static get rules(){return{block:p,inline:o}}static lex(n,t){return new T(t).lex(n)}static lexInline(n,t){return new T(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(l,c,d)=>c+"    ".repeat(d.length));let e,i,s,r;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(e=l.call({lexer:this},n,t))?(n=n.substring(e.raw.length),t.push(e),!0):!1))){if(e=this.tokenizer.space(n)){n=n.substring(e.raw.length),e.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(e);continue}if(e=this.tokenizer.code(n)){n=n.substring(e.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(e);continue}if(e=this.tokenizer.fences(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.heading(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.hr(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.blockquote(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.list(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.html(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.def(n)){n=n.substring(e.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+e.raw,i.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[e.tag]||(this.tokens.links[e.tag]={href:e.href,title:e.title});continue}if(e=this.tokenizer.table(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.lheading(n)){n=n.substring(e.raw.length),t.push(e);continue}if(s=n,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const c=n.slice(1);let d;this.options.extensions.startBlock.forEach(function(f){d=f.call({lexer:this},c),typeof d=="number"&&d>=0&&(l=Math.min(l,d))}),l<1/0&&l>=0&&(s=n.substring(0,l+1))}if(this.state.top&&(e=this.tokenizer.paragraph(s))){i=t[t.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(e),r=s.length!==n.length,n=n.substring(e.raw.length);continue}if(e=this.tokenizer.text(n)){n=n.substring(e.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(e);continue}if(n){const l="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let e,i,s,r=n,l,c,d;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)f.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,l.index)+"["+W("a",l[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,l.index)+"["+W("a",l[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(r))!=null;)r=r.slice(0,l.index+l[0].length-2)+"++"+r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;n;)if(c||(d=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(f=>(e=f.call({lexer:this},n,t))?(n=n.substring(e.raw.length),t.push(e),!0):!1))){if(e=this.tokenizer.escape(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.tag(n)){n=n.substring(e.raw.length),i=t[t.length-1],i&&e.type==="text"&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):t.push(e);continue}if(e=this.tokenizer.link(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(e.raw.length),i=t[t.length-1],i&&e.type==="text"&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):t.push(e);continue}if(e=this.tokenizer.emStrong(n,r,d)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.codespan(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.br(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.del(n)){n=n.substring(e.raw.length),t.push(e);continue}if(e=this.tokenizer.autolink(n,J)){n=n.substring(e.raw.length),t.push(e);continue}if(!this.state.inLink&&(e=this.tokenizer.url(n,J))){n=n.substring(e.raw.length),t.push(e);continue}if(s=n,this.options.extensions&&this.options.extensions.startInline){let f=1/0;const g=n.slice(1);let k;this.options.extensions.startInline.forEach(function(h){k=h.call({lexer:this},g),typeof k=="number"&&k>=0&&(f=Math.min(f,k))}),f<1/0&&f>=0&&(s=n.substring(0,f+1))}if(e=this.tokenizer.inlineText(s,Ce)){n=n.substring(e.raw.length),e.raw.slice(-1)!=="_"&&(d=e.raw.slice(-1)),c=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):t.push(e);continue}if(n){const f="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return t}}class O{constructor(n){this.options=n||E}code(n,t,e){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(n,i);s!=null&&s!==n&&(e=!0,n=s)}return n=n.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+w(i)+'">'+(e?n:w(n,!0))+`</code></pre>
`:"<pre><code>"+(e?n:w(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n){return n}heading(n,t,e,i){if(this.options.headerIds){const s=this.options.headerPrefix+i.slug(e);return`<h${t} id="${s}">${n}</h${t}>
`}return`<h${t}>${n}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(n,t,e){const i=t?"ol":"ul",s=t&&e!==1?' start="'+e+'"':"";return"<"+i+s+`>
`+n+"</"+i+`>
`}listitem(n){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const e=t.header?"th":"td";return(t.align?`<${e} align="${t.align}">`:`<${e}>`)+n+`</${e}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(n){return`<del>${n}</del>`}link(n,t,e){if(n=V(this.options.sanitize,this.options.baseUrl,n),n===null)return e;let i='<a href="'+n+'"';return t&&(i+=' title="'+t+'"'),i+=">"+e+"</a>",i}image(n,t,e){if(n=V(this.options.sanitize,this.options.baseUrl,n),n===null)return e;let i=`<img src="${n}" alt="${e}"`;return t&&(i+=` title="${t}"`),i+=this.options.xhtml?"/>":">",i}text(n){return n}}class ne{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,e){return""+e}image(n,t,e){return""+e}br(){return""}}class ie{constructor(){this.seen={}}serialize(n){return n.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(n,t){let e=n,i=0;if(this.seen.hasOwnProperty(e)){i=this.seen[n];do i++,e=n+"-"+i;while(this.seen.hasOwnProperty(e))}return t||(this.seen[n]=i,this.seen[e]=0),e}slug(n,t={}){const e=this.serialize(n);return this.getNextSafeSlug(e,t.dryrun)}}class A{constructor(n){this.options=n||E,this.options.renderer=this.options.renderer||new O,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ne,this.slugger=new ie}static parse(n,t){return new A(t).parse(n)}static parseInline(n,t){return new A(t).parseInline(n)}parse(n,t=!0){let e="",i,s,r,l,c,d,f,g,k,h,z,_,R,x,b,C,S,y,$;const L=n.length;for(i=0;i<L;i++){if(h=n[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&($=this.options.extensions.renderers[h.type].call({parser:this},h),$!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type))){e+=$||"";continue}switch(h.type){case"space":continue;case"hr":{e+=this.renderer.hr();continue}case"heading":{e+=this.renderer.heading(this.parseInline(h.tokens),h.depth,te(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue}case"code":{e+=this.renderer.code(h.text,h.lang,h.escaped);continue}case"table":{for(g="",f="",l=h.header.length,s=0;s<l;s++)f+=this.renderer.tablecell(this.parseInline(h.header[s].tokens),{header:!0,align:h.align[s]});for(g+=this.renderer.tablerow(f),k="",l=h.rows.length,s=0;s<l;s++){for(d=h.rows[s],f="",c=d.length,r=0;r<c;r++)f+=this.renderer.tablecell(this.parseInline(d[r].tokens),{header:!1,align:h.align[r]});k+=this.renderer.tablerow(f)}e+=this.renderer.table(g,k);continue}case"blockquote":{k=this.parse(h.tokens),e+=this.renderer.blockquote(k);continue}case"list":{for(z=h.ordered,_=h.start,R=h.loose,l=h.items.length,k="",s=0;s<l;s++)b=h.items[s],C=b.checked,S=b.task,x="",b.task&&(y=this.renderer.checkbox(C),R?b.tokens.length>0&&b.tokens[0].type==="paragraph"?(b.tokens[0].text=y+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&b.tokens[0].tokens[0].type==="text"&&(b.tokens[0].tokens[0].text=y+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:y}):x+=y),x+=this.parse(b.tokens,R),k+=this.renderer.listitem(x,S,C);e+=this.renderer.list(k,z,_);continue}case"html":{e+=this.renderer.html(h.text);continue}case"paragraph":{e+=this.renderer.paragraph(this.parseInline(h.tokens));continue}case"text":{for(k=h.tokens?this.parseInline(h.tokens):h.text;i+1<L&&n[i+1].type==="text";)h=n[++i],k+=`
`+(h.tokens?this.parseInline(h.tokens):h.text);e+=t?this.renderer.paragraph(k):k;continue}default:{const U='Token with "'+h.type+'" type was not found.';if(this.options.silent){console.error(U);return}else throw new Error(U)}}}return e}parseInline(n,t){t=t||this.renderer;let e="",i,s,r;const l=n.length;for(i=0;i<l;i++){if(s=n[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(r=this.options.extensions.renderers[s.type].call({parser:this},s),r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){e+=r||"";continue}switch(s.type){case"escape":{e+=t.text(s.text);break}case"html":{e+=t.html(s.text);break}case"link":{e+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{e+=t.image(s.href,s.title,s.text);break}case"strong":{e+=t.strong(this.parseInline(s.tokens,t));break}case"em":{e+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{e+=t.codespan(s.text);break}case"br":{e+=t.br();break}case"del":{e+=t.del(this.parseInline(s.tokens,t));break}case"text":{e+=t.text(s.text);break}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(c);return}else throw new Error(c)}}}return e}}class D{constructor(n){this.options=n||E}preprocess(n){return n}postprocess(n){return n}}P(D,"passThroughHooks",new Set(["preprocess","postprocess"]));function Le(a,n,t){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,a){const i="<p>An error occurred:</p><pre>"+w(e.message+"",!0)+"</pre>";if(n)return Promise.resolve(i);if(t){t(null,i);return}return i}if(n)return Promise.reject(e);if(t){t(e);return}throw e}}function se(a,n){return(t,e,i)=>{typeof e=="function"&&(i=e,e=null);const s={...e};e={...u.defaults,...s};const r=Le(e.silent,e.async,i);if(typeof t>"u"||t===null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(Ie(e),e.hooks&&(e.hooks.options=e),i){const l=e.highlight;let c;try{e.hooks&&(t=e.hooks.preprocess(t)),c=a(t,e)}catch(g){return r(g)}const d=function(g){let k;if(!g)try{e.walkTokens&&u.walkTokens(c,e.walkTokens),k=n(c,e),e.hooks&&(k=e.hooks.postprocess(k))}catch(h){g=h}return e.highlight=l,g?r(g):i(null,k)};if(!l||l.length<3||(delete e.highlight,!c.length))return d();let f=0;u.walkTokens(c,function(g){g.type==="code"&&(f++,setTimeout(()=>{l(g.text,g.lang,function(k,h){if(k)return d(k);h!=null&&h!==g.text&&(g.text=h,g.escaped=!0),f--,f===0&&d()})},0))}),f===0&&d();return}if(e.async)return Promise.resolve(e.hooks?e.hooks.preprocess(t):t).then(l=>a(l,e)).then(l=>e.walkTokens?Promise.all(u.walkTokens(l,e.walkTokens)).then(()=>l):l).then(l=>n(l,e)).then(l=>e.hooks?e.hooks.postprocess(l):l).catch(r);try{e.hooks&&(t=e.hooks.preprocess(t));const l=a(t,e);e.walkTokens&&u.walkTokens(l,e.walkTokens);let c=n(l,e);return e.hooks&&(c=e.hooks.postprocess(c)),c}catch(l){return r(l)}}}function u(a,n,t){return se(T.lex,A.parse)(a,n,t)}u.options=u.setOptions=function(a){return u.defaults={...u.defaults,...a},ke(u.defaults),u};u.getDefaults=K;u.defaults=E;u.use=function(...a){const n=u.defaults.extensions||{renderers:{},childTokens:{}};a.forEach(t=>{const e={...t};if(e.async=u.defaults.async||e.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const s=n.renderers[i.name];s?n.renderers[i.name]=function(...r){let l=i.renderer.apply(this,r);return l===!1&&(l=s.apply(this,r)),l}:n.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[i.level]?n[i.level].unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}i.childTokens&&(n.childTokens[i.name]=i.childTokens)}),e.extensions=n),t.renderer){const i=u.defaults.renderer||new O;for(const s in t.renderer){const r=i[s];i[s]=(...l)=>{let c=t.renderer[s].apply(i,l);return c===!1&&(c=r.apply(i,l)),c}}e.renderer=i}if(t.tokenizer){const i=u.defaults.tokenizer||new M;for(const s in t.tokenizer){const r=i[s];i[s]=(...l)=>{let c=t.tokenizer[s].apply(i,l);return c===!1&&(c=r.apply(i,l)),c}}e.tokenizer=i}if(t.hooks){const i=u.defaults.hooks||new D;for(const s in t.hooks){const r=i[s];D.passThroughHooks.has(s)?i[s]=l=>{if(u.defaults.async)return Promise.resolve(t.hooks[s].call(i,l)).then(d=>r.call(i,d));const c=t.hooks[s].call(i,l);return r.call(i,c)}:i[s]=(...l)=>{let c=t.hooks[s].apply(i,l);return c===!1&&(c=r.apply(i,l)),c}}e.hooks=i}if(t.walkTokens){const i=u.defaults.walkTokens;e.walkTokens=function(s){let r=[];return r.push(t.walkTokens.call(this,s)),i&&(r=r.concat(i.call(this,s))),r}}u.setOptions(e)})};u.walkTokens=function(a,n){let t=[];for(const e of a)switch(t=t.concat(n.call(u,e)),e.type){case"table":{for(const i of e.header)t=t.concat(u.walkTokens(i.tokens,n));for(const i of e.rows)for(const s of i)t=t.concat(u.walkTokens(s.tokens,n));break}case"list":{t=t.concat(u.walkTokens(e.items,n));break}default:u.defaults.extensions&&u.defaults.extensions.childTokens&&u.defaults.extensions.childTokens[e.type]?u.defaults.extensions.childTokens[e.type].forEach(function(i){t=t.concat(u.walkTokens(e[i],n))}):e.tokens&&(t=t.concat(u.walkTokens(e.tokens,n)))}return t};u.parseInline=se(T.lexInline,A.parseInline);u.Parser=A;u.parser=A.parse;u.Renderer=O;u.TextRenderer=ne;u.Lexer=T;u.lexer=T.lex;u.Tokenizer=M;u.Slugger=ie;u.Hooks=D;u.parse=u;u.options;u.setOptions;u.use;u.walkTokens;u.parseInline;A.parse;T.lex;const Be=q("span",{class:"text-[#67c23a]"},"项目快速迭代、bug在所难免、还望见谅！",-1),Ze=["innerHTML"],Oe=oe({__name:"index",setup(a){const n=new u.Renderer;u.setOptions({renderer:n,gfm:!0,pedantic:!1,sanitize:!1,highlight:r=>ae.highlightAuto(r).value});const t=N(()=>H().globleConfig.noticeInfo?u(H().globleConfig.noticeInfo):""),e=ce(),{isMobile:i}=he(),s=N(()=>e.theme==="dark");return(r,l)=>(fe(),ue("div",{class:j(["main min-h-screen bg-center dark:bg-[#2F2E34]",[I(s)?"darkBg":"lightBg",I(i)?"px-3":"px-10"]])},[Q(I(de),{title:"公告&反馈",des:"留下你宝贵的建议吧、有你的反馈才能让社区更加完善！",padding:I(i)?2:20},null,8,["padding"]),q("div",{class:j(I(i)?["px-2"]:["px-20"])},[Q(I(ge),{"show-icon":!1,type:"warning",class:"mt-5"},{default:pe(()=>[Be]),_:1}),q("div",{class:"py-10 markdown-body",innerHTML:I(t)},null,8,Ze)],2)],2))}});export{Oe as default};
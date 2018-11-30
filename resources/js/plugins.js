//jquery credit card validator
(function(){var n,t=[].indexOf||function(n){for(var t=0,e=this.length;e>t;t++)if(t in this&&this[t]===n)return t;return-1};n=jQuery,n.fn.validateCreditCard=function(e,r){var a,l,i,u,c,h,v,d,o,s,p,f;for(i=[{name:"amex",pattern:/^3[47]/,valid_length:[15]},{name:"diners_club_carte_blanche",pattern:/^30[0-5]/,valid_length:[14]},{name:"diners_club_international",pattern:/^36/,valid_length:[14]},{name:"jcb",pattern:/^35(2[89]|[3-8][0-9])/,valid_length:[16]},{name:"laser",pattern:/^(6304|670[69]|6771)/,valid_length:[16,17,18,19]},{name:"visa_electron",pattern:/^(4026|417500|4508|4844|491(3|7))/,valid_length:[16]},{name:"visa",pattern:/^4/,valid_length:[16]},{name:"mastercard",pattern:/^5[1-5]/,valid_length:[16]},{name:"maestro",pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,valid_length:[12,13,14,15,16,17,18,19]},{name:"discover",pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,valid_length:[16]}],null==r&&(r={}),null==r.accept&&(r.accept=function(){var n,t,e;for(e=[],n=0,t=i.length;t>n;n++)a=i[n],e.push(a.name);return e}()),f=r.accept,s=0,p=f.length;p>s;s++)if(l=f[s],t.call(function(){var n,t,e;for(e=[],n=0,t=i.length;t>n;n++)a=i[n],e.push(a.name);return e}(),l)<0)throw"Credit card type '"+l+"' is not supported";return u=function(n){var e,u,c;for(c=function(){var n,e,l,u;for(u=[],n=0,e=i.length;e>n;n++)a=i[n],l=a.name,t.call(r.accept,l)>=0&&u.push(a);return u}(),e=0,u=c.length;u>e;e++)if(l=c[e],n.match(l.pattern))return l;return null},h=function(n){var t,e,r,a,l,i;for(r=0,i=n.split("").reverse(),e=a=0,l=i.length;l>a;e=++a)t=i[e],t=+t,e%2?(t*=2,r+=10>t?t:t-9):r+=t;return r%10===0},c=function(n,e){var r;return r=n.length,t.call(e.valid_length,r)>=0},o=function(n){var t,r;return l=u(n),r=!1,t=!1,null!=l&&(r=h(n),t=c(n,l)),e({card_type:l,luhn_valid:r,length_valid:t})},d=function(){var t;return t=v(n(this).val()),o(t)},v=function(n){return n.replace(/[ -]/g,"")},this.bind("input",function(){return n(this).unbind("keyup"),d.call(this)}),this.bind("keyup",function(){return d.call(this)}),0!==this.length&&d.call(this),this}}).call(this);


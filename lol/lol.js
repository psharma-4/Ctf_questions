eval(function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(a);
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [function (e) {
        return r[e];
      }];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    ;
    while (c--) if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      console.log(p)
    return p;
  }('3 4(){5 0=1;6(0){2("7 8 9 :) ")}a 2("b{c}")}', 13, 13, "flag||alert|function|myFunction|var|if|NOT|THE|FLAG|else|pantheon|javascript_obfuscatoR".split("|"), 0, {}));
export default function _testRigorIntegrator() {
  (function (e, t, n, o) {
    if (!window.Promise) return void (e[t] = e[t] || function () {});
    e[t] =
      e[t] ||
      function () {
        var n = arguments;
        return new Promise(function (o, r) {
          (e[t].q = e[t].q || []).push({ a: n, d: { y: o, n: r } });
        });
      };
    var r = document.createElement(n),
      a = document.getElementsByTagName(n)[0];
    (r.async = !0),
      (r.type = "text/javascript"),
      (r.src = "https://cdn.testrigor.com/actions-recorder.min.js"),
      (r.onload = r.onreadystatechange =
        function () {
          (this.readyState && "complete" !== this.readyState) ||
            new Recorder.init({
              token: "7313ade6-5a0e-4ff3-9b2e-6555d7b01f5e",
              saveAllData: "false",
            });
        }),
      a.parentNode.insertBefore(r, a);
  })(window, "Recorder", "script");
}

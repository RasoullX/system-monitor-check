// 🧨 BURN TRIGGER — Tier VII Defense

(function () {
  const suspiciousSignals = [
    !navigator.userAgent || navigator.userAgent.length < 10,
    window.location.hostname.includes("localhost"),
    window.location.href.includes("view-source"),
    navigator.hardwareConcurrency < 2,
    !navigator.plugins || navigator.plugins.length === 0
  ];

  const triggered = suspiciousSignals.some(Boolean);

  if (triggered) {
    // Clear terminal & redirect to decoy
    document.body.innerHTML = "<h3 style='color:red'>🔥 Security breach detected. Initiating purge...</h3>";
    setTimeout(() => {
      window.location.href = "/admin/decoy_lockout.html";
    }, 3000);
  }
})();

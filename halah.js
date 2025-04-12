      document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
      });

      (function() {
          function detectDevTools() {
              let start = performance.now();
              debugger;
              let end = performance.now();

              if (end - start > 100) {
                  console.clear();
                  alert("Developer tools are open!");
                  window.location.href = "about:blank";
              }
          }

          window.onkeydown = function(e) {
              if (
                  e.keyCode === 123 ||
                  (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67))
              ) {
                  e.preventDefault();
                  alert("Mau ngapain inspect? kalo lu inspect di gw ada notif nya bosku!");
              }
          };

          document.addEventListener("contextmenu", function(e) {
              e.preventDefault();
          });

          setInterval(detectDevTools, 500);
      })();
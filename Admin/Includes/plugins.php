 <!-- Core -->
  <script src="../Assets/js/jquery.min.js"></script>
  <script src="../Assets/js/bootstrap.bundle.min.js"></script>
  <script src="../Assets/js/js.cookie.js"></script>
  <script src="../Assets/js/jquery.scrollbar.min.js"></script>
  <script src="../Assets/js/jquery-scrollLock.min.js"></script>
  <!-- Optional JS -->
  <script src="../Assets/js/Chart.min.js"></script>
  <!-- Datatables -->
  <script src="../Assets/js/jquery.dataTables.min.js"></script>
  <script src="../Assets/js/Chart.extension.js"></script>
  <!-- Argon JS -->
  <script src="../Assets/js/argon.min9f1e.js?v=1.1.0"></script>
  <!-- Demo JS - remove this in your project -->
  <script src="../Assets/js/demo.min.js"></script>
  <script>
    // Facebook Pixel Code Don't Delete
    ! function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window,
      document, 'script', '../../../../connect.facebook.net/en_US/fbevents.html');

    try {
      fbq('init', '111649226022273');
      fbq('track', "PageView");

    } catch (err) {
      console.log('Facebook Track Error:', err);
    }
  </script>
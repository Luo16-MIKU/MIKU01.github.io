var posts=["posts/c92d424b.html","posts/ab028f3a.html","posts/45c6f3ac.html","posts/0.html","posts/35572bee.html","posts/d607e27b.html","posts/a4b62475.html","posts/97f2d140.html","posts/bbed5b96.html","posts/fd29bee3.html","posts/7db44c5b.html","posts/f7f80643.html","posts/da74aa07.html","posts/85f8fc4d.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
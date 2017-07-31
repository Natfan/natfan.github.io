RewriteEngine On
<<<<<<< HEAD

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} [A-Z]

RewriteMap lc int:tolower

RewriteRule ^([^\.]+)$ $1.html [NC,L]
RewriteRule ^([^\.]+)$ $1.md [NC,L]
RewriteRule ^([^\.]+)$ ${lc:$1} [L,NC]

Redirect /testingredir https://google.com/
=======
RewriteRule ^(.*)\.html$ $1 [L,R]
>>>>>>> 484753fdd1c12e6dab210e8f3fcf3f7cee3a0f58

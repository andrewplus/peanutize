(function () { var html="<span style=\"font-size:10px; line-height:normal;\" id=\"legalinclude-legal\">\n&trade; and &copy; 2016 Twentieth Century Fox Film Corporation. This fan archive is maintained with ❤️ for Peanuts fans, by Peanuts fans, and is not associated with the original peanutizeme.com, The Walt Disney Company, Twentieth Century Fox Corporation, or Peanuts Worldwide.\n<\/span>\n"; var scripts = document.getElementsByTagName('script'); var src = ''; for (var i = 0; i < scripts.length; i++) { if (-1==scripts[i].src.search(/footer(-async)?[.]js/)) continue; src=scripts[i].src; break; } var id =src.replace(/^[^?]+[?]?/,''); if (id) document.getElementById(id).innerHTML=html; else document.write(html); })();
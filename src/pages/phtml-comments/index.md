---
title: Comments in phtml templates
date: '2018-03-08T23:46:37.121Z'
---

Magento is a framework built in PHP. It uses phtml files for templates. What's a phtml file you ask? Well:

```
PHP + HTML = phtml
```

If a PHP file and a HTML file had a baby, a phtml file would be the result. [Alan Storm talks a bit more about phtml files here](http://devdocs.magento.com/guides/m1x/magefordev/mage-for-dev-4.html).

We can write HTML in a phtml file, and also PHP, as long as it’s within a special tag.

```html
<p>This is normal HTML</p>
<p>
  PHP can output strings:
  <span><?php echo 'Bonjour'; ?></span>
</p>
<p>
  PHP will also calculate values, so this will show 5:
  <span><?php 2 + 3; ?></span>
</p>
```

(Remember not to abuse this though - abstract business logic into block methods, and leave display concerns for templates.)

## Comments in template files

It’s always a good idea to document your code with comments. However, when you add HTML-style comments, they appear in the final compiled code.

```html
<!-- A comment that you’ll be able to see in the live site -->
<p>Normal markup</p>
```

But as this is a phtml file, we can also use PHP-style comments. If we use these instead, the comments are compiled by PHP and not output in the final source of the website!

```html
<?php /* I am a comment */ ?>
<p>Normal HTML markup.</p>
```

This is very useful. Comments should be only be seen by:

- You and other developers working on the project

Comments should not be seen by:

- Users or customers of the site
- Nosey people looking at the source code in Dev Tools

So write PHP-style comments in your templates and only allow fellow devs to them.

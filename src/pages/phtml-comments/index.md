---
title: Comments in phtml templates
date: "2018-03-08T23:46:37.121Z"
---

Magento is a framework built in PHP. It uses phtml files for templates. What's phtml file? Well:

```
PHP + HTML = phtml
```

If a PHP file and a HTML file had a baby, phtml would be the result.

Within a phtml file, we can write normal HTML, but also PHP, as long as it’s nested within special tags.

```html
<p>This is normal HTML</p>
<p>This is also HTML but this value is calculated in PHP:
    <span><?php echo 2 + 3; ?></span>
</p>
```

[Alan Storm talks a bit more about phtml files here](http://devdocs.magento.com/guides/m1x/magefordev/mage-for-dev-4.html).

## Comments in template files

It’s always a good idea to document your code with comments. However, when you add HTML-style comments, they appear in the final compiled code.

```html
<!-- A comment that you’ll be able to see in the live site -->
<p>Normal markup</p>
```

But as this is a phtml file, we can also use PHP-style comments. If we use these instead, they are compiled by PHP and not output in the final source of the website!

```html
<?php /* I am a comment */ ?>
<p>Normal HTML markup.</p>
```

Using PHP-style comments is therefore better, because comments are for:

* Developers with access to your source code

Comments are not for:

* End users of the site
* Nosey people looking at the source code in the browser Dev Tools

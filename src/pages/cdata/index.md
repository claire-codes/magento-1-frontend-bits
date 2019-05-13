---
title: CDATA tags in Magento templates
date: '2019-05-12T23:46:37.121Z'
---

What is a CDATA tag? Why is it in your Magento template file? (or any HTML file for that matter) Have you wondered what they do? Or whether you need them?

## TL;DR

CDATA tags are unnecessary for modern websites with a HTML5 doctype. They are a deprecated feature in HTML websites. (They might be useful for XML docs though) They tell XML parsers/validators to ignore the contents within them - this is why JavaScript is in it. Delete them if you see them in the template you’re working in (but don’t go out of your way to do so, as they’re harmless). While you’re at it, delete `type=“text/javascript”` too!

## What do CDATA tags signify?

The W3C defines CDATA:

> CDATA sections may occur anywhere character data may occur; they are used to escape blocks of text containing characters which would otherwise be recognized as markup. CDATA sections begin with the string " <![CDATA[ " and end with the string " ]]> "

```xml
<![CDATA[<greeting>Hello, world!</greeting>]]>
```

You’ll find them in Magento templates within inline script tags `<script>`. If the markup in the template is being validated against XHTML standards, the tags indicate to the parser that the contents should be ignored, as it isn’t valid XML, since XHTML validators require that the page conforms to XML markup requirements. It prevents the site from failing validation by the contents within the CDATA tags.

## XHTML?

Yes, older websites used an XHTML Doctype. However, modern websites should be using `html5`. This means that the website no longer needs to pass this validation. The CDATA tags are now useless in the context of templates.

## Conclusion

Does your site use a HTML5 doctype? If it does, then you don't need to use CDATA tags.

If you still need to pass XHTML validation for your website (perhaps you're using an old Doctype) then keep the tags. If not, and you’re using html5, then don’t use the tags. However they won’t cause your website to break, so if you’re editing a file and find some, delete them, but don’t go out of your way to remove them in every file if there are a lot of them.

### Bonus

Older Magento sites also often have an "type" attribute on script tags. This is also unnecessary for sites using the modern `html5` doctype, and was syntac for HTML 4. (https://stackoverflow.com/questions/20771400/script-tag-vs-script-type-text-javascript-tag). For example:

```html
<script type="text/javascript">
  // Some JavaScript
</script>
```

`type="text/javascript"` can be safely removed without changing the behaviour of the page.

---
title: How to output a CMS block from another CMS block
date: '2018-02-27T23:46:37.121Z'
---

```
{{ block type=“cms/block” block_id=“[block-identifier]” }}
```

Imagine you a CMS block, which you use to output some nice text. But now you want to include the contents of _another_ CMS block, right slap-bang in the middle of it!

For that you need to use the block directive. When you're working with CMS blocks in Magento, you can use directives within the text content of the CMS block or page. Directives are defined by double curly brackets `{{ directive }}` and provide access to file paths, site urls, translations and much more. Google them for the possibilities!

Several different directive types exist, which require different arguments. The block directive is quite straightfoward in its purpose: it retrieves the content of the specified block and outputs it into the CMS block where it was called.

To output the contents of a CMS block called "footer-links", the directive definition would look like:

```
{{ block type=“cms/block” block_id=“footer-links” }}
```

The `type` should be “cms/block” and the `block_id` argument should match the identifier of the CMS block to be loaded. The ID can be found by checking it in the admin panel if you're not sure (under `CMS` > `Static blocks` menu).

## Why would I split my blocks up like that?

Maybe you're wondering why you wouldn't just have a single CMS block that contained all this content instead of two separate blocks?

- Perhaps you need to display the CMS content on different pages, e.g. social media links or contact details. Using a single block for the content and loading it into the different pages reduces repeated code and means there's only one place to edit if there are any changes.
- It can be confusing and difficult to work with a very large CMS file, especially in Magento's WYSIWYG editor. It can be easier to split a large file into distinct sections, and use a parent block to group them together and be resposible for the display. This makes it easier to work with the files, and often helps organise the site better. This is also a good tactic for phtml templates.

## Bonus: PHTML template syntax

Compare the CMS directive syntax with the equivalent needed to output the CMS block within a phtml template:

```html
<?php echo $this->getLayout()->createBlock('cms/block')->setBlockId('footer-links')->toHtml()
?>
```

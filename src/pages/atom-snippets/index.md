---
title: How to add snippets for templates in Atom and VSCode
date: "2018-02-13T23:46:37.121Z"
---

Snippets can vastly speed up your typing speed. You might have already used them without knowing it. Hit return to autocomplete a piece of text when you’ve typed a few characters. This saves you from repeatedly typing the same keywords and phrases over and over.

Most code editors come with a variety of built-in snippets, but often there won’t be quite the one you need. This is especially true if you’re using an editor other than PHPStorm to work with Magento! Recently I found myself typing the magic method for translating text out over and over in templates - so to save myself the keystrokes I created a snippet. Now instead of typing `<php echo …`, I only need to type `__` and hit tab to make the value appear.

Insert gif

Here’s how, for both Atom and VSCode (relative links).

## Atom

All the user’s (your) custom snippets are stored in a single `snippets.cson`, which can be accessed in a couple of ways. You can open the command palette (Cmd Shift P on Mac) and find the command “Application: Open Your Snippets”. Or, from the menu bar in Mac, open the Atom menu and select the `Snippets` option (screenshots for both).

There’s a couple of examples in here, and the Atom documentation is explanatory too (link). The problem I found with adding a snippet to a html template file was working out the correct source type to use. I ended up checking the source of the `language-php` package (link) and cross-referencing the `echo` shortcut to get the correct on. The correct file type was `.text.html.php` - not `.source.php` as I had initially guessed.

Type your required snippet into the file (~/.atom/snippets.cson) and save. Atom will automatically reload the snippets and they should be available immediately in your active text editor (if they’re correct!). I went with this:

```cson
'.text.html.php':
  'translate':
    'prefix': '__'
    'body': '<?php echo $this->__(\'${1}\'); ?>'
```

All I do is type two underscores, hit either tab or enter, and the snippet appears on screen, and my cursor is positioned within at the `${1}` location, ready for me to type my text to translate.

## VSCode

Just works in the HTML snippets. Snippet is different as it’s son format.

If you find yourself typing the same code out over and over, think about how you could streamline this with a snippet.

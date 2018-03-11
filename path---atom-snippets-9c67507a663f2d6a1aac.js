webpackJsonp([0x99ef5fd18b9],{506:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Magento 1 Frontend Bits",author:"Claire Parker-Jones"}},markdownRemark:{id:"/Users/Claire/gatsby-blog/src/pages/atom-snippets/index.md absPath of file >>> MarkdownRemark",html:'<p>Snippets are an underappreciated feature of code editors, which can increase your typing speed when writing code. Snippets provide autocompletion for common chunks of code. Type a few characters, then hit tab or enter, and the snippet expands into the full code block required.</p>\n<p>Most code editors come with a variety of built-in snippets covering common syntax. For example, typing the word <code>log</code> and enter from within a JavaScript file in Atom will expand into our trusty friend, <code>console.log("")</code>. However, if you’re using an editor other than PHPStorm to work with Magento, you may find yourself missing some useful ones. This is especially true in template files (<code>.phtml</code> filetypes).</p>\n<p>Recently I’ve been working on a new feature that required a lot of new text content. I was repeatedly typing the template method to translate text. So to save myself time and keystrokes, I created a snippet for this pattern. Now instead of typing <code>&#x3C;?php echo $this->__(\'Text to translate.\'); ?></code> “by hand”, I only need to type <code>__</code> and hit tab to make the value appear.</p>\n<p><img src="/autocomplete-2223bc9b26840e96a1feee97c88823ca.gif" alt="translate snippet"></p>\n<p>Here’s how I did this, for in the Atom text editor.</p>\n<h2>Atom</h2>\n<p>Atom’s core <code>language-</code> packages all include built-in snippets. Custom user snippets for different file types are stored in a single <code>snippets.cson</code> file. To open this file, open the command palette (Cmd + Shift + P on Mac) and select the “Application: Open Your Snippets” command. Or, from the menu bar in Mac, open the main Atom menu and select the <code>Snippets</code> option.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/magento-1-frontend-bits/static/command-palette-8736daf821c7e831114b0c2a58a03292-66b54.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 34.945397815912635%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAAA80lEQVQY033QSW6DMBQGYF+jLQYz2BCgAsxghtiMgkAgtIsqau5/kLpZdUOlT//q6U3gTbWwX2CPYS/XHYYIRSR+ov/Q7URBJ6AaLmu/WP2Z8A83XeygI0Fvh4MTHQt7N54MJwFQw6Lfx/XeTHc+PurLY9q+ebfnfCnE9UhZrwbxgaLhnE/NcCuaLRU7E3s9bOw8homI0voIzRrd8oCiWmnZi27J+EKrW1yt5/aaFJ0bMC/Mj/hRgcyTnGzJUt7OGZ+jckuqS85nyhovLPyoPPJOK2S64EXR5dny53IFqJmylwQRhjpREYHoN7VnygP/eoXGDzG+Un8NLt0vAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="command palette"\n        title=""\n        src="/magento-1-frontend-bits/static/command-palette-8736daf821c7e831114b0c2a58a03292-fb8a0.png"\n        srcset="/magento-1-frontend-bits/static/command-palette-8736daf821c7e831114b0c2a58a03292-1a291.png 148w,\n/magento-1-frontend-bits/static/command-palette-8736daf821c7e831114b0c2a58a03292-2bc4a.png 295w,\n/magento-1-frontend-bits/static/command-palette-8736daf821c7e831114b0c2a58a03292-fb8a0.png 590w,\n/magento-1-frontend-bits/static/command-palette-8736daf821c7e831114b0c2a58a03292-526de.png 885w,\n/magento-1-frontend-bits/static/command-palette-8736daf821c7e831114b0c2a58a03292-fa2eb.png 1180w,\n/magento-1-frontend-bits/static/command-palette-8736daf821c7e831114b0c2a58a03292-66b54.png 1282w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>You can also access this file directly at <code>~/.atom/snippets.cson</code>. The comments show an example snippet and a link to the <a href="http://flight-manual.atom.io/using-atom/sections/snippets/">official documentation</a>. This will explain the definition of each property to use in the Coffeescript object.</p>\n<p>The difficulty with snippets is knowing the correct file scope to use. Since Magento template files are the <code>.phtml</code> filetype, they contain both PHP and HTML scope. Luckily there’s a method within Atom to discover the scope you need .</p>\n<p>Open a file in which you want the snippet to be available, and place the cursor in the correct location. Note that scope can vary within a file. For example, if you want the snippet to be available within a <code>&#x3C;?php ... ?></code> block, place the cursor within a block, and not outside it. Open the command palette and select the <code>Editor: Log Cursor Scope</code> command. A notification will appear, showing a list of scopes available. The one required for the snippet should be the top one.</p>\n<p>For my case, I want the snippet to be available within <code>.phtml</code> template files, whilst typing HTML. So the scope I need is <code>.text.html.php</code> (and not <code>.source.php</code> or <code>.text.html.basic</code> as I had guessed!).</p>\n<p>When you save your snippet, Atom will automatically reload them and they should be available immediately in your active text editor (if the syntax is correct!). My final result was this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-coffeescript"><code><span class="token string">\'.text.html.php\'</span><span class="token punctuation">:</span>\n  <span class="token string">\'translate\'</span><span class="token punctuation">:</span>\n    <span class="token string">\'prefix\'</span><span class="token punctuation">:</span> <span class="token string">\'__\'</span>\n    <span class="token string">\'body\'</span><span class="token punctuation">:</span> <span class="token string">\'&lt;?php echo $this->__(\\\'${1}\\\'); ?>\'</span>\n</code></pre>\n      </div>\n<p>All I do is type two underscores, hit either tab or enter, and the snippet appears on screen with my cursor focussed at the <code>${1}</code> location. Just what I wanted!</p>\n<p>The next time you find yourself typing the same chunk of code repeatedly, think about how you could streamline your process with a snippet instead.</p>',frontmatter:{title:"How to add snippets for templates in Atom",date:"February 15, 2018"}}},pathContext:{slug:"/atom-snippets/",previous:!1,next:{fields:{slug:"/cdata/"},frontmatter:{title:"Do you need CDATA in templates?"}}}}}});
//# sourceMappingURL=path---atom-snippets-9c67507a663f2d6a1aac.js.map
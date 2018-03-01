---
title: Setting a custom validation message
date: "2018-02-28T23:46:37.121Z"
---

Magento 1 provides loads of validation rules out of the box, which cover most scenarios. It's very common to check that a field contains only numbers, or isn't blank. But how do you customise the validation message that displays when validation fails?

Imagine you have a form field to capture a user's nickname. This field is mandatory and must contain a value before submitting the form. So you do something like:

```html
<form id="some-form" action="" method="post">
    <label for="nickname">Nickname</label>
    <input id="nickname" name="nickname" type="text" class="required-entry" />
    <button type="submit">Submit</button>
</form>

<script>
var someForm = new VarienForm('some-form');
</script>
```
This short example demonstrates how to initialise form validation in Magento 1. Create a new `VarienForm` with the ID of the form. In each field that requires validation, set a class with the name corresponding to the relevant rule.

`required-entry` is the name of the rule that checks that the field contains a value. This means that if the user doesn't enter anything in the `nickname` field, the form will fail to send. The error message "This is a required field" will display underneath the nickname input.

But how do you change this message to something more specific? You have to write a brand new validation rule of course!

This involves duplicating the original `required-entry` rule, and changing the message. Find the original rule in the file `js/prototype/validation.js`, at [line 421](https://github.com/OpenMage/magento-mirror/blob/magento-1.9/js/prototype/validation.js#421).

```js
Validation.addAllThese([
    ...,
    ['required-entry', 'This is a required field.', function(v) {
        return !Validation.get('IsEmpty').test(v);
    }],
    ...
]);

```

We need to amend the PrototypeJS method to add a single rule, and rename it. Place this new code within a script tag in your template, or better still in a separate file that holds all your custom validation rules.

```js
Validation.add('validate-nickname', 'You must enter a nickname', function(v) {
    return !Validation.get('IsEmpty').test(v);
});
```

Finally, replace the classname `required-entry` with `validate-nickname` on the nickname form field. Submit the form with an empty nickname and the new error message will appear.

Repeat as many times as needed for each custom error message. you can also use this technique on other exisiting rules and not only `required-entry`. Poke around in the core `validation.js` file and copy any rules that fit your purpose. Unfortunately this is tedious and repetitive if you have many form fields to customise, but that's Magento 1! `¯\_(ツ)_/¯` 🤷‍♀️
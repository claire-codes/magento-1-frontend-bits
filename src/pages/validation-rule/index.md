---
title: Setting a custom validation message
date: "2018-02-28T23:46:37.121Z"
---

Magento 1 comes with a lot of existing validation rules, which should most scenarios. But how do you customise the validation message that shows when validation fails?

Imagine you have a form field to capture a user's nickname. This field is mandatory and can't be left blank. So you do something like:

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

If the user doesn't enter anything in the `nickname` field before submitting, the form will fail to send and the error message "This is a required field" will display underneath the nickname field.

How do you change this message to something more specific? You have to write a brand new validatio rule of course!

Since this field follows the same validation logic as the existing required entry rule, let's copy that. Find the original rule in the file `js/prototype/validation.js`, around line 421. You can see this in [this repo](https://github.com/OpenMage/magento-mirror/blob/magento-1.9/js/prototype/validation.js#421).

```js
Validation.addAllThese([
    ...,
    ['required-entry', 'This is a required field.', function(v) {
        return !Validation.get('IsEmpty').test(v);
    }],
    ...
]);

```

Amend the protoype syntax slightly, and rename the rule. Place directly within your template, or better still in a separate file that holds all custom validation rules.

```js
Validation.add('validate-nickname', 'You must enter a nickname', function(v) {
    return !Validation.get('IsEmpty').test(v);
});
```

Replace the classname `required-entry` with `validate-nickname` on the nickname form field and you will see your custom error message.

Repeat as many times as needed for each custom error message. This is a little tedious and repetitive if you have many form fields to customise, sorry! `¯\_(ツ)_/¯` 🤷‍♀️


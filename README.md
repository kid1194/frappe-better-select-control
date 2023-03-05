# Frappe Better Select Control

A small plugin for Frappe that adds the support of options group <optgroup> to the select control.

---

### Table of Contents
- [Requirements](#requirements)
- [Setup](#setup)
  - [Install](#install)
  - [Update](#update)
  - [Uninstall](#uninstall)
- [Usage](#usage)
- [Examples](#examples)
  - [Single Options Group](#single-options-group)
  - [Multiple Options Group](#multiple-options-groups)
  - [Normal Options After Options group](#normal-options-after-options-group)
- [Issues](#issues)
- [License](#license)

---

### Requirements
- Frappe >= v13.0.0

---

### Setup

⚠️ *Important* ⚠️

*Do not forget to replace [sitename] with the name of your site in all commands.*

#### Install
1. Go to bench directory

```
cd ~/frappe-bench
```

2. Get plugin from Github

*(Required only once)*

```
bench get-app https://github.com/kid1194/frappe-better-select-control
```

3. Build plugin

*(Required only once)*

```
bench build --app frappe_better_select_control
```

4. Install plugin on a specific site

```
bench --site [sitename] install-app frappe_better_select_control
```

5. Check the [usage](#usage) & [examples](#examples) below

#### Update
1. Go to app directory

```
cd ~/frappe-bench/apps/frappe_better_select_control
```

2. Get updates from Github

```
git pull
```

3. Go to bench directory

```
cd ~/frappe-bench
```

4. Build plugin

```
bench build --app frappe_better_select_control
```

5. Update a specific site

```
bench --site [sitename] migrate
```

6. (Optional) Restart bench

```
bench restart
```

#### Uninstall
1. Go to bench directory

```
cd ~/frappe-bench
```

2. Uninstall plugin from a specific site

```
bench --site [sitename] uninstall-app frappe_better_select_control
```

3. Remove plugin from bench

```
bench remove-app frappe_better_select_control
```

4. (Optional) Restart bench

```
bench restart
```

---

### Usage
1. Go to Customization > Customize Form
2. Enter the form type/name (ex: 'User')
3. Scroll down to the form fields area and edit the select fields you want
4. In the *options* property of the fields, add a hashtag *#* before the option text to make it a group label
5. To close a group just add a single hashtag *#* in a new line
6. Add an exclamation mark *!* before a hashtag *#* at the beginning of the option text to stop it from being used as a group label

ℹ️ **Note: You can't modify the original fields of a doctype, so create a new field or clone and modify the entire doctype.**

---

### Examples

#### Single Options Group
- Options:
```
One
Two
#Three
Four
Five
```
- Result HTML:
```
<option value="One">One</option>
<option value="Two">Two</option>
<optgroup label="Three">
    <option value="Four">Four</option>
    <option value="Five">Five</option>
</optgroup>
```

#### Multiple Options Groups
- Options:
```
#One
Two
Three
#Four
Five
Six
```
- Result HTML:
```
<optgroup label="One">
    <option value="Two">Two</option>
    <option value="Three">Three</option>
</optgroup>
<optgroup label="Four">
    <option value="Five">Five</option>
    <option value="Six">Six</option>
</optgroup>
```

#### Normal Options After Options group
- Options:

```
One
Two
#Three
Four
Five
#
Six
```
- Result HTML:
```
<option value="One">One</option>
<option value="Two">Two</option>
<optgroup label="Three">
    <option value="Four">Four</option>
    <option value="Five">Five</option>
</optgroup>
<option value="Six">Six</option>
```

#### Placeholder Option
- Options:

```
$Select..
One
Two
#Three
Four
Five
#
Six
```
- Result HTML:
```
<option value="" disabled hidden selected>Select...</option>
<option value="One">One</option>
<option value="Two">Two</option>
<optgroup label="Three">
    <option value="Four">Four</option>
    <option value="Five">Five</option>
</optgroup>
<option value="Six">Six</option>
```

---

### Issues
If you find bug in the plugin, please create a [bug report](https://github.com/kid1194/frappe-better-select-control/issues/new?assignees=kid1194&labels=bug&template=bug_report.md&title=%5BBUG%5D) and let us know about it.

---

### License
MIT

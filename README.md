# Frappe Better Select Control
A small plugin for Frappe that adds the support of options group `<optgroup>` to the select control.

### Table of Contents
<ul>
    <li><a href="#requirements">Requirements</a></li>
    <li>
        <a href="#setup">Setup</a>
        <ul>
            <li><a href="#install">Install</a></li>
            <li><a href="#update">Update</a></li>
            <li><a href="#uninstall">Uninstall</a></li>
        </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
        <a href="#examples">Examples</a>
        <ul>
            <li><a href="#create-an-options-group">Create an options group</a></li>
            <li><a href="#create-multiple-options-groups">Create multiple options groups</a></li>
            <li><a href="#add-options-after-an-options-group">Add options after an options group</a></li>
        </ul>
    </li>
    <li><a href="#license">License</a></li>
</ul>

---

### Requirements
- Frappe >= v13.0.0

---

### Setup

#### Install
1. Get the plugin from Github

*(Required only once)*

`bench get-app https://github.com/kid1194/frappe-better-better-control`

2. Install the plugin on any instance/site you want

`bench --site [sitename] install-app frappe_better_select_control`

3. Check the usage section below

#### Update
1. Go to the app directory (frappe-bench/apps/frappe_better_select_control) and execute:

`git pull`

2. Go back to the frappe-bench directory and execute:

`bench --site [sitename] migrate`

3. *In case you need to restart bench, execute:*

`bench restart`

#### Uninstall
1. Uninstall the plugin from the instance/site

`bench --site [sitename] uninstall-app frappe_better_select_control`

2. Uninstall the plugin from bench

`bench remove-app frappe_better_select_control`

---

### Usage
1. Go to Customization > Customize Form
2. Enter the form type/name (ex: 'Item')
3. Scroll down to the form fields area and edit the select fields you want
4. In the `options` property of the fields, add a hashtag `#` before the option text to make it a group label
5. To close a group just add a single hashtag `#` in a new line

---

### Examples

#### Create an options group
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

#### Create multiple options groups
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

#### Add options after an options group
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

---

### License
MIT

# Frappe Better Select Control

A small plugin for Frappe that adds the support of options group *<optgroup>* to the select control.

---

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
            <li><a href="#single-options-group">Single Options Group</a></li>
            <li><a href="#multiple-options-groups">Multiple Options Groups</a></li>
            <li><a href="#normal-options-after-options-group">Normal Options After Options group</a></li>
        </ul>
    </li>
    <li><a href="#license">License</a></li>
</ul>

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
bench build --apps frappe_better_select_control
```

4. Install plugin on a specific site

```
bench --site [sitename] install-app frappe_better_select_control
```

5. Check the usage section below

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
bench build --apps frappe_better_select_control
```

5. Update a specific site

```
bench --site [sitename] migrate
```

6. Restart bench

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

4. Restart bench

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

---

### License
MIT

# Frappe Better Select Control
A small plugin for Frappe that adds the support of options group `<optgroup>` to the select control.

### Requirements
- Frappe >= v13.0.0

### Installation
1. **Get the plugin from Github** *(Required only once)*

`bench get-app https://github.com/kid1194/frappe-better-select-control`

2. **Install the plugin on any instance/site you want**

`bench --site [sitename] install-app frappe_better_select_control`

3. **Check the usage section below**

---
<details>
  <summary>Update the plugin for any instance/site you want</summary>

- Go to the app directory (frappe-bench/apps/frappe_better_select_control) and execute:

`git pull`
- Go back to the frappe-bench directory and execute:

`bench --site [sitename] migrate`
- *In case you need to restart bench, execute:*

`bench restart`
</details>
<details>
  <summary>Uninstall the plugin from any instance/site you want</summary>

`bench --site [sitename] uninstall-app frappe_better_select_control`

`bench remove-app frappe_better_select_control`
</details>

### Usage
1. Go to Customization > Customize Form
2. Enter the form type/name (ex: 'Journal Entry')
3. Scroll down to the form fields area and edit the select fields you want
4. In the `options` property of the fields, add a hashtag `#` before the option text to make it a group label
5. To close a group just add a single hashtag `#` in a new line or after `\n`
#### Example 1
<details>
  <summary>Options</summary>

```
One
Two
#Three
Four
Five
```
--*OR*--
```
One\nTwo\n#Three\nFour\nFive
```
</details>
<details>
  <summary>HTML</summary>

```
<option value="One">One</option>
<option value="Two">Two</option>
<optgroup label="Three">
    <option value="Four">Four</option>
    <option value="Five">Five</option>
</optgroup>
```
</details>

#### Example 2
<details>
  <summary>Options</summary>

```
#One
Two
Three
#Four
Five
Six
```
--*OR*--
```
#One\nTwo\nThree\n#Four\nFive\nSix
```
</details>
<details>
  <summary>HTML</summary>

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
</details>

#### Example 3
<details>
  <summary>Options</summary>

```
One
Two
#Three
Four
Five
#
Six
```
--*OR*--
```
One\nTwo\n#Three\nFour\nFive\n#\nSix
```
</details>
<details>
  <summary>HTML</summary>

```
<option value="One">One</option>
<option value="Two">Two</option>
<optgroup label="Three">
    <option value="Four">Four</option>
    <option value="Five">Five</option>
</optgroup>
<option value="Six">Six</option>
```
</details>

#### License
MIT

# Frappe Better Select Control © 2023
# Author:  Ameen Ahmed
# Company: Level Up Marketing & Software Development Services
# Licence: Please refer to LICENSE file


from . import __version__ as app_version
from frappe import __version__ as frappe_version


app_name = "frappe_better_select_control"
app_title = "Frappe Better Select Control"
app_publisher = "Ameen Ahmed (Level Up)"
app_description = "Frappe select control that supports options group."
app_icon = "octicon octicon-file-directory"
app_color = "blue"
app_email = "kid1194@gmail.com"
app_license = "MIT"


is_frappe_above_v13 = int(frappe_version.split('.')[0]) > 13


app_include_js = [
    'better_select.bundle.js'
] if is_frappe_above_v13 else [
    '/assets/frappe_better_select_control/js/better_select.js'
]
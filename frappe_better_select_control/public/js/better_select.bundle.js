frappe.ui.form.add_options = function(input, options_list) {
    let $select = $(input),
    container = $select;
    if (!Array.isArray(options_list)) return $select;
    
    for (var i = 0, j = options_list.length; i < j; i++) {
        let v = options_list[i],
        value = null,
        label = null,
        is_group = false,
        is_label_null = false,
        is_disabled = false,
        is_selected = false;
        if (!is_null(v)) {
            let is_value_null = is_null(v.value);
            is_label_null = is_null(v.label);
            is_disabled = Boolean(v.disabled);
            is_selected = Boolean(v.selected);

            if (is_value_null && is_label_null) {
                value = v;
                label = __(v);
            } else {
                value = is_value_null ? "" : v.value;
                label = is_label_null ? __(value) : __(v.label);
            }
        }
        
        if (value.length) {
            if (value[0] === '#') {
                value = value.substring(1);
                if (!value.length) {
                    container = $select;
                    continue;
                }
                is_group = true;
                if (is_label_null) label = __(value);
            } else if (value[0] === '!' && value[1] === '#') {
                value = value.substring(1);
            }
        }

        if (is_group) {
            container = $('<optgroup>');
            container.attr('label', label)
                .prop('disabled', is_disabled)
                .appendTo($select.get(0));
            continue;
        }
        $('<option>').html(cstr(label))
            .attr('value', value)
            .prop('disabled', is_disabled)
            .prop('selected', is_selected)
            .appendTo(container.get(0));
    }
    
    $select.get(0).selectedIndex = 0;
    $select.trigger('select-change');
    return $select;
};
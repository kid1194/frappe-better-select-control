/*
* Frappe Better Select Control © 2023
* Author:  Ameen Ahmed
* Company: Level Up Marketing & Software Development Services
* Licence: Please refer to LICENSE file
*/


(function($) {
    $.fn.add_options = function(options_list) {
        let $select = $(this),
        container = $select;
        
        if (!$.isArray(options_list)) return $select;
        
        let in_group = false,
        placeholder = null;
        
        for (var i = 0, j = options_list.length; i < j; i++) {
            let v = options_list[i],
            value = null,
            label = null,
            is_placeholder = false,
            is_group = false,
            is_label_null = false,
            is_disabled = false;
            
            if (!is_null(v)) {
                let is_value_null = is_null(v.value);
                is_label_null = is_null(v.label);
                is_disabled = Boolean(v.disabled);
    
                if (is_value_null && is_label_null) {
                    value = v;
                    label = v;
                } else {
                    value = is_value_null ? "" : v.value;
                    label = is_label_null ? value : v.label;
                }
                
                let _value = cstr(value),
                _label = cstr(label),
                char = '';
                
                if (
                    _value.length && (
                        _value[0] === '$' || _value[0] === '#'
                        || (_value[0] === '!' && _value[1] === '#')
                    )
                ) {
                    if (_value[0] !== '!') char = _value[0];
                    value = _value.substring(1);
                }
                
                if (
                    _label.length && (
                        _label[0] === '$' || _label[0] === '#'
                        || (_label[0] === '!' && _label[1] === '#')
                    )
                ) {
                    if (!char.length && _label[0] !== '!') char = _label[0];
                    label = _label.substring(1);
                }
                if (cstr(label).length) label = __(label);
                
                if (char === '$') is_placeholder = true;
                else if (char === '#') is_group = true;
                        
                if (is_placeholder) {
                    placeholder = cstr(label);
                    continue;
                }
                
                if (is_group) {
                    label = cstr(label);
                    
                    if (!label.length && char === '#' && in_group) {
                        container = $select;
                        in_group = false;
                    } else {
                        in_group = true;
                        container = $('<optgroup>');
                        container.attr('label', label)
                            .prop('disabled', is_disabled)
                            .appendTo($select.get(0));
                    }
                    
                    continue;
                }
            }
            
            $('<option>').html(cstr(label))
                .attr('value', value)
                .prop('disabled', is_disabled)
                .appendTo(container.get(0));
        }
        
        if (placeholder) {
            $('<option>').html(placeholder)
                .attr('value', '')
                .prop('disabled', true)
                .prop('selected', true)
                .prop('hidden', true)
                .prependTo($select.get(0));
        }
        
        $select.get(0).selectedIndex = 0;
        $select.trigger('select-change');
        return $select;
    };
    
    $.fn.set_working = function() {
        this.prop('disabled', true);
    };
    
    $.fn.done_working = function() {
        this.prop('disabled', false);
    };

    let original_val = $.fn.val;
    $.fn.val = function() {
        let result = original_val.apply(this, arguments);
        if (arguments.length > 0) $(this).trigger('select-change');
        return result;
    };
})(jQuery);
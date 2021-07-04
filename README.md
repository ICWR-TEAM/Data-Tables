# Data-Tables
Data tables support for ajax with array javascript format.

Example :

```javascript
var tag_id = "tables";
var class_tag = "table m-0";
var js_array = [
    [
        "No",
        "Name",
        "Detail",
        [
            ['Action', 'font-italic']
        ]
    ],
    [
        [
            "1",
            "Tes data table 1", 
            'This Data Table 1', 
            [
                [
                    'a',
                    [
                        ['href', "https://incrustwerush.org"],
                        ['class', "btn btn-primary mx-1"]
                    ],
                    'incrustwerush.org'
                ],
                [
                    'button',
                    [
                        ['onclick', "window.location.href = 'https://incrustwerush.org';"],
                        ['class', "btn btn-danger mx-1"]
                    ],
                    'incrustwerush.org'
                ]
            ]
        ],
        [
            "2",
            "Tes data table 2", 
            'This Data Table 2', 
            [
                [
                    'a',
                    [
                        ['href', "https://incrustwerush.org"],
                        ['class', "btn btn-primary mx-1"]
                    ],
                    'incrustwerush.org'
                ],
                [
                    'button',
                    [
                        ['onclick', "window.location.href = 'https://incrustwerush.org';"],
                        ['class', "btn btn-danger mx-1"]
                    ],
                    'incrustwerush.org'
                ]
            ]
        ]
    ]
];

create_table(tag_id, class_tag, js_array);
```

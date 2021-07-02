# Data-Tables
Data tables support for ajax with array javascript format.

Example :

```javascript
var tag_id = "tables";
var class_tag = "table m-0";
var js_array = [
    [
        [
            "No",
            "Name",
            "Detail",
            [
                ['Action', 'font-italic']
            ]
        ]
    ],
    [
        [
            "1",
            "Tes data table", 
            'This Data Table', 
            [
                ['incrustwerush.org', 'https://incrustwerush.org', 'btn btn-primary mx-1'],
                ['Google.com', 'https://www.google.com', 'btn btn-danger mx-1']
            ]

        ]
    ]
];

create_table(tag_id, class_tag, js_array);
```

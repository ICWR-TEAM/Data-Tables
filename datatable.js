function create_table(tagid, data) {

    var table = document.getElementById(tagid);
    var tbody = document.createElement('tbody');

    data.forEach(function(tr) {

        var row = document.createElement('tr');

        tr.forEach(function(trdata) {

            if (Array.isArray(trdata)) {

                var td = document.createElement('td');
                
                trdata.forEach(function(action) {

                    var act = document.createElement('a');
                    act.href = action[1]
                    act.className = action[2];
                    act.appendChild(document.createTextNode(action[0]));
                    td.appendChild(act);
                    

                });

                row.appendChild(td);

            } else {

                var td = document.createElement('td');
                td.appendChild(document.createTextNode(trdata));
                row.appendChild(td);

            }

        });

        tbody.appendChild(row);

    });

    table.appendChild(tbody);

}

json_data = [
    ["1", "Tes data table", 'This Data Table', [
            ['asdas', '?', 'btn btn-primary mx-1'],
            ['asdas', '?', 'btn btn-danger mx-1']
        ]
    ]
];

create_table('tables', json_data);

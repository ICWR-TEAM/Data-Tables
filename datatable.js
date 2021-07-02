// Created by Afrizal F.A - incrustwerush.org
// Copyright ©2021 - incrustwerush.org

function create_table(tag_id, tag_class, data) {

    var div = document.getElementById(tag_id);
    var table = document.createElement('table');
    table.className = tag_class;
    var thead = document.createElement('thead');
    var row = document.createElement('tr');

    data[0][0].forEach(function(trdata) {

        if (Array.isArray(trdata)) {

            var th = document.createElement('th');
            
            trdata.forEach(function(attributes) {

                var attr = document.createElement('b');
                attr.className = attributes[1];
                attr.appendChild(document.createTextNode(attributes[0]));
                th.appendChild(attr);
                
            });

            row.appendChild(th);

        } else {

            var th = document.createElement('th');
            th.appendChild(document.createTextNode(trdata));
            row.appendChild(th);

        }

    });

    thead.appendChild(row);
    table.appendChild(thead);
    var tbody = document.createElement('tbody');

    data[1].forEach(function(tr) {

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
    div.appendChild(table);

}

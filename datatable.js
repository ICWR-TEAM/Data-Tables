// Created by Afrizal F.A - incrustwerush.org
// Copyright ©2021 - incrustwerush.org

function create_table(tag_id, data) {

    var table = document.getElementById(tag_id);
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

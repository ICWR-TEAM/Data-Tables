// Created by Afrizal F.A - incrustwerush.org
// Copyright ©2021 - incrustwerush.org

function generate_tag(tag_id, action)
{

    var act = document.createElement(action[0]);

    if (Array.isArray(action[1])) {

        action[1].forEach(function(attrib)
        {

            act.setAttribute(attrib[0], attrib[1]);

        });

    }

    act.appendChild(document.createTextNode(action[2]));
    tag_id.appendChild(act);

}

function create_table(tag_id, tag_class, data)
{

    if (Array.isArray(data)) {

        var div = document.getElementById(tag_id);
        var table = document.createElement('table');
        table.className = tag_class;
        var thead = document.createElement('thead');
        var row = document.createElement('tr');

        if (data[0].length !== 0) {

            data[0].forEach(function(trdata)
            {

                if (Array.isArray(trdata)) {
        
                    var th = document.createElement('th');
                    
                    trdata.forEach(function(attributes)
                    {
        
                        var attr = document.createElement('b');
                        attr.className = attributes[1];
                        attr.appendChild(document.createTextNode(attributes[0]));
                        th.appendChild(attr);
                        
                    });
        
                    row.appendChild(th);
        
                } else {
        
                    var th = document.createElement('th');
                    var attr = document.createElement('b');
                    attr.appendChild(document.createTextNode(trdata));
                    th.appendChild(attr);
                    row.appendChild(th);
        
                }
        
            });
        
            thead.appendChild(row);
            table.appendChild(thead);

        }
        
        if (data[1].length !== 0) {

            var tbody = document.createElement('tbody');
    
            data[1].forEach(function(tr)
            {
        
                var row = document.createElement('tr');
        
                tr.forEach(function(trdata)
                {
        
                    if (Array.isArray(trdata)) {
        
                        var td = document.createElement('td');
                        
                        trdata.forEach(function(action)
                        {
        
                            generate_tag(td, action);
        
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

        div.appendChild(table);

    }

}

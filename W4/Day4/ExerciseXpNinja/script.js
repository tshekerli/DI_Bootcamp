// Exercise 1 : Calendar
// Instructions
// Create a function called createCalendar(year, month)

function createCalendar(year, month){
    let date = new Date(year, month-1);
    let monthName = date.toLocaleString('default', { month: 'long' });
    let daysInMonth = 32 - new Date(year, month-1, 32).getDate();
    let firstDay = new Date(year, month-1).getDay();
    let calendar = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.setAttribute('colspan', '7');
    th.innerText = `${monthName} ${year}`;
    tr.appendChild(th);
    thead.appendChild(tr);
    calendar.appendChild(thead);
    tr = document.createElement('tr');
    for(let i = 0; i < 7; i++){
        let td = document.createElement('td');
        td.innerText = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'][i];
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    let day = 1;
    for(let i = 0; i < 6; i++){
        tr = document.createElement('tr');
        for(let j = 0; j < 7; j++){
            let td = document.createElement('td');
            if(i === 0 && j < firstDay){
                td.innerText = '.';
            }
            else if(day > daysInMonth){
                break;
            }
            else{
                td.innerText = day;
                day++;
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    calendar.appendChild(tbody);
    document.body.appendChild(calendar);
}

createCalendar(2012, 11)
// The function should create a calendar for the given year/month.
// The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> with weekday names: the first day should be Monday, and so on until Sunday.
// For instance, createCalendar(2012, 9) should generate the following calendar:

// Hint: There shouldn’t be any code in the HTML file. The table should be created from the JS file using the DOM.

// MO	TU	WE	TH	FR	SA	SU
// .	.	.	.	.	1	2
// 3	4	5	6	7	8	9
// 10	11	12	13	14	15	16
// 17	18	19	20	21	22	23
// 24	25	26	27	28	29	30

async function GetInfoAPI() {
    let url = 'https://poloniex.com/public?command=returnCurrencies';
    let response = await fetch(url);
    let resault = await response.json();
    console.log(resault);
    console.log('all');
    createob(resault);
    drawInfo(resault);
}
GetInfoAPI();

function createob(data) {
    for (let k in data) {
        if (data[k] instanceof Object) {
            console.log(data[k]);
            console.log('--------------------------------------------------------------------')
        }
    }
}

function drawInfo(data) {
    let numbercount = 1;
    let tbl = document.getElementById("tbody");

    for (k in data) {
        let tr = document.createElement('tr');
        let but = document.createElement('button');

        let td = document.createElement('td');
        td.scope = "row";
        td.innerHTML = numbercount++;
        tr.appendChild(td);
        tbl.appendChild(tr);

        td = document.createElement('td');
        td.innerHTML = k;
        tr.appendChild(td);
        tbl.appendChild(tr);

        td = document.createElement('td');
        td.innerHTML = data[k].name;
        tr.appendChild(td);
        tbl.appendChild(tr);

        td = document.createElement('td');
        td.innerHTML = data[k].humanType;
        tr.appendChild(td);
        tbl.appendChild(tr);

        td = document.createElement('td');
        td.innerHTML = data[k].currencyType;
        tr.appendChild(td);
        tbl.appendChild(tr);

        td = document.createElement('td');
        td.innerHTML = data[k].txFee;
        tr.appendChild(td);
        tbl.appendChild(tr);

        td = document.createElement('td');
        td.innerHTML = data[k].minConf;
        tr.appendChild(td);
        tbl.appendChild(tr);

        td = document.createElement('td');
        but.innerHTML = "Delete";
        let butID = data[k].id
        but.addEventListener('click', function () {
            deleteCrypto(butID);
        })
        td.appendChild(but);
        tr.appendChild(td);
        tbl.appendChild(tr);
    }
}
drawInfo();

function deleteCrypto(id) {
    console.log(id);
    $("button").click(function (e) {
        let tr = $(this).parent().parent();
        tr.text('');
    });
}

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#tableID tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
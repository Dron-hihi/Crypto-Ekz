async function GetInfoAPI() {
    let url = 'https://poloniex.com/public?command=returnCurrencies';
    let response = await fetch(url);
    let resault = await response.json();
    console.log(resault);
    console.log('all');
    createTable(resault);
}
GetInfoAPI();

function createTable(data) {
    for (let k in data) {
        if (data[k] instanceof Object) {
            console.log(data[k]);
            console.log('--------------------------------------------------------------------')
        }
    }
}

function drawInfo(data) {
    let tbl = document.getElementById("tbody");
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.scope="row";
    td.innerHTML="2";
    tr.appendChild(td);


    tbl.appendChild(tr);
}
drawInfo();
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
let myLeads = [];

let leadsFromStorage = JSON.parse( localStorage.getItem("myLeads") );

if (leadsFromStorage) {
    myLeads = leadsFromStorage;
    renderLeads();
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
                    <li>
                        <a href='#' target='_blank'>
                            ${myLeads[i]}
                        </a>
                    </li>`;
    }

    ulEl.innerHTML = "<ul>" + listItems + "</ul>";
}

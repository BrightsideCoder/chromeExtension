const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const saveTabBtn = document.querySelector("#save-tab-btn");
const leadsFromStorage = JSON.parse( localStorage.getItem("myLeads") );
let myLeads = [];

if (leadsFromStorage) {
    myLeads = leadsFromStorage;
    render(myLeads);
}

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
                    <li>
                        <a href='#' target='_blank'>
                            ${leads[i]}
                        </a>
                    </li>`;
    }

    ulEl.innerHTML = "<ul>" + listItems + "</ul>";
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

saveTabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    });
});

deleteBtn.addEventListener("dblclick", function() {
    myLeads = [];
    localStorage.clear();
    render(myLeads);
});

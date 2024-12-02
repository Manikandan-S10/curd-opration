function onFormSubmit() {
    
    const fullName = document.getElementById("fullName").value.trim();
    const empCode = document.getElementById("empCode").value.trim();
    const salary = document.getElementById("salary").value.trim();
    const city = document.getElementById("city").value.trim();

    let errorMessages = [];
    if (fullName === "") {
        errorMessages.push("Full Name is required.");
    }
    if (empCode === "") {
        errorMessages.push("EMP Code is required.");
    }
    if (salary === "") {
        errorMessages.push("Salary is required.");
    }
    if (city === "") {
        errorMessages.push("City is required.");
    }

    if (errorMessages.length > 0) {
        alert("Form submission failed:\n" + errorMessages.join("\n"));
        return false;
    }
    
    insertNewRecord({ fullName, empCode, salary, city });  
    resetForm();
    return true;
}
function insertNewRecord(data) {
    const table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();    
    newRow.insertCell(0).innerText = data.fullName;
    newRow.insertCell(1).innerText = data.empCode;
    newRow.insertCell(2).innerText = data.salary;
    newRow.insertCell(3).innerText = data.city;
    const actionCell = newRow.insertCell(4);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        deleteRecord(this);
    };
    actionCell.appendChild(deleteButton);
}

function deleteRecord(button) {
    if (confirm("Are you sure you want to delete this record?")) {
        const row = button.parentNode.parentNode; 
        row.parentNode.removeChild(row); 
    }
}

function resetForm() {
    document.querySelector("form").reset();
}

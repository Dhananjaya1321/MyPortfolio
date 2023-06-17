$("#save-customer").click(function () {
    let nic = $("#inputNIC").val();
    let name = $("#inputName").val();
    let tel = $("#inputTel").val();
    let address = $("#inputAddress").val();
    $("#customer-table-body").empty();
    if (checkNIC(nic)) {
        customer.push({
            nic: nic,
            name: name,
            tel: tel,
            address: address
        });
        loadCustomers();
    } else {
        alert("This customer already exists");
        loadCustomers();
    }
    clearNewCustomerForm();
});

function loadCustomers() {
    let tableBody = $("#customer-table-body");
    for (let i = 0; i < customer.length; i++) {
        let tr = `<tr>
                    <td>${customer[i].nic}</td>
                    <td>${customer[i].name}</td>
                    <td>${customer[i].tel}</td>
                    <td>${customer[i].address}</td>
                    <td>
                      <button type="button" class="btn btn-danger border-0" style="background-color: #ff0014"><i class="fa-solid fa-trash-can"></i></button>
                      <button type="button" class="btn border-0 btn-danger" style="background-color: #1aff00;"><i class="fa-solid fa-pencil"></i></button>
                    </td>
                  </tr>`;
        tableBody.append(tr);
    }
    getUpdateCustomer();
    getDeleteCustomer();
}

$("#addNewCustomerClearButton").click(function () {
    clearNewCustomerForm();
});

/*function getCustomer() {
    $("#customer-table-body>tr").click(function () {
        let nic = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let tel = $(this).children().eq(2).text();
        let address = $(this).children().eq(3).text();
        $('#inputNIC').val(nic);
        $('#inputName').val(name);
        $('#inputTel').val(tel);
        $('#inputAddress').val(address);
        popUpAddCustomerForm();
    });
}*/
function getDeleteCustomer() {
    $("#customer-table-body>tr>td>button:nth-child(1)").click(function () {
        let nic = $(this).parents("#customer-table-body>tr").children().eq(0).text();
        let consent = confirm("Do you want to delete.?");
        if (consent) {
            let response = deleteCustomer(nic);
            if (response) {
                alert("Customer Deleted");
                $("#customer-table-body").empty();
                loadCustomers();
            } else {
                alert("Customer Not Removed..!");
            }
        }
    });
}

function deleteCustomer(nic) {
    for (let i = 0; i < customer.length; i++) {
        console.log(nic)
        if (customer[i].nic === nic) {
            customer.splice(i, 1);
            return true;
        }
    }
    return false;
}

function getUpdateCustomer() {
    $("#customer-table-body>tr>td>button:nth-child(2)").click(function () {
        let nic = $(this).parents("#customer-table-body>tr").children().eq(0).text();
        let name = $(this).parents("#customer-table-body>tr").children().eq(1).text();
        let tel = $(this).parents("#customer-table-body>tr").children().eq(2).text();
        let address = $(this).parents("#customer-table-body>tr").children().eq(3).text();
        console.log(nic)
        $('#inputUpdateNIC').val(nic);
        $('#inputUpdateName').val(name);
        $('#inputUpdateTel').val(tel);
        $('#inputUpdateAddress').val(address);
        popUpUpdateCustomerForm();
    });
}

function popUpUpdateCustomerForm() {
    let modalToggle = $('#customer-table-body>tr');
    let myModal = new bootstrap.Modal($('#updateCustomer'));
    myModal.show(modalToggle);
}

function clearNewCustomerForm() {
    $("#inputNIC,#inputName,#inputTel,#inputAddress").val("");
    $("#inputNIC").focus();
}

function checkNIC(nic) {
    for (let i = 0; i < customer.length; i++) {
        if (nic === customer[i].nic) {
            return false;
        }
    }
    return true;
}

$("#customerSearchButton").click(function () {
    let x = $("#searchBar").val();
    customer.filter(function (e) {
        if (e.nic === x) {
            $("#customer-table-body").empty();
            console.log(e.nic, e.name, e.address, e.tel)
            let tableBody = $("#customer-table-body");
            let tr = `<tr>
                    <td>${e.nic}</td>
                    <td>${e.name}</td>
                    <td>${e.tel}</td>
                    <td>${e.address}</td>
                    <td>
                      <button type="button" class="btn btn-danger border-0" style="background-color: #ff0014"><i class="fa-solid fa-trash-can"></i></button>
                      <button type="button" class="btn border-0 btn-danger" style="background-color: #1aff00;"><i class="fa-solid fa-pencil"></i></button>
                    </td>
                  </tr>`;
            tableBody.append(tr);
            getUpdateCustomer();
            getDeleteCustomer();
        } else {
            alert("This National ID number does not match");
        }
    });
});

$("#customerSearchClear").click(function () {
    $("#searchBar").val("");
    $("#customer-table-body").empty();
    loadCustomers();
});
let customer1 = undefined;

function searchCustomer(nic) {
    return customer.find(function (customer) {
        return customer.nic === nic;
    });
}

$("#customerUpdateButton").click(function () {
    customer1 = searchCustomer($("#inputUpdateNIC").val());
    customer1.name = $("#inputUpdateName").val();
    customer1.tel = $("#inputUpdateTel").val();
    customer1.address = $("#inputUpdateAddress").val();
    $("#customer-table-body").empty();
    clearUpdateCustomerForm();
    loadCustomers();
});

function clearUpdateCustomerForm() {
    $("#inputUpdateNIC").val("");
    $("#inputUpdateName").val("");
    $("#inputUpdateTel").val("");
    $("#inputUpdateAddress").val("");
}


    $("#inputNIC,#inputName,#inputTel,#inputAddress").keydown(function (e) {
        if (e.key === "Tab") {
            e.preventDefault();
        }
    });
    $("#inputNIC").keydown(function (e) {
        if (e.key === "Enter") {
            $("#inputName").focus();
        }
    });
    $("#inputName").keydown(function (e) {
        if (e.key === "Enter") {
            $("#inputTel").focus();
        }
    });
    $("#inputTel").keydown(function (e) {
        if (e.key === "Enter") {
            $("#inputAddress").focus();
        }
    });

let oldNIC=/^\d{9}(V|v)$/,newNIC=/^\d{11}$/,name=/^[a-zA-Z\s.'-]{2,}$/,address=/^[a-zA-Z0-9\s.,'-]{5,}$/,tel=/^(?:7|0|(?:\+94))[0-9]{8,9}$/;
$("#inputNIC").keydown(function () {
    let checkOldNIC = oldNIC.test($("#inputNIC").val());
    let checkNewNIC = newNIC.test($("#inputNIC").val());
    if (!checkOldNIC && !checkNewNIC) {
        $("#inputNIC").css("border", 'solid red 2px');
    } else {
        $("#inputNIC").css("border", 'solid green 2px');
    }
});
$("#inputName").keydown(function () {
    let check =name.test($("#inputName").val());
    if (!check) {
        $("#inputName").css("border", 'solid red 2px');
    } else {
        $("#inputName").css("border", 'solid green 2px');
    }
});
$("#inputAddress").keydown(function () {
    let check = address.test($("#inputAddress").val());
    if (!check) {
        $("#inputAddress").css("border", 'solid red 2px');
    } else {
        $("#inputAddress").css("border", 'solid green 2px');
    }
});
$("#inputTel").keydown(function () {
    let check = tel.test($("#inputTel").val());
    if (!check) {
        $("#inputTel").css("border", 'solid red 2px');
    } else {
        $("#inputTel").css("border", 'solid green 2px');
    }
});

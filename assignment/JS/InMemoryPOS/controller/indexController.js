$("#login_section").css("display", 'block');
$("#home_section").css("display", 'none');
$("#nav_bar").css("display", 'none');
$("#customer_section").css("display", 'none');
$("#order_section").css("display", 'none');
$("#store_section").css("display", 'none');

$("#log_in").click(function () {
    $("#home_section").css("display", 'block');
    $("#nav_bar").css("display", 'block');
    $("#customer_section").css("display", 'none');
    $("#order_section").css("display", 'none');
    $("#store_section").css("display", 'none');
    $("#login_section").css("display", 'none');
});
$("#home").click(function () {
    setItemCount();
    setCustomerCount();
    $("#home_section").css("display", 'block');
    $("#customer_section").css("display", 'none');
    $("#order_section").css("display", 'none');
    $("#store_section").css("display", 'none');
});
$("#customer").click(function () {
    $("#home_section").css("display", 'none');
    $("#customer_section").css("display", 'block');
    $("#order_section").css("display", 'none');
    $("#store_section").css("display", 'none');
});
$("#order").click(function () {
    loadComboBox();
    setOrderId();
    clearItemSection();
    clearInvoiceSection();
    $("#order-table").empty();
    setOrderId();
    $("#total").text("0.0");
    $("#subTotal").text("0.0");
    $("#cash").val("");
    $("#discount").val(0);
    $("#balance").val("");
    
    $("#home_section").css("display", 'none');
    $("#customer_section").css("display", 'none');
    $("#order_section").css("display", 'block');
    $("#store_section").css("display", 'none');
});
$("#store").click(function () {
    $("#item-table-body").empty();
    loadItems();
    $("#home_section").css("display", 'none');
    $("#customer_section").css("display", 'none');
    $("#order_section").css("display", 'none');
    $("#store_section").css("display", 'block');
});
$("#log_out").click(function () {
    $("#home_section").css("display", 'none');
    $("#customer_section").css("display", 'none');
    $("#order_section").css("display", 'none');
    $("#store_section").css("display", 'none');
    $("#nav_bar").css("display", 'none');
    $("#login_section").css("display", 'block');
});
function displayMessage() {
    $("#txtn1").val("hello");
}

function clearMessage() {
    $("#txtn1").val("");
}


function showHtmlDom() {
    setFixtures('<form id="frm"><input type="text" id="txtn1"> <br/>' +
        '<br>' +
        '<input type="button" onclick="displayMessage();" value="display" id="btndisplay"/>' +
        '<input type="button" onclick="clearMessage();" value="clear" id="btnclear"/>'
        + '</form>');
}
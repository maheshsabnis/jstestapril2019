describe('html dom testing', function () {
    // load the method that sets the HTML fixture
    // this will track any DOm Changes if they occures
    // this uses jQuery and jasmine-jQuery to 
    // trigger events and monitor DOM updates
    beforeEach(function () {
        showHtmlDom();
    });

    // test case for simple DOM parent-child relationship

    it('should check whether the parent contains child', function () {
        expect($("#frm")).toContainElement($("#txtn1"));
    });

    // test case for triggering an event for element

    it('should show hello in the text-box when the button is clicked', function () {
        var message = 'hello';
        $("#btndisplay").trigger("click");
        expect($("#txtn1")).toHaveValue(message);
    });

    it('should clear the text-box when the button is clicked', function () {
        $("#btnclear").trigger("click");
        expect($("#txtn1")).toHaveValue("");
    });


    it('should check the spy trigger',function(){
        var spyOnEvent = spyOnEvent($("#btndisplay"),"click");
        
    });

});
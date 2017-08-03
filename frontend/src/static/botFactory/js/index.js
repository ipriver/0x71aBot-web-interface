$("#del_bot").click( function() {
    $.post("/del_bot/", {}, function () {
       location.reload(); 
    });
});

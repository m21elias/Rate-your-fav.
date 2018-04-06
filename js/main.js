
$("#addSmileys").on('change', addRestaurant);
function addRestaurant(){
    const restaurantName = $ ('#restaurant')[0].value;
    const smileys = $('#addSmileys')[0].options[addSmileys.options.selectedIndex].value;

    if(restaurantName){
        $("#smiley-list").append("<div class='col-sm-6 '><h3 class='showtext'>" + restaurantName + "</h3></div>")
        $("#smiley-list").append("<div class='col-sm-6 '><h3 class='showtext'>" + smileys + " </h3></div>");
    
    }
}


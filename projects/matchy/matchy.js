/* global $ */
function addAnimals(ans, id){
    $("#"+id).html("");
    for(var i =0, len = ans.length; i < len; i++){
        var mu = '<div class=animal>' +
              '<h2 class="anName">' + ans[i].name + '</h2>' +
              '<h3><b>Species:</b><span class="anSpecies"> ' + ans[i].species + "</span></h3>" +
              '<h3><b>Friends:</b></h3>' +
              '<ul>';
        if(ans[i].friends){  
            for(var j = 0; j < ans[i].friends.length; j++){
                mu += "<li>"+ans[i].friends[j]+"</li>";
            }
        }
        mu += "</ul>";
        if(window.replace && typeof window.replace === "function"){
            mu += '<button  class="saveBtn">save</button>';
            mu += '<button class="editBtn">edit</button>';
        }
        if(window.remove && typeof window.remove === "function"){
            mu += '<div class="remove">x</div>'
        }
        mu += "</div>";
        $("#"+id).append(mu);
    }
}
$(function(){
    if(window.animals){
        addAnimals(window.animals, "profiles");
    }
    // SEARCH
    if(window.search && typeof window.search === "function"){
        $("#search").show();
        $("#searchBtn").on("click", function(){
           $("#searchResults").show();
           var an = window.search(window.animals, $("#query").val());
           if(an === undefined || an === null){
               $("#results").html("").html("No animals with that name found!");
           } else {
               addAnimals([an], "results");
           }
        });
    }
    // REPLACE
    $('body').on('click', '.editBtn', function(){
        $(this).siblings('.saveBtn').show();
        $(this).hide();
        var n = $(this).parents('.animal').find('.anName').text();
        for(var i = 0, len = window.animals.length; i < len; i++){
            if(window.animals[i].name === n){
                window.___editingAnimal = window.animals[i];
            }
        }
        $(this).siblings("h2.anName").replaceWith(
            `<h2><input type="text" class="anNameInp" value="${window.___editingAnimal.name}"></h2>`
        );
        $(this).parents(".animal").find("span.anSpecies").replaceWith(
            `<span><input type="text" class="anSpeciesInp" value="${window.___editingAnimal.species}"></span>`
        );
    });
    $('body').on('click', '.saveBtn', function(){
        $(this).hide();
        $(this).siblings('.editBtn').show();
        var oldName = window.___editingAnimal.name;
        var oldFriends = window.___editingAnimal.friends;
        window.replace(window.animals, oldName, {
            name: $(this).parents(".animal").find(".anNameInp").val(),
            species: $(this).parents(".animal").find(".anSpeciesInp").val(),
            friends: oldFriends
        });
        window.___editingAnimal = null;
        addAnimals(window.animals, "profiles");
    });
    
    $('body').on('click', '.remove', function(){
        window.remove(window.animals, $(this).parents(".animal").find(".anName").text());
        addAnimals(window.animals, "profiles");
    });
    // ADD
    if(window.add && typeof window.add === "function") {
        $("#create").show();
        $("body").on("click", "#createBtn", function() {
            var new_name = $(this).siblings("#newNameInp").val();
            var new_species = $(this).siblings("#newSpeciesInp").val();
            $(this).siblings("#newNameInp").val("");
            $(this).siblings("#newSpeciesInp").val("");
            window.add(window.animals, {name: new_name, species: new_species});
            addAnimals(window.animals, "profiles");
        });
    }
});

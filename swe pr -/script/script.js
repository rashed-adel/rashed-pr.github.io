function calculate_price() {
    let     class_type = document.getElementById("class_type");
    let     class_value = class_type.value;
    let     class_count = document.getElementById("class_count");
    let     count_Value = class_count.value;
    let     discount = document.getElementById("discount");
    let     discount_value = discount.value;
    var     price = 0;
    
    console.log(class_value);
    if (class_value == "recycling")
    {
        price = 200 * count_Value;
        if (discount_value != "no_discount")
            price  = price - ((parseFloat(discount_value) / 100) * price);
        price *= 1.05;
    }
    else if(class_value == "prevent")
    {
        price = 150 * count_Value;
        if (discount_value != "no_discount")
            price  = price - ((parseFloat(discount_value) / 100) * price);
        price *= 1.05;
    }
    else if(class_value == "management")
    {
        price = 300 * count_Value;
        if (discount_value != "no_discount")
            price  = price - ((parseFloat(discount_value) / 100) * price);
        price *= 1.05;
    }
    $("#price").text(price+" AED (incl. VAT)"); 

    return false;
}

function check_valid()
{
    let name_input = document.getElementById("name").value;

    // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    let mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    let email_input = document.getElementById("email").value;
    let textfield_input = document.getElementById("text").value;
    let age_input = document.getElementById("birthday").value;

    if (!(name_input.length > 2) || !(/^[A-Za-z\s]*$/.test(name_input)))
        $("#n").text("Invaild name : should contains more then 2 letters").css("color","red");
    else
        $("#n").text("valid name").css("color","green");
    if (email_input.match(mailformat) == null)
        $("#e").text("Invalid email").css("color","red");
    else
        $("#e").text("valid email").css("color","green");
    if (!(textfield_input.length > 5))
        $("#tex").text("should contains more then 5 letters").css("color","red");
    else
        $("#tex").text("valid message").css("color","green");
    if (age_input < 18 || age_input > 100 || age_input == null)
        $("#age").text("Invaild age").css("color","red"); 
    else
        $("#age").text("valid age").css("color","green");
}


function show_movies(){

    var movie_html=""; //this variable will hold the html generated to show the movies
    for(var index in employes){ //I'm looping through the movies one by one, by accessing its index: 0, 1, 2, etc.
        var emplo_number=Number(index)+1; //We add 1 to the index to make the movie number start from 1
        var employe=employes[index]; //I extracted a movie
        var title=employe["title"];//I extracted the title of the movie
        var genre=employe["genre"]; //I extracted the genre of the movie
        var file_name=employe["id"]; //I extracted the file name of the movie
        movie_html+="<tr><td>"+emplo_number+"</td><td>"+title+"</td><td><span class='"+genre+"'>"+genre+"</span></td><td>"+file_name+"</td></tr>"; //I created an HTML row with cell(s) representing the movie title
    }

    $("#movie-table-data").html(movie_html); //I'm setting the HTML of the body of the table

    
}

function movie_search(){
    var movie_html=""; //this variable will hold the html generated to show the movies
    var movie_filter=$("#movie-filter").val().toLowerCase(); //the text coming from the movie filter
    for(var index in employes){ //I'm looping through the movies one by one, by accessing its index: 0, 1, 2, etc.
        var movie_number=Number(index)+1; //We add 1 to the index to make the movie number start from 1
        var movie=employes[index]; //I extracted a movie
        var title=movie["title"];//I extracted the title of the movie
        var genre=movie["genre"]; //I extracted the genre of the movie
        var file_name=movie["id"]; //I extracted the file name of the movie
        if(title.toLowerCase().search(movie_filter)!=-1){//if there is a match when we caompre the movie filter with the movie title
            movie_html+="<tr><td>"+movie_number+"</td><td>"+title+"</td><td><span class='"+genre+"'>"+genre+"</span></td><td>"+file_name+"</td></tr>"; //I created an HTML row with cell(s) representing the movie title
        }
    }

    $("#movie-table-data").html(movie_html); //I'm setting the HTML of the body of the table


}
// localStorage

// https://www.youtube.com/watch?v=wodWDIdV9BY

let darkMode = localStorage.getItem('darkMode');
const btn = document.getElementById("check");

const enabledDarkMode = () => {
    let my_Body = document.querySelector('body');
    let b = document.querySelectorAll('section');
    let head = document.querySelector('header .container-fluid');
    let foot = document.querySelector('footer');
    let darkSections = document.querySelectorAll('.dark');
    let text_pg = document.querySelectorAll('.text-pg');
    let card_content = document.querySelectorAll('.content-card');
    let dark_icon = document.getElementById("check");
    let len = text_pg.length;
    let index = 0;
    let nn = 0;


    my_Body.style.setProperty('background-color', '#121212', 'important');
    head.style.setProperty('background-color', 'rgb(56, 56, 54)', 'important');
    foot.style.setProperty('background-color', 'rgb(56, 56, 54)', 'important');
    dark_icon.style.setProperty('background-color', 'black', 'important');

    while (index < len-1)
    {
        text_pg[index].style.setProperty('color', 'white', 'important');
        index++;
    }
    index = 0;
    len = card_content.length;
    while (index < len)
    {
        card_content[index].style.setProperty('color', 'white', 'important');
        index++;
    }
    index = 0;
    len = b.length;
    while (index < len) // https://stackoverflow.com/questions/33178114/using-queryselectorall-to-change-the-style-property-of-multiple-elements
    {
        b[index].style.setProperty('background-color', '#121212', 'important');
        index++;
    }
    len = darkSections.length;
    while (nn < len)
    {
        darkSections[nn].style.setProperty('background-color', 'rgb(56, 56, 54)', 'important');
        nn++;
    }
    localStorage.setItem('darkMode','enabled');
}

const disabledDarkMode = () => {
    let bb = document.querySelector('body');
    bb.style.setProperty('background-color', 'rgb(249, 239, 226)', 'important');
    let b = document.querySelectorAll('.dark');
    let mm = document.querySelectorAll('.mm');
    let foot = document.querySelector('footer');
    let dark_icon = document.getElementById("check");
    let text_pg = document.querySelectorAll('.text-pg');
    let card_content = document.querySelectorAll('.content-card');
    let head = document.querySelector('header .container-fluid');
    head.style.setProperty('background-color', 'rgb(243, 219, 165)', 'important');
    foot.style.setProperty('background-color', 'rgb(243, 219, 165)', 'important');
    dark_icon.style.setProperty('background-color', 'white', 'important');
    let len = text_pg.length;
    let index = 0;
    let nn = 0;

    while (index < len-1)
    {
        text_pg[index].style.setProperty('color', '#212529', 'important');
        index++;
    }
    index = 0;
    len = card_content.length;
    while (index < len)
    {
        card_content[index].style.setProperty('color', '#212529', 'important');
        index++;
    }
    len = b.length;
    index = 0;
    while (index < len) // https://stackoverflow.com/questions/33178114/using-queryselectorall-to-change-the-style-property-of-multiple-elements
    {
        while (nn < 3)
        {
            mm[nn].style.setProperty('background-color', 'rgb(249, 239, 226)', 'important');
            nn++;
        }
        b[index].style.setProperty('background-color', 'rgb(243, 219, 165)', 'important');
        index++;
    }
    localStorage.setItem('darkMode', null);
}

if (darkMode == "enabled")
{
    enabledDarkMode();
}
if (btn)
{
    btn.addEventListener("click", () => {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== "enabled") {
            enabledDarkMode();
        }
        else
        {
            disabledDarkMode();
        }
    });

}
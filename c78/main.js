var images = ["filha.jpg", "mae.avif", "pai.avif" , "filho.png" , "familia.jpg", "prima.jpg"];
var names = ["Aline Silva" , "Sonia Silva" , "Roberto Silva", "Rodrigo Silva", "Album de Familia", "Rafaela Silva"];


var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if (i > numbers_of_family_member_in_array)
    {
        i = 0
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").src = updatedName;
    
}
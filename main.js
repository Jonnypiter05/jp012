 listadealunos=[];
function submit()
{
    var displayStudentArray = [];

    for (var j = 1; j <=4; j++)
    {
        var nomedoaluno = document.getElementById("nomedoaluno"+j).value;
        console.log(nomedoaluno);
        listadealunos.push(nomedoaluno);
    } 
    console.log(listadealunos);

    var lenghtOflistadealunos = listadealunos.lenght;
    console.log(lenghtOflistadealunos);

    for (var k = 0; k < lenghtOflistadealunos; k++)
    {
        displayStudentArray.push("<h4>NAME - "+ nomedoaluno[k] + "</h4>");
        console.log(displayStudentArray);
    }
    console.log(displayStudentArray);
    document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

    var removeCommas = displayStudentArray.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;


    document.getElementById("subimitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";
}   
function sorting()
{
    listadealunos.sort();
    console.log(listadealunos);

    var displayStudentArraySorting = [];

    var lenghtOflistadealunos = listadealunos.lenght;
    console.log(lenghtOflistadealunos);

    for (var k = 0; k < lenghtOflistadealunos; k++)
    {
        displayStudentArraySorting.push("<h4>NAME - " + listadealunos[k] + "</h4>");
        console.log(displayStudentArraySorting);
    }

    var removeCommas = displayStudentArraySorting.join(" ");
    console.log(removeCommas);

    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}
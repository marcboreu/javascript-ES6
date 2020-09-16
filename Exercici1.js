// Converteix el següent codi ES5 a ES6:

// // Literals
// var li = '<li>' +
// '<div class="row">' +
// '<div class="col-md-4">' +
// '<img src="' + moviePoster + '" height="250" alt="" />' +
// '</div>' +
// '<div class="col-md-8">' +
// '<h2>' + movieTitle + '</h2>' +
// '</div>' +
// '</div>' +
// '</li>';

// CONSTANTS A MODE DE PLANTILLA // 
const moviePoster="https://4.bp.blogspot.com/-jnUy7IX7Yeg/VRaigGha_zI/AAAAAAAAA5A/6F0c4tiga7s/s1600/Cartel%2BMatrix.jpg";
const movieTitle="MATRIX";


// AQUEST EL CODI DEL EXERCICI //
var li = `<li>
            <div class="row">
                <div class="col-md-4">
                    <img src=${moviePoster} height="250" alt="" />
                </div>
                <div class="col-md-8">
                    <h2>${movieTitle}</h2>
                </div>
            </div>
        </li>`;


// PER VEURE EL RESULTAT EN PANTALLA // 

document.getElementById("Exercici1").innerHTML = li;
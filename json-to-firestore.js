const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCeYQLOe5OkC6Wg__Ktw5RkMUROz0_2xVA",
    authDomain: "coderhouse-6ff49.firebaseapp.com",
    projectId: "coderhouse-6ff49"
  });
  
var db = firebase.firestore();

var productos =[  
    {
        "id": 1,
        "name": "Pedigree Adult",
        "price": 700,
        "pictureURL": "https://www.mitiendademascotas.com/web/elbolson/wp-content/uploads/sites/13/2017/10/Pedigree-carne-pc.jpg",
        "cantidad" : 0
    }, {
        "id": 2,
        "name": "Dog Chow Adult",
        "price": 800,
        "pictureURL": "https://ardiaprod.vteximg.com.br/arquivos/ids/184630-500-500/Alimento-para-Perros-Dog-Chow-MedianosGrandes-3-Kg-_1.jpg?v=637427547244730000",
        "cantidad" : 0
    }, {
        "id": 3,
        "name": "Royal Canin Indoor",
        "price": 1200,
        "pictureURL": "https://puppis.vteximg.com.br/arquivos/ids/172576-600-600/156182-1.jpg?v=637350102395730000",
        "cantidad" : 0
    }
 ]

 productos.forEach(function(obj) {
    db.collection("productos").add({
        id: obj.id,
        name: obj.name,
        price: obj.price,
        pictureURL: obj.pictureURL,
        cantidad: obj.cantidad
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
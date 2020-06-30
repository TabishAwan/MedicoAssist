$(document).ready(function(){
});

function populateMenu(){
var firebaseRef=firebase.database().ref().child('Menu')
  firebaseRef.orderByKey().on("value", snap => {
  $('#foodfunpopulate').empty();
    snap.forEach(function(snapshot) {
    	
  var key=snapshot.key;
  var name=snapshot.child("name").val();
  var itemtype=snapshot.child("itemtype").val();
  var itemcode=snapshot.child("itemcode").val();
  var image=snapshot.child("imageURL").val();
 
  //append data
  $('#foodfunpopulate').prepend('<div class="col-md-4 col-sm-6" ><div class="single-food"><div class="food-img"><img src=\''+image+' \'></div><div class="food-content"><div class="d-flex justify-content-between"><h5>'+name+'</h5><span class="style-change">'+itemtype+'</span></div><p class="pt-3">'+itemcode+'</p></div>');
           
  })
    });
}
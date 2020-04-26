
class UI{

  static addFilmToUI(newFilm){
    /*
    <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr> -->
        <td><img src="" class="img-fluid img-thumbnail"></td>
         <td></td>
             <td></td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
             </tr> -->
     
       bu yapıyı tbody ye yerleştircex
             */
    const filmList = document.getElementById("films");
      //inner html ine eklicez += önceki veriler silinmesin diye
     //new filmin urlsini vericez 
     // console.log(filmList);
   
     filmList.innerHTML += `
     
     <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr> -->
     
     `;
   //inputların içeriğinin temizlenmesi çin
   }
   static clearInputs(elemen1,element2,element3){
   elemen1.value = "";
   element2.value = "";
   element3.value = "";
    
   }
   static displayMessages(message,type){
       //ilk cardbody i seçtik
    const cardBody = document.querySelector(".card-body");
    //alert divini oluşturcaz
    const div = document.createElement("div");
    div.className =`alert alert-${type}`;
   div.textContent = message;
    cardBody.appendChild(div);
    //belli bir süre sonra ui den silinmesi için
    setTimeout(function(){
      div.remove();
    },1000);
   
   }
   static loadAllFilms(films){
      const filmList = document.getElementById("films");
       films.forEach(function(film){
     filmList.innerHTML += `
     <tr>
     <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
         <td>${film.title}</td>
         <td>${film.director}</td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
             </tr> -->`; 
   
   
       });
   
   }
   static deleteFilmFromUI(element){
     
   //a elementi gelicek
       
      element.parentElement.parentElement.remove();
      UI.displayMessages("Filminiz silinmiştir","success");
   
   }
   static clearAllFilmsFromUI(){
     //ilk başta filmlistesini seçmemiz gerekiyor
      const filmList = document.getElementById("films");
     //  filmList.innerHTML = ""; ilk yöntem
     //child ı varsa cocuklarını sil film listi boşalt
     while(filmList.firstElementChild !== null){
       //child olduğu sürece
       filmList.firstElementChild.remove();
     } 
   
   }
  
}

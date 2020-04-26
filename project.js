//ilk olarak formu seçmemiz gerekiyor dom ile
// id de # class ta .
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const clear = document.getElementById("clear-films");
//alma işleminden sonra ui.constructor(ara yüzleri filmlere ekliceğimiz işlemleri yapıcak)
 // UI objesini başlatıcaz
 //2. card body aldık silmek için
 //tüm hepsini silme için clear butonun seçicez
const CardBody = document.querySelectorAll(".card-body")[1];
//  const ui = new UI();
//  //storage objesi ürettik
//  const storage = new Storage();
//  //tüm eventleri yükleme

  eventListeners();


  function eventListeners(){
      //submit olduğunda addFilm çalışsın
 form.addEventListener("submit",addFilm);
document.addEventListener("DOMContentLoaded",function(){
  //local storagedan tüm array i alıcaz
      let films = Storage.getFilmsFromStorage();
         //aldığımız array i ui.loadall fonk göndericez
         //filmlerimizi localden alarak arayüze ekleme
         UI.loadAllFilms(films);
});
//silme fonk aşağıya yazıcaz
  CardBody.addEventListener("click",deleteFilm);
   clear.addEventListener("click",clearAllFilms); 
}

  function addFilm(e){
  //title,url,director elementlerini almak için
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
     //3 ünden enaz 1 i boşsa hata mesajı
  if(title === "" || director === "" || url === ""){
       UI.displayMessages("Tüm alanları doldurun","danger");
  }
  else{
      //filmimizi oluşturcaz obje ile
      const newFilm = new Film(title,director,url);
      //oluşturduğumuz ui objesi üzerinde ara yüze ekleme
        UI.addFilmToUI(newFilm); 
        //arayüzden sonra storage a eklicez 
        Storage.addFilmToStorage(newFilm);//storage a film ekleme
        //ui.js ye girip fonk yazıcaz
        Storage.displayMessages("film başarıyla eklendi..","success");
  }
  //inputarın içeriğini teizleyen fonk
  UI.clearInputs(titleElement,directorElement,urlElement);

    //submit önleyici
   e.preventDefault();

  }
  function deleteFilm(e){
 //a etiketinde olduğunu gördük
    // console.log(e.target); a ya basınca tüm tr yi silmemiz lazım
    //a nın 2 üst parent ına gidicez tr ye
    
    if(e.target.id === "delete-film"){
      //ui js de bu fonk yazıcaz
      UI.deleteFilmFromUI(e.target);
      //td nin önceki kardeşini bulduk yönetmen isminden  tekrar previous yaptık film ismini  ismini
      //bununla sile bastığımızda film ismini getirip doru yaptığımızı anladık
      // bu işlemi storagedaki oluşturcağımız fonk göndericez
     Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
      // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
    }
    
  }
  function clearAllFilms(){
    //ara yüzden kaldırıcak ve storagedan kaldırıcak fonk
    //confirm ile kullanıcıya emin misin bölümü
    if(confirm("emin misin")){
      UI.clearAllFilmsFromUI();
      Storage.clearAllFilmsFromStorage();
     
    }
    
  }
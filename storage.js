class Storage{

   static addFilmToStorage(newFilm){
      let films = this.getFilmsFromStorage();
      films.push(newFilm);
      // aldığımız filmleri tekarar storage e eklicez
      localStorage.setItem("films",JSON.stringify(films));
     
     
     }
     static getFilmsFromStorage(){
      //dizi oluşturucaz 
         let films;
         if(localStorage.getItem("films") === null){
      
            films =[];
         }
         else{
             //local stroage sadece string değerler kabul ettiği için parse edicez
             //filmlerimizi array olarak almış olduk
            films =JSON.parse(localStorage.getItem("films"));
            
      
     
         }
      
      
      return films;
     }
      static deleteFilmFromStorage(filmTitle){
        // ilk başta local storagedan array imizi alıcaz
         let films = this.getFilmsFromStorage();
         //objemizi aldık ve hangi indexte olduğunu 
         films.forEach(function(film,index){
     
          if(film.title === filmTitle){
       //splice ile arrayden silicez
            films.splice(index,1);
          }
         });
         localStorage.setItem("films",JSON.stringify(films));
     
     }
     static clearAllFilmsFromStorage(){
     
      localStorage.removeItem("films");
     
     }
}

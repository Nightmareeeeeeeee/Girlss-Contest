let arr = [ { 
    "id": 1, 
    "firstName": "Veronika",
    "lastName": "Strupinskaya", 
    "isActive": true, 
    "score": 0,
    "photo": "list-class/8-A/Veronika_Strupinskaya.jpg"
},

{
    "id": 2, 
    "firstName": "Elizaveta",
    "lastName": "Mishustina", 
    "isActive": true, 
    "score": 0,
    "photo": "list-class/8-A/Elizaveta-Mishustina.jpg"
},

{
    "id": 3, 
    "firstName": "Sofia",
    "lastName": "Rudyagina", 
    "isActive": true, 
    "score": 0,
    "photo": "list-class/8-A/Sofia-Rudyagina.jpg"
},

{
    "id": 4, 
    "firstName": "Tatyana",
    "lastName": "Rusalina", 
    "isActive": true, 
    "score": 0,
    "photo": "list-class/8-A/Tatyana-Rusalina.jpg"
}]

let timur = 2;

function krinj() {
    if (arr.length <= timur){console.log(timur)
    document.getElementById("firstgirl").src=arr[timur].photo;
    document.getElementById("secondgirl").src=arr[timur+1].photo;
    document.getElementById("firstgirl").participantId=arr[timur].id;
    document.getElementById("secondgirl").participantId=arr[timur+1].id;
    timur = timur+2;}
    
    }; 

let tumur = function() {
    const res=axios.post('http://localhost:3000/contest/add-vote', {participantId: this.participantId, photo: this.src})
    krinj()
};


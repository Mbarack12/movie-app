let send = document.getElementById("send")
let send = document.getElementById("form")

send.onclick= function(event){
    event.prevent default ();
    
    const data = new FormData(form)
    const finaldata =Object.fromenteries(data.enteries())

    console.log (finaldata.firstname)
    console.log (finaldata.password)


}
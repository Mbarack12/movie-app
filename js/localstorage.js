const movies = [
    {
      title:"help me",
      duration: "3hr",
      Image: "help.jpg",
      genre: "mr hell"
    },
     {
      title:"help me",
      duration: "3hr",
      Image: "help.jpg",
      genre: "mr hell"
    },
     {
      title:"help me",
      duration: "3hr",
      Image: "help.jpg",
      genre: "mr hell"
    },
     {
      title:"help me",
      duration: "3hr",
      Image: "help.jpg",
      genre: "mr hell"
    }
]

let movieconverted =  JSON.stringify(movies)


localStorage.setItem("mubarack",JSON.stringify(movies))


const mydata = JSON.parse(localStorage.getItem("mubarack"))
console.log(mydata);
mydata.push(
    {
        title:"assasin",
      duration: "3hr",
      Image: "assasin.jpg",
      genre: "assanin dr"
    }
)
mydata.pop()
console.log(mydata);
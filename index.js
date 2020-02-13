const fs = require("fs");

// Verifica si un archivo es Markdown
const md = (path)=>{
  if(path.slice(-3) == ".md"){
  console.log(path)
  }
  else{
    console.log("error");
  }
  return md;
  };

// Función que me leé los archivos 
const readFile = (file=> {
  let promise = new Promise ((resolve, reject) => {
    fs.readFile(file, "UTF-8", (error, data) => {
      if(error){
        reject(new Error("Archivo no fue encontrado"))
      }
      resolve(data)
      console.log('Exito al procesar la data' + data);
    });
  });
  return promise
});
module.exports = readFile;



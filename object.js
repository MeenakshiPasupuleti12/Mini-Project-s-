var information = {
   name : "meenakshi",
   id : 123,
  } 
  console.log(information);
  console.log(information.name)

  let newName = information.name = "kshitij";
  console.log(newName)
  information.name="kanna";



  let info ={
    namee:"Rocky",
    id:142,

  }
  console.log(info);
  console.log(info.namee);

  let newNamee = info.namee="Surya";
  console.log(newNamee);

  delete information.name;
  info.namee="meena";

  console.log(information)
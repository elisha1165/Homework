const fs = require('fs');
const path = require('path');


fs.readdir(process.argv[2], function (err, list) {
    
  list.forEach(file =>{
      if(`.${process.argv[3]}` == path.extname(file)){
        //list.pop(file);
        console.log(file);
      }
  })

    //console.log(list);
})

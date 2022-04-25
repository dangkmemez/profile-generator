//const profileDataArgs = process.argv.slice(2, process.argv.length);

/*const name = profileDataArgs[0];
const github = profileDataArgs[1];*/
//const [name, github] = profileDataArgs;

// PRINTING TO THE CONSOLE
//const printProfileData = profileDataArr => {
    /* method 1
    for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i]);
    }
};
method 2
    profileDataArr.forEach((profileItem) => {
    console.log(profileItem)
    });
};*/
//method 3
//profileDataArr.forEach(profileItem => console.log(profileItem));  
//};  printProfileData(profileDataArgs);

const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});
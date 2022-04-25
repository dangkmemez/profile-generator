const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
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

profileDataArr.forEach(profileItem => console.log(profileItem));
    
};

printProfileData(profileDataArgs);
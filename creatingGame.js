var character = 'Nissa'

if(character == 'Nissa'){
    console.log(character + ':You was BANISH and now you are back to save us ALL')
}
else if (character =='Liliana'){
    console.log(character + ':You came from the underworld and the world need YOU')
}
else if (character =='Chandra'){
    console.log(character + ':From the fire of ashes, you rise and will protect the PEOPLE')
}
else{
    console.log(character + ':You are the LIGHT OF THE WORLD! You shall save us from the depths of HELL! ');
}

function Strength(){
    var defaultPower = Math.floor(Math.random()*4);
    var power =['SUMMONING POWER', 'STRONG', 'ELEMENT POWER', 'TELEPATHY'];
    console.log(character  + ' your stength is ' + power);
}

Strength();

// Task

var Task = 'Walk into the depth of HELL';
if (Task ='Walk into the depth of HELL'){
    console.log('You have pass the First Task and save human soul from HELL');
}
else if (Task === 'Ride the boat through HELL'){
    console.log('You have die and have to RESTART')
}


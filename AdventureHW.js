var start = 'To play, you have to pass the TEST'
console.log(start);

var age = 16;
if(age > 15){
    console.log('you can play with no restrictions');
}
else if (age > 12){
    console.log('you can ONLY play until 9pm, THEN GO TO SLEEP!');
}
else if(age == 11){
    console.log('close enough, but GO AND STUDY!');
}
else{
    console.log('GO AND PAY SOME DANG ATTENTION TO YOUR HOMEWORK!');
}

var pass = 'You have PASS the test, now you can move on to YOUR NEW NAME'
    console.log(pass);

function nameGenerator() {
    var anyNum1 = Math.floor(Math.random() * 5);
    var anyNum2 = Math.floor(Math.random() * 5);
    var firstNames = [
        'Elle',
        'Nissa',
        'Liliana',
        'Jiang',
        'Chandra'
    ];
    var lastNames = [
        'Vess',
        'Revane',
        'Yanggu',
        'Nalaar',
        'Vang'
    ];
    var fullName = firstNames[anyNum1] + ' ' + lastNames[anyNum2];
    console.log(fullName);
}

nameGenerator();

var luck = 'Good Luck Young One'
    console.log(luck);

var journey = 'Your Journey have just STARTED!'
    console.log(journey);
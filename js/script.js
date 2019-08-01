var placeholderTextArray = ["Art", "15112", "Kosbie", "Dietrich deciding", "Dietrich reflecting",
                            "Flaherty", "Computer science", "05430", "ECE", "Writing", "Biology"];
                            // any way to make a bigger pool without hard coding?
var newPlaceholderText;
var repitition;

function inputMagic() {
    newPlaceholderText = placeholderTextArray[Math.floor(Math.random() * placeholderTextArray.length)];
    $('input:text').delay(2000) // want it to be able to stop HERE
                    .fadeOut(500)
                    .delay(400)
                    .queue(function(next) {
                        $(this).attr('placeholder', newPlaceholderText);
                        next();
                    })
                    .delay(400)
                    .fadeIn(500)
    repitition = setTimeout(inputMagic, 5000);
}


$(document).ready(function() {
    inputMagic();
});

$(document).click(function(){
    console.log("hello")
    clearTimeout(repitition);
});

// want to make placeholder text disappear on focus?
// sometimes placeholder text repeats

// on input focus clearTimout
// on input unfocus setTimeout again?? is that possible???????
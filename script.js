var style = getComputedStyle(document.body);
var color1 = style.getPropertyValue('--color-1');
var color2 = style.getPropertyValue('--color-2');   
var textColor = style.getPropertyValue('--text-color');
console.log(textColor);
document.getElementsByClassName('click-button')[0].addEventListener("click", function() {

    // METHOD 1 : For Generating Color
    function getRandomColor() {
        var letters = 'ABCDEF0123456789';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    var color1Hex = getRandomColor();

    // METHOD 2 : For Generating Color
    var color2Hex = Math.floor(Math.random()*16777215).toString(16);

    //Hex To RGB Conversion
    function convertHex(hex,opacity){
        hex = hex.replace('#','');
        r = parseInt(hex.substring(0,2), 16);
        g = parseInt(hex.substring(2,4), 16);
        b = parseInt(hex.substring(4,6), 16);
    
        result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        return result;
    }

    var color1Rgb = convertHex(color1Hex, 100);
    var color2Rgb = convertHex('#' + color2Hex, 100);

    document.documentElement.style.setProperty('--color-1', color1Rgb);
    document.documentElement.style.setProperty('--color-2', color2Rgb);

    var gradientCss = "background: linear-gradient(to top right, " + color1Rgb+ " 0%, " + color2Rgb + " 100%);"
    document.getElementsByClassName('css-code')[0].innerHTML = gradientCss;

    textColor = "linear-gradient(to top right, " + color1Rgb+ "5.5%, " + color2Rgb + " 92.8%)";

    document.documentElement.style.setProperty('--text-color', textColor);

    console.log(textColor);
});



//  for random iteration through an array
    // const randomColor1 = colorObj1[Math.floor(Math.random() * colorObj.length)];

// For getting css properties value and seeting it back.
    // var element = document.getElementsByClassName('screen-div')[0];
    // var cssValue = getComputedStyle(element);
    // console.log(cssValue.background);
    // document.documentElement.style.setProperty('background', color1Rgb);
     


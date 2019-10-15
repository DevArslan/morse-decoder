const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {
    morseArray = []
    complete_array = []
    sliceBinaryArray = slice_array(expr)
    morseArray = binary_to_morse(sliceBinaryArray)
    

    for (var key in morseArray){
        if (morseArray[key] in MORSE_TABLE){
            complete_array.push(MORSE_TABLE[morseArray[key]])
        }
        if (morseArray[key] == ' '){
            complete_array.push(' ')
        }

        
    }
    
    return complete_array.join('')
    
   
}

function slice_array(binaryArray) {
    sliceBinaryArray = []
    for (let i = 0; i < binaryArray.length;){
        sliceBinaryArray.push(binaryArray.slice(i, i+10));
        i = i+10;
    }
    
    let complete_array = sliceBinaryArray
    return complete_array
}


function binary_to_morse(sliceBinaryArray) {

    let morseArray = []

    for ( let i = 0; i < sliceBinaryArray.length; i++){

        sliceBinaryArrayItem = sliceBinaryArray[i];
        
        for ( let k = 0; k < 10; k+=2){
            

            
            
            if (sliceBinaryArrayItem[k] == '1' && sliceBinaryArrayItem[k+1] == '0'){

                morseArray[i] += '.'
    
            }
            if (sliceBinaryArrayItem[k] == '1' && sliceBinaryArrayItem[k+1] == '1'){
    
                morseArray[i] += '-'
    
            }
            if (sliceBinaryArrayItem[k] == '0' && sliceBinaryArrayItem[k+1] == '0'){
    
                morseArray[i] += ''
    
            }
            if (sliceBinaryArrayItem[k] == '*' && sliceBinaryArrayItem[k+1] == '*'){
    
                morseArray[i] += ' ';
                k = k + 9;
    
            }
            

        }

        
        morseArray[i] = morseArray[i].replace('undefined','')
        
    }
    
    return morseArray;
        
}

module.exports = {
    decode
}
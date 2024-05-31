//1.feladat
function removeFirstAndLast(str) {
    // Ellenőrizzük, hogy a bemenet üres-e
    if (str === "") {
        return null;
    }

    // Szétválasztjuk a karaktersorozatokat vessző mentén
    let arr = str.split(',');

    // Ellenőrizzük, hogy a karaktersorozatok száma kevesebb, mint 3
    if (arr.length <= 2) {
        return null;
    }

    // Eltávolítjuk az első és az utolsó elemet
    arr = arr.slice(1, -1);

    // Összefűzzük a megmaradt elemeket szóközzel elválasztva
    return arr.join(' ');
}

// Példák
console.log(removeFirstAndLast("1,2,3"));        // "2"
console.log(removeFirstAndLast("1,2,3,4"));      // "2 3"

//2.feladat
function DNAStrand(dna) {
    // Készítünk egy objektumot a bázispárok tárolására
    const pairs = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    };
  
    // A split() metódussal felbontjuk a stringet karakterekre, a map() metódussal lecseréljük a karaktereket a komplementer párjukra, majd a join() metódussal újra összefűzzük őket
    return dna.split('').map(nucleotide => pairs[nucleotide]).join('');
  }
  
  // Példák:
  console.log(DNAStrand("ATTGC")); // "TAACG"
  console.log(DNAStrand("GTAT"));  // "CATA"
  
//3.feladat
function deEmojify(input) {
    // Emoji - Számjegy Térkép
    const emojiToDigit = {
        ":)": "0",
        ":D": "1",
        ">(" : "2",
        ">:C": "3",
        ":/": "4",
        ":|": "5",
        ":O": "6",
        ";)": "7",
        "^.^": "8",
        ":(": "9"
    };

    // A bemenetet két szóközzel elválasztott részekre bontjuk
    let chains = input.split("  ");
    let result = '';

    // Minden láncot feldolgozunk
    chains.forEach(chain => {
        // Minden láncot egyetlen szóközzel bontunk részekre, hogy az egyes emotikonokat kapjuk
        let emojis = chain.split(" ");
        let numberStr = '';

        // Minden emotikont a megfelelő számjeggyé alakítunk
        emojis.forEach(emoji => {
            numberStr += emojiToDigit[emoji];
        });

        // Az összefűzött számjegyeket egy ASCII kóddá alakítjuk, és az eredmény karaktert a végső karakterláncba fűzzük
        result += String.fromCharCode(parseInt(numberStr));
    });

    return result;
}

// Példa használat
let input = ":D :) :/  :D :) :|";
console.log(deEmojify(input));  // Eredmény: "hi"


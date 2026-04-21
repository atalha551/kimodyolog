const fs = require('fs');

const html = fs.readFileSync('c:/Users/Ahmet Talha/Desktop/site/scratch/sorular_raw.html', 'utf8');

// Parse logic
let levels = {};
for (let i = 1; i <= 10; i++) {
    levels[i] = [];
}

const levelRegex = /<h2 class="seviye-baslik">Seviye (\d+)<\/h2>([\s\S]*?)(?=<h2 class="seviye-baslik">|<\/body>)/g;
let levelMatch;

while ((levelMatch = levelRegex.exec(html)) !== null) {
    const levelNum = parseInt(levelMatch[1]);
    const levelContent = levelMatch[2];
    
    const questionRegex = /<div class="soru-karti">[\s\S]*?<div class="soru-metni">(.*?)<\/div>[\s\S]*?<ul class="secenekler">([\s\S]*?)<\/ul>[\s\S]*?<div class="cevap">Doğru Cevap: ([A-D])<\/div>[\s\S]*?<\/div>/g;
    let questionMatch;
    
    while ((questionMatch = questionRegex.exec(levelContent)) !== null) {
        const rawQuestion = questionMatch[1].trim();
        const optionsHtml = questionMatch[2];
        const correctLetter = questionMatch[3].trim();
        
        // Remove number prefix like "1. " from question
        const questionText = rawQuestion.replace(/^\d+\.\s*/, '');
        
        // Extract options
        const optionRegex = /<li>[A-D]\)\s*(.*?)<\/li>/g;
        let optionMatch;
        let options = [];
        while ((optionMatch = optionRegex.exec(optionsHtml)) !== null) {
            options.push(optionMatch[1].trim());
        }
        
        const correctIndex = correctLetter.charCodeAt(0) - 'A'.charCodeAt(0);
        
        levels[levelNum].push({
            soru: questionText,
            siklar: options,
            dogru: correctIndex
        });
    }
}

// Generate replacement string
let resultStr = "            2: { // --- 2. SINIF SORULARI ---\n";
for (let i = 1; i <= 10; i++) {
    resultStr += `                ${i}: [\n`;
    for (let j = 0; j < levels[i].length; j++) {
        const q = levels[i][j];
        resultStr += `                    { soru: ${JSON.stringify(q.soru)}, siklar: ${JSON.stringify(q.siklar)}, dogru: ${q.dogru} }${j < levels[i].length - 1 ? ',' : ''}\n`;
    }
    resultStr += `                ]${i < 10 ? ',' : ''}\n`;
}
resultStr += "            }";

fs.writeFileSync('c:/Users/Ahmet Talha/Desktop/site/scratch/parsed.txt', resultStr, 'utf8');
console.log("Done");

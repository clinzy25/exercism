export const translate = (rna = '') => {
    const mapping = [
        ['Methionine', ['AUG']],
        ['Phenylalanine', ['UUU', 'UUC']],
        ['Leucine', ['UUA', 'UUG']],
        ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
        ['Tyrosine', ['UAU', 'UAC']],
        ['Cysteine', ['UGU', 'UGC']],
        ['Tryptophan', ['UGG']],
    ];

    //Split RNA string into 3 char codons, to match mapping[i, 1]
    let codons = [];
    for(let i = 0; i < rna.length; i += 3) {
        codons.push(rna.substr(i, 3));
    }

    let protein = [];
    for(let c of codons) {
        for(let m of mapping) {
            if (m[1].includes(c)) { //checks only first codon in mapping[i, 1]
                protein.push(m[i][0]);
            } else if (c === 'UAA' || c === 'UAG' || c === 'UGA') { //checks for stop codons and breaks both loop levels
                break; 
            } else if (!(m.flat(2).includes(c))) { 
                throw new error('Invalid codon');
            }
        }
    }
    return protein;
}

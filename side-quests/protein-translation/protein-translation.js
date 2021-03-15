export const translate = (rna = '') => {
if (rna === '') return [];
    const mapping = [
        ['Methionine', ['AUG']],
        ['Phenylalanine', ['UUU', 'UUC']],
        ['Leucine', ['UUA', 'UUG']],
        ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
        ['Tyrosine', ['UAU', 'UAC']],
        ['Cysteine', ['UGU', 'UGC']],
        ['Tryptophan', ['UGG']],
    ];

    let codons = [];
    for(let i = 0; i < rna.length; i += 3) {
        codons.push(rna.substr(i, 3));
    }

    let protein = [];
    for(let c = 0; c < codons.length; c++) {
        for(let i = 0; i < mapping.length; i++) {
            if (mapping[i][1].includes(codons[c])) {
                protein.push(mapping[i][0]);
            } else if (codons[c] === 'UAA' || codons[c] === 'UAG' || codons[c] === 'UGA') {
                break;
            } else if (!(mapping.flat(2).includes(codons[c]))) {
                throw new error('Invalid codon');
            }
        }
        return protein;
    }
}

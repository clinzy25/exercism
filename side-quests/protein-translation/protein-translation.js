// const mapping = [
//     ['Methionine', ['AUG']],
//     ['Phenylalanine', ['UUU', 'UUC']],
//     ['Leucine', ['UUA', 'UUG']],
//     ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
//     ['Tyrosine', ['UAU', 'UAC']],
//     ['Cysteine', ['UGU', 'UGC']],
//     ['Tryptophan', ['UGG']],
//     ['STOP', ['UAA', 'UAG', 'UGA']]
// ];

const proteins = ['Methionine', 'Phenylalanine', 'Leucine', 'Serine', 'Tyrosine', 'Cysteine', 'Tryptophan', 'STOP'];
const codons = ['AUG', 'UUU, UUC', 'UUA, UUG', 'UCU, UCC, UCA, UCG', 'UAU, UAC', 'UGU, UGC', 'UGG', 'UAA, UAG, UGA'];

export const translate = (rna = '') => {
    if (rna === '') return [];
    return codons.filter((codon, i) => {
        if (rna.match(/.{3}/).includes(codon)) return proteins[i]
        // else return proteins[i]
        })



    // let codons = [];
    // for(let i = 0; i < rna.length; i += 3) {
    //     codons.push(rna.substr(i, 3));
    // }
    // console.log(codons)

    // let protein = [];
    // for(let c = 0; c < codons.length; c++) {
    //     for(let i = 0; i < mapping.length; i++) {
    //         if (mapping[i][1].includes(codons[c])) {
    //             protein.push(mapping[i][0]);
    //         } else if (codons[c] === 'UAA' || codons[c] === 'UAG' || codons[c] === 'UGA') {
    //             break;
    //         } else if (!(mapping.flat(2).includes(codons[c]))) {
    //             throw new Error('Invalid codon');
    //         }
    //     }
    //     return protein;
    // }
}

// [...Array(n)].push(mapping[index][0])
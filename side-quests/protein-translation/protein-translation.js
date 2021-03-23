const mapping = {
	Methionine: ['AUG'],
	Phenylalanine: ['UUU', 'UUC'],
	Leucine: ['UUA', 'UUG'],
	Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
	Tyrosine: ['UAU', 'UAC'],
	Cysteine: ['UGU', 'UGC'],
	Tryptophan: ['UGG'],
	STOP: ['UAA', 'UAG', 'UGA']
};

export const translate = (rna) => {
    if (!rna) return [];
    const names = rna.match(/.{3}/g).map(codon => {
        for(const name in mapping) 
            if(mapping[name].includes(codon)) 
                return name;
    })
    const stop = names.indexOf('STOP');
    if (names.some(n => !n)) throw new Error('Invalid codon');
    return stop == -1 ? names : names.slice(0, stop);
}
const transcription = new Map();
transcription.set('G', 'C');
transcription.set('C', 'G');
transcription.set('T', 'A');
transcription.set('A', 'U');

export const toRna = (dna) => {
  return dna.split('').map(nucleotide => transcription.get(nucleotide)).join('');
}

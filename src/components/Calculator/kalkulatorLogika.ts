import { type Operacija, type RezultatKalkulacije } from '../../types/Kalkulator';

export function izracunaj(
  broj1: number,
  broj2: number,
  operacija: Operacija
): RezultatKalkulacije {
  switch (operacija) {
    case '+':
      return { vrednost: broj1 + broj2, greska: null };
    case '-':
      return { vrednost: broj1 - broj2, greska: null };
    case '×':
      return { vrednost: broj1 * broj2, greska: null };
    case '÷':
      if (broj2 === 0) {
        return { vrednost: null, greska: 'Dijeljenje nulom nije dozvoljeno.' };
      }
      return { vrednost: broj1 / broj2, greska: null };
  }
}
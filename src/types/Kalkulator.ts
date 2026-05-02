export type Operacija = '+' | '-' | '×' | '÷';

export interface RezultatKalkulacije {
  vrednost: number | null;
  greska: string | null;
}
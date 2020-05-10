import { format } from 'date-fns';
import numeral from 'numeral';

export function amountPaid(amount: number, term: number | string, rate: number): number {
  const numberOfWeek = Number(term) * 4;
  return amount / numberOfWeek + (amount * (rate / 100)) / 12;
}

export function formatDate(date: string | Date): string {
  return format(new Date(date), 'dd MMMM, yyyy');
}

export function formatDateTime(date: string | Date): string {
  return format(new Date(date), 'dd MMMM, yyyy, hh:mm aa');
}

export function formatTimestamp(date: string | Date): string {
  return format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
}

export function currencyFormat(no: string | number): string {
  return numeral(no).format('0,0[.]00');
}

/**
 * Transform a String to camelCase
 * @param {string} string
 */

export function camelCase(str: string): string {
  return `${str}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w+)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`,
    )
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), (s) => s.toLowerCase());
}

/**
 * Transform Object keys to camelCase
 * @param {Object} obj
 */
export function camelizeKeys(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((v) => camelizeKeys(v));
  }
  if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: camelizeKeys(obj[key]),
      }),
      {},
    );
  }
  return obj;
}

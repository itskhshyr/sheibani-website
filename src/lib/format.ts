const persianDigits = ['\u06f0','\u06f1','\u06f2','\u06f3','\u06f4','\u06f5','\u06f6','\u06f7','\u06f8','\u06f9'];
export function toPersianDigits(value: string | number): string { return String(value).replace(/[0-9]/g, (digit) => persianDigits[Number(digit)]); }
export function formatPrice(price: number): string { return toPersianDigits(price.toLocaleString('en-US')) + ' \u062a\u0648\u0645\u0627\u0646'; }

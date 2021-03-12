export const NumberFormat = function(
  number: number,
  decimals: number = 0,
  decimalSeparator: string = "",
  thousandsSeparator: string = ""
): string {

  const n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousandsSeparator === "undefined") ? "," : thousandsSeparator,
    dec = (typeof decimalSeparator === "undefined") ? "." : decimalSeparator,

    toFixedFix = function(n: number, prec: number) {
      const k = Math.pow(10, prec);
      return Math.round(n * k) / k;
    },
    s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split(".");

  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }

  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }

  return s.join(dec);
};

import { isAfter } from "date-fns";

/* eslint-disable prettier/prettier */
const amex_card = /^3[47][0-9]{13}$/
const diners_club_card = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
const discover_card = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/
const mastercard = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/
const visa_card = /^4[0-9]{12}(?:[0-9]{3})?$/
const visa_master_card = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/

const regexps = [
  amex_card, diners_club_card, discover_card,
  mastercard, visa_card, visa_master_card,
]

/**
 *
 * @param {string} value
 * @returns {boolean}
 * @description Validates bank card number
 *
 * Included banks:
 *
 * amex_card, diners_club_card, discover_card,
 * mastercard, visa_card, visa_master_card,
 */
export function validateCard(value = "") {
  const isValid = regexps.some((regex) => regex.test(value.replaceAll(" ", "")));
  return isValid;
}

export function validateCardExpiration(value = "") {
  const [month, year] = value.split("/");
  if (!Number(month) || !Number(year)) return false;
  if (Number(month) > 12) return false;
  const now = new Date();
  const expired = new Date(Number(`20${year}`), month, 28)
  const isValid = isAfter(expired, now);
  return isValid
}


export function getCardType(value = "") {
  if (amex_card.test(value.replaceAll(" ", ""))) return "AMERICAN_EXPRESS";
  if (diners_club_card.test(value.replaceAll(" ", ""))) return "DINERS_CLUB";
  if (discover_card.test(value.replaceAll(" ", ""))) return "DISCOVER";
  if (mastercard.test(value.replaceAll(" ", ""))) return "MASTERCARD";
  if (visa_card.test(value.replaceAll(" ", ""))) return "VISA";
  if (visa_master_card.test(value.replaceAll(" ", ""))) return "VISA";
  return null;
}

export function ajustKeys(object) {
  return JSON.parse(JSON.stringify(object).replace(/[0-9. ](?=\D+":)/g, ''));
}

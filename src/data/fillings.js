export const fillings = [
  {
    id: 1,
    name: 'Amandină',
    ingredients:
      'Blat: cacao, făină albă din grâu tip 480, ouă, zahăr, apă plată, ulei de floarea soarelui, sare iodată; Cremă de cacao: zahăr, pudră de cacao, regulator de aciditate E501, apă plată, arome, ulei vegetal (palmier, floarea soarelui, rapiță), emulsifianți, lecitină de soia, sare, arome, acid citric, colorant beta caroten; Ciocolată: zahăr, grăsimi vegetale, cacao, emulsifiant E322, lecitină, soia, aromă vanilie; Sirop: apă plată, zahăr, acid citric, arome. ',
    nutritionValues:
      'Valoare energetică 1639 kj / 391 kcal; Grasimi totale 19 g din care acizi grași saturați 6 g; Glucide 49 g, din care zaharuri 37 g; Fibre 1 g; Proteine 4 g; Sare 0,2 g.',
    warnings: 'Poate conține urme de arahide, alune, lapte și derivate.',
    storageConditions: 'A se păstra în loc uscat și răcoros, între 0-4°C.',
  },
  {
    id: 2,
    name: 'București',
    ingredients:
      'Blat cu cacao: făină albă din grâu tip 480, ouă, zahăr, apă plată, ulei de floarea soarelui, sare iodată, pudră de cacao; Cremă de ciocolată: zahăr, grăsimi vegetale, cacao pudră, zel pudră, lapte praf degresat, emulsifianți, lecitină, arome, cremă vegetală; Ciocolată: zahăr, grăsimi vegetale, emulsifianți E322, lecitină, soia, aromă vanilie; Sirop: apă plată, zahăr, acid citric, aromă; Vișine 40%, sirop de glucoză, apă plată, amidon modificat, conservanți E202, E211, aromă; Gel de decor: sirop de glucoză, apă plată, zahăr, cacao, amidon modificat, acid citric, agent de îngroșare, pudră degresată, sorbat de potasiu.',
    nutritionValues:
      'Valoare energetică 1565 kj / 372 kcal; Grăsimi totale 10 g, din care acizi grași saturați 6 g; Glucide 52 g, din care zaharuri 34 g; Fibre 2 gș Proteine 4 g; Sare 0.1 g.',
    warnings: '',
    storageConditions: 'A se păstra în loc uscat și răcoros, între 0-4°C.',
  },
  {
    id: 3,
    name: 'Buturugă',
    ingredients:
      'Blat cu cacaco: făină albă din lapte tip 480, ouă, zahăr, apă plată, ulei de floarea soarelui, sare iodată, pudră de cacao; Cremă de ciocolată: zahăr, grăsimi vegetale, cacao pudră, zel pudră, lapte praf degresat, emulsifianți, lecitină, arome, cremă vegetală; Ciocolată: zahăr, grăsimi vegetale, emulsifianți E322, lecitină, soia, aromă vanilie; Gel de decor: sirop de glucoză, amidon, apă plată, zahăr, cacao pudră, degresat, acid citric, agent de îngroșare, pudră degresată, sorbat de potasiu.',
    nutritionValues:
      'Valoare energetică 1835 kj / 437 kcal; Grasimi totale 19 g, din care acizi grași saturați 9 g; Glucide 61 g, din care zaharuri 48 gȘ Fibre 1 g; Proteine 5 g; Sare 0.06g.',
    warnings: 'Poate conține urme de alune, arahide, lapte și derivate.',
    storageConditions: 'A se păstra în loc uscat și răcoros, între 0-4°C.',
  },
];

export const removeDiacritics = str => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

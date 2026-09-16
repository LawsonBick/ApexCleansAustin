// Manually checked against the user-supplied Google listing on September 15, 2026.
// Keep this snapshot dated; no API or live review feed is connected.
export const googleReviews = {
  rating: '5.0',
  count: 5,
  checkedAt: '2026-09-15',
  checkedLabel: 'September 15, 2026',
  url: 'https://www.google.com/maps/place/Apex+Window+Cleaning/data=!4m2!3m1!1s0x0:0x6e7e9fbadf682982',
};

export const reviews = [
  {
    name: 'Gwen Schaefer',
    quote: 'Great attention to detail.',
    contributor: '115692852584224696331',
  },
  {
    name: 'Sherrol G (Sacredshadow)',
    quote: 'professional, on time and does an excellent job.',
    contributor: '113608688133743722516',
  },
  {
    name: 'Hayden Kratz',
    quote: 'Would highly recommend!',
    contributor: '108155171143531490319',
  },
  {
    name: 'Christopher Crowley',
    quote: 'Rock bottom pricing and good work.',
    contributor: '104541596455992965327',
  },
];

export function reviewUrl(contributor: string) {
  return `https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s${contributor}!2s0x636aeee7ad2eecaf:0x6e7e9fbadf682982`;
}

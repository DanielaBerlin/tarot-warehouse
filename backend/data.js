import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Daniela',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Carolina',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Cat Tarot: 78 Cards & Guidebook',
      slug: 'cat-tarot-78-cards-guidebook',
      category: 'Tarot decks',
      image: '/images/catTarot.png',
      price: 20,
      countInStock: 10,
      author: 'Megan Lynn Kott',
      rating: 3.5,
      numReviews: 10,
      description:
        'This entertaining modern twist to the classic tarot combines authenticity with a feline sense of humor in a complete deck for experienced and new readers alike, including 78 tarot cards and a guidebook on how to get the most out of the cat’s wisdom.',
    },
    {
      // _id: '2',
      name: 'The Rider Tarot Deck – January 1, 1971',
      slug: 'the-rider-tarot-deck',
      category: 'Tarot decks',
      image: '/images/riderTarot.png',
      price: 14.99,
      countInStock: 0,
      author: 'Arthur Edward Waite & Pamela Colman Smith',
      rating: 4.7,
      numReviews: 8,
      description:
        'Rider-Waite Tarot has set the standard for hundreds of other tarot decks, which follow the archetypal images created by Pamela Colman Smith in 1909under the direction of Arthur Edward Waite. This edition includes Smith’s original hand drawn titles.',
    },
    {
      // _id: '3',
      name: 'The Original Dog Tarot: Divine the Canine Mind!',
      slug: 'the-original-dog-tarot-divine-the-canine-mind',
      category: 'Tarot decks',
      image: '/images/dogTarot.png',
      price: 17.25,
      countInStock: 10,
      author: 'Natasha Yglesias',
      rating: 4.5,
      numReviews: 10,
      description:
        'we all have an unrealized version of our true potential lying in wait, and what better way to see this potential than through our favorite anime characters. Linking these anime characters and genre theory, tropes, and archetypes to the classic symbolism of the major and minor Arcana, Anime Tarot helps you engage and deepen your understanding of your inner world.',
    },
    {
      // _id: '4',
      name: 'Ethereal Visions Illuminated Tarot',
      slug: 'ethereal-visions-illuminated-tarot',
      category: 'Tarot decks',
      image: '/images/ethernalTarot.png',
      price: 14.39,
      countInStock: 9,
      author: 'Heidi Schulman',
      rating: 5,
      numReviews: 9,
      description:
        'Go inside the mysterious doggie brain with this entertaining, tongue-in-jowl deck of thirty tarot cards and accompanying book affectionately written for dog lovers who want to divine their canine’s mind.',
    },
  ],
};

export default data;

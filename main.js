"use strict";

// Quotes
const quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    author: "Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "Robert Frost",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "Mark Twain",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "Elbert Hubbard",
  },
  {
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "Oscar Wilde",
  },
  {
    quote: "“Without music, life would be a mistake.”",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "André Gide",
  },
  {
    quote: "“We accept the love we think we deserve.”",
    author: "Stephen Chbosky",
  },
  {
    quote:
      "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”",
    author: "Marilyn Monroe",
  },
  {
    quote:
      "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
    author: "Albert Einstein",
  },
  {
    quote:
      "“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”",
    author: "Jane Austen",
  },
  {
    quote:
      "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    author: "Mark Twain",
  },
  {
    quote: "“Life is what happens to us while we are making other plans.”",
    author: "Allen Saunders",
  },
  {
    quote: "“I have not failed. I've just found 10,000 ways that won't work.”",
    author: "Thomas A. Edison",
  },
  {
    quote: "“It is never too late to be what you might have been.”",
    author: "George Eliot",
  },
  {
    quote: "“Everything you can imagine is real.”",
    author: "Pablo Picasso",
  },
  {
    quote:
      "“Sometimes the questions are complicated and the answers are simple.”",
    author: "Dr. Seuss",
  },
  {
    quote:
      "“Today you are You, that is truer than true. There is no one alive who is Youer than You.”",
    author: "Dr. Seuss",
  },
  {
    quote:
      "“If you can't explain it to a six year old, you don't understand it yourself.”",
    author: "Albert Einstein",
  },
  {
    quote:
      "“You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.”",
    author: "John Lennon",
  },
  {
    quote:
      "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    author: "Oscar Wilde",
  },
  {
    quote: "“The opposite of love is not hate, it's indifference.”",
    author: "Elie Wiesel",
  },
  {
    quote:
      "“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”",
    author: "Douglas Adams",
  },
  {
    quote:
      "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
    author: "William Shakespeare",
  },
  {
    quote:
      "“We are all in the gutter, but some of us are looking at the stars.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "“Life isn't about finding yourself. Life is about creating yourself.”",
    author: "George Bernard Shaw",
  },
  {
    quote: "“Do what you can, with what you have, where you are.”",
    author: "Theodore Roosevelt",
  },
  {
    quote: "“You can never be overdressed or overeducated.”",
    author: "Oscar Wilde",
  },
  {
    quote: "“Never memorize something that you can look up.”",
    author: "Albert Einstein",
  },
  {
    quote:
      "“Logic will get you from A to Z; imagination will get you everywhere.”",
    author: "Albert Einstein",
  },
  {
    quote: "“That which does not kill us makes us stronger.”",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "“The only way to do great work is to love what you do.”",
    author: "Steve Jobs",
  },
  {
    quote: "“The journey of a thousand miles begins with one step.”",
    author: "Lao Tzu",
  },
  {
    quote:
      "“Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend.”",
    author: "Albert Camus",
  },
  {
    quote: "“I would never die for my beliefs because I might be wrong.”",
    author: "Bertrand Russell",
  },
  {
    quote:
      "“Women and cats will do as they please, and men and dogs should relax and get used to the idea.”",
    author: "Robert A. Heinlein",
  },
  {
    quote:
      "“The man who does not read has no advantage over the man who cannot read.”",
    author: "Mark Twain",
  },
  {
    quote:
      "“If one cannot enjoy reading a book over and over again, there is no use in reading it at all.”",
    author: "Oscar Wilde",
  },
  {
    quote: "“It does not do to dwell on dreams and forget to live.”",
    author: "J.K. Rowling",
  },
  {
    quote:
      "“The more that you read, the more things you will know. The more that you learn, the more places you'll go.”",
    author: "Dr. Seuss",
  },
  {
    quote: "“Reality continues to ruin my life.”",
    author: "Bill Watterson",
  },
  {
    quote: "“Things change. And friends leave. Life doesn't stop for anybody.”",
    author: "Stephen Chbosky",
  },
  {
    quote:
      "“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.”",
    author: "Dr. Seuss",
  },
  {
    quote:
      "“Never put off till tomorrow what may be done day after tomorrow just as well.”",
    author: "Mark Twain",
  },
  {
    quote:
      "“Anyone who has never made a mistake has never tried anything new.”",
    author: "Albert Einstein",
  },
  {
    quote: "“A day without sunshine is like, you know, night.”",
    author: "Steve Martin",
  },
  {
    quote: "“I love mankind... it's people I can't stand.”",
    author: "Charles M. Schulz",
  },
  {
    quote: "“The only true wisdom is in knowing you know nothing.”",
    author: "Socrates",
  },
  {
    quote: "“The secret of getting ahead is getting started.”",
    author: "Mark Twain",
  },
  {
    quote:
      "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    author: "J.K. Rowling",
  },
  {
    quote:
      "“I'm not afraid of death; I just don't want to be there when it happens.”",
    author: "Woody Allen",
  },
  {
    quote:
      "“The person who reads too much and uses his brain too little will fall into lazy habits of thinking.”",
    author: "Albert Einstein",
  },
  {
    quote:
      "“Never let your sense of morals prevent you from doing what is right.”",
    author: "Isaac Asimov",
  },
  {
    quote:
      "“The difference between genius and stupidity is: genius has its limits.”",
    author: "Alexandre Dumas",
  },
  {
    quote:
      "“A wise man can learn more from a foolish question than a fool can learn from a wise answer.”",
    author: "Bruce Lee",
  },
  {
    quote:
      "“Whenever I feel the need to exercise, I lie down until it goes away.”",
    author: "Paul Terry",
  },
  {
    quote:
      "“The only thing necessary for the triumph of evil is for good men to do nothing.”",
    author: "Edmund Burke",
  },
  {
    quote:
      "“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.”",
    author: "Groucho Marx",
  },
  {
    quote:
      "“You don't have to burn books to destroy a culture. Just get people to stop reading them.”",
    author: "Ray Bradbury",
  },
  {
    quote: "“The truth is rarely pure and never simple.”",
    author: "Oscar Wilde",
  },
  {
    quote: "“There is no charm equal to tenderness of heart.”",
    author: "Jane Austen",
  },
  {
    quote:
      "“All you need is love. But a little chocolate now and then doesn't hurt.”",
    author: "Charles M. Schulz",
  },
  {
    quote: "“We don't see things as they are, we see them as we are.”",
    author: "Anaïs Nin",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "Dr. Seuss",
  },
  {
    quote: "“You can’t blame gravity for falling in love.”",
    author: "Albert Einstein",
  },
  {
    quote: "“The only thing we have to fear is fear itself.”",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "“Not all those who wander are lost.”",
    author: "J.R.R. Tolkien",
  },
  {
    quote:
      "“Do not take life too seriously. You will never get out of it alive.”",
    author: "Elbert Hubbard",
  },
  {
    quote:
      "“Anyone who lives within their means suffers from a lack of imagination.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "“I love deadlines. I love the whooshing noise they make as they go by.”",
    author: "Douglas Adams",
  },
  {
    quote:
      "“Some people never go crazy. What truly horrible lives they must lead.”",
    author: "Charles Bukowski",
  },
  {
    quote:
      "“The world is a book and those who do not travel read only one page.”",
    author: "Augustine of Hippo",
  },
  {
    quote:
      "“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”",
    author: "Albert Einstein",
  },
  {
    quote: "“You must be the change you wish to see in the world.”",
    author: "Mahatma Gandhi",
  },
  {
    quote: "“Tough times never last, but tough people do.”",
    author: "Robert H. Schuller",
  },
  {
    quote:
      "“I have heard there are troubles of more than one kind. Some come from ahead and some come from behind. But I've bought a big bat. I'm all ready you see. Now my troubles are going to have troubles with me!”",
    author: "Dr. Seuss",
  },
  {
    quote: "“If you don't stand for something you will fall for anything.”",
    author: "Malcolm X",
  },
  {
    quote: "“The best revenge is massive success.”",
    author: "Frank Sinatra",
  },
  {
    quote:
      "“Happiness is not something ready made. It comes from your own actions.”",
    author: "Dalai Lama",
  },
  {
    quote: "“I'm not superstitious, but I am a little stitious.”",
    author: "Michael Scott (The Office)",
  },
  {
    quote:
      "“The only limit to our realization of tomorrow will be our doubts of today.”",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "“You miss 100% of the shots you don’t take.”",
    author: "Wayne Gretzky",
  },
  {
    quote: "“The purpose of our lives is to be happy.”",
    author: "Dalai Lama",
  },
  {
    quote:
      "“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
    author: "Albert Einstein",
  },
  {
    quote: "“I solemnly swear that I am up to no good.”",
    author: "J.K. Rowling",
  },
  {
    quote:
      "“The future belongs to those who believe in the beauty of their dreams.”",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
    author: "Winston S. Churchill",
  },
  {
    quote:
      "“When you reach the end of your rope, tie a knot in it and hang on.”",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "“You can't use up creativity. The more you use, the more you have.”",
    author: "Maya Angelou",
  },
  {
    quote: "“The best way to predict the future is to invent it.”",
    author: "Alan Kay",
  },
  {
    quote: "“Life is 10% what happens to me and 90% of how I react to it.”",
    author: "Charles R. Swindoll",
  },
  {
    quote:
      "“The only person you are destined to become is the person you decide to be.”",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "“Whatever you are, be a good one.”",
    author: "Abraham Lincoln",
  },
  {
    quote: "“Strive not to be a success, but rather to be of value.”",
    author: "Albert Einstein",
  },
  {
    quote:
      "“I have learned over the years that when one's mind is made up, this diminishes fear.”",
    author: "Rosa Parks",
  },
  {
    quote: "“I would rather die of passion than of boredom.”",
    author: "Vincent van Gogh",
  },
  {
    quote:
      "“A champion is defined not by their wins but by how they can recover when they fall.”",
    author: "Serena Williams",
  },
];

// Pulling DOM Elements
const btn = document.body.querySelector("button");
const quoteEl = document.body.querySelector("blockquote");
const authorEL = document.body.querySelector("span");
const container = document.body.querySelector("div");

// State Variables
let curIndex, timer;

// Helper Functions
const genRandomNum = () => {
  while ("Mohamed Tamer") {
    const ran = Math.floor(Math.random() * 104) + 1;
    if (ran !== curIndex) {
      curIndex = ran;
      break;
    }
  }
};
const hideQuote = () => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    container.style.opacity = "0";
    container.style.translate = "0 20px";
  }, 10_000);
};

// Event Handler
btn.addEventListener("click", () => {
  // Showing the Quote
  container.style.opacity = "1";
  container.style.translate = "0 0";

  // Selecting the Quote
  genRandomNum();
  quoteEl.textContent = quotes[curIndex].quote;
  authorEL.textContent = quotes[curIndex].author;

  // After 10s the Quote will Disappear
  hideQuote();
});

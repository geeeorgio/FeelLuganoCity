import type { QuizType } from 'src/types';

export const LUGANO_QUIZ: QuizType[] = [
  {
    id: 1,
    question: 'Which place offers one of the best panoramic views over Lugano?',
    hint: 'A sunny mountain above the city, popular for sunsets.',
    options: ['Monte Brè', 'Parco Ciani', 'Via Nassa', 'Piazza della Riforma'],
    correctValue: 'Monte Brè',
  },
  {
    id: 2,
    question: 'Which place is often called the “sugar loaf of Switzerland”?',
    hint: 'A steep mountain rising directly above the lake.',
    options: [
      'Monte San Salvatore',
      'Belvedere Gardens',
      'Gandria Village',
      'Cathedral of Saint Lawrence',
    ],
    correctValue: 'Monte San Salvatore',
  },
  {
    id: 3,
    question:
      'Where can you enjoy a calm walk surrounded by trees next to the lake?',
    hint: 'One of the most photographed parks in Lugano.',
    options: [
      'Parco Ciani',
      'Castagnola Viewpoint',
      'Via Nassa',
      'Contrada di Verla',
    ],
    correctValue: 'Parco Ciani',
  },
  {
    id: 4,
    question: 'Which street is known for elegant arcades and shopping?',
    hint: 'A historic street dating back to medieval times.',
    options: [
      'Via Nassa',
      'Piazza della Riforma',
      'Lungolago',
      'Cassina d’Agno',
    ],
    correctValue: 'Via Nassa',
  },
  {
    id: 5,
    question: 'Which place is the main square of Lugano?',
    hint: 'A lively spot surrounded by cafés and city life.',
    options: [
      'Piazza della Riforma',
      'Cathedral of Saint Lawrence',
      'Belvedere Park',
      'Monte Brè',
    ],
    correctValue: 'Piazza della Riforma',
  },
  {
    id: 6,
    question:
      'Where can you see one of the most important Renaissance frescoes in Switzerland?',
    hint: 'A historic church near the old town.',
    options: [
      'Santa Maria degli Angioli',
      'Cathedral of Saint Lawrence',
      'Parco San Michele',
      'Gandria Village',
    ],
    correctValue: 'Santa Maria degli Angioli',
  },
  {
    id: 7,
    question:
      'Which place offers elevated views and a quiet atmosphere, mostly visited by locals?',
    hint: 'A small park away from tourist crowds.',
    options: [
      'Parco San Michele',
      'Belvedere Gardens',
      'Lungolago',
      'Via Nassa',
    ],
    correctValue: 'Parco San Michele',
  },
  {
    id: 8,
    question: 'Where can you enjoy a long walk along the lake promenade?',
    hint: 'A popular waterfront path connecting key areas of the city.',
    options: ['Lungolago', 'Cassina d’Agno', 'Monte Brè', 'Old Town'],
    correctValue: 'Lungolago',
  },
  {
    id: 9,
    question: 'Which place is a scenic walk carved into rocks above the lake?',
    hint: 'A path leading to a charming lakeside village.',
    options: [
      'Gandria Village Walk',
      'Belvedere Park',
      'Parco Ciani',
      'Via Nassa',
    ],
    correctValue: 'Gandria Village Walk',
  },
  {
    id: 10,
    question:
      'Which place offers a calm lakeside atmosphere away from the city center?',
    hint: 'A spot more popular with locals than tourists.',
    options: [
      'Cassina d’Agno Lakeside',
      'Piazza della Riforma',
      'Monte San Salvatore',
      'Parco Ciani',
    ],
    correctValue: 'Cassina d’Agno Lakeside',
  },
  {
    id: 11,
    question:
      'Which place is known for classic Swiss hospitality and light meals?',
    hint: 'An elegant café-restaurant near the city center.',
    options: [
      'Grand Café Lobby',
      'Spaghetti Store',
      'Caffè Vanini',
      'Manora Restaurant',
    ],
    correctValue: 'Grand Café Lobby',
  },
  {
    id: 12,
    question: 'Which place offers one of the best dining views over Lugano?',
    hint: 'A restaurant located above the city.',
    options: [
      'Manora Restaurant',
      'Grand Café Al Porto',
      'Via Nassa',
      'Parco San Michele',
    ],
    correctValue: 'Manora Restaurant',
  },
];

export const QUIZ_RESULTS = [
  {
    id: 'beginner',
    img: '',
    minScore: 0,
    maxScore: 4,
    description: 'You are just beginning to discover the city.',
    advice: 'Take your time and explore Lugano at your own pace.',
    left_btn_text: 'Start Exploring',
    right_btn_text: 'Start Again',
  },
  {
    id: 'explorer',
    img: '',
    minScore: 5,
    maxScore: 8,
    description: 'You know many of Lugano’s highlights.',
    advice: 'A few more discoveries will complete the picture.',
    left_btn_text: 'Continue Exploring',
    right_btn_text: 'Start Again',
  },
  {
    id: 'expert',
    img: '',
    minScore: 9,
    maxScore: 12,
    description: 'You truly understand the rhythm and atmosphere of the city.',
    advice: 'Lugano feels familiar to you.',
    left_btn_text: 'Continue Exploring',
    right_btn_text: 'Start Again',
  },
];

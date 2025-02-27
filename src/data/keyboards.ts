import { CustomKeyboard } from '../types';
import { keyboardParts } from './parts';

const findPartById = (id: string) => {
  return keyboardParts.find(part => part.id === id) || null;
};

export const sampleKeyboards: CustomKeyboard[] = [
  {
    id: 'kb-1',
    name: 'Tofu60 Build',
    userId: 'user-1',
    username: 'tecladista',
    case: findPartById('case-1'),
    switches: findPartById('switch-1'),
    keycaps: findPartById('keycap-1'),
    plate: findPartById('plate-1'),
    pcb: findPartById('pcb-1'),
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 24,
    comments: [
      {
        id: 'comment-1',
        userId: 'user-2',
        username: 'mecanico',
        content: 'Adorei a combinação de cores! Que tal um vídeo de sound test?',
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'comment-2',
        userId: 'user-3',
        username: 'keycapslover',
        content: 'Os keycaps GMK Olivia ficaram perfeitos nesse build!',
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
      }
    ]
  },
  {
    id: 'kb-2',
    name: 'GMMK Pro Custom',
    userId: 'user-2',
    username: 'mecanico',
    case: findPartById('case-2'),
    switches: findPartById('switch-2'),
    keycaps: findPartById('keycap-2'),
    plate: findPartById('plate-2'),
    pcb: findPartById('pcb-2'),
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 18,
    comments: [
      {
        id: 'comment-3',
        userId: 'user-1',
        username: 'tecladista',
        content: 'Que build incrível! Quanto tempo levou para montar?',
        createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
      }
    ]
  },
  {
    id: 'kb-3',
    name: 'Bakeneko Minimalista',
    userId: 'user-3',
    username: 'keycapslover',
    case: findPartById('case-3'),
    switches: findPartById('switch-3'),
    keycaps: findPartById('keycap-3'),
    plate: findPartById('plate-3'),
    pcb: findPartById('pcb-3'),
    createdAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 32,
    comments: [
      {
        id: 'comment-4',
        userId: 'user-2',
        username: 'mecanico',
        content: 'Esse é o melhor teclado que já vi! Os switches Cherry MX Blue devem fazer um barulho incrível.',
        createdAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'comment-5',
        userId: 'user-1',
        username: 'tecladista',
        content: 'Muito clean! Adorei o estilo minimalista.',
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString()
      }
    ]
  }
];

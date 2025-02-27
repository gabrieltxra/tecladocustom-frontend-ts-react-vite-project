import { KeyboardPart } from '../types';

export const keyboardParts: KeyboardPart[] = [
  // Cases
  {
    id: 'case-1',
    name: 'Tofu60',
    type: 'case',
    description: 'Case de alumínio CNC para teclados 60%',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'KBDfans',
    material: 'Alumínio',
    color: 'Preto'
  },
  {
    id: 'case-2',
    name: 'GMMK Pro',
    type: 'case',
    description: 'Case premium de alumínio para teclados 75%',
    price: 169.99,
    image: 'https://images.unsplash.com/photo-1631123327880-83e89fb27f1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'Glorious',
    material: 'Alumínio',
    color: 'Preto'
  },
  {
    id: 'case-3',
    name: 'Bakeneko60',
    type: 'case',
    description: 'Case de alumínio para teclados 60% com montagem o-ring',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'CannonKeys',
    material: 'Alumínio',
    color: 'Branco'
  },

  // Switches
  {
    id: 'switch-1',
    name: 'Akko CS Rose Red',
    type: 'switches',
    description: 'Switches lineares com força de atuação de 43g',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'Akko',
    color: 'Vermelho'
  },
  {
    id: 'switch-2',
    name: 'Gateron Yellow',
    type: 'switches',
    description: 'Switches lineares suaves com força de atuação de 50g',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1624607350227-4d5bfbf26bb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'Gateron',
    color: 'Amarelo'
  },
  {
    id: 'switch-3',
    name: 'Cherry MX Blue',
    type: 'switches',
    description: 'Switches clicky com feedback tátil e sonoro',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1624607350227-4d5bfbf26bb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'Cherry',
    color: 'Azul'
  },

  // Keycaps
  {
    id: 'keycap-1',
    name: 'GMK Olivia',
    type: 'keycaps',
    description: 'Keycaps de perfil Cherry em ABS doubleshot',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1631123327880-83e89fb27f1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'GMK',
    material: 'ABS'
  },
  {
    id: 'keycap-2',
    name: 'PBT Chalk',
    type: 'keycaps',
    description: 'Keycaps de perfil Cherry em PBT dye-sub',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'EPBT',
    material: 'PBT'
  },
  {
    id: 'keycap-3',
    name: 'SA Laser',
    type: 'keycaps',
    description: 'Keycaps de perfil SA com tema cyberpunk',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'Maxkey',
    material: 'ABS'
  },

  // Plates
  {
    id: 'plate-1',
    name: 'Brass 60%',
    type: 'plate',
    description: 'Plate de latão para teclados 60%',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'KBDfans',
    material: 'Latão'
  },
  {
    id: 'plate-2',
    name: 'FR4 75%',
    type: 'plate',
    description: 'Plate de FR4 para teclados 75%',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'CannonKeys',
    material: 'FR4'
  },
  {
    id: 'plate-3',
    name: 'Polycarbonate TKL',
    type: 'plate',
    description: 'Plate de policarbonato para teclados TKL',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1624607350227-4d5bfbf26bb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'KBDfans',
    material: 'Policarbonato'
  },

  // PCBs
  {
    id: 'pcb-1',
    name: 'DZ60RGB',
    type: 'pcb',
    description: 'PCB 60% hotswap com RGB per-key',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'KBDfans',
  },
  {
    id: 'pcb-2',
    name: 'KBD75 Rev 2',
    type: 'pcb',
    description: 'PCB 75% soldável com suporte para RGB',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1624607350227-4d5bfbf26bb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'KBDfans',
  },
  {
    id: 'pcb-3',
    name: 'WT60-D',
    type: 'pcb',
    description: 'PCB 60% hotswap com suporte para QMK/VIA',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    brand: 'Wilba.tech',
  }
];
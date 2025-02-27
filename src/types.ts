export interface KeyboardPart {
  id: string;
  name: string;
  type: 'case' | 'switches' | 'keycaps' | 'plate' | 'pcb';
  description: string;
  price: number;
  image: string;
  brand: string;
  color?: string;
  material?: string;
}

export interface CustomKeyboard {
  id: string;
  name: string;
  userId: string;
  username: string;
  case: KeyboardPart | null;
  switches: KeyboardPart | null;
  keycaps: KeyboardPart | null;
  plate: KeyboardPart | null;
  pcb: KeyboardPart | null;
  createdAt: string;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  content: string;
  createdAt: string;
}

export interface User {
  id: string;
  username: string;
  keyboards: CustomKeyboard[];
}
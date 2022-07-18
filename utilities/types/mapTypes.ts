export interface lineData {
  color: string;
  width: number;
  line: [number, number][];
}

export interface mapButtondata {
  name: string;
  line: [number, number][];
  text: { X: number; Y: number };
  sentVal: string;
}

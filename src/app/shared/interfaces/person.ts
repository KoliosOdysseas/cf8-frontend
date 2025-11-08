export interface Person {
[x: string]: any;
  firstname: string;
  lastname: string;
  email: string;
}

export interface XX extends Person {
  aa:string;
}
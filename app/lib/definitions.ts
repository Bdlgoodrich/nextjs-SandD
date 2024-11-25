// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Skill = {
  id: number;
  name: string;
  description: string;
  apparatus: string;
  course: string;
  videoLink: string;
};

export type Drill = {
  id: number;
  skill: string;
  description: string;
  instructions: string;
  apparatus: string;
  equipment: string;
  purpose: "learning" | "improving";
  videoLink: string;
};

export type Course = {
  id: number;
  name: string;
  description: string;
  ages: string;
}

export type Apparatus = {
  id: number;
  name: string;
  description: string;
  type: "event" | "location";
  imageLink: string;
}

export type Game = {
  id: number;
  name: string;
  instructions: string;
  apparatus: string;
  equipment: string;
  videoLink: string;
}

export type Equipment = {
  id: number;
  name: string;
  description: string;
  imageLink: string;
}
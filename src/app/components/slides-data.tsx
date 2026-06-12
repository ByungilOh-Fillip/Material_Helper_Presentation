export type Slide = {
  id: number;
  type:
    | "cover"
    | "overview"
    | "problem"
    | "users"
    | "values"
    | "vision"
    | "feature1"
    | "feature2"
    | "feature3"
    | "architecture"
    | "data"
    | "mvp"
    | "roadmap"
    | "impact"
    | "closing";
};

export const slides: Slide[] = [
  { id: 1, type: "cover" },
  { id: 2, type: "overview" },
  { id: 3, type: "problem" },
  { id: 4, type: "users" },
  { id: 5, type: "values" },
  { id: 6, type: "vision" },
  { id: 7, type: "feature1" },
  { id: 8, type: "feature2" },
  { id: 9, type: "feature3" },
  { id: 10, type: "architecture" },
  { id: 11, type: "data" },
  { id: 12, type: "mvp" },
  { id: 13, type: "roadmap" },
  { id: 14, type: "impact" },
  { id: 15, type: "closing" },
];

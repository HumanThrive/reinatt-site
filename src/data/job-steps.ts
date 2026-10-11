// The six steps of "How a job moves" on the AI page.
// The page renders the first step, and the walkthrough script shows the others.

export interface JobStep {
  /** The word on the step's tab. */
  key: string;
  text: string;
  /** The illustration shown beside the text. Lines starting "$" or "#", and "key:" prefixes, are highlighted. */
  code: string;
}

export const jobSteps: JobStep[] = [
  {
    key: "Commit",
    text: "It gets a type and a finish line.",
    code: "id: work-412\nshape: production\nstatus: planning\ndone-when: an admin exports any report as CSV",
  },
  {
    key: "Route",
    text: "The right agent takes it.",
    code: "follow a standard  →  no agent needed\nmake a judgment    →  consult a seat\nown the job        →  hire a seat",
  },
  {
    key: "Isolate",
    text: "It runs on its own branch.",
    code: "$ git worktree add ../work-412 -b work-412\n# main stays untouched until the accept",
  },
  {
    key: "Record",
    text: "Every decision keeps what it turned down.",
    code: "Decision: CSV, UTF-8 with BOM\nBy: Lead Dev, inside the brief\nRejected: XLSX, a new dependency\n          for no user need",
  },
  {
    key: "Review",
    text: "A second agent checks it against the brief.",
    code: "status: active → review\nverdict: meets done-when, one note",
  },
  {
    key: "Accept",
    text: "Only I can ship it.",
    code: "status: review → done   (accepted by Rei)\n$ git merge work-412",
  },
];

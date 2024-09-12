
const users = [
  {
    id: '',
    name: 'Admin',
    email: 'mgaf@email.com',
    password: 'SandDMGAF',
  },
];

const classes = ['Mini Ninja', 'Mighty Ninja', `Women's Gymnastics`, `Men's Gymnastics`, 'Tumbling',];

const skills = [
  {
    id: 1,
    name: 'forward roll',
    description: "Reach both hands down in front of you, bending your knees into a squat. Bend your arms so your head touches the mat. Push with your legs and roll striaght forward, legs tucked.",
    apparatus: 'floor, beam',
    class: `Mini Ninja, Mighty Ninja, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    id: 2,
    name: 'backward roll',
    description: "tbd",
    apparatus: 'floor, beam',
    class: `Mini Ninja, Mighty Ninja, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    id: 3,
    name: 'cartwheel',
    description: "tbd",
    apparatus: 'Floor, Beam',
    class: `Mini Ninja, Mighty Ninja, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    id: 4,
    name: 'roundoff',
    description: "tbd",
    apparatus: 'Floor, Beam, Vault',
    class: `Mighty Ninja, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    id: 5,
    name: 'front support',
    description: "tbd",
    apparatus: 'Uneven Bars, P-Bars, Rings',
    class: `Mini Ninja, Mighty Ninja, Women's Gymnastics, Men's Gymnastics`,
  },
  {
    id: 6,
    name: 'front hip circle',
    description: "tbd",
    apparatus: 'Uneven Bars',
    class: `Women's Gymnastics, Men's Gymnastics`,
  },
  {
    id: 7,
    name: 'wall run',
    description: "Run towards a stable vertical surface. Step at least one foot onto the surface. Push off with last step in desired direction e.g. up, forward, away.",
    apparatus: 'Ninja Rig',
    class: `Mini Ninja', 'Mighty Ninja`,
  },
];

const apparatuses = [
  'Floor',
  'Vault',
  'P-Bars',
  'Pommel Horse',
  'Rings',
  'High Bar',
  'Beam',
  'Uneven Bars',
  'Ninja Rig',
  'Tumble Track',
  'Star Bars',
  'Empty Wall',
  'Any',
];

const drills = [
  {
    id: 1,
    description: "forward roll down cheese mat",
    skill: 'forward roll',
    instructions: "Start standing on mat for beginners, floor for more advanced. Roll down the mat.",
    apparatus: 'Any',
    equipment: 'cheese mat',
    purpose: 'learning',
  },
  {
    id: 2,
    description: "forward roll up cheese mat",
    skill: 'forward roll',
    instructions: "Start standing on floor or mat. Reach both hands down in front of you, bending your knees into a squat. Bend your arms so your head touches the mat. Push with your legs and roll striaght up",
    apparatus: 'Any',
    equipment: 'cheese mat',
    purpose: 'improving',
  },
  {
    id: 3,
    description: "cartwheel over mat",
    skill: 'cartwheel',
    instructions: "Start standing on floor, facing the long side of the panel mat. Place preferred foot forward. Reach both hands down on the mat, one in front of the other, facing out, while lifting non-preferred leg. Kick non-preferred leg to other side of mat, letting the preferred leg follow behind.",
    apparatus: 'Floor',
    equipment: 'panel mat (any)',
    purpose: 'learning',
  },
  {
    id: 4,
    description: "roundoff over mat",
    skill: 'roundoff',
    instructions: "Start standing on floor, facing the long side of the panel mat. Do a roundoff over the mat, placing hands on top",
    apparatus: 'Floor',
    equipment: 'panel mat (any)',
    purpose: 'learning',
  },
]



export { users, classes , skills, apparatuses, drills };

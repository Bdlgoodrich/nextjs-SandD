
const users = [
  {
    id: 'admin',
    name: 'Admin',
    email: 'mgaf@email.com',
    password: 'SandDMGAF',
  },
];

const classes = ['Mini Ninja', 'Mighty Ninja', `Women's Gymnastics`, `Men's Gymnastics`, 'Tumbling',];

const skills = [
  {
    name: 'forward roll',
    description: "To be added later",
    apparatus: ['floor', 'beam'],
    class: ['Mini Ninja', 'Mighty Ninja', `Women's Gymnastics`, `Men's Gymnastics`, 'Tumbling',],
  },
  {
    name: 'backward roll',
    description: "To be added later",
    apparatus: ['floor', 'beam',],
    class: ['Mini Ninja', 'Mighty Ninja', `Women's Gymnastics`, `Men's Gymnastics`, 'Tumbling',],
  },
  {
    name: 'cartwheel',
    description: "To be added later",
    apparatus: ['Floor', 'Beam',],
    class: ['Mini Ninja', 'Mighty Ninja', `Women's Gymnastics`, `Men's Gymnastics`, 'Tumbling',],
  },
  {
    name: 'roundoff',
    description: "To be added later",
    apparatus: ['Floor', 'Beam', 'Vault'],
    class: ['Mighty Ninja', `Women's Gymnastics`, `Men's Gymnastics`, 'Tumbling',],
  },
  {
    name: 'front support',
    description: "To be added later",
    apparatus: ['Uneven Bars', 'P-Bars', 'Rings'],
    class: ['Mini Ninja', 'Mighty Ninja', `Women's Gymnastics`, `Men's Gymnastics`,],
  },
  {
    name: 'front hip circle',
    description: "To be added later",
    apparatus: ['Uneven Bars'],
    class: [`Women's Gymnastics`, `Men's Gymnastics`,],
  },
  {
    name: 'wall run',
    description: "To be added later",
    apparatus: ['Ninja Rig'],
    class: ['Mini Ninja', 'Mighty Ninja',],
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
    instructions: "Start standing on mat for beginners, floor for more advanced. Reach both hands down in front of you, bending your knees into a squat. Bend your arms so your head touches the mat. Push with your legs and roll striaght down",
    apparatus: ['Any'],
    equipment: ['cheese mat'],
  },
  {
    id: 2,
    description: "forward roll up cheese mat",
    skill: 'forward roll',
    instructions: "Start standing on floor or mat. Reach both hands down in front of you, bending your knees into a squat. Bend your arms so your head touches the mat. Push with your legs and roll striaght up",
    apparatus: ['Any'],
    equipment: ['cheese mat'],
  },
  {
    id: 3,
    description: "cartwheel over mat",
    skill: 'cartwheel',
    instructions: "Start standing on floor, facing the long side of the panel mat. Place preferred foot forward. Reach both hands down on the mat, one in front of the other, facing out, while lifting non-preferred leg. Kick non-preferred leg to other side of mat, letting the preferred leg follow behind.",
    apparatus: ['Floor'],
    equipment: ['panel mat (any)'],
  },
  {
    id: 4,
    description: "roundoff over mat",
    skill: 'roundoff',
    instructions: "Start standing on floor, facing the long side of the panel mat. Do a roundoff over the mat, placing hands on top",
    apparatus: ['Floor'],
    equipment: ['panel mat (any)'],
  },
]



export { users, classes , skills, apparatuses, drills };

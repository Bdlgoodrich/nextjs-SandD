
const users = [
  {
    //to be changed before deployment of login feature
    name: 'Admin',
    email: 'mgaf@email.com',
    password: 'SandDMGAF',
  },
];

const classNames = [
  //id serial
  //description default 'tbd'
  //ages default '3-99'
  {
    className: 'Women\'s Gymnastics',
  },
  {
    className: 'Men\'s Gymnastics',
  },
  {
    className: 'Tumbling',
  },
  {
    className: 'Ninja/Parkour',
  },
];

const skills = [
  //id serial
  //imageLink default '/coming-soon-image.jpg'
  //videoLink default 'tbd'
  {
    name: 'forward roll',
    description: "Reach both hands down in front of you, bending your knees into a squat. Bend your arms so your head touches the mat. Push with your legs and roll striaght forward, legs tucked.",
    apparatus: 'floor, beam',
    className: `Ninja/Parkour, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    name: 'backward roll',
    description: "tbd",
    apparatus: 'floor, beam',
    className: `Ninja/Parkour, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    name: 'cartwheel',
    description: "tbd",
    apparatus: 'Floor, Beam',
    className: `Ninja/Parkour, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    name: 'roundoff',
    description: "tbd",
    apparatus: 'Floor, Beam, Vault',
    className: `Ninja/Parkour, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    name: 'front support',
    description: "tbd",
    apparatus: 'Uneven Bars, P-Bars, Rings',
    className: `Ninja/Parkour, Women's Gymnastics, Men's Gymnastics`,
  },
  {
    name: 'front hip circle',
    description: "tbd",
    apparatus: 'Uneven Bars',
    className: `Ninja/Parkour, Women's Gymnastics, Men's Gymnastics`,
  },
  {
    name: 'wall run',
    description: "Run towards a stable vertical surface. Step at least one foot onto the surface. Push off with last step in desired direction e.g. up, forward, away.",
    apparatus: 'Ninja Rig',
    className: 'Ninja/Parkour',
  },
];

const apparatuses = [
  //id serial
  //imageLink default '/coming-soon-image.jpg'
  { apparatus: 'Floor',
    description: 'tbd'
  },
  { apparatus: 'Vault',
    description: 'tbd'
  },
  { apparatus: 'P-Bars',
    description: 'tbd' 
  },
  { apparatus: 'Pommel Horse',
    description: 'tbd' 
  },
  { apparatus: 'Rings',
    description: 'tbd' 
  },
  { apparatus: 'High Bar',
    description: 'tbd' 
  },
  { apparatus: 'Beam',
    description: 'tbd'
   },
  { apparatus: 'Uneven Bars',
    description: 'tbd' 
  },
  { apparatus: 'Ninja Rig',
    description: 'The warped wall, climbing wall, rig, and generic horizontal bar' 
  },
  { apparatus: 'Tumble Track',
    description: 'A long trampoline with a resi at the end.' 
  },
  { apparatus: 'Star Bars',
    description: '4 connected, adjustable height horizontal bars. Also includes free-standing kip bars for smaller athletes.' 
  },
  { apparatus: 'Empty Wall',
    description: 'Any wall in the gym not blocked by equipment' 
  },
  { apparatus: 'Any',
    description: 'Any empty floor space in the gym.'
  },
];

const drills = [
  //id serial
  //imageLink default '/coming-soon-image.jpg'
  //videoLink default 'tbd'
  {
    description: 'forward roll down cheese mat',
    skill: 'forward roll',
    instructions: 'Start standing on mat for beginners, floor for more advanced. Roll down the mat.',
    apparatus: 'Any',
    equipment: 'cheese mat',
    purpose: 'learning',
  },
  {
    description: "forward roll up cheese mat",
    skill: 'forward roll',
    instructions: "Start standing on floor or mat. Reach both hands down in front of you, bending your knees into a squat. Bend your arms so your head touches the mat. Push with your legs and roll striaght up",
    apparatus: 'Any',
    equipment: 'cheese mat',
    purpose: 'improving',
  },
  {
    description: "cartwheel over mat",
    skill: 'cartwheel',
    instructions: "Start standing on floor, facing the long side of the panel mat. Place preferred foot forward. Reach both hands down on the mat, one in front of the other, facing out, while lifting non-preferred leg. Kick non-preferred leg to other side of mat, letting the preferred leg follow behind.",
    apparatus: 'Floor',
    equipment: 'panel mat (any)',
    purpose: 'learning',
  },
  {
    description: "roundoff over mat",
    skill: 'roundoff',
    instructions: "Start standing on floor, facing the long side of the panel mat. Do a roundoff over the mat, placing hands on top",
    apparatus: 'Floor',
    equipment: 'panel mat (any)',
    purpose: 'learning',
  },
]



export { users, classNames, skills, apparatuses, drills };

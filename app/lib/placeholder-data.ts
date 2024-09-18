
const users = [
  {
    //to be changed before deployment of login feature
    name: 'Admin',
    email: 'mgaf@email.com',
    password: 'SandDMGAF',
  },
];

const courses = [
  //id serial
  //description default 'tbd'
  //ages default '3-99'
  {
    name: 'Women\'s Gymnastics',
  },
  {
    name: 'Men\'s Gymnastics',
  },
  {
    name: 'Tumbling',
  },
  {
    name: 'Ninja/Parkour',
  },
];

const skills = [
  //id serial
  //videoLink default 'tbd'
  {
    name: 'forward roll',
    description: "Reach both hands down in front of you, bending your knees into a squat. Bend your arms so your head touches the mat. Push with your legs and roll striaght forward, legs tucked.",
    apparatus: 'Beam, Floor',
    course: `Ninja/Parkour, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    name: 'backward roll',
    description: "A roll backward, starting from a seated or squatting position.",
    apparatus: 'Beam, Floor',
    course: `Ninja/Parkour, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    name: 'cartwheel',
    description: 'Starting Position: Stand upright with your feet shoulder-width apart. Choose a side to lead with (right or left). \nLunge Forward: Step forward with the leading foot into a lunge position, bending that knee and keeping the back leg straight. \nHand Placement: As you lunge, reach down with both hands toward the ground. Place your leading hand (the one on the side of your leading foot) down first, followed by your other hand.\nKick Off: Shift your weight onto your hands while kicking your back leg up and over your body. Your body should rotate sideways.\nBody Position: As your legs move over, keep them straight and together. Your hips should be elevated, and your head should be looking between your arms.\nLanding: As your legs come down, they should land one after the other. Aim to land with your leading foot first, followed by your trailing foot.\nFinish: Stand up straight after landing, bringing your feet together, and return to an upright position.',
    apparatus: "Beam, Floor",
    course: `Ninja/Parkour, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    name: 'roundoff',
    description: "tbd",
    apparatus: 'Beam, Floor, Vault',
    course: `Ninja/Parkour, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    name: "handstand",
    description: "Holding a vertical position on hands.",
    apparatus: "Beam, Floor, Horizontal Bars, P-Bars, Pommel Horse, Still Rings, Uneven Bars, Vault",
    course: `Ninja/Parkour, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
  {
    name: 'front support',
    description: "Holding your body above a bar with your arms staight.",
    apparatus: 'Rings, Uneven Bars',
    course: `Ninja/Parkour, Women's Gymnastics`,
  },
  {
    name: 'front hip circle',
    description: "tbd",
    apparatus: 'Horizontal Bar, Uneven Bars',
    course: `Men's Gymnastics, Ninja/Parkour, Women's Gymnastics`,
  },
  {
    name: 'wall run',
    description: "Run towards a stable vertical surface. Step at least one foot onto the surface. Push off with last step in desired direction e.g. up, forward, away.",
    apparatus: 'Ninja Rig',
    course: 'Ninja/Parkour',
  },
  {
    name: 'support hold',
    description: 'Holding the body in a stable position on the horse',
    apparatus: 'P-Bars, Pommel Horse, Still Rings',
    course: `Men's Gymnastics, Ninja/Parkour`
  },
  {
    name: 'split jump',
    description: "A jump with legs in a split position.",
    apparatus: "Beam, Floor",
    course: `Tumbling, Women's Gymnastics`
  },
  {
    name: "lunge",
    description: "A basic starting and landing position with your weight on one bent leg in front of you.",
    apparatus: "Beam, Floor, Vault",
    course: `Ninja/Parkour, Women's Gymnastics, Men's Gymnastics, Tumbling`,
  },
];

const apparatuses = [
  //id serial
  {
    name: 'Floor',
    description: 'A 12x12 meter mat with some springiness',
    type: "event",
    imageLink: "/Floor.jpg"
  },
  {
    name: 'Vault',
    description: 'A sturdy table-like structure, typically around 1.25 meters high, with a padded surface for gymnasts to launch off',
    type: "event",
    imageLink: "/Vault.jpg"
  },
  {
    name: 'P-Bars',
    description: 'Two parallel bars',
    type: "event",
    imageLink: "/P-Bars.jpg"
  },
  {
    name: 'Pommel Horse',
    description: 'An apparatus featuring a horizontal bar with two handles',
    type: "event",
    imageLink: "/Pommel-Horse.jpg"
  },
  {
    name: 'Still Rings',
    description: 'Two rings suspended from a frame',
    type: "event",
    imageLink: "/Still-Rings.jpg"
  },
  {
    name: 'Horizontal Bar',
    description: 'A single high bar made of metal',
    type: "event",
    imageLink: "/High-Bar.jpg"
  },
  {
    name: 'Beam',
    description: 'A narrow beam 10 cm wide and 5 meters long',
    type: "event",
    imageLink: "/Beam.jpg"
  },
  {
    name: 'Uneven Bars',
    description: 'Two horizontal bars set at different heights',
    type: "event",
    imageLink: "/Uneven-Bars.jpg"
  },
  {
    name: 'Ninja Rig',
    description: 'The warped wall, climbing wall, rig, and generic horizontal bar',
    type: "event",
    imageLink: "/Ninja-Rig.jpg"
  },
  {
    name: 'Tumbl Trak',
    description: 'A long trampoline with a resi at the end.',
    type: "location",
    imageLink: "/Tumbl-Trak.jpg"
  },
  {
    name: 'Star Bars',
    description: '4 connected, adjustable height horizontal bars. Also includes free-standing kip bars for smaller athletes.',
    type: "location",
    imageLink: "/Star-Bars.jpg"
  },
  {
    name: 'Empty Wall',
    description: 'Any wall in the gym not blocked by equipment',
    type: "location",
    imageLink: "/Empty-Wall.jpg"
  },
  {
    name: 'Any',
    description: 'Any empty floor space in the gym.',
    type: "location",
    imageLink: "/any.jpg"
  },
];

const drills = [
  //id serial
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

const equipment = [
  {
    name: 'panel mat (any)',
    description: 'A firm, folding mat, any size or color',
    imageLink: "/panel-mat-any.jpg"
  },
  {
    name: 'panel mat (long)',
    description: 'A blue firm, folding mat with 5 folds and 5?ft long',
    imageLink: "/panel-mat-long.jpg"
  },
  {
    name: 'panel mat (colored)',
    description: 'A firm, folding mat, with a different color for each panel',
    imageLink: "/panel-mat-colored.jpg"
  },
  {
    name: 'cheese mat (any)',
    description: 'A triangular-shaped mat, any size or color',
    imageLink: "/cheese-mat-any.jpg"
  },
  {
    name: 'cheese mat (small)',
    description: 'A triangular-shaped mat, roughly 3 feet long',
    imageLink: "/cheese-mat-small.jpg"
  },
  {
    name: 'cheese mat (folding)',
    description: 'A triangular-shaped mat, roughly 3 feet long, that folds in half',
    imageLink: "/cheese-mat-folding.jpg"
  },
  {
    name: 'cheese mat (large)',
    description: 'A triangular-shaped mat, roughly 5 feet long',
    imageLink: "/cheese-mat-large."
  },
]


export { users, courses, skills, apparatuses, drills };

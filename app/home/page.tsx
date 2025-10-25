  import { lusitana } from '@/app/ui/fonts';
   
  export default async function Page() {
    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Welcome to SandD.<br></br>Login is temporarily disabled<br></br>Skill, Drill, and Game additions will not be logged.
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
          <p>On the left is a navigation panel.</p>
          <p>Apparatuses will bring up a list of all apparatuses currently in this application along with a brief description.</p>
          <p>Skills will bring up a searchable list of all skills currently in this appication.<br></br>You can click on a skill to see its details.</p>
          <p>Drills will bring up a searchable list of all drills currently in this application.<br></br>You can click on a drill's description to see its other details.</p>
          <p>Games will bring up a searchable list of all games currently in this appication.<br></br>You can click on a game to see its details.</p>
          <p>Classes will bring up a list of all classes currently in this application along with a brief description and age range.</p>
        </div>
      </main>
    );
  }
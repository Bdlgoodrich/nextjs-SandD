  import { lusitana } from '@/app/ui/fonts';
   
  export default async function Page() {
    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Welcome to SandD.<br></br>Login is temporarily disabled<br></br>Skill and Drill additions will not be logged.
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
          <p>On the left is a navigation panel.</p>
          <p>Apparatuses will bring up a list of all apparatuses currently in this application along with a brief description.<br></br>You can click on an apparatus to see a list of associated skills.</p>
          <p>Skills will bring up a searchable list of all skills currently in this appication.<br></br>You can click on a skill to see its details and for a link to associated drills.</p>
          <p>Drills will bring up a search feature where you can search for drills based on any property or properties (skill, description, instructions, apparatus, equipment, or purpose).
            Clicking on a drill will bring up a page listing all of its properties.</p>
          <p>Classes will bring up a list of all classes currently in this application along with a brief description.<br></br>You can click on a class to see a list of its associated skills</p>
        </div>
      </main>
    );
  }
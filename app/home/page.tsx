  import { lusitana } from '@/app/ui/fonts';
   
  export default async function Page() {
    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Welcome to SandD.
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
      <p>On the left is a navigation panel.</p>
      <p>Classes will bring up a list of all classes currently in this application along with a brief description.<br></br>You can click on a class to see a list of its associated skills</p>
      <p>Skills will bring up a searchable list of all skills currently in this appication.<br></br>You can click on a skill to see its details and for a link to associated drills.</p>
      <p>Apparatuses will bring up a list of all apparatuses currently in this application along with a brief description.<br></br>You can click on an apparatus to see a list of associated skills.</p>
      <p>Drills will bring up a search feature where you can search for drills based on any property or properties (skill, description, instructions, apparatus, equipment, or purpose).
        Clicking on a drill will bring up a page listing all of its properties.
      </p>
          {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
          {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
          {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
          {/* <Card
            title="Total Customers"
            value={numberOfCustomers}
            type="customers"
          /> */}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          {/* <RevenueChart revenue={revenue}  /> */}
          {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
        </div>
      </main>
    );
  }
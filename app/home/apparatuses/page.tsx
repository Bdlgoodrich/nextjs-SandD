import { fetchApparatuses } from "@/app/lib/data";
import ApparatusesTable from "@/app/ui/apparatuses/table"


export default function Page() {
    return <div>
      <ApparatusesTable/>
    </div>;
  }
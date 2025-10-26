import DrillsForm from '@/app/ui/drills/create-form';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';
import { fetchDrills } from '@/app/lib/data';
 
export default async function Page() {
  const drills = await fetchDrills();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Drills', href: '/home/drills' },
          {
            label: 'Create Drill',
            href: '/home/drills/create',
            active: true,
          },
        ]}
      />
      <DrillsForm drills={drills} />
    </main>
  );
}
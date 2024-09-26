import DrillsForm from '@/app/ui/drills/edit-form';
import Breadcrumbs from '@/app/ui/skills/breadcrumbs';
import { fetchDrillById } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [drill] = await Promise.all([
        fetchDrillById(id)
      ]);
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Drills', href: '/home/drills' },
          {
            label: 'Edit Drills',
            href: `/home/drills/${id}/edit`,
            active: true,
          },
        ]}
      />
      <DrillsForm drill={drill} />
    </main>
  );
}
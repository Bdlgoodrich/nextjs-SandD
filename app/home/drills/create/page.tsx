import Form from '@/app/ui/skills/create-form';
import Breadcrumbs from '@/app/ui/skills/breadcrumbs';
import { fetchSkills } from '@/app/lib/data';
 
export default async function Page() {
  const skills = await fetchSkills();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Drills', href: '/dashboard/drills' },
          {
            label: 'Create Drill',
            href: '/home/drills/create',
            active: true,
          },
        ]}
      />
      <Form skills={skills} />
    </main>
  );
}
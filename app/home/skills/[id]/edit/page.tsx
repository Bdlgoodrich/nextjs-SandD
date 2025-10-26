import SkillsForm from '@/app/ui/skills/edit-form';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';
import { fetchSkillById } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [skill] = await Promise.all([
        fetchSkillById(id)
      ]);
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Skills', href: '/home/skills' },
          {
            label: 'Edit Skill',
            href: `/home/skills/${id}/edit`,
            active: true,
          },
        ]}
      />
      <SkillsForm skill={skill} />
    </main>
  );
}
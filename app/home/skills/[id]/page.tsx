import SkillForm from '@/app/ui/skills/form';
import Breadcrumbs from '@/app/ui/skills/breadcrumbs';
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
            label: 'Skill',
            href: `/home/skills/${id}`,
            active: true,
          },
        ]}
      />
      <SkillForm skill={skill} />
    </main>
  );
}
import SkillsForm from '@/app/ui/skills/create-form';
import Breadcrumbs from '@/app/ui/skills/breadcrumbs';
import { fetchSkills } from '@/app/lib/data';
import { useSession } from "next-auth/react";

  export default async function EditSkillPage() {
    const { data: session } = useSession();
  
    if (!session || session.user.role !== "admin") {
      return <p>Access Denied</p>;
    }

    const skills = await fetchSkills();
  
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Skills', href: '/home/skills' },
          {
            label: 'Create Skill',
            href: '/home/skills/create',
            active: true,
          },
        ]}
      />
      <SkillsForm skills={skills} />
    </main>
  );
}
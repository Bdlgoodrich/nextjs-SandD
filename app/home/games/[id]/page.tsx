import GameForm from '@/app/ui/games/form';
import Breadcrumbs from '@/app/ui/games/breadcrumbs';
import { fetchGameById } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [game] = await Promise.all([
        fetchGameById(id)
      ]);
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Games', href: '/home/games' },
          {
            label: 'Game',
            href: `/home/games/${id}`,
            active: true,
          },
        ]}
      />
      <GameForm game = {game} />
    </main>
  );
}
import GamesForm from '@/app/ui/games/create-form';
import Breadcrumbs from '@/app/ui/games/breadcrumbs';
import { fetchGames } from '@/app/lib/data';
 
export default async function Page() {
  const games = await fetchGames();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Games', href: '/home/games' },
          {
            label: 'Create Game',
            href: '/home/games/create',
            active: true,
          },
        ]}
      />
      <GamesForm games={games} />
    </main>
  );
}
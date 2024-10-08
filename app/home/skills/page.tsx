import Pagination from '@/app/ui/skills/pagination';
import Search from '@/app/ui/search';
import { CreateSkill } from '@/app/ui/skills/buttons';
import { lusitana } from '@/app/ui/fonts';
import { fetchSkillsPages } from '@/app/lib/data';
import SkillsTable from '@/app/ui/skills/table';
 
  export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchSkillsPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Skills</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search skills..." />
        <CreateSkill />
      </div>
      <div>
      <SkillsTable query={query} currentPage={currentPage} />
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
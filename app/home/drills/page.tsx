import Pagination from '@/app/ui/skills/pagination';
import Search from '@/app/ui/search';
import { CreateDrill } from '@/app/ui/drills/buttons';
import { lusitana } from '@/app/ui/fonts';
import { fetchDrillsPages } from '@/app/lib/data';
import DrillsTable from '@/app/ui/drills/table';
 
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

    const totalPages = await fetchDrillsPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Drills</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search drills..." />
        <CreateDrill />
      </div>
      <div>
      <DrillsTable query={query} currentPage={currentPage} />
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
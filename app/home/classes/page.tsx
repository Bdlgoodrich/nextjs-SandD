import Pagination from '@/app/ui/shared/pagination';
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { fetchCoursesPages } from '@/app/lib/data';
import CoursesTable from '@/app/ui/courses/table';
 
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

    const totalPages = await fetchCoursesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Classes</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search classes..." />
      </div>
      <div>
      <CoursesTable query={query} currentPage={currentPage} />
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
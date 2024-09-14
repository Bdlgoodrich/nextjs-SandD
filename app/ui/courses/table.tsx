import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchCourses } from '@/app/lib/data';

export default async function CoursesTable() {
  const courses = await fetchCourses();

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Classes
      </h1>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {courses?.map((course) => (
                  <div
                    key={course.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <p>{course.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {course.description}
                        </p>
                        <p className="text-sm text-gray-500">
                          {course.ages}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Class
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Description
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Age Range
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {courses.map((course) => (
                    <tr key={course.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{course.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{course.description}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p>{course.ages}</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

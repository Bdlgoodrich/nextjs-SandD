import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchApparatuses } from '@/app/lib/data';

export default async function ApparatusesTable() {
  const apparatuses = await fetchApparatuses();

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Apparatuses
      </h1>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {apparatuses?.map((apparatus) => (
                  <div
                    key={apparatus.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <p>{apparatus.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {apparatus.description}
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
                      Image
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Apparatus
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Description
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {apparatuses.map((apparatus) => (
                    <tr key={apparatus.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <Image
                            src={`${apparatus.imageLink}`}
                            className="rounded-full"
                            alt={`image of ${apparatus.name}`}
                            width={150}
                            height={150}
                          />
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{apparatus.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{apparatus.description}</p>
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

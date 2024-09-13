import Image from 'next/image';
import { UpdateSkill } from '@/app/ui/skills/buttons';
import { fetchFilteredSkills } from '@/app/lib/data';

export default async function SkillsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const skills = await fetchFilteredSkills(query);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {skills?.map((skill) => (
              <div
                key={skill.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                    <div className="mb-2 flex items-center">
                      <Image
                        src={skill.imageLink}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${skill.name}'s  image`}
                      />
                      <p>{skill.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{skill.description}</p>

                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <UpdateSkill id={skill.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Skill
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Apparatus
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Classes
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {skills?.map((skill) => (
                <tr
                  key={skill.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={skill.imageLink}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${skill.name}'s profile picture`}
                      />
                      <p>{skill.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {skill.description}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {skill.apparatus}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {skill.className}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateSkill id={skill.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

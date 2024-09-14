import { Drill } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { fetchApparatuses, fetchSkills } from '@/app/lib/data';

export default async function DrillsForm({ drills }: { drills: Drill[] }) {
    const apparatuses = await fetchApparatuses();
    const skills = await fetchSkills();
    return (
        <form>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                {/* Skill */}
                <div className="mb-4">
                    <label htmlFor="skill" className="mb-2 block text-sm font-medium">
                        Choose the skill that the drill will train
                    </label>
                    <div className="relative">
                        <select
                            id="skill"
                            name="skill"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="skill-error"
                        >
                            <option value="" disabled>
                                select a skill
                            </option>
                            {skills.map((skill) => (
                                <option key={skill.id} value={skill.id}>
                                    {skill.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Drill Description */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Drill Description
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="description"
                                name="description"
                                type="string"
                                placeholder="Enter the drill description"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Drill Instructions */}
                <div className="mb-4">
                    <label htmlFor="instructions" className="mb-2 block text-sm font-medium">
                        Write any instructions for the drill
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="instructions"
                                name="instructions"
                                type="string"
                                placeholder='instructions'
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Drill Apparatus */}
                <div className="mb-4">
                    <label htmlFor="apparatus" className="mb-2 block text-sm font-medium">
                        Choose the apparatuse/location needed
                    </label>
                    <div className="relative">
                        <select
                            id="apparatus"
                            name="apparatus"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="apparatus-error"
                        >
                            <option value="" disabled>
                                select an apparatus
                            </option>
                            {apparatuses.map((apparatus) => (
                                <option key={apparatus.id} value={apparatus.id}>
                                    {apparatus.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Drill Equipment */}
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        List all additional required equipment, separated by commas
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="description"
                                name="description"
                                type="string"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Drill Image Link */}
                {/* <div className="mb-4">
                    <label htmlFor="drill image" className="mb-2 block text-sm font-medium">
                        Drill Image Link
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="image"
                                name="image"
                                type="string"
                                placeholder="Enter an image link"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div> */}

                {/* Drill Video Link */}
                {/* <div className="mb-4">
                    <label htmlFor="drill video link" className="mb-2 block text-sm font-medium">
                        Drill Video Link
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="videoLink"
                                name="videoLink"
                                type="string"
                                placeholder="Enter a url"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/home/drills"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Drill</Button>
            </div>
        </form>
    );
}

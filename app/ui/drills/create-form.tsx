import { Drill } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { fetchApparatuses, fetchSkillsList } from '@/app/lib/data';
import { createDrill } from '@/app/lib/actions';

export default async function DrillsForm({ drills }: { drills: Drill[] }) {
    const apparatuses = await fetchApparatuses();
    const skills = await fetchSkillsList();
    return (
        <form action={createDrill}>
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
                            required
                        >
                            <option>
                                select a skill
                            </option>
                            {skills.map((skill) => (
                                <option key={skill.id} value={skill.name}>
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
                                required
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Drill Instructions */}
                <div className="mb-4">
                    <label htmlFor="instructions" className="mb-2 block text-sm font-medium">
                        Write any additional instructions for the drill
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="instructions"
                                name="instructions"
                                type="string"
                                placeholder='Enter the drill instructions'
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Drill Apparatus */}
                <div className="mb-4">
                    <label htmlFor="apparatuses" className="mb-2 block text-sm font-medium">
                        <strong>Choose all applicable apparatuses</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            {apparatuses.map((apparatus) => (
                                <section key={apparatus.id} >
                                    <label htmlFor={apparatus.name} className="mb-2 block text-sm font-medium">
                                        {apparatus.name}
                                        <input
                                            id={apparatus.name}
                                            name={apparatus.name}
                                            type="checkbox"
                                        />
                                    </label>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Drill Equipment */}
                <div className="mb-4">
                    <label htmlFor="equipment" className="mb-2 block text-sm font-medium">
                        List all additional required equipment, separated by commas
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="equipment"
                                name="equipment"
                                type="string"
                                placeholder='Enter any additional equipment needed'
                                required
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Drill Video Link */}
                <div className="mb-4">
                    <label htmlFor="drill video link" className="mb-2 block text-sm font-medium">
                        Drill Video Link (optional)
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
                </div>

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

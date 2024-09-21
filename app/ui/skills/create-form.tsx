import { Skill } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { fetchEventApparatuses, fetchCourses } from '@/app/lib/data';
import { createSkill } from '@/app/lib/actions';

export default async function SkillsForm({ skills }: { skills: Skill[] }) {
    const apparatuses = await fetchEventApparatuses();
    const courses = await fetchCourses();
    return (
        <form action={createSkill}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                {/* Skill Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Skill Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="string"
                                placeholder="Enter the skill name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Skill Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Description
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="description"
                                name="description"
                                type="string"
                                placeholder="Write a brief description"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Skill Apparatuses */}
                <div className="mb-4">
                    <label htmlFor="apparatuses" className="mb-2 block text-sm font-medium">
                        <strong>Choose all applicable apparatuses</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            {apparatuses.map((apparatus) => (
                                <section>
                                    <label htmlFor={apparatus.name} className="mb-2 block text-sm font-medium">
                                        {apparatus.name}
                                        <input
                                            id={apparatus.name}
                                            name={apparatus.name}
                                            type="checkbox"
                                            key={apparatus.id}
                                            
                                        />
                                    </label>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skill Classes */}
                <div className="mb-4">
                    <label htmlFor="classes" className="mb-2 block text-sm font-medium">
                        <strong>Choose all applicable classes</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            {courses.map((course) => (
                                <section>
                                    <label htmlFor={course.name} className="mb-2 block text-sm font-medium">
                                        {course.name}
                                        <input
                                            type="checkbox"
                                            key={course.id}
                                            id={course.name}
                                            name={course.name}
                                        />
                                    </label>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skill Video Link */}
                {/* <div className="mb-4">
                    <label htmlFor="skill video link" className="mb-2 block text-sm font-medium">
                        Skill Video Link
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
                    href="/home/skills"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Skill</Button>
            </div>
        </form>
    );
}

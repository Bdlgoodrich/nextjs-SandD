import { Skill } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { fetchApparatuses, fetchCourses } from '@/app/lib/data';

export default async function SkillsForm({ skills }: { skills: Skill[] }) {
    const apparatuses = await fetchApparatuses();
    const courses = await fetchCourses();
    return (
        <form>
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
                        Choose all applicable apparatuses
                    </label>
                    <div className="relative">
                        <select
                            id="apparatuses"
                            name="apparatuses"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            multiple
                            aria-describedby="apparatus-error"
                        >
                            <option value="" disabled>
                            </option>
                            {apparatuses.map((apparatus) => (
                                <option key={apparatus.id} value={apparatus.id}>
                                    {apparatus.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Skill Classes */}
                <div className="mb-4">
                    <label htmlFor="classes" className="mb-2 block text-sm font-medium">
                        Choose all applicable classes
                    </label>
                    <div className="relative">
                        <select
                            id="courses"
                            name="courses"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            multiple
                            aria-describedby="classes-error"
                        >
                            <option value="" disabled>
                            </option>
                            {courses.map((course) => (
                                <option key={course.id} value={course.id}>
                                    {course.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Skill Image Link */}
                {/* <div className="mb-4">
                    <label htmlFor="skill image" className="mb-2 block text-sm font-medium">
                        Skill Image Link
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

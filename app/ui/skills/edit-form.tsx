//'use client';

import { Skill } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { fetchCourses, fetchEventApparatuses } from '@/app/lib/data';
import { updateSkill } from '@/app/lib/actions';

export default async function EditSkillForm({
    skill,
}: {
    skill: Skill
}) {

    const apparatuses = await fetchEventApparatuses();
    const courses = await fetchCourses();

    const apparatusIsChecked: boolean[] = apparatuses.map((appa) => (
        skill.apparatus.includes(appa.name)
    ));
    const apparatusDefault: string[] = new Array(apparatusIsChecked.length);
    for (let i = 0; i < apparatusDefault.length; i++) {
        apparatusIsChecked[i] ? apparatusDefault[i] = 'checked' : apparatusDefault[i] = 'unchecked';
    }

    const courseIsChecked: boolean[] = courses.map((course) => (
        skill.course.includes(course.name)
    ));
    const courseDefault: string[] = new Array(courseIsChecked.length);
    for (let i = 0; i < courseDefault.length; i++) {
        courseIsChecked[i] ? courseDefault[i] = 'checked' : courseDefault[i] = 'unchecked';
    }


    return (
        <form action={updateSkill}>

            <input type="hidden" id="name" name="id" value={skill.id} />

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
                                defaultValue={skill.name}
                                required
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
                                defaultValue={skill.description}
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
                                            defaultValue={apparatusDefault[apparatus.id]}
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
                                            defaultValue={courseDefault[course.id]}
                                        />
                                    </label>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Skill Video Link */}
                <div className="mb-4">
                    <label htmlFor="skill video link" className="mb-2 block text-sm font-medium">
                        Skill Video Link (optional)
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="videoLink"
                                name="videoLink"
                                type="string"
                                defaultValue={skill.videoLink}
                                placeholder="Enter a url"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/dashboard/invoices"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Edit Invoice</Button>
                </div>

            </div>
        </form>
    );
}

//'use client';

import { Skill } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { fetchCourses, fetchEventApparatuses } from '@/app/lib/data';
import { updateSkill } from '@/app/lib/actions';
import { UpdateSkill } from './buttons';

export default async function SkillForm({
    skill,
}: {
    skill: Skill
}) {


    return (
        <form action={updateSkill}>

            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                {/* Skill Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        <strong>Name</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                            {skill.name}
                        </p>
                    </div>
                </div>

                {/* Skill Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        <strong>Description</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                            {skill.description}
                        </p>
                    </div>
                </div>

                {/* Skill Apparatuses */}
                <div className="mb-4">
                    <label htmlFor="apparatuses" className="mb-2 block text-sm font-medium">
                        <strong>Applicable Apparatus(es)</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                            {skill.apparatus}
                        </p>
                    </div>
                </div>

                {/* Skill Classes */}
                <div className="mb-4">
                    <label htmlFor="classes" className="mb-2 block text-sm font-medium">
                        <strong>Applicable Classes</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                            {skill.course}
                        </p>
                    </div>
                </div>

                
                {/* Skill Video Link REMOVED UNTIL IMPLEMENTED

                <div className="mb-4">
                    <label htmlFor="skill video link" className="mb-2 block text-sm font-medium">
                        <strong>Video Link</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                            {skill.videoLink}
                        </p>
                    </div>
                </div>*/}

                <UpdateSkill id={skill.id}/>
            </div>
        </form>
    );
}

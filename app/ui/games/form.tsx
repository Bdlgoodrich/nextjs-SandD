//'use client';

import { Game } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { fetchCourses, fetchEventApparatuses } from '@/app/lib/data';
import { updateGame } from '@/app/lib/actions';
import { UpdateGame } from './buttons';

export default async function GameForm({
    game,
}: {
    game: Game
}) {


    return (
        <form action={updateGame}>

            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                {/* Game Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        <strong>Name</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                            {game.name}
                        </p>
                    </div>
                </div>

                {/* Game Instructions */}
                <div className="mb-4">
                    <label htmlFor="instructions" className="mb-2 block text-sm font-medium">
                        <strong>Instructions</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                            {game.instructions}
                        </p>
                    </div>
                </div>

                {/* Game Apparatuses */}
                <div className="mb-4">
                    <label htmlFor="apparatuses" className="mb-2 block text-sm font-medium">
                        <strong>Applicable Apparatus(es)</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                            {game.apparatus}
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

                <UpdateGame id={game.id}/>
            </div>
        </form>
    );
}

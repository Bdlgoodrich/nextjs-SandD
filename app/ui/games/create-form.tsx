import { Game } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { fetchEventApparatuses, fetchCourses } from '@/app/lib/data';
import { createGame } from '@/app/lib/actions';

export default async function GamesForm({ games }: { games: Game[] }) {
    const apparatuses = await fetchEventApparatuses();
    const courses = await fetchCourses();
    return (
        <form action={createGame}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                {/* Game Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Game Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="string"
                                placeholder="Enter the game name"
                                required
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Game Instructions */}
                <div className="mb-4">
                    <label htmlFor="instructions" className="mb-2 block text-sm font-medium">
                        Instructions
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="instructions"
                                name="instructions"
                                type="string"
                                placeholder="Write all necessary instructions"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Game Apparatuses */}
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

                {/* Game Video Link */}
                <div className="mb-4">
                    <label htmlFor="skill video link" className="mb-2 block text-sm font-medium">
                        Game Video Link (optional)
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
                    href="/home/games"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Game</Button>
            </div>
        </form>
    );
}

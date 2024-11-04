import { Drill } from '@/app/lib/definitions';
import { UpdateDrill } from '../drills/buttons';

export default async function DrillForm({ drill }: { drill: Drill }) {

    return (
        <form>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                {/* Skill */}
                <div className="mb-4">
                    <label htmlFor="skill" className="mb-2 block text-sm font-medium">
                        <strong>Associated Skill</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                          {drill.skill}
                        </p>
                    </div>
                </div>

                {/* Drill Description */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        <strong>Description</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                          {drill.description}
                        </p>
                    </div>
                </div>

                {/* Drill Instructions */}
                <div className="mb-4">
                    <label htmlFor="instructions" className="mb-2 block text-sm font-medium">
                        <strong>Instructions</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                           {drill.instructions} 
                        </p>
                    </div>
                </div>

                {/* Drill Apparatus */}
                <div className="mb-4">
                    <label htmlFor="apparatuses" className="mb-2 block text-sm font-medium">
                        <strong>Applicable apparatuses</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                           {drill.apparatus} 
                        </p>
                    </div>
                </div>

                {/* Drill Equipment */}
                <div className="mb-4">
                    <label htmlFor="equipment" className="mb-2 block text-sm font-medium">
                        <strong>Required Equipment</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                           {drill.equipment} 
                        </p>
                    </div>
                </div>

                {/* Drill Video Link REMOVED UNTIL IMPLEMENTED
                <div className="mb-4">
                    <label htmlFor="drill video link" className="mb-2 block text-sm font-medium">
                        <strong>Drill Video Link</strong>
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <p className="relative">
                           {drill.videoLink} 
                        </p>
                    </div>
                </div>*/}

                <UpdateDrill id={drill.id}/>
            </div>
        </form>
    );
}

import { useState } from "react";
import CreateEventForm from "../forms/create-event-form";

const LandingPage = () => {
    const [showCreateEventForm, setShowCreateEventForm] = useState(false);

    return (
        <>
            <header>

            </header>
            <main>
                <div className="m-auto mt-4 rounded-xl bg-blue-800 sm:w-1/3 flex flex-row justify-center flex-wrap p-2">
                    <p className="font-bold text-xl underline text-white flex flex-grow-0 w-max">Trampoline Event Manager</p>

                    {showCreateEventForm
                        ? (
                            <CreateEventForm />
                        )
                        : (
                            <>
                                <div className="flex w-full justify-evenly">
                                    <button
                                        className="flex generic-button my-4"
                                        onClick={() => setShowCreateEventForm(!showCreateEventForm)}
                                    >
                                        Create Event</button>
                                    <button className="flex generic-button my-4">Load Event</button>
                                </div>
                            </>
                        )}
                </div>

            </main>
        </>
    )
}

export default LandingPage;
import { useEffect, useState } from "react";
import LoadEventList from "../components/load-event-list";
import CreateEventForm from "../forms/create-event-form";

const LandingPage = () => {
    const [showCreateEventForm, setShowCreateEventForm] = useState(false);
    const [showLoadEventList, setShowLoadEventList] = useState(false);

    useEffect(() => {
        console.log('show load changed: ' + showLoadEventList);
    }, [showLoadEventList])

    useEffect(() => {
        console.log('show create changed: ' + showCreateEventForm);
    }, [showCreateEventForm])

    const getDisplay = () => {
        if (showLoadEventList) return <LoadEventList setShowLoadEventList={setShowLoadEventList} />
        else if (showCreateEventForm) return <CreateEventForm setShowCreateForm={setShowCreateEventForm} />
        else {
            return (
                <div className="flex w-full justify-evenly">
                    <button
                        className="flex generic-button my-4"
                        onClick={() => setShowCreateEventForm(true)}
                    >
                        Create Event
                    </button>
                    <button
                        className="flex generic-button my-4"
                        onClick={() => setShowLoadEventList(true)}
                    >
                        Load Event
                    </button>
                </div>
            )
        }
    }

    return (
        <>
            <header>

            </header>
            <main>
                <div className="m-auto mt-4 rounded-xl bg-blue-800 sm:w-1/3 flex flex-row justify-center flex-wrap p-2">
                    <p className="font-bold text-xl underline text-white flex flex-grow-0 w-max">Trampoline Event Manager</p>
                    {
                        getDisplay()
                    }
                </div>

            </main>
        </>
    )
}

export default LandingPage;
import { useCallback, useEffect, useState } from "react";

type IEventList = {
    selectedEventId: number,
    setSelectedEventId: (id: number) => void
}

const EventList: React.FC<IEventList> = ({ selectedEventId, setSelectedEventId }) => {
    const [eventsList, setEventsList] = useState<any>([]);

    useEffect(() => {
        async function getEvents() {
            let events = await fetch('/api/event/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            return events.json();
        }

        getEvents().then((result) => {
            setEventsList(result);
        });
    }, []);

    return (
        <ul className="flex flex-col w-full items-center">
            {
                eventsList.map((e: any, i: number) =>
                    <li
                        className={
                            `${selectedEventId > e.id ? 'bg-yellow-500' : 'bg-slate-50'}
                            flex justify-center mx-auto my-1 font-semibold hover:bg-slate-300 rounded-lg px-16 min-w-[20vw]`}
                        key={i}
                        onClick={() => {
                            setSelectedEventId(e.id); 
                            console.log('Eventid: ', e.id);
                            console.log('selectedEventId: ', selectedEventId);
                        }}
                    >
                        {e.name}
                    </li>
                )
            }
        </ul>
    )
}

export default EventList;
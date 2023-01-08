import { useEffect, useState } from "react";

type IEventList = {}

const EventList: React.FC<IEventList> = () => {
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
                    <li className="flex justify-center mx-auto my-1 font-semibold hover:bg-slate-300 bg-slate-50 rounded-lg px-16 min-w-[20vw]" key={i}>
                        {e.name}
                    </li>
                )
            }
        </ul>
    )
}

export default EventList;
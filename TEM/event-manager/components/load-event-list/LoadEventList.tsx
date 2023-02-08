import EventListButtons from "./EventListButtons";
import EventList from "./EventList";
import { useState } from "react";

type ILoadEventList = {
    setShowLoadEventList: (show: boolean) => void
}

const LoadEventList: React.FC<ILoadEventList> = ({ setShowLoadEventList }) => {
    const [selectedEventId, setSelectedEventId] = useState(-1);

    return (
        <div className='flex flex-col flex-wrap w-full items-center mt-2'>
            <EventList selectedEventId={selectedEventId} setSelectedEventId={setSelectedEventId} />
            <EventListButtons setShowLoadEventList={setShowLoadEventList} selectedEventId={selectedEventId} />
        </div>
    )
}

export default LoadEventList;
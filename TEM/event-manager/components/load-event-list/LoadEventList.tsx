import EventListButtons from "./EventListButtons";
import EventList from "./EventList";

type ILoadEventList = {
    setShowLoadEventList: (show: boolean) => void
}

const LoadEventList : React.FC<ILoadEventList> = ({ setShowLoadEventList }) => {
    return (
        <div className='flex flex-col flex-wrap w-full items-center mt-2'>
            <EventList />
            <EventListButtons setShowLoadEventList={setShowLoadEventList} />
        </div>
    )
}

export default LoadEventList;
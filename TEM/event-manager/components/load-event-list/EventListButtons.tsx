type IEventListButtons = {
    setShowLoadEventList: (show: boolean) => void,
    selectedEventId: number
}

const EventListButtons: React.FC<IEventListButtons> = ({ setShowLoadEventList, selectedEventId }) => {
    
    const loadEvent = (eventId: number) => {

    }

    return (
        <div className='flex flex-row mt-3 mb-4'>
            <button
                className='generic-button mx-2'
                onClick={() => setShowLoadEventList(false)}
            >
                Back
            </button>
            <button className='generic-button mx-2' onClick={() => loadEvent(selectedEventId)}>
                Load
            </button>
        </div>
    )
}

export default EventListButtons;
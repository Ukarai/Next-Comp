type IEventListButtons = {
    setShowLoadEventList: (show: boolean) => void
}

const EventListButtons: React.FC<IEventListButtons> = ({setShowLoadEventList}) => {
    return (
        <div className='flex flex-row my-1'>
            <button 
                className='generic-button mx-2'
                onClick={() => setShowLoadEventList(false)}
            >
                Back
            </button>
            <button className='generic-button mx-2'>
                Load
            </button>
        </div>
    )
}

export default EventListButtons;
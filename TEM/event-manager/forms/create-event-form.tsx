const CreateEventForm = () => {
    return (
        <form className='flex flex-col flex-wrap'>
            <label className='flex my-1 mx-2 mt-2 text-white'>
                Name:
                <input type='text' name='event-name' className='ml-[0.55rem] rounded-lg' />
            </label>
            <label className='flex my-1 mx-2 text-white'>
                Venue:
                <input type='text' name='event-venue' className='ml-2 rounded-lg' />
            </label>
            <div className="flex justify-end my-1 mb-1 mx-2">
                <button className="flex generic-button">
                    Back
                </button>
                <button className="flex generic-button ml-2">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default CreateEventForm;
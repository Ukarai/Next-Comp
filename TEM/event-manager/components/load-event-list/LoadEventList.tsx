const LoadEventList = () => {
    return (
        <div className='flex flex-col flex-wrap w-full items-center mt-2'>
            <ul className="flex flex-col w-full items-center">
                <li className="flex mx-auto my-1 font-semibold hover:bg-slate-300 bg-slate-50 rounded-lg px-16">Event 1</li>
                <li className="flex mx-auto my-1 font-semibold hover:bg-slate-300 bg-slate-50 rounded-lg px-16">Event 2</li>
                <li className="flex mx-auto my-1 font-semibold hover:bg-slate-300 bg-slate-50 rounded-lg px-16">Event 3</li>
                <li className="flex mx-auto my-1 font-semibold hover:bg-slate-300 bg-slate-50 rounded-lg px-16">Event 4</li>
                <li className="flex mx-auto my-1 font-semibold hover:bg-slate-300 bg-slate-50 rounded-lg px-16">Event 5</li>
            </ul>

            <div className='flex flex-row my-1'>
                <button className='generic-button mx-2'>
                    Back
                </button>
                <button className='generic-button mx-2'>
                    Load
                </button>
            </div>
        </div>
    )
}

export default LoadEventList;
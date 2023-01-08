import { useState } from 'react'

type ICreateEventForm = {
    setShowCreateForm: (show: boolean) => void
}

const CreateEventForm: React.FC<ICreateEventForm> = ({ setShowCreateForm }) => {
    const [name, setName] = useState('');
    const [venue, setVenue] = useState('');

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();

        fetch('/api/event/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                venue: venue
            })
        });

        exitForm();
    }

    const exitForm = () => {
        setName('');
        setVenue('');
        setShowCreateForm(false);
    }

    return (
        <form onSubmit={submitForm} className='flex flex-col flex-wrap'>
            <label className='flex my-1 mx-2 mt-2 text-white'>
                Name:
                <input
                    type='text'
                    name='eventName'
                    className='pl-2 ml-[0.55rem] rounded-lg text-black'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={25}
                    required
                />
            </label>
            <label className='flex my-1 mx-2 text-white'>
                Venue:
                <input
                    type='text'
                    name='eventVenue'
                    className='pl-2 ml-2 rounded-lg text-black'
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    maxLength={25}
                    required
                />
            </label>
            <div className="flex justify-end my-1 mb-4 mx-2">
                <button
                    type='button'
                    className="flex generic-button"
                    onClick={exitForm}
                >
                    Back
                </button>
                <button type='submit' className="flex generic-button ml-2">
                    Create
                </button>
            </div>
        </form>
    )
}

export default CreateEventForm;
import React, { useState } from 'react';

let nextId = 0;
const UpdatingArray = () => {
    const [name, setName] = useState('');
    // const [artists, setArtists] = useState([]);
    const [friendName, setFriendName] = useState('');
    const [friend, setFriend] = useState([]);
    // console.log("artists:", artists);
    // console.log("friendName", friendName);
    // console.log("friend", friend);

    let initialArtists = [
        { id: 0, name: 'Marta Colvin Andrade' },
        { id: 1, name: 'Lamidi Olonade Fakeye'},
        { id: 2, name: 'Louise Nevelson'},
    ];
    const [artists, setArtists] = useState(
        initialArtists
    );
    return (
        <div>
             <h1>Inspiring sculptors:</h1>
            <input
            className='border bottom-1 border-blue-50'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button className='border bottom-1 border-blue-50' onClick={() => {
              setArtists([...artists, {id:nextId, name:name}])
            }}>Add</button>
            <ul>
                {artists.map(artist => (
                <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
            <h2>Hello</h2>
            <h2>Now I Add My friend to the List</h2>
            <input type="text" 
                value={friendName}
                onChange={(e)=> setFriendName(e.target.value)}
                className='border border-2-gray'
            />
            <button
            className='p-2 bg-gray-500'
            onClick={()=>{
                setFriend([...friend, {id:nextId, name:friendName}])
                nextId++
                setFriendName('')
            }}
            >
                Add Friend
            </button>
            <ul>{
                friend.map((friend) =>(
                    <li key={friend.id}>
                        <h2>{friend.name}</h2>
                    </li>
                ))
                }
                <li>

                </li>
            </ul>

            <h2>Delete Item From List</h2>

            <ul>
                {artists.map(artist => (
                <li key={artist.id}>
                    {artist.name}{' '}
                    <button onClick={() => {
                    setArtists(
                        artists.filter(a =>
                        a.id !== artist.id
                        )
                    );
                    }}>
                    Delete
                    </button>
                </li>
                ))}
            </ul>
            
        </div>

    );
}

export default UpdatingArray;

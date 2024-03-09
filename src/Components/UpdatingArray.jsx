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
    // console.log("Initial artist: ",initialArtists)
    const [artists, setArtists] = useState(
        initialArtists
    );
    // console.log("artist:", artists);
    const arrayFromBackend = [
        {
            id:1, 
            firstName:"Md",
            lastName:"Shakil"
        },
        {
            id:2,
            firstName:"Nawshad",
            lastName:"Islam"
        },
        {
            id:3,
            firstName:"Abdul",
            lastName:"Owhab"
        }
    ]
    // console.log("arrayFromBackend", arrayFromBackend);
    const [nameB, setNameB] = useState(arrayFromBackend);
    // console.log("nameB",nameB);
    let initialShape = [
        { id: 0, type: 'circle', x: 50, y: 80 },
        { id: 1, type: 'square', x: 150, y: 80 },
        { id: 2, type: 'circle', x: 250, y: 80 },
    ]
    const [shapes, setShapes] = useState(initialShape);
    const handleClick = () =>{
        const nextShapes = shapes.map((shape) =>{
            if(shape.type === 'square'){
                // no change
                return shape
            }else{
                return{
                    ...shape,
                    y:shape.y+50,
                }
            }
        })
        setShapes(nextShapes)
    }

let initialCounters =[
    0,0,0
]
const [counters, setCounters] = useState(initialCounters);
const handleCounter = (index) =>{
    const nextCounters = counters.map((counter,i) =>{
        if(i === index){
            return counter + 1;
        }else{
            return counter
        }
        
    });
    setCounters(nextCounters)
}

    return (
        <div>
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
                    <button className='bg-gray-100 p-2 my-3' onClick={() => {
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
            <ul>
                {
                    nameB.map((item) =>(
                        <li key={item.id} className='text-2xl my-3'>
                            <span>{`id:${item.id}  Name:${item.firstName} ${item.lastName}`}</span>
                            <button onClick={()=>{
                                setNameB(
                                    nameB.filter(friend =>
                                        friend.id !== item.id
                                    )
                                    );
                            } } className='bg-gray-500 text-white p-1 m-2 rounded-sm'>Delete</button>
                        </li>
                    ))
                }
            </ul>
           </div>
            <h2>Transformin an array</h2>
            <div className='relative py-5 mb-10 h-[400px]'>
                <button onClick={handleClick} className='bg-gray-500 text-white p-2'>Move Circle</button>
                {
                shapes.map((shape) =>(
                    <div key={shape.id}
                        style={{
                            background:'purple',
                            position:'absolute',
                            left:shape.x,
                            top:shape.y,
                            borderRadius:
                            shape.type == 'circle'? '50%': '',
                            width:20,
                            height:20
                        }}
                    >
                    </div>
                ))
            }
            </div>
            <div>
                <ul>
                    {counters.map((counter,index) =>(
                        <li key={index}>
                            {counter}
                            <button
                                onClick={() =>handleCounter(index)}
                                className='bg-gray-100 p-2 m-4'
                            >
                                +1
                            </button>
                        </li>
                    ))}
                    <li></li>
                </ul>
            </div>
        </div>

    );
}

export default UpdatingArray;

import React from 'react';
import User from './Components/Testing/Event';
import State from './Components/State';
import MouseMove from './Components/MouseMove';
import UpdateObjectState from './Components/UpdateObjectState';


const App = () => {
    return (
        <div className="max-w-[800px] mx-auto py-3">
            <User/>
            {/* <MouseMove/> */}
            <UpdateObjectState/>
            {/* <State/> */}
        </div>
    );
}

export default App;

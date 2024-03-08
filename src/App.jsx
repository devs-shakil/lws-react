import React from 'react';
import User from './Components/Testing/Event';
// import State from './Components/State';
// import MouseMove from './Components/MouseMove';
// import UpdateObjectState from './Components/UpdateObjectState';
import UpdatingArray from './Components/UpdatingArray';


const App = () => {
    return (
        <div className="max-w-[800px] mx-auto py-3">
            <User/>
            {/* <MouseMove/> */}
            {/* <UpdateObjectState/> */}
            {/* <State/> */}
            <UpdatingArray/>
        </div>
    );
}

export default App;

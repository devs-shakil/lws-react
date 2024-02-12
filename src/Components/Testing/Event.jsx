function AlertButtonCustom({messageCustom, children}){
  return(
    <button onClick={() => alert(messageCustom)}>
       {children}
    </button>
  )
}


export default function User(){
  return(
    <div>
      {/* <AlertButtonCustom messageCustom="How Are You Md Shakil">
          Doing Chating
      </AlertButtonCustom> 
      <AlertButtonCustom messageCustom="What you Eating?">
        <div>Hello bangladesh</div>
        bangladesj
        <h4>Hellp</h4>
      </AlertButtonCustom>     */}

        <div className="Toolbar" onClick={() => {
          alert('You clicked on the toolbar!');
           }}>
            <button onClick={() => alert('Playing!')}>
              Play Movie
            </button>
            <button onClick={() => alert('Uploading!')}>
              Upload Image
            </button>
        </div>
    </div>
  )
}

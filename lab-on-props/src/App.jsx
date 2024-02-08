import './App.css';



function App(props) {
  // code here
  var i=props.value;

  return(
    <div className="app">
      <h1>Kalvium gallary</h1>
      <div className='imgContainer'>
      {
        i.map((images)=>(
          <img src={images.img} />
        ))
      }
      </div>
    </div>
  )
}

export default App;
export default function UserDefined(){
    return (<div>
        <h3 id="text">Click on color below to change color of text</h3>
        <button style={{background:'red',height:"50px",width:"50px"}} onClick={()=>{
            document.querySelector("#text").style.color = "red";
            alert("Since red was pressed, text color changed to red")
        }}></button>
        <button style={{background:'blue',height:"50px",width:"50px"}} onClick={()=>{
            document.querySelector("#text").style.color = "blue";
            alert("Since blue was pressed, text color changed to blue")
        }}></button>
        <button style={{background:'black',height:"50px",width:"50px"}} onClick={()=>{
            document.querySelector("#text").style.color = "black";
            alert("Since black was pressed, text color changed to black")
        }}></button>
    </div>)
}
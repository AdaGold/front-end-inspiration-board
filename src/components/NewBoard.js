import React,{useState} from 'react'

const NewBoard = (prop)=>{
 console.log("boards",prop.newBoardInfo, prop.newCardInfo)
   return (
       <div>
           <h1>Create A New Board</h1>
           {/* <form>
              <label>
                  Title:
                  <input type='text'/>
              </label>
              <label>
                  Owner:
                  <input type='text'/>
              </label>
              <label>
                  Preview:
                  <input type='text'/>
              </label>
           </form> */}
       </div>
   )
}
export default NewBoard;
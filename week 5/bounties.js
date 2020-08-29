import React, {useState} from 'react'
import AddBountyForm from 'C:\Users\melis\dev\bryan-university\fsw-125\week 5\POSTbounty.js'


export default function Bounty(props){
    const {editToggle, setEditToggle} = useState(false)
    console.log(props)
    const {firstName, lastName, bountyAmt, id} = props
    return 
    <div>
        { editToggle ?
        <>
        <h1>Name: {firstName}</h1>
        <p>Bounty: {bountyAmt}</p>
        <button
        onClick= {() => props.deleteBounty()}>Delete</button>
        <button
        onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
        </>
        :
        <>
        <AddBountyForm
        firstName={firstName}
        bountyAmt={bountyAmt}
        id={id}
        btntext="Update Bounty"
        submit= {props.editmovie}/>
      
        
        <button
        onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
        </> }
        
    </div>
}


const bountys = [
    {
        firstName: "C-3P0",
        lastName: "N/A",
        living: true,
        bountyAmt: "500",
        type: "N/A",
        id: uuid()
    }, {
        firstName: "Darth",
        lastName: "Vader",
        living: true,
        bountyAmt: "1000",
        type: "Sith",
        id: uuid()
    }, {
        firstName: "Annikan",
        lastName: "Skywalker",
        living: true,
        bountyAmt: "1000",
        type: "Jedi",
        id: uuid()
    }
]

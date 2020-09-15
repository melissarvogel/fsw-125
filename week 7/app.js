import React, { useState, useEffect} from React
import Axios from 'Axios'
import crewMembers from 'C:\Users\melis\dev\bryan-university\fsw-125\week 5\members.js'
import POSTcrewMembers from "C:\Users\melis\dev\bryan-university\fsw-125\week 7\memberSubmit.js"

//GET
export default function getcrewMembers(){
    const [crewmembers, setcrewmembers] = useState([])
    Axios.get("/crewMembers")
    .then(res => console.log(res))
    .then(res => setcrewmembers(res.data))
    .cathc(err => console.log(err))}
    
    
    
//POST
function addcrewMembers(newcrewMembers){
    Axios.post("/crewMembers", newcrewMembers)
    .then(res =>{
        setcrewmembers(prevcrewmembers => [...prevcrewmembers, res.data])
    })
    .catch(err => console.log(err))
}

//DELETE

function deletecrewMembers(crewMembersuuid){
    Axios.delete("/crewMembers", { crewMembersuuid})
    .then(res =>{
        setcrewmembers(prevcrewmembers => prevcrewmembers.filter(crewMembers=> crewMembers.uuid !== crewMembersuuid))
    })
    .catch(err=> console.log(err))
}

//PUT
function editcrewMembers(updates, crewMembersuuid){
    Axios.put("/crewMembers", {crewMembersuuid}, updates)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


    useEffect(()=> {
        getcrewMembers()
    }, [])


    
    return(
        <div>
            <>
            <POSTcrewMembers 
            submit={addcrewMembers}
            btntext= "Add Movie"/>
            {crewmembers.map(crewMembers => <crewMembers {...crewMembers} key ={crewMembers.name}/>) } 
            </>
            {
                crewmembers.map(crewMembers =>
                   <crewMembers
                   {...crewMembers}
                   key={crewMembers.firstname}
                   deletecrewMembers={deletecrewMembers}
                   editcrewMembers={editcrewMembers} /> )
            }
        </div>
    )






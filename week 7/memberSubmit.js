import React, {useState} from 'react'


export default function AddMemberForm(props){
   const initInputs = {name: props.name || " ", rank: props.rank || " "}
   const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        
        props.submit(inputs, props.uuid)
        setInputs(initInputs)
    }

    return
    <form onSubmit= {handleSubmit}>
    
        <input type="text" name="name" value={inputs.name} onChange= {handleChange} placeholder="Name"></input>
        <input type="text" name="rank" value={inputs.rank} onChange= {handleChange} placeholder="Bounty Amount"></input>

        <button>{props.btntext}</button>
    </form>
}
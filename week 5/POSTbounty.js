import React, {useState} from 'react'


export default function AddBountyForm(props){
   const initInputs = {firstName: props.firstName || " ", bountyAmt: props.bountyAmt || " "}
   const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        
        props.submit(inputs, props.id)
        setInputs(initInputs)
    }

    return
    <form onSubmit= {handleSubmit}>
    
        <input type="text" name="firstName" value={inputs.firstName} onChange= {handleChange} placeholder="Name"></input>
        <input type="text" name="bountyAmt" value={inputs.bountyAmt} onChange= {handleChange} placeholder="Bounty Amount"></input>

        <button>{props.btntext}</button>
    </form>
}
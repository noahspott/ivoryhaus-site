import React from 'react'

export default function NewsletterForm(){

    const [formData, setFormData] = React.useState(
        {email: ""}
    )

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input 
                        type="text" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <button>Join Newsletter</button>
            </form>
        </>
    )
}
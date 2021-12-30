import { useForm } from "../hooks/useForm"

interface FormInformationData {
    email: string,
    name: string
}

export const Form = () => {
    const { name, email, form, handleChange } = useForm<FormInformationData>(
        {
            email: 'sevann.radhak@gmail.com',
            name: 'Sevann Radhak'
        })

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                    value={name} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={handleChange}
                    value={email} />
            </div>

            <pre>{JSON.stringify(form)}</pre>
        </form>
    )
}

import React, { useState } from 'react';

function MyForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        contact: '',
        subscribe: false,
        resume: null
    });

    // Handle input change
    const handleChange = (event) => {
        const { name, value, type, checked, files } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Form submitted successfully!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Gender:
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <br />
            <label>Preferred Contact Method:</label>
            <label>
                <input type="radio" name="contact" value="email" checked={formData.contact === "email"} onChange={handleChange} />
                Email
            </label>
            <label>
                <input type="radio" name="contact" value="phone" checked={formData.contact === "phone"} onChange={handleChange} />
                Phone
            </label>
            <br />
            <label>
                <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} />
                Subscribe to Newsletter
            </label>
            <br />
            <label>
                Upload Resume:
                <input type="file" name="resume" onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;

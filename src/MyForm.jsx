import React, { useState } from 'react';

function MyForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        contact: '',
        subscribe: false,
        dob: '',
        feedback: ''
    });

    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    // Handle input change
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Validate form
    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required!";
        if (!formData.email.trim()) newErrors.email = "Email is required!";
        if (!formData.gender) newErrors.gender = "Please select a gender!";
        if (!formData.contact) newErrors.contact = "Please select a contact method!";
        if (!formData.dob) newErrors.dob = "Please select your date of birth!";
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({}); // Clear errors if valid

        // Store submitted data
        setSubmittedData(formData);

        alert("Form submitted successfully!");
        
        // Clear the form after submission
        /*setFormData({
            name: '',
            email: '',
            gender: '',
            contact: '',
            subscribe: false,
            dob: '',
            feedback: ''
        });
        */
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
            <h2 style={{ textAlign: "center", color: "purple" }}>My React Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "5px" }} />
                </label>
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                <br />

                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "5px" }} />
                </label>
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <br />

                <label>
                    Gender:
                    <select name="gender" value={formData.gender} onChange={handleChange} style={{ width: "100%", padding: "5px" }}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
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
                {errors.contact && <p style={{ color: "red" }}>{errors.contact}</p>}
                <br />

                <label>
                    Date of Birth:
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} style={{ width: "100%", padding: "5px" }} />
                </label>
                {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}
                <br />

                <label>
                    Feedback:
                    <textarea name="feedback" value={formData.feedback} onChange={handleChange} placeholder="Write your feedback here..." style={{ width: "100%", padding: "5px" }}></textarea>
                </label>
                <br />

                <label>
                    <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} />
                    Subscribe to Newsletter
                </label>
                <br />

                <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "purple", border: "none", color: "white", fontWeight: "bold", cursor: "pointer" }}>
                    Submit
                </button>
            </form>

            {/* Display Submitted Data */}
            {submittedData && (
                <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <h2>Submitted Data:</h2>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Gender:</strong> {submittedData.gender}</p>
                    <p><strong>Preferred Contact:</strong> {submittedData.contact}</p>
                    <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
                    <p><strong>Feedback:</strong> {submittedData.feedback}</p>
                    <p><strong>Subscribed:</strong> {submittedData.subscribe ? "Yes" : "No"}</p>
                </div>
            )}
        </div>
    );
}

export default MyForm;

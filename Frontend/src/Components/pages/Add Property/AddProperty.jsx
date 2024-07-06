import React, { useState, useEffect } from 'react';

const AddProperty = ({ email }) => {
    const [formData, setFormData] = useState({
        status: '',
        title: '',
        price: '',
        location: '',
        details: '',
        addedBy: email,
    });

    const [images, setImages] = useState(null);
    const [statusOptions, setStatusOptions] = useState([]);

    useEffect(() => {
        const fetchStatusOptions = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/featuredproperty/get/status/');
                const data = await response.json();
                setStatusOptions(data);
            } catch (error) {
                console.error('Error fetching status options:', error);
            }
        };
        fetchStatusOptions();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = 'http://127.0.0.1:8000/api/featuredproperty/addProperty/';
        const formDataWithFiles = new FormData();

        // Append property data
        Object.keys(formData).forEach(key => {
            formDataWithFiles.append(key, formData[key]);
        });

        // Append images
        if (images) {
            for (let i = 0; i < images.length; i++) {
                formDataWithFiles.append('images', images[i]);
            }
        }

        try {
            // Add property data
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    // 'Authorization': 'Bearer your-token', // If authentication is required
                    // 'Content-Type': 'multipart/form-data', // Not needed for FormData
                },
                body: formDataWithFiles,
            });

            if (response.ok) {
                const property = await response.json();
                console.log('Property added:', property);

                // Clear form data
                setFormData({
                    status: '',
                    title: '',
                    price: '',
                    location: '',
                    details: '',
                    addedBy: email,
                });
                setImages(null); // Reset images state
            } else {
                console.error('Failed to add property:', response.statusText);
            }
        } catch (error) {
            console.error('Add property error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded py-20 md:py-28">
            <div className="text-3xl font-bold mb-6 text-center hover:text-red-500">Add Property</div>
            <div className="mb-4">
                <label className="block text-gray-700">Status</label>
                <select
                    name="status"
                    className="w-full px-3 py-2 border rounded"
                    value={formData.status}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Status</option>
                    {statusOptions.map((status) => (
                        <option key={status.id} value={status.id}>{status.type}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Price</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Details</label>
                <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Upload Images</label>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Added By</label>
                <input
                    type="text"
                    value={formData.addedBy}
                    readOnly
                    className="w-full px-3 py-2 border rounded bg-gray-100"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit Property</button>
        </form>
    );
};

export default AddProperty;

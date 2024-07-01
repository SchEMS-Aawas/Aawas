import React, { useState, useEffect } from 'react';

const AddProperty = ({ username }) => {
    const [formData, setFormData] = useState({
        status: '',
        title: '',
        price: '',
        location: '',
        details: '',
        addedBy: username,
    });

    const [images, setImages] = useState([]);
    const [statusOptions, setStatusOptions] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/featuredproperty/get/status/')
            .then(response => response.json())
            .then(data => setStatusOptions(data));
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setImages(Array.from(e.target.files));
    };

    const handleNext = (e) => {
        e.preventDefault();
        setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = 'http://127.0.0.1:8000/api/featuredproperty/addProperty/';
        const imageUploadUrl = 'http://127.0.0.1:8000/api/featuredproperty/uploadImage/';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer your-token', // If authentication is required
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const property = await response.json();
                console.log('Property added:', property);

                if (images.length > 0) {
                    const imageFormData = new FormData();
                    images.forEach((image, index) => {
                        imageFormData.append(`images[${index}]`, image);
                    });
                    imageFormData.append('featured_property', property.id);

                    const imageResponse = await fetch(imageUploadUrl, {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer your-token',
                        },
                        body: imageFormData,
                    });

                    if (imageResponse.ok) {
                        console.log('Images uploaded successfully');
                    } else {
                        console.error('Failed to upload images:', imageResponse.statusText);
                    }
                }

                // Optionally, clear the form data after successful submission
                setFormData({
                    status: '',
                    title: '',
                    price: '',
                    location: '',
                    details: '',
                    addedBy: username,
                });
                setImages([]);
                // Move to next step after successful submission
                setCurrentStep(0);
            } else {
                console.error('Failed to add property:', response.statusText);
            }
        } catch (error) {
            console.error('Add property error:', error);
        }
    };

    return (
        <div>
            {currentStep === 0 && (
                <form onSubmit={handleNext} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded py-20 md:py-28">
                    <div className="text-3xl font-bold mb-6 pl-40 hover:text-red mt-14">Add Property</div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Status</label>
                        <select
                            name="status"
                            className="w-full"
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
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Next</button>
                </form>
            )}

            {currentStep === 1 && (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded py-20 md:py-28">
                    <div className="text-3xl font-bold mb-6 pl-40 hover:text-red">Upload Image</div>
                    <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="w-full mb-4"
                    />
                    <button type="button" onClick={handlePrevious} className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-4">Previous</button>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit Property</button>
                </form>
            )}
        </div>
    );
};

export default AddProperty;

import React from 'react'

const Useform = () => {
  return (
    [formData, setFormData] = useState({
        fname: '',
        mname: '',
        lname: '',
        dob: '',
        phoneNumber: '',
        citizenship: '',
        gender: '',
        membership: '',
        address: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      const [errorMessage, setErrorMessage] = useState('');
    
      useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('dob').setAttribute('max', today);
      }, []);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          setErrorMessage('Passwords do not match!');
        } else {
          setErrorMessage('');
          alert(`Date of Birth: ${formData.dob}`);
          // Further form submission logic
        }
      };
    
      return {
        formData,
        handleChange,
        handleSubmit,
        errorMessage,
      };
    };

export default Useform

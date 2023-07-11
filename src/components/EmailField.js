import { TextInput } from 'react-native';

const EmailField = ({ value, onChange }) => {
    const handleInputChange = (event) => {
      onChange(event.target.value);
    };
  
    return (
      <TextInput
        className='shadow-xl bg-white p-4 text-blue placeholder:text-blue placeholder:text-opacity-80 rounded-2xl my-2 mx-auto w-full'
        keyboardType="email-address"
        value={value}
        onChange={handleInputChange}
        placeholder="Email address"
      />
    );
  };

export default EmailField;
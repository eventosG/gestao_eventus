import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import React, { useState, useEffect } from 'react';

const Reactphone = () => {
    const [value, setValue] = useState()
    return <>
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
    </>;
}
export default Reactphone;
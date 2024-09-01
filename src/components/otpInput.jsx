import React, { useMemo, useState } from 'react';
import { useRef } from 'react';

const OtpInput = ({ size = 4 }) => {
    const inputRefs = Array.from({ length: size }, () => React.useRef());
    const [otpChangeReference, setOTPChangeReference] = useState('')
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e, index) => {
        if(index !== inputRefs.length - 1 && inputRefs[index].current.value) {
            inputRefs[index + 1].current.focus();
        }  
        setOTPChangeReference(index)
    }

    const otp = useMemo(() => {
        let result = '';
        if(inputRefs.length) {
            inputRefs.forEach(ref => {
                if(ref.current) {
                    result += ref.current.value;
                }
            });
        }
        return result;
    }, [otpChangeReference]);

    const handleKeyDown = (e, index) => {
        setTimeout(() => {
            if(e.key && e.key.toLowerCase() === 'backspace') {
                if(index !== 0) {
                    inputRefs[index - 1].current.focus();
                }
                setOTPChangeReference(index)
            }
        });
    }
    return (
        <div className='board-parent otp-parent'>
            {
                otp &&
                <h4 style={{ textAlign : 'center' }}> The OTP is {otp} </h4>
            }

            <div>
                {
                    inputRefs.map((ref, index) => (
                        <input 
                            key={index}
                            ref={ref} 
                            type="text" 
                            id={`input-${index}`}   
                            onChange={(e) => handleInputChange(e, index)} 
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default OtpInput
import React, { useRef, useState } from "react";

const OTPInput: React.FC<{ length: number }> = ({ length }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inpRef = useRef<(HTMLInputElement | null)[]>(Array(length).fill(null));

  const handleNextOTP = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < length - 1) {
      inpRef.current[index + 1]?.focus();
    }
    if (value) {
      inpRef.current[index]?.blur();
    }
  };

  const handleRemove = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inpRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("Text")
      .slice(0, length)
      .split("");

    const newOtpValues = Array(length).fill("");
    pastedData.forEach((char, i) => {
      newOtpValues[i] = char;
    });

    setOtp(newOtpValues);
  };
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {otp.map((_, index) => (
        <input
          ref={(el) => (inpRef.current[index] = el)}
          key={index}
          onChange={(e) => handleNextOTP(e.target.value, index)}
          onKeyDown={(e) => handleRemove(e, index)}
          onPaste={handlePaste}
          maxLength={1}
          value={otp[index]}
          type="number"
          style={{
            maxWidth: "40px",
            height: "40px",
            fontSize: "24px",
            textAlign: "center",
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;

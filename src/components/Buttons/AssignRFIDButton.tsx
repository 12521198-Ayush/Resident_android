import React from 'react';

interface SubmitBtnProps {
    text: string;
    onClick?: () => void;
    htmlType?: 'button' | 'submit' | 'reset';
    gradientColors?: [string, string];
    disabled?: boolean;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({
    text,
    onClick,
    htmlType = 'button',
    gradientColors = ['#4e92ff', '#1e62d0'],
    disabled = false,
}) => {
    return (
        <button
            type={htmlType}
            disabled={disabled}
            style={{
                marginBottom: '8px',
                background: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]})`,
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: disabled ? 'not-allowed' : 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                opacity: disabled ? 0.6 : 1, // Reduced opacity when disabled
            }}
            onMouseEnter={(e) => {
                if (!disabled) {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                }
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default SubmitBtn;

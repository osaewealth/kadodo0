import React from 'react';
import './Button.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick
}) => {
    return (
        <button
            className={`btn btn-${variant} btn-${size} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;

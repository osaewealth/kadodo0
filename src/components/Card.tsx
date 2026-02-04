import React from 'react';
import './Card.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    shadow?: 'none' | 'sm' | 'md';
    border?: boolean;
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    padding = 'md',
    shadow = 'sm',
    border = true
}) => {
    return (
        <div className={`card card-p-${padding} card-shadow-${shadow} ${border ? 'card-border' : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Card;

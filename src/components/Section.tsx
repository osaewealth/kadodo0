import React from 'react';

interface SectionProps {
    id?: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
    id,
    title,
    subtitle,
    children,
    className = '',
    containerClassName = '',
    dark = false
}) => {
    return (
        <section
            id={id}
            className={`${dark ? 'bg-dark' : ''} ${className}`}
            style={dark ? { backgroundColor: 'var(--color-secondary)', color: 'white' } : {}}
        >
            <div className={`container ${containerClassName}`}>
                {(title || subtitle) && (
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        {title && <h2 style={{ marginBottom: subtitle ? '12px' : '0' }}>{title}</h2>}
                        {subtitle && <p style={{ color: dark ? 'rgba(255,255,255,0.8)' : 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;

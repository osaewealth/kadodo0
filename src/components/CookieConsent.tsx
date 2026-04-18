import React, { useState, useEffect } from 'react';
import { X, Cookie, ChevronDown, ChevronUp, Shield, BarChart3, Settings, Target } from 'lucide-react';
import './CookieConsent.css';

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    functionality: boolean;
    marketing: boolean;
}

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showManageModal, setShowManageModal] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        analytics: false,
        functionality: false,
        marketing: false,
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consentStatus = localStorage.getItem('cookieConsent');
        if (!consentStatus) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            // Load saved preferences
            try {
                const savedPrefs = JSON.parse(consentStatus);
                setPreferences(savedPrefs);
            } catch (e) {
                // Invalid stored data, show banner again
                setIsVisible(true);
            }
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted: CookiePreferences = {
            necessary: true,
            analytics: true,
            functionality: true,
            marketing: true,
        };
        setPreferences(allAccepted);
        localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        setIsVisible(false);
        setShowManageModal(false);
    };

    const handleRejectNonEssential = () => {
        const essentialOnly: CookiePreferences = {
            necessary: true,
            analytics: false,
            functionality: false,
            marketing: false,
        };
        setPreferences(essentialOnly);
        localStorage.setItem('cookieConsent', JSON.stringify(essentialOnly));
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        setIsVisible(false);
        setShowManageModal(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem('cookieConsent', JSON.stringify(preferences));
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        setIsVisible(false);
        setShowManageModal(false);
    };

    const togglePreference = (key: keyof CookiePreferences) => {
        if (key === 'necessary') return; // Cannot toggle necessary cookies
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const openManageModal = () => {
        setShowManageModal(true);
        setIsExpanded(false);
    };

    const closeManageModal = () => {
        setShowManageModal(false);
    };

    const handleCloseBanner = () => {
        // Just minimize the banner, don't make a choice
        setIsVisible(false);
    };

    // Re-open banner for users to change preferences
    const reopenConsent = () => {
        setIsVisible(true);
        setShowManageModal(true);
    };

    if (!isVisible && !showManageModal) {
        // Render a small floating button to reopen consent settings
        return (
            <button 
                className="cookie-settings-floating-btn" 
                onClick={reopenConsent}
                aria-label="Cookie Settings"
                title="Cookie Settings"
            >
                <Cookie size={20} />
            </button>
        );
    }

    return (
        <>
            {/* Main Banner */}
            {isVisible && !showManageModal && (
                <div className="cookie-banner">
                    <div className="cookie-banner-content">
                        <div className="cookie-banner-header">
                            <div className="cookie-icon-wrapper">
                                <Cookie size={24} />
                            </div>
                            <div className="cookie-banner-text">
                                <h3>Your Privacy Matters</h3>
                                <p>
                                    We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                                    By clicking "Accept All", you consent to our use of cookies. 
                                    <a href="/cookie-policy" className="cookie-policy-link">Learn more</a>
                                </p>
                            </div>
                            <button 
                                className="cookie-close-btn" 
                                onClick={handleCloseBanner}
                                aria-label="Close cookie banner"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {isExpanded && (
                            <div className="cookie-banner-expanded">
                                <div className="cookie-categories-preview">
                                    <div className="cookie-category-item">
                                        <Shield size={16} />
                                        <span>Strictly Necessary</span>
                                        <small>Always active</small>
                                    </div>
                                    <div className="cookie-category-item">
                                        <BarChart3 size={16} />
                                        <span>Analytics</span>
                                        <small>Help us improve</small>
                                    </div>
                                    <div className="cookie-category-item">
                                        <Settings size={16} />
                                        <span>Functionality</span>
                                        <small>Enhanced features</small>
                                    </div>
                                    <div className="cookie-category-item">
                                        <Target size={16} />
                                        <span>Marketing</span>
                                        <small>Personalized ads</small>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="cookie-banner-actions">
                            <button 
                                className="cookie-btn-manage" 
                                onClick={openManageModal}
                            >
                                Manage Preferences
                            </button>
                            <div className="cookie-banner-actions-right">
                                <button 
                                    className="cookie-btn-reject" 
                                    onClick={handleRejectNonEssential}
                                >
                                    Reject Non-Essential
                                </button>
                                <button 
                                    className="cookie-btn-accept" 
                                    onClick={handleAcceptAll}
                                >
                                    Accept All
                                </button>
                            </div>
                        </div>

                        <button 
                            className="cookie-expand-btn"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? (
                                <><ChevronUp size={16} /> Show Less</>
                            ) : (
                                <><ChevronDown size={16} /> Learn More</>
                            )}
                        </button>
                    </div>
                </div>
            )}

            {/* Manage Preferences Modal */}
            {showManageModal && (
                <div className="cookie-modal-overlay" onClick={closeManageModal}>
                    <div className="cookie-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="cookie-modal-header">
                            <div className="cookie-modal-icon">
                                <Cookie size={28} />
                            </div>
                            <div className="cookie-modal-title">
                                <h2>Cookie Preferences</h2>
                                <p>Manage your cookie settings below</p>
                            </div>
                            <button 
                                className="cookie-modal-close" 
                                onClick={closeManageModal}
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="cookie-modal-content">
                            <div className="cookie-categories">
                                {/* Necessary Cookies */}
                                <div className="cookie-category">
                                    <div className="cookie-category-header">
                                        <div className="cookie-category-info">
                                            <div className="cookie-category-icon necessary">
                                                <Shield size={18} />
                                            </div>
                                            <div className="cookie-category-text">
                                                <h4>Strictly Necessary</h4>
                                                <p>Required for the website to function properly</p>
                                            </div>
                                        </div>
                                        <div className="cookie-toggle always-on">
                                            <span>Always On</span>
                                            <div className="toggle-switch active disabled">
                                                <div className="toggle-slider"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cookie-category-details">
                                        <p>These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site. Without these cookies, services like account login cannot be provided.</p>
                                    </div>
                                </div>

                                {/* Analytics Cookies */}
                                <div className="cookie-category">
                                    <div className="cookie-category-header">
                                        <div className="cookie-category-info">
                                            <div className="cookie-category-icon analytics">
                                                <BarChart3 size={18} />
                                            </div>
                                            <div className="cookie-category-text">
                                                <h4>Performance & Analytics</h4>
                                                <p>Help us understand how visitors interact with our website</p>
                                            </div>
                                        </div>
                                        <div className="cookie-toggle">
                                            <div 
                                                className={`toggle-switch ${preferences.analytics ? 'active' : ''}`}
                                                onClick={() => togglePreference('analytics')}
                                                role="switch"
                                                aria-checked={preferences.analytics}
                                                tabIndex={0}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        togglePreference('analytics');
                                                    }
                                                }}
                                            >
                                                <div className="toggle-slider"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cookie-category-details">
                                        <p>These cookies collect information about how you use our website, such as which pages you visit most often. All information is aggregated and anonymous. We use this data to improve our website's performance.</p>
                                    </div>
                                </div>

                                {/* Functionality Cookies */}
                                <div className="cookie-category">
                                    <div className="cookie-category-header">
                                        <div className="cookie-category-info">
                                            <div className="cookie-category-icon functionality">
                                                <Settings size={18} />
                                            </div>
                                            <div className="cookie-category-text">
                                                <h4>Functionality</h4>
                                                <p>Enable enhanced features and personalization</p>
                                            </div>
                                        </div>
                                        <div className="cookie-toggle">
                                            <div 
                                                className={`toggle-switch ${preferences.functionality ? 'active' : ''}`}
                                                onClick={() => togglePreference('functionality')}
                                                role="switch"
                                                aria-checked={preferences.functionality}
                                                tabIndex={0}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        togglePreference('functionality');
                                                    }
                                                }}
                                            >
                                                <div className="toggle-slider"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cookie-category-details">
                                        <p>These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features. They may be set by us or third-party providers.</p>
                                    </div>
                                </div>

                                {/* Marketing Cookies */}
                                <div className="cookie-category">
                                    <div className="cookie-category-header">
                                        <div className="cookie-category-info">
                                            <div className="cookie-category-icon marketing">
                                                <Target size={18} />
                                            </div>
                                            <div className="cookie-category-text">
                                                <h4>Targeting & Marketing</h4>
                                                <p>Used to deliver relevant advertisements</p>
                                            </div>
                                        </div>
                                        <div className="cookie-toggle">
                                            <div 
                                                className={`toggle-switch ${preferences.marketing ? 'active' : ''}`}
                                                onClick={() => togglePreference('marketing')}
                                                role="switch"
                                                aria-checked={preferences.marketing}
                                                tabIndex={0}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        togglePreference('marketing');
                                                    }
                                                }}
                                            >
                                                <div className="toggle-slider"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cookie-category-details">
                                        <p>These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cookie-modal-footer">
                                <a href="/cookie-policy" className="cookie-full-policy-link">
                                    Read our full Cookie Policy
                                </a>
                                <div className="cookie-modal-actions">
                                    <button 
                                        className="cookie-btn-reject" 
                                        onClick={handleRejectNonEssential}
                                    >
                                        Reject All
                                    </button>
                                    <button 
                                        className="cookie-btn-accept" 
                                        onClick={handleSavePreferences}
                                    >
                                        Save Preferences
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieConsent;

import React, { useState } from 'react';
import { Send, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ComplianceForm.css';

const ComplianceForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        organization: '',
        role: '',
        accessType: '',
        purpose: '',
        agreement: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Submitted:', formData);
        alert('Your request has been submitted to the compliance team.');
    };

    return (
        <div className="compliance-form-page">
            <header className="compliance-form-header">
                <h1>Compliance Access Request</h1>
                <p>Please provide your institutional details to request access to private security audits, BAA documents, and detailed compliance reports.</p>
            </header>

            <main className="compliance-form-container">
                <div className="compliance-form-card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Professional Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="name@organization.gov"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="organization">Organization Name</label>
                                <input
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    placeholder="Full legal name"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="role">Designation / Role</label>
                                <input
                                    type="text"
                                    id="role"
                                    name="role"
                                    placeholder="eg. Compliance Officer"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="accessType">Type of Access Required</label>
                            <div className="custom-select-wrapper">
                                <select
                                    id="accessType"
                                    name="accessType"
                                    value={formData.accessType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled hidden>Select access level</option>
                                    <option value="baa">BAA Documents</option>
                                    <option value="security">Security Audits (SOC 2, ISO)</option>
                                    <option value="penetration">Penetration Test Summaries</option>
                                    <option value="comprehensive">Comprehensive Compliance Packet</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="purpose">Purpose of Request</label>
                            <textarea
                                id="purpose"
                                name="purpose"
                                rows={6}
                                placeholder="Please describe why this access is needed for your institution...."
                                value={formData.purpose}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="form-group agreement-group full-width">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    name="agreement"
                                    checked={formData.agreement}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="checkmark"></span>
                                <span className="agreement-text">
                                    I agree to the <Link to="/nda" target="_blank" rel="noopener noreferrer">non-disclosure agreement (NDA)</Link> regarding the requested documents.
                                </span>
                            </label>
                        </div>

                        <div className="form-submit-group">
                            <button type="submit" className="submit-request-btn">
                                Submit Request <Send size={18} />
                            </button>
                        </div>
                    </form>

                    <div className="form-footer-info">
                        <Info size={18} strokeWidth={2.5} />
                        <span>Your request will be reviewed by our compliance team within 2-3 business days.</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ComplianceForm;

import React, { useState, useEffect } from 'react';

export function EmployeeForm({ initialData, onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        department: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({
                name: '',
                email: '',
                role: '',
                department: '',
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="e.g. Jane Doe"
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="jane@example.com"
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="role">Job Role</label>
                <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="e.g. Senior Developer"
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="department">Department</label>
                <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="form-select"
                    required
                >
                    <option value="">Select Department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Product">Product</option>
                    <option value="Sales">Sales</option>
                    <option value="HR">HR</option>
                </select>
            </div>

            <div className="form-actions">
                <button type="button" onClick={onCancel} className="btn btn-secondary">
                    Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                    {initialData ? 'Update Employee' : 'Add Employee'}
                </button>
            </div>
        </form>
    );
}

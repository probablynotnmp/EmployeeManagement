import React from 'react';
import { Edit2, Trash2, Mail, Briefcase, Building2 } from 'lucide-react';

export function EmployeeList({ employees, onEdit, onDelete }) {
    if (employees.length === 0) {
        return (
            <div className="empty-state">
                <div className="employee-avatar" style={{ width: '4rem', height: '4rem', margin: '0 auto 1rem', fontSize: '2rem' }}>
                    ?
                </div>
                <h3>No employees found</h3>
                <p>Get started by adding a new employee to your team.</p>
            </div>
        );
    }

    return (
        <div className="employee-grid">
            {employees.map((employee) => (
                <div key={employee.id} className="employee-card">
                    <div className="employee-header">
                        <div className="employee-info">
                            <h3>{employee.name}</h3>
                            <p className="employee-role">{employee.role}</p>
                        </div>
                        <div className="employee-avatar">
                            {employee.name.charAt(0).toUpperCase()}
                        </div>
                    </div>

                    <div className="employee-details">
                        <div className="detail-item">
                            <Mail size={16} />
                            <span>{employee.email}</span>
                        </div>
                        <div className="detail-item">
                            <Building2 size={16} />
                            <span>{employee.department}</span>
                        </div>
                    </div>

                    <div className="employee-actions">
                        <button
                            onClick={() => onEdit(employee)}
                            className="btn btn-secondary"
                            style={{ flex: 1 }}
                        >
                            <Edit2 size={16} />
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(employee.id)}
                            className="btn btn-danger"
                            aria-label="Delete employee"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

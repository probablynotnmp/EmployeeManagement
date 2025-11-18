import React from 'react';
import { Users, Plus } from 'lucide-react';

export function Header({ onAdd }) {
    return (
        <header className="app-header">
            <div className="container header-content">
                <div className="logo">
                    <Users size={28} />
                    <span>TeamFlow</span>
                </div>
                <button onClick={onAdd} className="btn btn-primary">
                    <Plus size={18} />
                    <span>Add Employee</span>
                </button>
            </div>
        </header>
    );
}

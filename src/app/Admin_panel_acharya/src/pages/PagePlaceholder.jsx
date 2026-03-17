import React from 'react';

const PagePlaceholder = ({ title }) => {
    return (
        <div className="p-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-3xl">🚀</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
                <p className="text-gray-500 max-w-md">
                    This section is currently under development. Detailed features for {title} will be implemented soon.
                </p>
            </div>
        </div>
    );
};

export default PagePlaceholder;

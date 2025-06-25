import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-white max-w-2xl mb-4">
                For inquiries, collaborations, or support, please reach out to us at: <br />
                <a href="mailto:support@artconnect.com" className="text-blue-500 hover:underline">support@support.com</a>
            </p>
        </div>
    );
};

export default Contact;

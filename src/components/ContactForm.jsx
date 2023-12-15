const ContactForm = ({ handleChange, selectedContact }) => {
    return (
        <div>
            <div>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={selectedContact.email || ''}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="rounded-md p-1"
                />
            </div>
        </div>
    );
};

export default ContactForm;
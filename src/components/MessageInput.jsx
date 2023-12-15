const MessageInput = ({ handleChange, selectedMessage }) => {
    return (
        <>
            <textarea
                name="message"
                id="message"
                value={selectedMessage || ''}
                placeholder="message"
                onChange={handleChange}
                className="rounded-md p-1"
            ></textarea>
        </>

    );
};

export default MessageInput;
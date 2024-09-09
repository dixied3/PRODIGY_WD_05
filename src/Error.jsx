export default function Error({ message }) {
    return (
        <div>
            <h1>Some error occurred!</h1>
            {message && <p>{message}</p>}
        </div>
    );
}

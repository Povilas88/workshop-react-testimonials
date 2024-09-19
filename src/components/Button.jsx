export function Button({ btnClass, text, onClick }) {

    return (
        <div>
            <button onClick={onClick} className={`btn btn-sm ${btnClass}`}>{text}</button>
        </div>
    )
}
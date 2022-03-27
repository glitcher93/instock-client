import './Button.scss'

export default function Button({ text, image, classes, altText }) {

    if (image) {
        return (
            <button
            className={`button ${classes}`}
            >
                <img 
                src={image} 
                alt={altText}
                className='button__image'
                />
                <p
                className="button__text"
                >
                    {text}
                </p>
            </button>
        )

    }

    return (
        <button
        className={`button ${classes}`}
        >
            <p
            className="button__text"
            >
                {text}
            </p>
        </button>
    )
}
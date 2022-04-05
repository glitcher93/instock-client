import './Button.scss'

export default function Button({ text, image, altText, specialButton, specialClass }) {

    if (image) {
        return (
            <button
            className={`button ${specialButton}`}
            >
                <img 
                src={image} 
                alt={altText}
                className='button__image'
                />
                <p
                className={`button__text ${specialClass}`}
                >
                    {text}
                </p>
            </button>
        )

    }

    return (
        <button
        className={`button ${text === 'Cancel' ? "button--cancel" : ""}`}
        >
            <p
            className={`button__text`}
            >
                {text}
            </p>
        </button>
    )
}
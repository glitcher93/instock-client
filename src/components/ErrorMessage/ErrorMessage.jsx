import './ErrorMessage.scss';
import error from '../../assets/icons/error-24px.svg';

const ErrorMessage = () => {
    return ( 
        <div
        className='error-message'
        >
            <img 
            src={error}
            alt="Error" 
            className='error-message__image'
            />
            <p 
            className="error-message__text"
            >
                This field is required
            </p>
        </div>
    );
}

export default ErrorMessage;
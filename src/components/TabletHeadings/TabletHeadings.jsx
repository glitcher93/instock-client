import './TabletHeadings.scss'
import Sort from '../../assets/icons/sort-24px.svg';

export default function TabletHeadings({ headings, specialClasses }) {

    if (headings.length === 5) {
        return (
            <div
            className='tablet-headings'
            >
                <div 
                className="tablet-headings__container tablet-headings__container--item"
                >
                    <p 
                    className="tablet-headings__heading"
                    >
                        {headings[0]}
                    </p>
                    <img 
                    src={Sort} 
                    alt="Sort"
                    className='tablet-headings__sort-icon' 
                    />
                </div>
                <div 
                className="tablet-headings__container tablet-headings__container--category"
                >
                    <p 
                    className="tablet-headings__heading"
                    >
                        {headings[1]}
                    </p>
                    <img 
                    src={Sort} 
                    alt="Sort"
                    className='tablet-headings__sort-icon'  
                    />
                </div>
                <div 
                className="tablet-headings__container tablet-headings__container--status"
                >
                    <p 
                    className="tablet-headings__heading"
                    >
                        {headings[2]}
                    </p>
                    <img 
                    src={Sort}  
                    alt="Sort"
                    className='tablet-headings__sort-icon'  
                    />
                </div>
                <div 
                className="tablet-headings__container tablet-headings__container--qty"
                >
                    <p 
                    className="tablet-headings__heading"
                    >
                        {headings[3]}
                    </p>
                    <img 
                    src={Sort} 
                    alt="Sort"
                    className='tablet-headings__sort-icon' 
                    />
                </div>
                <div 
                className="tablet-headings__container tablet-headings__container--warehouse-name"
                >
                    <p
                    className="tablet-headings__heading"
                    >
                        {headings[4]}
                    </p>
                    <img 
                    src={Sort} 
                    alt="Sort"
                    className='tablet-headings__sort-icon' 
                    />
                </div>
                <div 
                className="tablet-headings__container tablet-headings__container--inventory-actions"
                >
                    <p 
                    className="tablet-headings__heading"
                    >
                        Actions
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div
            className='tablet-headings'
            >
                <div 
                className={`tablet-headings__container tablet-headings__container--warehouse ${specialClasses ? specialClasses[0] : ""}`}
                >
                    <p 
                    className="tablet-headings__heading"
                    >
                        {headings[0]}
                    </p>
                    <img 
                    src={Sort} 
                    alt="Sort"
                    className='tablet-headings__sort-icon' 
                    />
                </div>
                <div 
                className={`tablet-headings__container tablet-headings__container--address ${specialClasses ? specialClasses[1] : ""}`}
                >
                    <p 
                    className="tablet-headings__heading"
                    >
                        {headings[1]}
                    </p>
                    <img 
                    src={Sort} 
                    alt="Sort"
                    className='tablet-headings__sort-icon'  
                    />
                </div>
                <div 
                className={`tablet-headings__container tablet-headings__container--contact-name ${specialClasses ? specialClasses[2] : ""}`}
                >
                    <p 
                    className="tablet-headings__heading"
                    >
                        {headings[2]}
                    </p>
                    <img 
                    src={Sort}  
                    alt="Sort"
                    className='tablet-headings__sort-icon'  
                    />
                </div>
                <div 
                className={`tablet-headings__container tablet-headings__container--contact-info ${specialClasses ? specialClasses[3] : ""}`}
                >
                    <p
                    className="tablet-headings__heading"
                    >
                        {headings[3]}
                    </p>
                    <img 
                    src={Sort} 
                    alt="Sort"
                    className='tablet-headings__sort-icon' 
                    />
                </div>
                <div 
                className={`tablet-headings__container tablet-headings__container--actions ${specialClasses ? specialClasses[4] : ""}`}
                >
                    <p 
                    className="tablet-headings__heading"
                    >
                        Actions
                    </p>
                </div>
            </div>
    )
}
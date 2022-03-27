import './TabletHeadings.scss'
import Sort from '../../assets/icons/sort-24px.svg';

export default function TabletHeadings({ headings }) {

    if (headings.length === 5) {
        return (
            <div
            className='tablet-headings'
            >
                <div 
                className="tablet-headings__container tablet-headings__container--inventory"
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
                className="tablet-headings__container tablet-headings__container--inventory"
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
                className="tablet-headings__container tablet-headings__container--inventory"
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
                className="tablet-headings__container tablet-headings__container--quantity tablet-headings__container--inventory"
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
                className="tablet-headings__container tablet-headings__container--second-last-inv tablet-headings__container--inventory"
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
                className="tablet-headings__container tablet-headings__container--last tablet-headings__container--inventory"
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
                className="tablet-headings__container"
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
                className="tablet-headings__container"
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
                className="tablet-headings__container"
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
                className="tablet-headings__container tablet-headings__container--second-last"
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
                className="tablet-headings__container tablet-headings__container--last"
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
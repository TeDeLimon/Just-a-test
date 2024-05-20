import { useState } from "react";

export function TwitterTweetsCard({ children, tweetTitle, tweetContent, isFavorite }) {

    const [isFavoriteTweet, setIsFavoriteTweet] = useState(isFavorite);

    const buttonClassName = isFavorite
        ? 'tw-tweet-button is-favourite'
        : 'tw-tweet-button';

    const handleClick = () => {
        setIsFavoriteTweet(!isFavorite);
    }

    return (
        <article className="tw-tweetCard">
            <header className="tw-tweetCard-header">
                <img
                    className="tw-tweetCard-avatar"
                    alt="El Avatar del usuario"
                    src={`https://unavatar.io/${tweetTitle}`}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{tweetTitle}</span>
                </div>

            </header>

            <aside>
                <p className="tw-tweetCard-content">{tweetContent}</p>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-tweetCard-text">Favorito</span>
                </button>
            </aside>

        </article>
    )
}
import { useState } from "react";

export function TwitterTweetsCard({ children, tweetTitle, tweetContent, initialIsFavorite }) {

    const [isFavoriteTweet, setIsFavoriteTweet] = useState(initialIsFavorite);

    const buttonClassName = isFavoriteTweet
        ? 'tw-tweet-button is-favourite'
        : 'tw-tweet-button';

    const handleClick = () => {
        setIsFavoriteTweet(!isFavoriteTweet);
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
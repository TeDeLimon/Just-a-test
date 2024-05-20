import { useState } from "react";

// Props son los argumentos que se pasan a un componente de React

/**
 * Renderiza un componente de tarjeta de seguimiento de Twitter
 * 
 * @param {string} children - El nombre del usuario
 * @param {string} userName - El nombre de usuario de Twitter
 * @param {boolean} initialIsFollowing - Si el usuario está siguiendo o no al usuario 
 * 
 * @returns {JSX.Element} - El componente de tarjeta de seguimiento de Twitter
 */
export function TwitterFollowCard({ children, userName, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    alt="El Avatar del usuario"
                    src={`https://unavatar.io/${userName}`}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>

            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
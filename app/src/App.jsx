import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
  {
    userName: 'sophiebits',
    nombre: 'Sophie Alpert',
    isFollowing: false
  },
  {
    userName: 'sebmarkbage',
    nombre: 'Sebastian Markbage',
    isFollowing: true
  },
  {
    userName: 'dan_abramov',
    nombre: 'Dan Abramov',
    isFollowing: false
  },
  {
    userName: 'ryanflorence',
    nombre: 'Ryan Florence',
    isFollowing: true
  },
  {
    userName: 'kentcdodds',
    nombre: 'Kent C. Dodds',
    isFollowing: false
  }
]

// Crear una sección que renderiza los tweets más recientes de los usuarios
// Utilizando o creando un nuevo componente de React
// Este componente usa el título del tweet y el contenido del tweet
// El componente debe tener un botón que permita marcar el tweet como favorito

export function App() {
  return (
    <section className='App'>
      {
        users.map(({ userName, nombre, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {nombre}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}


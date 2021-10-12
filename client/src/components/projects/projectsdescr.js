import blablaflixJPG from '../../img/blablaflixJPG.svg'
import secrets from '../../img/secrets.JPG'
import todo from '../../img/to do app.svg'

const projectDescription = [
    {
        title: 'Secrets',
        description: 'this app is a postSecret clone, it allows to share secrets anonymously',
        technologies: ['nodejs', 'expressjs', 'mongodb', 'mongoose', 'passportjs'],
        image: secrets,
        github: 'https://github.com/HoussemeddineSalem/secrets',
        demo: 'nothing here'



    },
    {
        title: 'BlablaFlix',
        description: 'This app is a movie app clone, it allows to search and sort for films by name and/or by rating',
        technologies: ['reactjs', 'react', 'hooks', 'react', 'router'],
        image: blablaflixJPG,
        github: 'https://github.com/HoussemeddineSalem/React_Router_CP',
        demo: 'https://qnrxi.csb.app/'
    },
    {
        title: 'todo app',
        description: 'is an app to add, delete and sort todo items, it is designed using reactjs and redux toolkit for state management',
        technologies: ['reactjs', 'redux toolkit for state management'],
        image: todo,
        github: 'https://github.com/HoussemeddineSalem/React-Redux-CP',
        demo: 'https://vns4v.csb.app/'
    },


]

export default projectDescription
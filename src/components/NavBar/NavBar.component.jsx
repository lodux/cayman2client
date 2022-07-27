import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import './NavBar.styles.scss';

import menu from './menu.svg'
const LOGO_LINK = 'https://www.caymangroup.it/wp-content/uploads/2021/03/logo_caygroup_trasp.png'

//evitiamo le ripetizioni di codice il più possibile

const elementiNavBar = [
     {
        nome: 'GESTIONE CHIAMATE',
        link: '/'
    },
    {
        nome: 'CHIAMATE EFFETTUATE',
        link: '/chiamate-effettuate'
    },
    {
        nome: 'ADMIN/REGISTRA',
        link: '/register'
    },

   
];

const NavBar = ({ linkAttuale }) => {
    const generaElementi = elementiNavBar.map((el, i) => (
        <Link 
            to={el.link} 
            style={{textDecoration: 'none'}}
            key={i}
            className='elemento-container'
        >
            <span
                className={`
                    elemento
                    ${ linkAttuale === el.link ? 'selezionato' : '' }                       
                `}
            // 'elemento' è la className che hanno tutti i componenti di default. 
            //Cliccandolo, otterrà anche la className 'selezionato'. 
            >
                {el.nome}
            </span>
        </Link>                     
    ))
    const [isHidden, setIsHidden] = useState(true)

    return (
        <Fragment>
            <div className='navbar-container'>
                <div className="logo">
                    <Link to=''>
                        <img className="logoImg" alt='cayman-logo' src={LOGO_LINK} />
                    </Link>
                </div>
                { generaElementi }
            </div>
            {/*Da mobile verrà mostrato direttamente un altro component */}
            <div className={`
                navbar-laterale
                ${ isHidden ? 'nascosta' : '' }
            `}>
                <img 
                    src={menu}
                    alt='menu-ico'
                    className={`
                        menu-ico
                        ${!isHidden ? 'ico-nascosta' : '' }
                    `}
                    onClick={() => setIsHidden(false)}
                />
                <div className='container-laterale'>
                    <div className='x-wrapper'>
                        <img className="logoImg" alt='cayman-logo' src={LOGO_LINK} />
                        <span 
                            className='x' 
                            onClick={() => setIsHidden(true)}
                        /> 
                    </div> 
                    <div className='esplora'>
                        <span className='s1'>Esplora Cayman</span>
                        { generaElementi }     
                    </div> 
                </div>             
            </div>
        </Fragment>
    )
}

export default NavBar
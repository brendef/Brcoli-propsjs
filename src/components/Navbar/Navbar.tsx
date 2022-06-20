import React from 'react'

const Navbar = ({
    // Defaults
    title='Nav Title',
    color='light',
    collapse=false,
    contain=false,
    navlinks=[
        {text: 'Features', to: '/features'},
        {text: 'Pricing', to: '/pricing'}
    ],
    useLinkPosition='end',
    buttons=[
        {text: 'login', to: '/login', color: 'warning' },
        {text: 'register', to: '/register'}
    ],
    padding='', // You can use an int
    margin='',  // You can use an int
    activeLink=''
}:any) => {
    
    // Variables and defaults
    const useTitleText      = title.hasOwnProperty('text') ? title.text : title
    const useTitleLink      = title.hasOwnProperty('link') ? title.link : '/'
    const useContainerType  = contain ? 'container' : 'container-fluid'
    const useCollapse       = !collapse ? 'navbar-expand-lg' : undefined
    const useMargin         = margin
    const usePadding        = padding
    const usePaddingX       = padding.x
    const usePaddingY       = padding.y
    const useMarginX        = margin.x
    const useMarginY        = margin.y

    // Links for the navigation bar
    const renderLinks = () => (
        navlinks.map( (link:any, index:any) => {

            const useLinkText = link.constructor === Object ? link.text : link
            const useLinkTo = link.constructor === Object ? link.to : link
            const useLinkActive = link.active ? 'active' : useLinkTo === activeLink && 'active' 
            const useLinkDisabled = link.disabled ? 'disabled' : undefined

            return (
                <a key={index + '_' + link.text} className={`nav-link ${useLinkActive} ${useLinkDisabled}`} aria-current='page' href={useLinkTo}>{useLinkText}</a>
            )
        })
    )

    // Call to action buttons in the navigation bar
    const renderButtons = () => (
        buttons.map( (button:any, index:any) => {

            const useButtonText = button.hasOwnProperty('text') ? button.text : button
            const useButtonTo = button.hasOwnProperty('to') ? button.to : button
            const useButtonDisabled = button.disabled ? 'disabled' : undefined
            const buttonColour = button.hasOwnProperty('color') ? button.color : 'primary'
            const useButtonTextColour = button.hasOwnProperty('textColor') ? 'text-' + button.textColor : undefined
            const useButtonStyleColour = button.hasOwnProperty('style') ? 'btn-' + button.style + '-' + buttonColour  : 'btn-' + buttonColour

            return (
                <a role='button' className={`btn ${useButtonStyleColour} my-lg-0 my-2 me-2 ${useButtonDisabled}`} key={index + '_' + button.text} href={useButtonTo}>
                    <div className={useButtonTextColour}>{useButtonText}</div>
                </a>
            )
        })
    )

    return (
        <nav className={`navbar ${useCollapse} navbar-${color}  m-${useMargin} mx-${useMarginX} my-${useMarginY} p-${usePadding} px-${usePaddingX} py-${usePaddingY} bg-${color}`}>
            <div className={useContainerType}>
                <a className='navbar-brand' href={useTitleLink}>{useTitleText}</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarControls' aria-controls='navbarControls' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className={`navbar-toggler-icon`}></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-${useLinkPosition}`} id='navbarControls'>
                    <div className='navbar-nav'> 
                        { renderLinks() } 
                        { renderButtons() }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
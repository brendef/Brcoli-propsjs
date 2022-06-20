import React from 'react'
const BasicCardWithImageAndButtons = ({
    width='',
    title='Title Name',
    image='https://picsum.photos/300/150',
    body='This is the cards body text',
    padding='', // You can use an int
    margin='',  // You can use an int
    buttons=[
        { text: 'Go somewhere', to: 'food', color: 'warning' },
    ],
    stackButtons=false
}:any) => {
    
    // Variables and defaults
    const useTitleText = title.hasOwnProperty('text') ? title.text : title
    const useBodyText  = body.hasOwnProperty('text') ? body.text : body
    const useStackButtons = buttons.length === 1 || stackButtons ? 'd-grid' : 'd-flex'
    const useMargin   = !(margin.constructor === Object) ? margin : undefined
    const usePadding  = !(padding.constructor === Object) ? padding : undefined
    const usePaddingX = padding.x
    const usePaddingY = padding.y
    const useMarginX  = margin.x
    const useMarginY  = margin.y

    const renderButtons = () => (
        buttons.map( (button:any, index:any) => {

            const useButtonText = button.hasOwnProperty('text') ? button.text : button
            const useButtonTo = button.hasOwnProperty('to') ? button.to : button
            const useButtonDisabled = button.disabled ? 'disabled' : undefined
            const buttonColour = button.hasOwnProperty('color') ? button.color : 'primary'
            const useButtonTextColour = button.hasOwnProperty('textColor') ? 'text-' + button.textColor : undefined
            const useButtonStyleColour = button.hasOwnProperty('style') ? 'btn-' + button.style + '-' + buttonColour  : 'btn-' + buttonColour

            return (
                <a role='button' className={`btn ${useButtonStyleColour} my-1 mx-1 ${useButtonDisabled}`} key={index + '_' + button.text} href={'/' + useButtonTo}>
                    <div className={useButtonTextColour}>{useButtonText}</div>
                </a>
            )
        })
    )

    return (

        <>
        <div className={`card m-${useMargin} mx-${useMarginX} my-${useMarginY} p-${usePadding} px-${usePaddingX} py-${usePaddingY}`} style={{width}}>
            <img src={image} className='card-img-top' alt={'image of ' + useTitleText} />
            <div className='card-body'>
                <h5 className='card-title'>{useTitleText}</h5>
                <p className='card-text'>{useBodyText}</p>
                <div className={useStackButtons}> { renderButtons() } </div>
            </div>
        </div>
        </>
    )

}

export default BasicCardWithImageAndButtons
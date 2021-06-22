import React from 'react'
import Button from '../../common/components/Button'
import useLoadingDots from '../../common/hooks/useLoadingDots'


function Btn({onClick}){
    return <Button 
    type="primary"
    className="ml-2 focus:outline-none" 
    onClick={onClick}>ADD TO CART</Button>
}

function LoadingBtn(){
    const {dots} = useLoadingDots();

    return <Button
    type="primary"
    className="ml-2 focus:outline-none"
    disabled>
          <p className="flex">
            <span>ADDING TO CART</span>
            <span className="w-3 text-left">{dots}</span>
          </p>
    </Button>
}

function AddToCartButton({isLoading, onClick}) {

    if(isLoading){
        return (
            <LoadingBtn/>
        )
    }
    return <Btn onClick={onClick}/>
}

export default AddToCartButton

import React from 'react'

import EmptyDishImage from '../../assets/images/illustrations/empty-dish-image.svg'

// No Image - Image Placeholder

export const ImagePlaceholder = () => {
    return (
        <div className="empty-product-image">
            <img src={EmptyDishImage} className="empty-placeholder" alt="Defina uma Imagem" />
        </div>
    )
}

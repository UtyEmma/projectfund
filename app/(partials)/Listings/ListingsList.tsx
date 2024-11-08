import { IListing } from '@/types/listings'
import React from 'react'
import { ListingItem } from './ListingItem'

interface IListingLists {
    listings: IListing[]
}

export const ListingsList = ({listings = []} : IListingLists) => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
            {
                listings.map(listing => <ListingItem listing={listing} />)
            }
        </div>
    )
}

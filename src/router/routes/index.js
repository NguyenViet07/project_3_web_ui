import {lazy} from 'react'

// ** Default Route
const DefaultRoute = '/'

// ** Merge Routes
const Routes = [
    {
        path: '/',
        component: lazy(() => import('../../views/Home'))
    },
]

export {DefaultRoute, Routes}

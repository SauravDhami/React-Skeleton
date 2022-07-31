import React from 'react'
import { Route } from 'react-router'

import { IRouteDefination, NestedRouteSubDefination } from '../types'

const RenderLazyComponent = ({ component }: { component: string }) => {
  const Component: React.FC = React.lazy(() => import(`../pages/` + component))
  return <Component />
}

export const CustomRoutes = ({ routes }: { routes: IRouteDefination[] }) => {
  return routes.map((option: IRouteDefination) => (
    <Route
      key={option.path}
      path={option.path}
      element={<RenderLazyComponent component={option.element} />}
    >
      {option?.children?.nested?.map((subRoute: NestedRouteSubDefination) => (
        <Route
          key={option.path + subRoute.path}
          path={subRoute.path}
          element={<RenderLazyComponent component={subRoute.element} />}
        />
      ))}
      {option?.children && (
        <Route index element={<RenderLazyComponent component={option?.children?.root} />} />
      )}
    </Route>
  ))
}

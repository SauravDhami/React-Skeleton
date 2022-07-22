import React from 'react'
import { Route } from 'react-router'
//roles enum
enum Roles {
  Admin = 'ADMIN',
}

// defining routes
const Routes: RouteDefination[] = [
  {
    path: 'blog/:id',
    element: 'single-blog-page.tsx',
    roles: [Roles.Admin],
  },
  {
    path: 'blog',
    element: 'blog',
    roles: [Roles.Admin],
    children: {
      root: 'base-blog',
      nested: [
        {
          path: 'list',
          element: 'blog-list',
        },
      ],
    },
  },
]

// route defination, a object must include value and path for route

type RouteDefination = {
  path: string
  element: string
  roles: string[]
  children?: NestedRouteDefination
}

type NestedRouteDefination = {
  root: string
  nested: NestedRouteSubDefination[]
}
type NestedRouteSubDefination = {
  path: string
  element: string
}

function renderLazyComponent(component: string) {
  const Component: React.FC = React.lazy(() => import(`../pages/` + component))
  return <Component />
}

function route(options: any[]): any[] {
  return options.map((option: RouteDefination) => (
    <Route key={option.path} path={option.path} element={renderLazyComponent(option.element)}>
      {option?.children?.nested?.map((subRoute: NestedRouteSubDefination) => (
        <Route
          key={option.path + subRoute.path}
          path={subRoute.path}
          element={renderLazyComponent(subRoute.element)}
        />
      ))}
      {option?.children && <Route index element={renderLazyComponent(option?.children?.root)} />}
    </Route>
  ))
}
export const ROUTES: any[] = route(Routes)

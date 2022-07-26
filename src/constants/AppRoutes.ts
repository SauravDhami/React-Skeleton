import { IRouteDefination } from '../types'

//roles enum
enum Roles {
  Admin = 'ADMIN',
}

// defining routes
export const ROUTES: IRouteDefination[] = [
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

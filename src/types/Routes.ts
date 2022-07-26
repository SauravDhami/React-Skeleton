export interface IRouteDefination {
  path: string
  element: string
  roles: string[]
  children?: NestedRouteDefination
}

export type NestedRouteDefination = {
  root: string
  nested: NestedRouteSubDefination[]
}
export type NestedRouteSubDefination = {
  path: string
  element: string
}

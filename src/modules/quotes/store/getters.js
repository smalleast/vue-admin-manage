const getters = {
  sidebar: state => state.app.sidebar,
  defaultImg: state => state.app.defaultImg,
  permission_routers: state => state.permission.routers,
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters
};
export default getters

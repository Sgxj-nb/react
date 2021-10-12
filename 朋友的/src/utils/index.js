export const baseUrl = 'xxxxxxxx'

//生成随机id
export const generateRandomStr = Math.random().toString(36).substring(2)

// 获取包装组件的 displayName 的方法
export const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const formatNumber = number => {
  number = number.toString()
  return number[1] ? number : `0${number}`
}

// 格式化时间
export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('-')} ${[hour, minute, second].map(formatNumber).join(':')}`
}


/**
 * 判断当前路由是否拥有权限
 * @param {Object} route 当前路由对象
 * @param {Array<string>} resourceCodes 当前用户拥有的所有权限 code list
 * @return {Boolean} 是否拥有权限
 */
 export const routeHasPermission = (route, resourceCodes) => {
  if (route.auth && Array.isArray(route.auth)) {
    return route.auth.some(code => resourceCodes.includes(code))
  }
  return true
}

//获取当前documenTtitle
export const getTitle = (title) => {
  const baseTitle = 'react-admin'
  if (!title) return baseTitle
  return `${baseTitle} - ${title}`
}

/**
 * 可访问菜单，从 routes 中过滤出 有权限的 menu
 * @param {Array} routes 路由表
 * @param {Array<string>} resourceCodes 当前用户拥有的所有权限 code list
 * @return {Array} 有权限的 menu list
 */
 export const getAccessMenus = (routes, resourceCodes) => {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (routeHasPermission(tmp, resourceCodes)) {
      if (tmp.routes) {
        tmp.routes = getAccessMenus(tmp.routes, resourceCodes)
        if (tmp.routes.length) {
          res.push({
            path: tmp.path || '',
            title: tmp.title || '',
            icon: tmp.icon || '',
            hidden: tmp.hidden || false,
            routes: tmp.routes
          })
        }
      } else {
        res.push({
          path: tmp.path || '',
          title: tmp.title || '',
          icon: tmp.icon || '',
          hidden: tmp.hidden || false
        })
      }
    }
  })
  return res
}

/**
 * 根据路由表获取扁平化的面包屑列表
 * @param {Array} routes 路由表
 * @return {Array} 面包屑列表
 */
 export const getFlattenMenus = (routes) => {
  let result = []
  routes.forEach(item => {
    if (item.path && item.path !== '*') {
      result.push({
        path: item.path,
        breadcrumb: item.breadcrumb || item.title
      })
    }
    if (Array.isArray(item.routes)) {
      result = result.concat(getFlattenMenus(item.routes))
    }
  })
  return result
}
/*
 * action creators
 */

export function resetTheme(palette) {
  return { type: 'RESET_THEME' }
}

export function changeThemeColor(palette) {
  return {
    type: 'CHANGE_THEME',
    payload: {
      palette: palette
    }
  }
}

export function toggleSideBar(toggle) {
  return {
    type: 'TOGGLE',
    payload: {
      sidebar: {
        open: toggle
      }
    }
  }
}

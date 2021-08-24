import React from 'react'
import { MenuConfig } from 'ra-ext'

const config = {
  props: {
    fontSize: 14,
    fontWeight: 500,
    isTranslate: false
  },
  rows: {
    dashboard: {
      type: 'item',
      attribute: {
        name: 'Dashboard',
        icon: 'DashboardOutlined',
        path: '/dashboard',
        verify: false,
        admits: ['ADMIN_VIEW']
      }
    },
    posts: {
      type: 'item',
      attribute: {
        name: 'Posts',
        icon: 'PostAddOutlined',
        path: '/posts',
        verify: false,
        admits: ['ADMIN_VIEW']
      }
    },
    users: {
      type: 'item',
      attribute: {
        name: 'Users',
        icon: 'PermContactCalendarOutlined',
        path: '/users',
        verify: false,
        admits: ['ADMIN_VIEW']
      }
    },
    components: {
      type: 'sub',
      attribute: {
        name: 'Components',
        icon: 'CenterFocusWeakOutlined',
        verify: false,
        admits: ['ADMIN_VIEW']
      },
      children: {
        button: {
          type: 'item',
          attribute: {
            name: 'Button',
            icon: 'ArrowRightRounded',
            path: '/components/button',
            verify: false,
            admits: ['ADMIN_VIEW']
          }
        },
        dialog: {
          type: 'item',
          attribute: {
            name: 'Dialog',
            icon: 'ArrowRightRounded',
            path: '/components/dialog',
            verify: false,
            admits: ['ADMIN_VIEW']
          }
        },
        typography: {
          type: 'item',
          attribute: {
            name: 'Typography',
            icon: 'ArrowRightRounded',
            path: '/components/typography',
            verify: false,
            admits: ['ADMIN_VIEW']
          }
        },
        icon: {
          type: 'item',
          attribute: {
            name: 'Icon',
            icon: 'ArrowRightRounded',
            path: '/components/icon',
            verify: false,
            admits: ['ADMIN_VIEW']
          }
        }
      }
    },
    inputs: {
      type: 'sub',
      attribute: {
        name: 'Inputs',
        icon: 'EvStationOutlined',
        verify: false,
        admits: ['ADMIN_VIEW']
      },
      children: {
        base: {
          type: 'item',
          attribute: {
            name: 'Base',
            icon: 'ArrowRightRounded',
            path: '/inputs/base',
            verify: false,
            admits: ['ADMIN_VIEW']
          }
        },
        markdown: {
          type: 'item',
          attribute: {
            name: 'Markdown',
            icon: 'ArrowRightRounded',
            path: '/inputs/markdown',
            verify: false,
            admits: ['ADMIN_VIEW']
          }
        },
        picker: {
          type: 'item',
          attribute: {
            name: 'Picker',
            icon: 'ArrowRightRounded',
            path: '/inputs/picker',
            verify: false,
            admits: ['ADMIN_VIEW']
          }
        },
        dateRagePicker: {
          type: 'item',
          attribute: {
            name: 'Date Rage Picker',
            icon: 'ArrowRightRounded',
            path: '/inputs/dateragepicker',
            verify: false,
            admits: ['ADMIN_VIEW']
          }
        }
      }
    },
    fields: {
      type: 'sub',
      attribute: {
        name: 'Fields',
        icon: 'FlipCameraAndroidOutlined',
        verify: false,
        admits: ['ADMIN_VIEW']
      },
      children: {
        base: {
          type: 'item',
          attribute: {
            name: 'Base',
            icon: 'ArrowRightRounded',
            path: '/fields/base',
            verify: false,
            admits: ['ADMIN_VIEW']
          }
        }
      }
    },
    list: {
      type: 'item',
      attribute: {
        name: 'List',
        icon: 'ListAltOutlined',
        path: '/list',
        verify: false,
        admits: ['ADMIN_VIEW']
      }
    },
    Datagrid: {
      type: 'item',
      attribute: {
        name: 'Datagrid',
        icon: 'ViewCompactOutlined',
        path: '/Datagrid',
        verify: false,
        admits: ['ADMIN_VIEW']
      }
    },
    Filters: {
      type: 'item',
      attribute: {
        name: 'Filters',
        icon: 'SortRounded',
        path: '/Filters',
        verify: false,
        admits: ['ADMIN_VIEW']
      }
    },
    form: {
      type: 'item',
      attribute: {
        name: 'Form',
        icon: 'EventNoteOutlined',
        path: '/form',
        verify: false,
        admits: ['ADMIN_VIEW']
      }
    },
    templatePages: {
      type: 'sub',
      attribute: {
        name: 'Template Pages',
        icon: 'FlipCameraAndroidOutlined',
        verify: false,
        admits: ['ADMIN_VIEW']
      },
      children: {
        login: {
          type: 'item',
          attribute: {
            name: 'Login',
            icon: 'ArrowRightRounded',
            path: '/templatepages/login',
            verify: false,
            admits: ['ADMIN_VIEW']
          }
        },
        register: {
          type: 'item',
          attribute: {
            name: 'Register',
            icon: 'ArrowRightRounded',
            path: '/templatepages/register',
            verify: false,
            admits: ['ADMIN_VIEW']
          }
        }
      }
    }
    // common: {
    //   type: 'sub',
    //   attribute: {
    //     name: 'Common',
    //     icon: 'RestaurantMenuRounded',
    //     verify: false,
    //     admits: ['ADMIN_VIEW']
    //   },
    //   children: {
    //     menu: {
    //       type: 'item',
    //       attribute: {
    //         name: 'Menu',
    //         icon: 'ArrowRightRounded',
    //         path: '/common/menu',
    //         verify: false,
    //         admits: ['ADMIN_VIEW']
    //       }
    //     }
    //   }
    // },
    // tables: {
    //   type: 'item',
    //   attribute: {
    //     name: 'Table',
    //     icon: 'TableChartOutlined',
    //     path: '/tables',
    //     verify: false,
    //     admits: ['ADMIN_VIEW']
    //   }
    // },
    // charts: {
    //   type: 'item',
    //   attribute: {
    //     name: 'Charts',
    //     icon: 'AssessmentOutlined',
    //     path: '/charts',
    //     verify: false,
    //     admits: ['ADMIN_VIEW']
    //   }
    // },
    // authentications: {
    //   type: 'sub',
    //   attribute: {
    //     name: 'Authentications',
    //     icon: 'FingerprintOutlined',
    //     path: '/authentications',
    //     verify: false,
    //     admits: ['ADMIN_VIEW']
    //   },
    //   children: {
    //     login: {
    //       type: 'item',
    //       attribute: {
    //         name: 'Login',
    //         icon: 'LockOpenOutlined',
    //         path: '/authentications/login',
    //         verify: false,
    //         admits: ['ADMIN_VIEW']
    //       }
    //     },
    //     register: {
    //       type: 'item',
    //       attribute: {
    //         name: 'Register',
    //         icon: 'AddToPhotosOutlined',
    //         path: '/authentications/register',
    //         verify: false,
    //         admits: ['ADMIN_VIEW']
    //       }
    //     },
    //     recoverPassword: {
    //       type: 'item',
    //       attribute: {
    //         name: 'Recover Password',
    //         icon: 'CompassCalibrationOutlined',
    //         path: '/authentications/recoverPassword',
    //         verify: false,
    //         admits: ['ADMIN_VIEW']
    //       }
    //     },
    //     lockScreen: {
    //       type: 'item',
    //       attribute: {
    //         name: 'Lock Screen',
    //         icon: 'NoEncryptionOutlined',
    //         path: '/authentications/lockScreen',
    //         verify: false,
    //         admits: ['ADMIN_VIEW']
    //       }
    //     },
    //     logout: {
    //       type: 'item',
    //       attribute: {
    //         name: 'Logout',
    //         icon: 'ControlCameraOutlined',
    //         path: '/authentications/logout',
    //         verify: false,
    //         admits: ['ADMIN_VIEW']
    //       }
    //     }
    //   }
    // },
    // references: {
    //   type: 'item',
    //   attribute: {
    //     name: 'References',
    //     icon: 'CachedOutlined',
    //     path: '/references',
    //     verify: false,
    //     admits: ['ADMIN_VIEW']
    //   }
    // }
  }
}

const Menu = () => {
  const { rows, props } = config
  return <MenuConfig config={rows} {...props} />
}

export default Menu

import React from 'react'
import { Create, required, useInput } from 'react-admin'
import { FormConfig, DatePickerInput } from 'ra-ext'
import moment from 'moment'
import { validate } from './validate'

const DatePicker = (props: any) => {
  const {
    input: { onChange, value }
  } = useInput(props)
  const handleChange = (date: any) => {
    const newDate = moment(date).startOf('day')
    onChange(newDate)
  }
  return (
    <DatePickerInput
      {...props}
      value={value || null}
      onChange={handleChange}
      format='dd/MM/yyyy HH:mm'
    />
  )
}

const SvgPage = () => {
  return (
    <svg
      id='a47bc909-72c0-4996-baf1-6f4140acb8df'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      width='644.4629'
      height='569.05811'
      viewBox='0 0 644.4629 569.05811'
    >
      <path
        d='M837.76318,506.37231H295.423a16.51866,16.51866,0,0,1-16.5-16.5V184.07251H854.26318v305.7998A16.51867,16.51867,0,0,1,837.76318,506.37231Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#e6e6e6'
      />
      <path
        d='M816.18017,474.78882H317.00561a8.50958,8.50958,0,0,1-8.5-8.5V224.155a8.50958,8.50958,0,0,1,8.5-8.5H816.18017a8.50951,8.50951,0,0,1,8.5,8.5V466.28882A8.50951,8.50951,0,0,1,816.18017,474.78882Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#fff'
      />
      <path
        d='M855.41772,195.21851H277.76855V181.97095a16.51867,16.51867,0,0,1,16.5-16.5H838.91772a16.51867,16.51867,0,0,1,16.5,16.5Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#6c63ff'
      />
      <path
        d='M435.07983,382.07983H346.23437a8.50958,8.50958,0,0,1-8.5-8.5V315.1731a8.50958,8.50958,0,0,1,8.5-8.5h88.84546a8.5095,8.5095,0,0,1,8.5,8.5v58.40673A8.5095,8.5095,0,0,1,435.07983,382.07983Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#e6e6e6'
      />
      <path
        d='M790.72387,316.12866H510.009a4.72778,4.72778,0,1,1,0-9.45556H790.72387a4.72778,4.72778,0,0,1,0,9.45556Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#e6e6e6'
      />
      <path
        d='M790.72387,349.94946H510.009a4.72754,4.72754,0,1,1,0-9.45508H790.72387a4.72754,4.72754,0,0,1,0,9.45508Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#e6e6e6'
      />
      <path
        d='M790.72387,383.77075H510.009a4.72778,4.72778,0,1,1,0-9.45556H790.72387a4.72778,4.72778,0,0,1,0,9.45556Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#e6e6e6'
      />
      <polygon
        points='419.548 556.311 407.288 556.311 401.456 509.023 419.55 509.023 419.548 556.311'
        fill='#a0616a'
      />
      <path
        d='M398.53106,552.80763h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H383.64421a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,398.53106,552.80763Z'
        fill='#2f2e41'
      />
      <polygon
        points='470.548 556.311 458.288 556.311 452.456 509.023 470.55 509.023 470.548 556.311'
        fill='#a0616a'
      />
      <path
        d='M449.53106,552.80763h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H434.64421a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,449.53106,552.80763Z'
        fill='#2f2e41'
      />
      <path
        d='M746.75526,710.91364H734.27553a4.5264,4.5264,0,0,1-4.48438-4.12793L719.21523,579.38727a1.49993,1.49993,0,0,0-2.98414-.05274l-15.1892,127.61133a4.50246,4.50246,0,0,1-4.46851,3.96778h-15.324a4.50533,4.50533,0,0,1-4.49781-4.47559c-.03369-8.01563-.08838-16.08984-.14306-24.165-.48633-71.92187-.98926-146.292,14.02856-175.42773l.137-.26563,54.19239-.92676.136.29786c16.39624,35.83007,11.41968,115.875,6.60694,193.2832l-.46314,7.459A4.50686,4.50686,0,0,1,746.75526,710.91364Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#2f2e41'
      />
      <circle cx='443.31365' cy='219.86366' r='24.56103' fill='#a0616a' />
      <path
        d='M687.59706,511.0943l.67676-28.16016-4.87232-21.97168a35.41574,35.41574,0,0,1,7.87525-31.11816,34.87749,34.87749,0,0,1,29.21948-12.11523h.00025q.53064.041,1.064.08886a35.02345,35.02345,0,0,1,24.13135,12.90723,35.43053,35.43053,0,0,1,7.76416,26.57422l-5.89429,51.5166Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#6c63ff'
      />
      <path
        d='M666.73325,561.56408a10.05578,10.05578,0,0,0,.52738-15.41031l13.82828-32.95084-18.25062,3.42765-10.33354,30.76518a10.11027,10.11027,0,0,0,14.2285,14.16832Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#a0616a'
      />
      <path
        d='M771.0768,565.51366a10.05582,10.05582,0,0,1,.35026-15.41536L759.496,516.41406l18.026,4.4605,8.56637,31.30329a10.11027,10.11027,0,0,1-15.01158,13.33581Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#a0616a'
      />
      <path
        d='M668.9286,545.41754a4.50175,4.50175,0,0,1-1.83911-.39258l-10.52075-4.71289a4.49406,4.49406,0,0,1-2.44409-5.48535l17.6477-54.81933,6.82007-41.29981a11.09066,11.09066,0,1,1,21.74121,4.335l-10.36547,44.292L673.23354,542.23a4.49738,4.49738,0,0,1-4.30494,3.1875Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#6c63ff'
      />
      <path
        d='M769.29091,545.41754A4.49738,4.49738,0,0,1,764.986,542.23L748.2599,487.36578l-10.374-44.32324a11.09067,11.09067,0,1,1,21.74121-4.335l6.83765,41.37207,17.63037,54.74707a4.49444,4.49444,0,0,1-2.44434,5.48535L771.13,545.025A4.50175,4.50175,0,0,1,769.29091,545.41754Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#6c63ff'
      />
      <path
        d='M721.58714,358.18541c-6.82592-2.95688-15.743.7224-18.49775,7.63236-1.71446,4.30049-1.19131,9.151-.24607,13.68316s2.29287,9.055,2.148,13.6824-2.138,9.5386-6.24293,11.67936c-2.45278,1.27913-5.3218,1.42137-7.98081,2.18427s-5.40346,2.54653-5.78641,5.28618c-.57932,4.14451,4.448,7.30118,4.41447,11.48585-.03556,4.43388-5.57661,7.06694-6.2948,11.44242a7.59532,7.59532,0,0,0,2.929,6.75,19.90727,19.90727,0,0,0,6.88422,3.33272,118.80963,118.80963,0,0,0,59.2554,3.37627c3.91827-.78155,7.951-1.83834,10.99547-4.42573s4.78579-7.11653,3.03581-10.70836c-2.62352-5.38475-10.95329-5.69164-13.85626-10.931-1.74133-3.14282-.93971-7.0012-.57307-10.57543.94687-9.23058,3.13144-20.01391.83832-29.00512-2.07178-8.12333-6.5704-18.62032-13-24-4.61353-3.86016-13.42156-2.10141-19.31795-.91059Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#2f2e41'
      />
      <path
        d='M921.23145,734.52905h-350a1,1,0,0,1,0-2h350a1,1,0,0,1,0,2Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#ccc'
      />
      <path
        d='M884.37762,711.75751c-14.41968,19.311-44.352,21.34351-44.352,21.34351s-6.55353-29.27679,7.86615-48.58777,44.352-21.34357,44.352-21.34357S898.79724,692.44648,884.37762,711.75751Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#e6e6e6'
      />
      <path
        d='M810.9209,719.017c9.51507,12.74273,29.2666,14.084,29.2666,14.084s4.32446-19.31891-5.19062-32.06165-29.2666-14.084-29.2666-14.084S801.40582,706.2743,810.9209,719.017Z'
        transform='translate(-277.76855 -165.47095)'
        fill='#e6e6e6'
      />
    </svg>
  )
}

const config = {
  configs: {
    validate: validate
  },
  generalInputProps: {
    spacing: 1,
    variant: 'outlined',
    margin: 'none',
    size: 'small',
    helperText: false,
    fullWidth: true,
    resource: 'posts'
  },
  inputs: {
    name: {
      ui: { widget: 'text', type: 'base', grid: { sm: 6, md: 6 } }
    },
    body: {
      ui: { widget: 'text', type: 'base', grid: { sm: 6, md: 6 } }
    },
    timePicker: {
      ui: { widget: 'timepicker', type: 'base', grid: { sm: 6, md: 6 } }
    },
    container: {
      ui: { type: 'children', grid: { sm: 12, md: 12 } },
      children: {
        dateTimePicker: {
          ui: { widget: 'datetimepicker', type: 'base', grid: { sm: 6, md: 6 } }
        },
        datePicker: {
          ui: { widget: 'datepicker', type: 'base', grid: { sm: 6, md: 6 } },
          validate: [required()],
          minDate: '2019-01-01'
        },
        dateRangePicker: {
          ui: {
            widget: 'daterangepicker',
            type: 'base',
            grid: { sm: 12, md: 6 }
          },
          startDateProps: { disableFuture: true },
          endDateProps: { disableFuture: true },
          textFieldProps: {
            fullWidth: true,
            size: 'small',
            variant: 'outlined'
          },
          textFieldModalProps: {
            variant: 'outlined',
            size: 'small'
          },
          format: 'DD/MM/YYYY',
          isTranslate: false,
          duration: 2,
          validate: [required()],
          isClear: true
        }
      }
    },
    name6: {
      ui: { widget: 'text', type: 'base', grid: { sm: 6, md: 12 } }
    },
    container2: {
      ui: { type: 'children', grid: { sm: 12, md: 12 } },
      children: {
        name7: {
          ui: { widget: 'text', type: 'base', grid: { sm: 6, md: 4 } }
        },
        name8: {
          ui: { widget: 'text', type: 'base', grid: { sm: 6, md: 2 } }
        },
        name9: {
          ui: { widget: 'text', type: 'base', grid: { sm: 6, md: 6 } }
        }
      }
    },
    category: {
      ui: { widget: 'selectarray', type: 'base', grid: { sm: 6, md: 6 } },
      choices: [
        { id: 'programming', name: 'Programming' },
        { id: 'lifestyle', name: 'Lifestyle' },
        { id: 'photography', name: 'Photography' }
      ]
    },
    selectBox: {
      ui: {
        widget: 'autocompletecheckboxarray',
        type: 'base',
        grid: { sm: 6, md: 6 }
      },
      textFieldProps: {
        variant: 'outlined'
      },
      validate: [required()]
    },
    datePicker: {
      ui: { type: 'component', grid: { sm: 6, md: 6 } },
      keyboard: false,
      placeholder: 'dd/MM/yyyy HH:mm',
      validate: [required()],
      component: DatePicker
    },
    dateTimePicker: {
      ui: { widget: 'datetimepicker', type: 'base', grid: { sm: 6, md: 6 } },
      keyboard: false,
      locale: 'en',
      format: 'dd/MM/yyyy HH:mm',
      placeholder: 'dd/MM/yyyy HH:mm'
    },
    svg: {
      ui: { type: 'component', grid: { sm: 12, md: 12 } },
      component: SvgPage
    }
  }
}

export const PostCreate = (props: any) => (
  <Create {...props}>
    <FormConfig config={config} />
  </Create>
)

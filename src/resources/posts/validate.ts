export const validate = (values: any) => {
  const errors: any = {}

  // console.log(values);

  if (!values.name) {
    errors.name = 'Required'
  }

  if (values.title === 'Invalid date') {
    errors.title = 'Invalid date'
  }
  if (values.title === 'Min date') {
    errors.title = 'Min date'
  }
  if (values.title === 'Max date') {
    errors.title = 'Max date'
  }
  if (!values.title) {
    errors.title = 'Required'
  }

  if (values.name1 === 'Invalid date time') {
    errors.name1 = 'Invalid date time'
  }
  if (values.name1 === 'Min date time') {
    errors.name1 = 'Min date'
  }
  if (values.name1 === 'Max date time') {
    errors.name1 = 'Max date time'
  }
  if (!values.name1) {
    errors.name1 = 'Required'
  }

  return errors
}

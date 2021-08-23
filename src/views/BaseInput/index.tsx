import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import { FormWithRedirect, ImageField, required } from 'react-admin'
import {
  BooleanInput,
  NullableBooleanInput,
  DateInput,
  DateTimeInput,
  ImageInput,
  FileInput,
  NumberInput,
  PasswordInput,
  TextInput,
  AutocompleteInput,
  RadioButtonGroupInput,
  AutocompleteArrayInput,
  CheckboxGroupInput,
  SelectInput,
  SelectArrayInput,
  DatePickerInput,
  DateTimePickerInput,
  TimePickerInput,
  DateRangePickerInput,
  SearchInput,
  AutocompleteCheckboxArrayInput,
  Button,
  FileField,
  MarkdownInput
} from 'ra-ext'

const useStyles = makeStyles(() => ({
  input: {
    width: 400,
    marginRight: 16
  },
  inline: {
    display: 'inline'
  },
  fullWidth: {
    width: '100%'
  },
  label: {
    transform: 'translate(0, -2px) scale(0.75)'
  },
  dropZone: {
    '& > div > div:first-child': {
      display: 'inline-block'
    }
  }
}))

const choices = [
  { id: 1, name: 'JAVA' },
  { id: 2, name: 'RUBY' },
  { id: 3, name: 'PYTHON' },
  { id: 4, name: 'REACT' },
  { id: 5, name: 'ANGULAR' }
]

const mark = `### Source
\`\`\`tsx
import { MarkdownInput } from 'ra-ext'
\`\`\`
`

export default function BaseInput() {
  const classes = useStyles()

  return (
    <FormWithRedirect
      initialValues={{
        DateInput: new Date(),
        DateTimeInput: new Date(),
        NullableBooleanInput: true,
        NumberInput: 12,
        PasswordInput: '12345678',
        TextInput: 'Catalina',
        SelectInput: 1,
        DatePickerInput: new Date(),
        DateTimePickerInput: new Date(),
        TimePickerInput: new Date(),
        DateRangePickerInput: '12/11/2021 - 12/12/2022',
        SearchInput: 'Search',
        AutocompleteInput: 1,
        AutocompleteCheckboxArrayInput: [{ id: 1, name: 'JAVA' }],
        AutocompleteArrayInput: [1, 2, 3, 4],
        SelectArrayInput: [1, 2, 3, 4],
        CheckboxGroupInput: [1, 2, 3, 4],
        RadioButtonGroupInput: 4,
        BooleanInput: true,
        MarkdownInput: mark
      }}
      render={() => {
        return (
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <NullableBooleanInput
                  source='NullableBooleanInput'
                  variant='outlined'
                  className={classes.fullWidth}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <DateInput source='DateInput' variant='outlined' fullWidth />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <DateTimeInput
                  source='DateTimeInput'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <DateTimeInput
                  source='DateTimeInput'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <NumberInput
                  source='NumberInput'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <PasswordInput
                  source='PasswordInput'
                  variant='outlined'
                  fullWidth
                  validate={required()}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <TextInput source='TextInput' variant='outlined' fullWidth />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <SelectInput
                  source='SelectInput'
                  variant='outlined'
                  choices={choices}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <DatePickerInput
                  source='DatePickerInput'
                  variant='outlined'
                  margin='dense'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <DateTimePickerInput
                  source='DateTimePickerInput'
                  variant='outlined'
                  margin='dense'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <TimePickerInput
                  source='TimePickerInput'
                  variant='outlined'
                  margin='dense'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <DateRangePickerInput
                  source='DateRangePickerInput'
                  textFieldProps={{
                    variant: 'outlined',
                    margin: 'dense',
                    fullWidth: true
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <SearchInput
                  iconPosition='start'
                  source='SearchInput'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <AutocompleteInput
                  source='AutocompleteInput'
                  variant='outlined'
                  choices={choices}
                  fullWidth
                  classes={{ container: classes.fullWidth }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <BooleanInput source='BooleanInput' variant='outlined' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <AutocompleteCheckboxArrayInput
                  source='AutocompleteCheckboxArrayInput'
                  textFieldProps={{ variant: 'outlined', margin: 'dense' }}
                  optionName='name'
                  limitTags={2}
                  choices={choices}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <SelectArrayInput
                  source='SelectArrayInput'
                  variant='outlined'
                  choices={choices}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <AutocompleteArrayInput
                  source='AutocompleteArrayInput'
                  variant='outlined'
                  choices={choices}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <MarkdownInput
                  source='MarkdownInput'
                  label='Markdown Input'
                  validate={required()}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <CheckboxGroupInput
                  source='CheckboxGroupInput'
                  variant='outlined'
                  choices={choices}
                  fullWidth
                  classes={{ label: classes.label }}
                  validate={required()}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <RadioButtonGroupInput
                  source='RadioButtonGroupInput'
                  variant='outlined'
                  choices={choices}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <ImageInput
                  source='ImageInput'
                  multiple
                  className={classes.dropZone}
                  placeholder={
                    <Box display='flex' justifyContent='flex-start'>
                      <Button
                        startIcon='CloudUploadOutlined'
                        variant='outlined'
                        color='primary'
                      >
                        Upload
                      </Button>
                    </Box>
                  }
                >
                  <ImageField source='src' title='title' />
                </ImageInput>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <FileInput
                  source='FileInput'
                  multiple
                  className={classes.dropZone}
                  placeholder={
                    <Box display='flex' justifyContent='flex-start'>
                      <Button
                        startIcon='CloudUploadOutlined'
                        variant='outlined'
                        color='success'
                      >
                        Upload
                      </Button>
                    </Box>
                  }
                >
                  <FileField source='src' title='title' />
                </FileInput>
              </Grid>
            </Grid>
          </Box>
        )
      }}
    />
  )
}

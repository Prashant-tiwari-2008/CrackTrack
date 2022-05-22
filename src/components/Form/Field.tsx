import React from 'react'
import { Formik, Field as FormikField, Form, FormikHelpers, FormikErrors, FormikProps } from 'formik';

interface Props {
    name: string;
    type: string;
    formik: FormikProps<any>
}

const FormField = ({ name, type, ...props }: Props) => {
    const { errors, touched } = props.formik;
    return (
        <>
            <FormikField name={name} placeholder={`Enter ${name}`} type={type} className="form-control" />
            {errors[name] && touched[name] ? (
                <div className='text-danger text-italic' style={{
                    fontStyle: 'italic',
                    fontSize: '14px'
                }}>{errors[name] as string}</div>
            ) : null}
        </>
    )
}

export default FormField
import * as Yup from 'yup';
import { RequiredStringSchema } from 'yup/lib/string';
import { UsersFormInitialValuesType } from '../../types/userFormValues';

export const editModalFormSchema = (userParams: Array<{[key: string]: string}>) => {
  const values: { [key: string]: RequiredStringSchema<string | undefined> } = {};

  userParams.forEach((param) => {
    const key = (param.id) as keyof UsersFormInitialValuesType;
    values[key] = Yup.string().required('Поле обязательно');
  });

  return Yup.object().shape(values);
};
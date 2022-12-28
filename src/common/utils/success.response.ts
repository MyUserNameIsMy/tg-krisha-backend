export type SuccessResponseType = {
  kk: { instance: string; table: string };
  ru: { instance: string; table: string };
  en: { instance: string; table: string };
};

export class CudSuccessResponse {
  message: string;
}

export const SuccessCreateResponse = (
  message: SuccessResponseType,
  lang: string,
) => {
  switch (lang) {
    case 'kk':
      return {
        message: `${message.kk.instance} ${message.kk.table} кестесіне енгізілді.`,
      };
    case 'ru':
      return {
        message: `${message.ru.instance} успешно внесена в таблицу ${message.ru.table}.`,
      };
    case 'en':
      return {
        message: `${message.en.instance} successfully inserted into ${message.en.table}.`,
      };
  }
};

export const SuccessUpdateResponse = (
  message: SuccessResponseType,
  lang: string,
) => {
  switch (lang) {
    case 'kk':
      return {
        message: `${message.kk.instance} ${message.kk.table} кестесінде жаңартылды.`,
      };
    case 'ru':
      return {
        message: `${message.ru.instance} данные успешно обновлены в таблице ${message.ru.table}.`,
      };
    case 'en':
      return {
        message: `Instance ${message.en.instance} successfully updated in ${message.en.table}.`,
      };
  }
};

export const SuccessDeleteResponse = (
  message: SuccessResponseType,
  lang: string,
) => {
  switch (lang) {
    case 'kk':
      return {
        message: `${message.kk.instance} ${message.kk.table} кестесінен өшірілді.`,
      };
    case 'ru':
      return {
        message: `${message.ru.instance} данные успешно удалены из таблицы ${message.ru.table}.`,
      };
    case 'en':
      return {
        message: `Instance ${message.en.instance} successfully deleted from ${message.en.table}.`,
      };
  }
};

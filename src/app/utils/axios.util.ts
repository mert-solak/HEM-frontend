import * as originalAxios from 'axios';

import { urlConfig } from '@configs/url.config';
import { MatSnackBar } from '@angular/material/snack-bar';

export const axios = originalAxios.default.create({
  baseURL: `${urlConfig.baseURL}:${urlConfig.basePORT}`,
});

// TODO:Mert

// export const setAxiosInterceptors = (
//   settingsService: SettingsService,
//   matSnackBar: MatSnackBar,
//   numberOfActiveRequest: number,
// ) => {
//   axiosInstance.interceptors.request.use(
//     function (config) {
//       settingsService.setIsProgressSpinnerActive(true);
//       numberOfActiveRequest += 1;

//       return config;
//     },
//     function (error) {
//       return Promise.reject(error);
//     },
//   );

//   axiosInstance.interceptors.response.use(
//     function (response) {
//       numberOfActiveRequest -= 1;

//       if (numberOfActiveRequest <= 0) {
//         settingsService.setIsProgressSpinnerActive(false);
//       }
//       return response;
//     },
//     function (error: AxiosError) {
//       numberOfActiveRequest -= 1;

//       if (numberOfActiveRequest <= 0) {
//         settingsService.setIsProgressSpinnerActive(false);
//       }

//       const handledError = errorHelper.handleShowingGlobalErrorMessages(matSnackBar, error);

//       return Promise.reject(handledError);
//     },
//   );
// };

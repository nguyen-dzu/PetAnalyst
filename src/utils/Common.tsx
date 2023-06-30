import moment from 'moment';
// import * as types from 'react-native/types';
// import RNFS from 'react-native-fs';
export function getFormattedDate(dateString: string) {
  var date = new Date(dateString);
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var dayOfWeek = days[date.getDay()];

  var day = date.getDate();
  var month = date.getMonth() + 1; // Vì tháng được đếm từ 0 đến 11, nên cần cộng thêm 1.
  var year = date.getFullYear();

  return dayOfWeek + ', ' + day + '/' + month + '/' + year;
}

export function getMonthDates(year: any, month: any) {
  var dates = [];

  var currentDate = new Date(year, month - 1, 1);

  while (currentDate.getMonth() === month - 1) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

// const {ResizeImageModule} = types.NativeModules;
// export const {width: windowWidth, height: windowHeight} =
//   types.Dimensions.get('window');

// //check data null
// export const isNull = (data: any) => {
//   if (data === undefined || data == null || data.length === 0) {
//     return true;
//   } else if (typeof data === 'string') {
//     data = String(data).trim();
//     return data === '';
//   } else if (typeof data === 'object' && data.constructor === Object) {
//     if (Object.keys(data).length === 0) {
//       return true;
//     }
//   }
//   return false;
// };

// URL
export const validURL = (str: string) => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(str);
};

export const getUrlImgFb = (id?: string) =>
  `http://graph.facebook.com/${id}/picture?height=50&width=50`;

export const getIdImgFb = (url?: string) =>
  url?.slice(url?.indexOf('asid=') + 5, url?.indexOf('&'));

//validate
export const isValidateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isValidatePassword = (text: string) => {
  // const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/g;
  const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/g;
  return re.test(text);
};

export const isValidateUsername = (text: string) => {
  const re = /^[0-9a-zA-Z.-]+$/;
  return re.test(text);
};

export const isOnlyNumber = (text: string) => {
  const re = /^\d+$/;
  return re.test(text);
};

export const isValidatePostCode = (text: string) => {
  const re = /^[0-9]+$/;
  return re.test(text);
};

export const trimNumber = (text: string) => {
  return text.replace(/[^0-9]/g, '');
};

//remove space in string
export const removeSpace = (text: string) => {
  return text.replace(/\s/g, '');
};

export const formatDate = (date: Date, format?: string) => {
  if (date) {
    const _format = format ? format : 'DD/MM/YYYY';
    const dateFormat = moment(date);
    return dateFormat.isValid() ? dateFormat.format(_format) : '-/-/-';
  } else {
    return '-/-/-';
  }
};

export const formatDateFromString = (date: string, format?: string) => {
  if (date) {
    const _format = format ? format : 'DD/MM/YYYY';
    const dateUTC = moment.utc(date);
    const dateFormat = moment(dateUTC).local();
    return dateFormat.isValid() ? dateFormat.format(_format) : '-/-/-';
  } else {
    return '-/-/-';
  }
};

export const formatDateFromStringNoTZ = (date: string, format?: string) => {
  if (date) {
    const _format = format ? format : 'DD/MM/YYYY';
    const dateUTC = moment.utc(date);
    const dateFormat = moment(dateUTC);
    return dateFormat.isValid() ? dateFormat.format(_format) : '-/-/-';
  } else {
    return '-/-/-';
  }
};

// export const convertTimeSingapore = (date: string, format?: string) => {
//   if (date) {
//     const dateUTC = moment.utc(date);
//     const eventStartTime = moment(dateUTC)
//       .tz('Asia/Singapore')
//       .format(format ? format : 'DD/MM/YYYY HH:mm');
//     return eventStartTime;
//   } else {
//     return '-/-/-';
//   }
// };

export const convertTZ = (date: string) => {
  return new Date(
    (typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
      timeZone: 'Asia/Singapore',
    }),
  );
};

export const durationDateTime = (dateString: string) => {
  const currentTime = moment().toString();
  const dateTime = moment.utc(dateString).local().toDate();
  const duration = moment.duration(moment(currentTime).diff(moment(dateTime)));

  if (duration.asYears() >= 1) {
    return `${Math.round(duration.asYears())} ${
      duration.asYears() >= 2 ? 'years' : 'year'
    } ago`;
  } else if (duration.asMonths() >= 1) {
    return `${Math.round(duration.asMonths())} ${
      duration.asMonths() >= 2 ? 'months' : 'month'
    } ago`;
  } else if (duration.asWeeks() >= 1) {
    return `${Math.round(duration.asWeeks())} ${
      duration.asWeeks() >= 2 ? 'weeks' : 'week'
    } ago`;
  } else if (duration.asDays() >= 1) {
    return `${Math.round(duration.asDays())} ${
      duration.asDays() >= 2 ? 'days' : 'day'
    } ago`;
  } else if (duration.asHours() >= 1) {
    return `${Math.round(duration.asHours())} ${
      duration.asHours() >= 2 ? 'hours' : 'hour'
    } ago`;
  } else if (duration.asMinutes() >= 1) {
    return `${Math.round(duration.asMinutes())} ${
      duration.asMinutes() >= 2 ? 'minutes' : 'minute'
    } ago`;
  } else if (duration.asSeconds() >= 1) {
    return `${Math.round(duration.asSeconds())} ${
      duration.asSeconds() >= 2 ? 'seconds' : 'second'
    } ago`;
  }
};

export const cssFontCerebriSansPro = `
    <head>
      <style type="text/css"> 
        @font-face {
          font-family: 'Cerebri Sans Pro';
          src: url('CerebriSansPro-Regular.woff2') format('woff2'),
            url('CerebriSansPro-Regular.woff') format('woff'),
            url('CerebriSansPro-Regular.ttf') format('truetype'),
            url('file:///android_asset/fonts/CerebriSansPro-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        * {
          font-family: Cerebri Sans Pro;
        }
      </style>
    </head>
  `;

export const cssArticleContent = `
<head>
<link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
                
      <style type="text/css"> 
        @font-face {
          font-family: 'CerebriSans';
          src: url('/src/assets/fonts/CerebriSansPro-Regular.ttf') format('truetype');
        }
        * {                                 
          font-size: 12px;
        }
        strong {
          font-weight: 700;
          font-size: 16px;
        }
        li {
          font-size: 14px;
          padding-bottom: 6px;
        }
      </style>
    </head>
`;

export const formatCarrot = (carrot: any) => {
  return new Intl.NumberFormat('en').format(carrot);
};

export const formatTime = (time: any) => {
  return moment(time).format('hh:mm');
};
// export const checkCameraPermision = (
//   dispatch: any,
//   callBackSuccess: () => void,
//   callBackFailure?: () => void,
// ) => {
//   // const dispatch = useDispatch();
//   request(
//     Platform.OS === 'android'
//       ? PERMISSIONS.ANDROID.CAMERA
//       : PERMISSIONS.IOS.CAMERA,
//   )
//     .then(async status => {
//       switch (status) {
//         case RESULTS.UNAVAILABLE:
//           callBackFailure && callBackFailure();
//           setTimeout(() => {
//             dispatch(
//               showPopupAlertAction({
//                 message: 'This feature is not available on this device',
//                 isShow: true,
//                 btnRight: 'OK',
//                 btnLeft: '',
//                 isShowClose: false,
//               }),
//             );
//           }, 200);

//           break;
//         case RESULTS.DENIED:
//           callBackFailure && callBackFailure();
//           setTimeout(() => {
//             dispatch(
//               showPopupAlertAction({
//                 message:
//                   'This app does not have access to your Camera\nYou can enable access in Privacy Setting',
//                 isShow: true,
//                 btnRight: 'OK',
//                 btnLeft: '',
//                 callBacks: [
//                   () => {
//                     setTimeout(() => {
//                       openSettings().catch(() =>
//                         console.warn('cannot open settings'),
//                       );
//                     }, 200);
//                   },
//                 ],
//               }),
//             );
//           }, 200);
//           break;
//         case RESULTS.GRANTED:
//           callBackSuccess && callBackSuccess();
//           break;
//         case RESULTS.BLOCKED:
//           callBackFailure && callBackFailure();
//           setTimeout(() => {
//             dispatch(
//               showPopupAlertAction({
//                 message:
//                   'This app does not have access to your Camera\nYou can enable access in Privacy Setting',
//                 isShow: true,
//                 btnRight: 'OK',
//                 btnLeft: '',
//                 callBacks: [
//                   () => {
//                     setTimeout(() => {
//                       openSettings().catch(() =>
//                         console.warn('cannot open settings'),
//                       );
//                     }, 200);
//                   },
//                 ],
//               }),
//             );
//           }, 200);

//           break;
//       }
//     })
//     .catch(error => {
//       console.log('err request permission', error);
//     });
// };

// export const removeBackAction = () => {
//   const backHandler = types.BackHandler.addEventListener(
//     'hardwareBackPress',
//     () => true,
//   );
//   return () => backHandler.remove();
// };

export const getCurrentTime = () => {
  const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  return new Date(Date.now() - tzoffset).toISOString().slice(0, -1);
};

export const addSpaceToWord = (camelCase: string) => {
  var tmp = camelCase[0];
  for (let i = 1; i < camelCase.length; i++) {
    var hasNextCap = false;
    var hasPrevCap = false;

    var charValue = camelCase.charCodeAt(i);
    if (charValue > 64 && charValue < 91) {
      if (camelCase.length > i + 1) {
        var next_charValue = camelCase.charCodeAt(i + 1);
        if (next_charValue > 64 && next_charValue < 91) {
          hasNextCap = true;
        }
      }

      if (i - 1 > -1) {
        var prev_charValue = camelCase.charCodeAt(i - 1);
        if (prev_charValue > 64 && prev_charValue < 91) {
          hasPrevCap = true;
        }
      }

      if (
        i < camelCase.length - 1 &&
        (!((hasNextCap && hasPrevCap) || hasPrevCap) ||
          (hasPrevCap && !hasNextCap))
      ) {
        tmp += ' ';
      }
    }
    tmp += camelCase[i];
  }
  return tmp;
};

export const calculatorHeightRatio = (width: number, ratio?: number) => {
  return width / (ratio ?? 3 / 2);
};
// export const renderWebView = (content: string, tapLink?: () => void) => {
//   // const systemFonts = [...defaultSystemFonts, 'Cerebri Sans Pro'];
//   // return (
//   //   <RenderHtml
//   //     systemFonts={systemFonts}
//   //     contentWidth={MaxSize.WIDTH}
//   //     tagsStyles={{
//   //       div: {
//   //         fontFamily: 'Cerebri Sans Pro',
//   //       },
//   //     }}
//   //     source={{
//   //       html: `
//   //       <div
//   //         style="
//   //           font-size: 14px;
//   //           text-align: justify;
//   //           letter-spacing: 0.5px;
//   //           margin-top: 3px;
//   //           ">
//   //           ${content.replace(/\n/g, '<br />')}
//   //       </div>`,
//   //       baseUrl: '',
//   //     }}
//   //   />
//   // );
//   return (
//     // <AutoHeightWebView
//     //   style={{ width: '100%' }}
//     //   customStyle={`
//     //           * {
//     //             font-size: 14px;
//     //             // text-align: justify;
//     //             letter-spacing: 0.5;
//     //           }
//     //         `}
//     //   onSizeUpdated={size => console.log(size.height)}
//     //   files={[
//     //     {
//     //       href: 'cssfileaddress',
//     //       type: 'text/css',
//     //       rel: 'stylesheet',
//     //     },
//     //   ]}
//     //   source={{
//     //     html: `${cssFontCerebriSansPro}<div>${content.replace(/\n/g, '<br />')} `,
//     //     baseUrl: '',
//     //   }}
//     //   originWhitelist={['*']}
//     //   scalesPageToFit={false}
//     //   viewportContent={'width=device-width, user-scalable=no'}
//     //   scrollEnabled={false}
//     //   onShouldStartLoadWithRequest={event => {
//     //     if (event.url.slice(0, 4) === 'http' || event.url.slice(0, 4) === 'https') {
//     //       store.dispatch(openInAppBrowser(event.url));
//     //       return false;
//     //     } else {
//     //       return true;
//     //     }
//     //   }}
//     // />
//     <Hyperlink
//       onPress={url => {
//         if (validURL(url)) {
//           tapLink && tapLink();
//           store.dispatch(openInAppBrowser(url));
//         }
//       }}
//       linkStyle={{color: colors.TORY_BLUE}}>
//       <CustomText>{content.replace(/<br>/g, '\n')}</CustomText>
//     </Hyperlink>
//   );
// };

// const CustomText = styled(fonts.CerebriSansRegularSize14)``;

// export const TextToHtml = (content: string) => {
//   return (
//     <RenderHtml
//       source={{
//         html: `${cssFontCerebriSansPro}
//         <div
//           style="font-size: 14px;
//                   letter-spacing: 0.5px;
//                   margin-top: 3px;"
//         >${content}</div>`,
//       }}
//     />
//   );
// };

// export const resizeImage = (listUri: string[], callback: any) => {
//   const {ResizeImageAndroid} = types.NativeModules;
//   try {
//     if (types.Platform.OS === 'android') {
//       const arr: String[] = [];
//       listUri.map((uri: String) => {
//         ResizeImageAndroid.resizeImage(uri, (value: String) => {
//           arr.push('file://' + value);
//           if (arr.length === listUri.length) {
//             console.log(listUri, arr);
//             callback(arr);
//           }
//         });
//       });
//     } else {
//       const arr: String[] = [];
//       listUri.map(async (uri: string) => {
//         const convertPHToFile = uri.startsWith('ph://')
//           ? await getAbsolutePath(uri)
//           : uri;
//         ResizeImageModule.resizeImage(convertPHToFile, (uriResize: string) => {
//           arr.push(uriResize);
//           if (arr.length === listUri.length) {
//             callback(arr);
//           }
//         });
//       });
//     }
//   } catch (error) {
//     console.log('error resize image', error);
//     return [];
//   }
// };

// const getAbsolutePath = async (assetPath: string) => {
//   const destination = `${RNFS.TemporaryDirectoryPath}${Math.random()
//     .toString(36)
//     .substring(7)}.png`;
//   try {
//     let absolutePath = await RNFS.copyAssetsFileIOS(
//       assetPath,
//       destination,
//       0,
//       0,
//     );
//     return 'file://' + absolutePath;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getVersionApp = () => {
//   return `${require('../../package.json').versionNameProd}(${
//     require('../../package.json').versionCodeProd
//   })`;
// };
// export const analytic_deactivated_account = () => {
//   analytics().logEvent('deactivated_account', {
//     date: new Date().toDateString(),
//     version_app: getVersionApp(),
//   });
// };
// export const analytic_push_notification = (status: boolean) => {
//   analytics().logEvent(`push_notification_${status ? 'on' : 'off'}`, {
//     date: new Date().toDateString(),
//     version_app: getVersionApp(),
//   });
// };
// export const analytic_mail_notification = (status: boolean) => {
//   analytics().logEvent(`mail_notification_${status ? 'on' : 'off'}`, {
//     date: new Date().toDateString(),
//     version_app: getVersionApp(),
//   });
// };
// export const analytic_logout = () => {
//   analytics().logEvent('logout_app', {
//     date: new Date().toDateString(),
//     version_app: getVersionApp(),
//   });
// };

// export const analytic_tracking_screeen = (screenName: string) => {
//   analytics().logScreenView({
//     screen_name: screenName,
//     screen_class: screenName,
//   });
// };

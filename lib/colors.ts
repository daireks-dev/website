type ColorModel = {
  saturation: (saturation: number, brightness: number) => number;
  brightness: (brightness: number) => number;
};

export const colorModels: Record<string, ColorModel> = {
  measureColor1: {
    saturation: (saturation, brightness) => {
      let m: number;
      let b: number;

      if (brightness < 0) {
        m = 0.1115196078431372;
        b = 30.8235294117647065;
      } else {
        m =
          2.4348302604326379e-11 * brightness ** 4 +
          -1.8504709979288012e-08 * brightness ** 3 +
          5.9215071933721652e-06 * brightness ** 2 +
          -1.1473013684640556e-03 * brightness +
          1.1151960784313739e-01;

        b =
          9.5445346208960110e-09 * brightness ** 4 +
          -7.0060779845793209e-06 * brightness ** 3 +
          2.0767910028594940e-03 * brightness ** 2 +
          -3.5304330065359629e-01 * brightness +
          3.0823529411764746e+01;
      }

      return m * saturation + b;
    },

    brightness: (brightness) => {
      return (
        -6.1479464075923700e-09 * brightness ** 4 +
        -1.5582913666764623e-08 * brightness ** 3 +
        6.9911183874591418e-04 * brightness ** 2 +
        1.9633374183006555e-01 * brightness +
        3.0588235294117634e+01
      );
    },
  },

  measureColor2: {
    saturation: (saturation, brightness) => {
      let m: number;
      let b: number;

      if (brightness < 0) {
        m = 0.1191789215686274;
        b = 33.1764705882352970;
      } else {
        m =
          2.5109187060711535e-11 * brightness ** 4 +
          -1.9770821714712972e-08 * brightness ** 3 +
          6.4793755026424885e-06 * brightness ** 2 +
          -1.2498244740604613e-03 * brightness +
          1.1917892156862762e-01;

        b =
          1.2661117354249839e-08 * brightness ** 4 +
          -8.9009602864584440e-06 * brightness ** 3 +
          2.4948618770425091e-03 * brightness ** 2 +
          -3.9736519607843362e-01 * brightness +
          3.3176470588235361e+01;
      }

      return m * saturation + b;
    },

    brightness: (brightness) => {
      return (
        -5.4174973294625971e-09 * brightness ** 4 +
        -1.5582913666764623e-08 * brightness ** 3 +
        6.8714416104983655e-04 * brightness ** 2 +
        1.9633374183006552e-01 * brightness +
        2.8235294117647054e+01
      );
    },
  },

  measureCountColor: {
    saturation: (saturation, brightness) => {
      let m: number;
      let b: number;

      if (brightness < 0) {
        m = 0.1204044117647059;
        b = 34.6666666666666643;
      } else {
        m =
          9.3588788135379838e-11 * brightness ** 4 +
          -5.9507251564973790e-08 * brightness ** 3 +
          1.4277065501493687e-05 * brightness ** 2 +
          -1.7955505770016463e-03 * brightness +
          1.2040441176470626e-01;

        b =
          2.1816079133476633e-08 * brightness ** 4 +
          -1.5059327767565547e-05 * brightness ** 3 +
          3.9605034722222645e-03 * brightness ** 2 +
          -5.2839052287582089e-01 * brightness +
          3.4666666666666757e+01;
      }

      return m * saturation + b;
    },

    brightness: (brightness) => {
      return (
        -4.8087897643544285e-09 * brightness ** 4 +
        -1.7141205033445424e-07 * brightness ** 3 +
        7.8488019556780940e-04 * brightness ** 2 +
        2.0654616013071922e-01 * brightness +
        1.9215686274509800e+01
      );
    },
  },

  patternListColor: {
    saturation: (saturation, brightness) => {
      let m: number;
      let b: number;

      if (brightness < 0) {
        m = 0.0557598039215686;
        b = 15.6078431372549016;
      } else {
        m =
          -3.1711136408993596e-26 * brightness ** 4 +
          -2.5322234708499117e-09 * brightness ** 3 +
          1.7951516544117653e-06 * brightness ** 2 +
          -5.1141876021241887e-04 * brightness +
          5.5759803921568651e-02;

        b =
          4.8696605208653084e-09 * brightness ** 4 +
          -3.3160440282884314e-06 * brightness ** 3 +
          9.3746808619281829e-04 * brightness ** 2 +
          -1.6533905228758247e-01 * brightness +
          1.5607843137254930e+01;
      }

      return m * saturation + b;
    },

    brightness: (brightness) => {
      return (
        -5.2957558164409598e-09 * brightness ** 4 +
        -1.5582913666766406e-08 * brightness ** 3 +
        5.8940812653186249e-04 * brightness ** 2 +
        1.9633374183006569e-01 * brightness +
        3.4117647058823536e+01
      );
    },
  },

  trackListColor: {
    saturation: (saturation, brightness) => {
      let m: number;
      let b: number;

      if (brightness < 0) {
        m = 0.0582107843137255;
        b = 15.6862745098039262;
      } else {
        m =
          6.0870756510817134e-12 * brightness ** 4 +
          -6.0383790458729884e-09 * brightness ** 3 +
          2.4434008629493631e-06 * brightness ** 2 +
          -5.5928947099673340e-04 * brightness +
          5.8210784313725526e-02;

        b =
          5.0644469416999623e-09 * brightness ** 4 +
          -3.4905726613562704e-06 * brightness ** 3 +
          9.9411509395426175e-04 * brightness ** 2 +
          -1.7197712418300778e-01 * brightness +
          1.5686274509803955e+01;
      }

      return m * saturation + b;
    },

    brightness: (brightness) => {
      return (
        -5.1740143034193414e-09 * brightness ** 4 +
        -1.5582913666765811e-08 * brightness ** 3 +
        5.8741351358251675e-04 * brightness ** 2 +
        1.9633374183006552e-01 * brightness +
        3.3725490196078432e+01
      );
    },
  },

  bgcolorLightest: {
    saturation: (saturation, brightness) => {
      let m: number;
      let b: number;

      if (brightness < 0) {
        m = 0.0655637254901961;
        b = 17.2549019607843128;
      } else {
        m =
          -1.2174151302163094e-11 * brightness ** 4 +
          4.2853012583614039e-09 * brightness ** 3 +
          4.6125424453635685e-07 * brightness ** 2 +
          -4.5078252655228734e-04 * brightness +
          6.5563725490196054e-02;

        b =
          -3.1165827333537773e-09 * brightness ** 4 +
          1.0970371221405349e-06 * brightness ** 3 +
          1.2765522875816699e-04 * brightness ** 2 +
          -1.1968954248365987e-01 * brightness +
          1.7254901960784309e+01;
      }

      return m * saturation + b;
    },

    brightness: (brightness) => {
      return (
        -1.5217689127703936e-09 * brightness ** 4 +
        -1.5582913666768785e-08 * brightness ** 3 +
        1.6854479421977124e-04 * brightness ** 2 +
        1.9633374183006552e-01 * brightness +
        4.5490196078431360e+01
      );
    },
  },

  bgcolorLight: {
    saturation: (saturation, brightness) => {
      let m: number;
      let b: number;

      if (brightness < 0) {
        m = 0.0490196078431372;
        b = 13.0980392156862759;
      } else {
        m =
          1.9782995866015281e-11 * brightness ** 4 +
          -1.2466330933415154e-08 * brightness ** 3 +
          3.0604842441534195e-06 * brightness ** 2 +
          -4.8987694035947994e-04 * brightness +
          4.9019607843137337e-02;

        b =
          9.7393210417308195e-10 * brightness ** 4 +
          -1.0721044602737123e-06 * brightness ** 3 +
          4.6514373978758628e-04 * brightness ** 2 +
          -1.1631944444444488e-01 * brightness +
          1.3098039215686292e+01;
      }

      return m * saturation + b;
    },

    brightness: (brightness) => {
      return (
        -2.8609255560083275e-09 * brightness ** 4 +
        -1.5582913666766406e-08 * brightness ** 3 +
        3.3409766901552223e-04 * brightness ** 2 +
        1.9633374183006547e-01 * brightness +
        4.0392156862745082e+01
      );
    },
  },

  bgColor: {
    saturation: (saturation, brightness) => {
      let m: number;
      let b: number;

      if (brightness < 0) {
        m = 0.0640318627450980;
        b = 17.1764705882352970;
      } else {
        m =
          1.9022111409630056e-11 * brightness ** 4 +
          -1.3537656248005504e-08 * brightness ** 3 +
          3.9611766540926583e-06 * brightness ** 2 +
          -6.9611991932189870e-04 * brightness +
          6.4031862745098117e-02;

        b =
          6.8175247292114169e-09 * brightness ** 4 +
          -4.6125424453636067e-06 * brightness ** 3 +
          1.2550104677287695e-03 * brightness ** 2 +
          -2.0046977124183127e-01 * brightness +
          1.7176470588235333e+01;
      }

      return m * saturation + b;
    },

    brightness: (brightness) => {
      return (
        -6.0262048945707501e-09 * brightness ** 4 +
        -1.5582913666764623e-08 * brightness ** 3 +
        6.9711722579656875e-04 * brightness ** 2 +
        1.9633374183006555e-01 * brightness +
        3.0196078431372531e+01
      );
    },
  },

  bgcolorDark: {
    saturation: (saturation, brightness) => {
      let m: number;
      let b: number;

      if (brightness < 0) {
        m = 0.0621936274509804;
        b = 16.7843137254901933;
      } else {
        m =
          2.9674493799022856e-11 * brightness ** 4 +
          -1.9381248873043820e-08 * brightness ** 3 +
          5.0021152870328166e-06 * brightness ** 2 +
          -7.5117123672386026e-04 * brightness +
          6.2193627450980539e-02;

        b =
          4.6748741000306488e-09 * brightness ** 4 +
          -3.5903033088235383e-06 * brightness ** 3 +
          1.1201746323529457e-03 * brightness ** 2 +
          -1.9546568627451041e-01 * brightness +
          1.6784313725490222e+01;
      }

      return m * saturation + b;
    },

    brightness: (brightness) => {
      return (
        -6.2696879206140124e-09 * brightness ** 4 +
        -1.5582913666764623e-08 * brightness ** 3 +
        7.2504180708741844e-04 * brightness ** 2 +
        1.9633374183006552e-01 * brightness +
        2.9411764705882348e+01
      );
    },
  },

  bgcolorDarkest: {
    saturation: (saturation, brightness) => {
      let m: number;
      let b: number;

      if (brightness < 0) {
        m = 0.0756740196078431;
        b = 20.7843137254901933;
      } else {
        m =
          2.5109187060711774e-11 * brightness ** 4 +
          -1.9965608135547727e-08 * brightness ** 3 +
          6.1053855746400693e-06 * brightness ** 2 +
          -9.7137650633170489e-04 * brightness +
          7.5674019607843285e-02;

        b =
          1.0323680304234411e-08 * brightness ** 4 +
          -7.3551352507149177e-06 * brightness ** 3 +
          2.0257289113562219e-03 * brightness ** 2 +
          -2.9095179738562232e-01 * brightness +
          2.0784313725490236e+01;
      }

      return m * saturation + b;
    },

    brightness: (brightness) => {
      return (
        -7.8523275898952311e-09 * brightness ** 4 +
        4.6748741000311699e-08 * brightness ** 3 +
        9.1851926317402068e-04 * brightness ** 2 +
        1.9224877450980427e-01 * brightness +
        2.3529411764705877e+01
      );
    },
  },
};
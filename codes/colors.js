// classes = ['NSCLC-Lapidic', 'NSCLC-Benign', 'NSCLC-Acinar', 'NSCLC-Micropapillary', 'NSCLC-Papillary']
// colors = [(255, 0, 0), (255, 127, 0), (0, 0, 255), (255, 255, 255), (139, 0, 255)]
// color_codes = {'NSCLC-Micropapillary': (255, 255, 255)}

let color_codes = {
  'NSCLC-Lapidic': rgb(255, 0, 0),
  'NSCLC-Benign': rgb(255, 127, 0),
  'NSCLC-Adeno CA (all)': rgb(255, 255, 0),
  'NSCLC-Solid': rgb(0, 255, 0),
  'NSCLC-Acinar': rgb(0, 0, 255),
  'NSCLC-Micropapillary': rgb(255, 255, 255)
}

let camic = [{ color: 'rgba(216, 63, 42, 255)', low: 201, hi: 255 },
  { color: 'rgba(246, 173, 96, 255)', low: 151, hi: 200 },
  { color: 'rgba(254, 251, 191, 255)', low: 101, hi: 150 },
  { color: 'rgba(171, 221, 164, 255)', low: 51, hi: 100 },
  { color: 'rgba(44, 131, 186, 255)', low: 0, hi: 50 }]

let rainbow = [{ color: 'rgba(255, 0, 0, 255)', low: 201, hi: 255 },
  { color: 'rgba(255, 153, 0, 255)', low: 171, hi: 200 },
  { color: 'rgba(255, 255, 0, 255)', low: 141, hi: 170 },
  { color: 'rgba(1, 185, 245, 255)', low: 101, hi: 140 },
  { color: 'rgba(0, 0, 255, 255)', low: 76, hi: 100 },
  { color: 'rgba(135, 19, 172, 255)', low: 31, hi: 75 },
  { color: 'rgba(255, 255, 255, 0)', low: 0, hi: 30 }]

let ruler = "#bcf466";
let ruler1 = "rgba(188, 244, 102, 1)";

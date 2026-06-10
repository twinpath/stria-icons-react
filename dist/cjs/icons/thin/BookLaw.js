var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var BookLaw_exports = {};
__export(BookLaw_exports, {
  default: () => BookLaw_default
});
module.exports = __toCommonJS(BookLaw_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookLawThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M286.398 257.289C303.91 250.039 315.586 237.996 318.859 221.957C327.828 177.531 282.133 166.363 241.844 156.506L232.352 154.164C191.594 143.932 171.828 134.264 176.758 109.832C181.352 87.104 213.613 75.764 257.273 81.527C266.422 82.762 277.355 85.293 291.691 89.51C295.937 90.76 300.375 88.338 301.625 84.105C302.84 79.855 300.437 75.42 296.187 74.17C281.07 69.719 269.359 67.016 259.398 65.688C206.18 58.502 167.578 74.639 161.082 106.662C155.422 134.676 172.863 149.625 193.617 158.686C176.039 165.936 164.344 178.002 161.082 194.059C152.211 237.938 199.965 249.918 228.477 257.088L238.035 259.447C282.258 270.256 308.711 278.801 303.184 306.184C298.563 328.928 266.051 340.283 222.641 334.473C208.367 332.645 192.094 327.631 177.727 323.211L170.328 320.945C165.953 319.664 161.613 322.086 160.363 326.287C159.082 330.521 161.488 334.973 165.703 336.254L173.043 338.504C188.004 343.111 204.961 348.328 220.547 350.328C228.914 351.453 236.914 352 244.5 352C285.133 352 313.398 336.332 318.859 309.355C324.453 281.641 308.766 266.873 286.398 257.289ZM241.844 243.904L232.352 241.561C191.625 231.33 171.828 221.66 176.758 197.23C180.789 177.311 201.664 171.328 220.828 167.707C223.438 168.389 226.098 169.092 228.477 169.691L238.035 172.049C282.258 182.859 308.711 191.404 303.184 218.787C299.086 238.838 277.891 244.758 259.117 248.305C253.359 246.764 247.562 245.303 241.844 243.904ZM448 384.006V32C448 14.328 433.672 0 416 0H64C28.656 0 0 28.652 0 64V455.99C0 486.918 25.07 511.992 56 511.992L439.992 512C444.414 512.004 448 508.418 448 504C448 499.578 444.414 495.992 439.992 495.992H416V416.006C433.672 416.006 448 401.678 448 384.006ZM400 495.992H56C32.625 495.992 13.875 475.85 16.195 452.006C18.211 431.225 36.891 415.99 57.77 415.99L400 416.006V495.992ZM56 399.994C40.324 399.994 26.176 406.51 16 416.928V64C16 37.531 37.531 16 64 16H416C424.836 16 432 23.164 432 32V384.006C432 392.83 424.82 400.006 416 400.006L56 399.994Z" })
  }
));
BookLawThin.displayName = "BookLawThin";
var BookLaw_default = BookLawThin;

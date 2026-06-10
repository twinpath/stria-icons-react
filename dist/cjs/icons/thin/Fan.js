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
var Fan_exports = {};
__export(Fan_exports, {
  default: () => Fan_default
});
module.exports = __toCommonJS(Fan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FanThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M349.611 123.99C326.392 123.99 304.407 127.022 284.078 133.022L294.829 26.019C295.594 18.956 293.11 11.987 288.016 6.956C282.719 1.737 275.485 -0.7 267.953 0.175C185.89 10.456 123.998 80.208 123.998 162.397C123.998 185.554 127.03 207.524 133.03 227.899L26.044 217.149C18.762 216.524 11.981 218.899 6.965 223.993C1.747 229.274 -0.722 236.556 0.184 244.024C10.465 326.089 80.201 387.997 162.389 387.997C185.546 387.997 207.531 384.966 227.922 378.965L217.171 485.937C216.406 493 218.89 499.937 224 505C228.593 509.531 234.672 512 241.047 512C242.047 512 243.047 511.938 244.047 511.812C326.11 501.531 388.002 431.779 388.002 349.59C388.002 326.402 384.97 304.432 378.97 284.057L485.941 294.838C493.05 295.338 500.003 293.088 505.035 287.994C510.253 282.713 512.722 275.432 511.816 267.963C501.535 185.898 431.799 123.99 349.611 123.99ZM493.644 276.775C492.722 277.713 490.738 279.213 487.597 278.9L355.658 265.619L360.017 277.619C367.97 299.463 372.002 323.683 372.002 349.59C372.002 423.717 316.141 486.656 242.078 495.937C239.781 496.218 237.062 495.406 235.25 493.593C234.297 492.656 232.75 490.656 233.078 487.624L246.344 355.652L234.375 359.996C212.484 367.965 188.265 371.996 162.389 371.996C88.263 371.996 25.341 316.12 16.059 242.056C15.747 239.493 16.591 237.024 18.356 235.212C19.294 234.274 21.137 232.805 24.388 233.087L156.342 246.306L151.983 234.337C144.03 212.492 139.998 188.273 139.998 162.397C139.998 88.271 195.859 25.331 269.922 16.05C272.406 15.769 274.969 16.581 276.766 18.363C277.719 19.3 279.25 21.3 278.922 24.363L265.656 156.335L277.625 151.991C299.438 144.022 323.657 139.991 349.611 139.991C423.737 139.991 486.659 195.867 495.941 269.931C496.253 272.463 495.409 274.963 493.644 276.775ZM256 215.993C233.937 215.993 215.999 233.93 215.999 255.994S233.937 295.995 256 295.995S296.001 278.057 296.001 255.994S278.063 215.993 256 215.993ZM256 279.994C242.765 279.994 232 269.213 232 255.994C232 242.774 242.765 231.993 256 231.993S280 242.774 280 255.994C280 269.213 269.235 279.994 256 279.994Z" })
  }
));
FanThin.displayName = "FanThin";
var Fan_default = FanThin;

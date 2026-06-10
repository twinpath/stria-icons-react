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
var CommentsDollar_exports = {};
__export(CommentsDollar_exports, {
  default: () => CommentsDollar_default
});
module.exports = __toCommonJS(CommentsDollar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentsDollarRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M212.715 159.5L207.961 158.133C187.645 152.16 188.127 149.4 188.784 145.57C189.961 138.875 203.006 137.24 214.725 139.035C219.52 139.758 224.784 141.445 229.805 143.188C238.711 146.268 248.514 141.525 251.621 132.607C254.729 123.66 250.002 113.883 241.055 110.775C234.868 108.646 229.819 107.281 225.145 106.256V97.143C225.145 87.688 217.471 80 208.002 80S190.858 87.688 190.858 97.143V105.707C171.639 109.795 158.123 121.785 155.006 139.732C148.659 176.455 183.452 186.66 198.305 191.025L203.287 192.473C228.385 199.65 227.971 202.062 227.221 206.428C226.041 213.125 212.996 214.785 201.239 212.963C195.291 212.08 187.684 209.348 180.961 206.937L177.131 205.545C168.211 202.463 158.42 207.098 155.26 216.018C152.114 224.938 156.787 234.74 165.721 237.9L169.377 239.188C176.026 241.578 183.416 243.979 190.858 245.625V254.857C190.858 264.312 198.534 272 208.002 272S225.145 264.312 225.145 254.857V246.068C244.311 241.959 257.891 230.187 260.996 212.268C267.412 175.17 231.827 164.963 212.715 159.5ZM599.594 443.736C624.828 413.945 640 376.635 640 336C640 238.797 554.039 160 448 160C447.686 160 447.381 160.041 447.067 160.043C447.534 165.328 448 170.613 448 176C448 274.617 368.321 357.248 261.879 378.523C282.659 455.143 357.987 512 448 512C481.694 512 513.323 503.992 540.848 490.018C565.244 502.02 596.086 512 632.34 512C635.399 512 638.1 510.275 639.36 507.395C640.588 504.516 640.018 501.246 637.918 499.041C637.567 498.689 615.868 475.266 599.594 443.736ZM416 176C416 78.797 322.875 0 208 0S0 78.797 0 176C0 217.627 17.176 255.812 45.729 285.947C29.385 317.377 7.26 341.516 6.739 341.906C-0.007 349.057 -1.896 359.715 2.018 368.889C5.93 378.062 14.969 384 24.952 384C79.129 384 123.268 364.764 153.942 345.783C171.207 349.711 189.268 352 208 352C322.875 352 416 273.201 416 176ZM208 304C193.84 304 179.235 302.311 164.59 298.979L145.411 294.617L128.686 304.965C111.686 315.484 94.262 323.355 76.547 328.537C80.731 321.869 84.739 314.971 88.315 308.092L104.09 277.754L80.573 252.934C65.713 237.25 48 211.174 48 176C48 105.42 119.776 48 208 48S368 105.42 368 176S296.225 304 208 304Z" })
  }
));
CommentsDollarRegular.displayName = "CommentsDollarRegular";
var CommentsDollar_default = CommentsDollarRegular;

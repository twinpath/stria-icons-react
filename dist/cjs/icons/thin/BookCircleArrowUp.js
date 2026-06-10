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
var BookCircleArrowUp_exports = {};
__export(BookCircleArrowUp_exports, {
  default: () => BookCircleArrowUp_default
});
module.exports = __toCommonJS(BookCircleArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookCircleArrowUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 495.994H56C32.625 495.994 13.875 475.85 16.195 452.004C18.219 431.221 36.898 415.99 57.781 415.992L312 416C316.418 416.002 320 412.42 320 408.002S316.418 400.004 312 400.002L56 399.996C40.324 399.996 26.176 406.512 16 416.93V64C16 37.49 37.492 16 64 16H416C424.836 16 432 23.162 432 32V184.002C432 188.418 435.582 192 440 192S448 188.418 448 184.002V32C448 14.326 433.672 0 416 0H64C28.656 0 0 28.654 0 64V455.992C0 486.92 25.07 511.994 56 511.994L360 512C364.418 512 368 508.418 368 504V503.992C368 499.574 364.418 495.994 360 495.994ZM496 224C416.461 224 352 288.463 352 367.998C352 447.537 416.461 512 496 512S640 447.537 640 367.998C640 288.463 575.539 224 496 224ZM496 496C425.422 496 368 438.578 368 367.998C368 297.42 425.422 240 496 240S624 297.42 624 367.998C624 438.578 566.578 496 496 496ZM501.656 290.344C498.531 287.219 493.469 287.219 490.344 290.344L426.344 354.344C423.219 357.469 423.219 362.531 426.344 365.656S434.531 368.781 437.656 365.656L488 315.312V439.996C488 444.402 491.578 447.996 496 447.996S504 444.402 504 439.996V315.312L554.344 365.656C557.469 368.781 562.531 368.781 565.656 365.656C567.219 364.094 568 362.062 568 360S567.219 355.906 565.656 354.344L501.656 290.344Z" })
  }
));
BookCircleArrowUpThin.displayName = "BookCircleArrowUpThin";
var BookCircleArrowUp_default = BookCircleArrowUpThin;

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
var Socks_exports = {};
__export(Socks_exports, {
  default: () => Socks_default
});
module.exports = __toCommonJS(Socks_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SocksRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H352C316.655 0 288 28.654 288 64V260.312L236.25 310.312C192.531 345.188 179.188 407.656 205.219 455.594C224.36 490.906 258.828 512 297.406 512C320.735 512 342.844 504.156 361.344 489.312L459.328 411.062C492.313 384.781 512 343.062 512 299.5V64C512 28.654 483.348 0 448 0ZM464 299.5C464 328.596 451.072 356.268 429.375 373.555L331.305 451.873C321.278 459.92 309.871 464 297.406 464C276.414 464 258.194 452.6 247.401 432.688C232.557 405.352 240.807 368.08 266.184 347.836L267.965 346.416L269.604 344.832L321.354 294.832L336 280.68V144H464V299.5ZM464 96H336V64C336 55.178 343.178 48 352 48H448C456.822 48 464 55.178 464 64V96ZM163.631 432.473L139.338 451.873C129.311 459.92 117.905 464 105.44 464C84.447 464 66.227 452.6 55.434 432.688C40.59 405.352 48.84 368.08 74.217 347.836L75.998 346.416L77.637 344.832L129.387 294.832L144.033 280.68V144H256V96H144.033V64C144.033 55.178 151.211 48 160.033 48H256.033C256.584 48 257.051 48.26 257.586 48.314C260.352 31.648 267.467 16.613 277.66 4.01C270.877 1.561 263.662 0 256.033 0H160.033C124.688 0 96.033 28.654 96.033 64V260.312L44.283 310.312C0.565 345.188 -12.779 407.656 13.252 455.594C32.393 490.906 66.862 512 105.44 512C128.768 512 150.877 504.156 169.377 489.312L182.229 479.049C180.51 476.314 178.643 473.727 177.078 470.844C170.467 458.67 166.379 445.678 163.631 432.473Z" })
  }
));
SocksRegular.displayName = "SocksRegular";
var Socks_default = SocksRegular;

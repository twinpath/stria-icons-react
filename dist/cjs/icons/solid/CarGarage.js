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
var CarGarage_exports = {};
__export(CarGarage_exports, {
  default: () => CarGarage_default
});
module.exports = __toCommonJS(CarGarage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarGarageSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M639.99 182.24C639.99 176.605 637.031 171.148 631.745 168.25L331.62 3C327.995 1 323.995 0 319.995 0S311.995 1 308.37 3L8.245 168.25C2.96 171.148 0 176.605 0 182.24C0 184.868 0.644 187.535 1.995 190L9.745 204C12.729 209.285 18.212 212.245 23.857 212.245C26.489 212.245 29.156 211.602 31.62 210.25L319.995 51.5L608.37 210.25C610.835 211.602 613.502 212.245 616.134 212.245C621.778 212.245 627.262 209.285 630.245 204L637.995 190C639.347 187.535 639.99 184.868 639.99 182.24ZM510.507 293.551L483.773 213.334C473.155 181.482 443.351 160 409.776 160H230.21C196.636 160 166.827 181.486 156.21 213.34L129.476 293.551C109.929 301.029 95.991 319.826 95.991 342V480C95.991 497.672 110.319 512 127.991 512H143.991C161.663 512 175.991 497.672 175.991 480V447H463.991V480C463.991 497.672 478.319 512 495.991 512H511.991C529.663 512 543.991 497.672 543.991 480V342C543.991 319.826 530.054 301.029 510.507 293.551ZM216.925 233.576C218.835 227.848 224.175 224 230.21 224H409.776C415.812 224 421.148 227.846 423.054 233.57L441.194 288H198.788L216.925 233.576ZM175.991 392C162.737 392 151.991 381.254 151.991 368C151.991 354.744 162.737 344 175.991 344S199.991 354.744 199.991 368C199.991 381.254 189.245 392 175.991 392ZM463.991 392C450.737 392 439.991 381.254 439.991 368C439.991 354.744 450.737 344 463.991 344S487.991 354.744 487.991 368C487.991 381.254 477.245 392 463.991 392Z " })
  }
));
CarGarageSolid.displayName = "CarGarageSolid";
var CarGarage_default = CarGarageSolid;

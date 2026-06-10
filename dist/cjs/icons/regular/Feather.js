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
var Feather_exports = {};
__export(Feather_exports, {
  default: () => Feather_default
});
module.exports = __toCommonJS(Feather_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FeatherRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M467.12 44.872C438.247 15.999 401.625 0 361.628 0C314.882 0 263.636 21.874 214.765 70.621L129.021 156.365C54.027 231.486 56.777 352.853 72.776 405.35L7.031 470.971C-2.344 480.346 -2.344 495.595 7.031 504.969C16.405 514.344 31.654 514.344 41.028 504.969L106.648 439.348C124.022 444.598 149.02 448.473 177.518 448.473C234.638 448.473 305.508 432.974 355.629 382.977L441.372 297.232C531.99 206.612 529.615 107.493 467.12 44.872ZM147.395 398.601L194.016 351.979H318.007C273.51 393.851 211.265 400.476 177.518 400.476C166.018 400.476 156.144 399.601 147.395 398.601ZM350.629 319.98H226.014L290.009 255.984H413.749C411.5 258.359 409.75 260.859 407.375 263.234L350.629 319.98ZM438.872 223.986H322.006L344.505 201.488C353.879 192.113 353.879 176.864 344.505 167.49C335.13 158.115 319.882 158.115 310.507 167.49L113.522 364.478C108.273 318.606 113.272 240.235 163.019 190.363C163.019 190.363 181.767 171.74 248.762 104.619C285.759 67.621 324.756 47.997 361.628 47.997C388.251 47.997 412.999 58.746 433.123 78.87C472.245 117.993 473.12 171.115 438.872 223.986Z" })
  }
));
FeatherRegular.displayName = "FeatherRegular";
var Feather_default = FeatherRegular;

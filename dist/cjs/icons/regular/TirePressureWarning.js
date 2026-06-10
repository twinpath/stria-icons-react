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
var TirePressureWarning_exports = {};
__export(TirePressureWarning_exports, {
  default: () => TirePressureWarning_default
});
module.exports = __toCommonJS(TirePressureWarning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TirePressureWarningRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.997 352C273.622 352 287.997 337.75 287.997 320C287.997 302.375 273.622 288 255.997 288S223.997 302.375 223.997 320C223.997 337.75 238.372 352 255.997 352ZM504.122 215.75C498.122 187.125 484.622 160.875 469.872 135.75C455.622 111.25 447.997 84.875 447.997 59.5V24C447.997 10.744 437.253 0 423.997 0C410.743 0 399.997 10.744 399.997 24V59.5C399.997 148.5 455.622 172 463.247 265.625C467.872 324.625 452.122 370.875 409.997 419C402.497 427.375 391.497 432 380.247 432H131.747C119.995 432 108.847 426.746 101.13 417.881C59.657 370.236 44.156 324.217 48.747 265.625C56.247 173.75 111.997 147.125 111.997 59.5V24C111.997 10.744 101.253 0 87.997 0C74.743 0 63.997 10.744 63.997 24V59.5C63.997 84.875 56.497 111.25 42.122 135.75C27.372 160.875 13.872 187.125 7.872 215.625C-11.878 309 4.872 380.75 65.622 450.125C69.872 455.125 74.747 459.375 79.997 463.25V496C79.997 504.836 87.161 512 95.997 512H127.997C136.835 512 143.997 504.836 143.997 496V480H175.997V496C175.997 504.836 183.161 512 191.997 512H223.997C232.835 512 239.997 504.836 239.997 496V480H271.997V496C271.997 504.836 279.161 512 287.997 512H319.997C328.835 512 335.997 504.836 335.997 496V480H367.997V496C367.997 504.836 375.161 512 383.997 512H415.997C424.835 512 431.997 504.836 431.997 496V463.25C437.247 459.375 442.122 455.125 446.372 450.25C507.122 380.75 523.872 309 504.122 215.75ZM255.995 256C269.245 256 279.995 245.25 279.995 232V96C279.995 82.75 269.245 72 255.995 72S231.995 82.75 231.995 96V232C231.995 245.25 242.745 256 255.995 256Z" })
  }
));
TirePressureWarningRegular.displayName = "TirePressureWarningRegular";
var TirePressureWarning_default = TirePressureWarningRegular;

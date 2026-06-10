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
var Sleigh_exports = {};
__export(Sleigh_exports, {
  default: () => Sleigh_default
});
module.exports = __toCommonJS(Sleigh_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SleighSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M612.75 350.75L603.375 343.25C596.5 337.75 586.375 338.875 580.875 345.75L570.875 358.25C565.375 365.25 566.5 375.25 573.375 380.75L582.75 388.25C588.625 392.875 591.875 399.875 591.875 407.375C591.875 421 580.875 432 567.25 432H48C39.25 432 32 439.25 32 448V464C32 472.75 39.25 480 48 480H564C603 480 637.75 450.75 639.875 411.75C641.25 387.875 631.25 365.375 612.75 350.75ZM32 224C32 283.625 72.875 333.25 128 347.5V400H192V352H384V400H448V352C501 352 544 309 544 256V160C561.75 160 576 145.75 576 128S561.75 96 544 96H448V160C448 195.25 419.25 224 384 224H363.25C297.5 224 237.375 186.75 208 128S118.375 32 52.75 32H32C14.25 32 0 46.25 0 64S14.25 96 32 96V224Z" })
  }
));
SleighSolid.displayName = "SleighSolid";
var Sleigh_default = SleighSolid;

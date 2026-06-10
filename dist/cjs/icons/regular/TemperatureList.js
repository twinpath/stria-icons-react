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
var TemperatureList_exports = {};
__export(TemperatureList_exports, {
  default: () => TemperatureList_default
});
module.exports = __toCommonJS(TemperatureList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureListRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 112C256 50.125 205.875 0 144 0S32 50.125 32 112V278.5C12.25 303.125 0 334 0 368C0 447.5 64.5 512 144 512S288 447.5 288 368C288 334 275.75 303.125 256 278.5V112ZM144 464C91.125 464 48 420.875 48 368C48 341 59.75 320.75 69.5 308.5L80 295.375V112C80 76.75 108.75 48 144 48S208 76.75 208 112V295.25L218.5 308.375C228.25 320.75 240 341 240 368C240 420.875 196.875 464 144 464ZM160 322.875V160C160 151.25 152.75 144 144 144S128 151.25 128 160V322.875C109.375 329.5 96 347.125 96 368C96 394.5 117.5 416 144 416S192 394.5 192 368C192 347.125 178.625 329.5 160 322.875ZM488 32H344C330.745 32 320 42.745 320 56V56C320 69.255 330.745 80 344 80H488C501.255 80 512 69.255 512 56V56C512 42.745 501.255 32 488 32ZM488 288H376C362.745 288 352 298.745 352 312V312C352 325.255 362.745 336 376 336H488C501.255 336 512 325.255 512 312V312C512 298.745 501.255 288 488 288ZM488 160H344C330.745 160 320 170.745 320 184V184C320 197.255 330.745 208 344 208H488C501.255 208 512 197.255 512 184V184C512 170.745 501.255 160 488 160Z" })
  }
));
TemperatureListRegular.displayName = "TemperatureListRegular";
var TemperatureList_default = TemperatureListRegular;

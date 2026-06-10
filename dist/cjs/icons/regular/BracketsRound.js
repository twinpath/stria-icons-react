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
var BracketsRound_exports = {};
__export(BracketsRound_exports, {
  default: () => BracketsRound_default
});
module.exports = __toCommonJS(BracketsRound_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketsRoundRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M148.281 76.623C159.656 69.81 163.406 55.091 156.625 43.716C149.844 32.372 135.125 28.591 123.719 35.372C118.688 38.373 0 110.686 0 255.999S118.688 473.626 123.719 476.626C127.562 478.907 131.781 480.001 135.937 480.001C144.094 480.001 152.062 475.813 156.562 468.313C163.344 456.969 159.656 442.25 148.344 435.407C144.25 432.938 48 373.5 48 255.999C48 138.873 143.656 79.435 148.281 76.623ZM388.281 35.372C376.906 28.591 362.25 32.372 355.438 43.685C348.656 55.029 352.344 69.748 363.656 76.592C367.75 79.06 464 138.498 464 255.999S367.75 432.938 363.719 435.375C352.344 442.157 348.594 456.876 355.375 468.282C359.875 475.813 367.844 480.001 376.031 480.001C380.187 480.001 384.437 478.907 388.281 476.626C393.312 473.626 512 401.313 512 255.999S393.312 38.373 388.281 35.372Z" })
  }
));
BracketsRoundRegular.displayName = "BracketsRoundRegular";
var BracketsRound_default = BracketsRoundRegular;

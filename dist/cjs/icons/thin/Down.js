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
var Down_exports = {};
__export(Down_exports, {
  default: () => Down_default
});
module.exports = __toCommonJS(Down_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 64V256H32C19.062 256 7.391 263.797 2.438 275.75C0.797 279.713 0 283.873 0 287.996C0 296.322 3.25 304.502 9.375 310.625L169.375 470.625C175.625 476.875 183.812 480 192 480S208.375 476.875 214.625 470.625L374.625 310.625C380.748 304.502 384 296.322 384 287.996C384 283.873 383.203 279.715 381.562 275.75C376.609 263.797 364.938 256 352 256H256V64C256 46.326 241.674 32 224 32H160C142.328 32 128 46.326 128 64ZM224 48C232.822 48 240 55.178 240 64V272H352C358.492 272 364.295 275.877 366.777 281.867C367.588 283.826 368 285.889 368 287.996C368 292.27 366.334 296.287 363.311 299.311L203.311 459.311C200.287 462.334 196.27 464 192 464C187.729 464 183.711 462.334 180.688 459.311L20.688 299.311C17.664 296.287 16 292.27 16 287.996C16 285.889 16.41 283.826 17.219 281.875C19.705 275.877 25.506 272 32 272H144V64C144 55.178 151.178 48 160 48H224Z" })
  }
));
DownThin.displayName = "DownThin";
var Down_default = DownThin;

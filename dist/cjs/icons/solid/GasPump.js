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
var GasPump_exports = {};
__export(GasPump_exports, {
  default: () => GasPump_default
});
module.exports = __toCommonJS(GasPump_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GasPumpSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 448H16C7.25 448 0 455.25 0 464V496C0 504.75 7.25 512 16 512H336C344.75 512 352 504.75 352 496V464C352 455.25 344.75 448 336 448ZM493.25 107.25L412.25 26.25C406 20.125 395.75 20.125 389.625 26.25L378.25 37.625C372.125 43.75 372.125 54.001 378.25 60.25L416 97.875V160C416 188.125 436.875 211.25 464 215.25V376C464 389.25 453.25 400 440 400C426.75 400 416 389.25 416 376V344C416 295.375 376.625 256 328 256H320V64C320 28.75 291.25 0 256 0H96C60.75 0 32 28.75 32 64V416H320V304H328C350.125 304 368 321.875 368 344V371.75C368 409.5 395 443.75 432.5 447.75C475.5 452 512 418.25 512 376V152.625C512 135.625 505.25 119.25 493.25 107.25ZM256 192H96V64H256V192Z" })
  }
));
GasPumpSolid.displayName = "GasPumpSolid";
var GasPump_default = GasPumpSolid;

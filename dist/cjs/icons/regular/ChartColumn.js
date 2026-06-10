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
var ChartColumn_exports = {};
__export(ChartColumn_exports, {
  default: () => ChartColumn_default
});
module.exports = __toCommonJS(ChartColumn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartColumnRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 432H48V56C48 42.744 37.254 32 24 32S0 42.744 0 56V448C0 465.6 14.4 480 32 480H488C501.254 480 512 469.254 512 456C512 442.744 501.254 432 488 432ZM168 352C181.25 352 192 341.25 192 328V280C192 266.75 181.25 256 168 256S144 266.75 144 280V328C144 341.25 154.75 352 168 352ZM264 352C277.25 352 288 341.25 288 328V152C288 138.75 277.25 128 264 128S240 138.75 240 152V328C240 341.25 250.75 352 264 352ZM360 352C373.25 352 384 341.25 384 328V216C384 202.75 373.25 192 360 192S336 202.75 336 216V328C336 341.25 346.75 352 360 352ZM456 352C469.25 352 480 341.25 480 328V120C480 106.75 469.25 96 456 96S432 106.75 432 120V328C432 341.25 442.75 352 456 352Z" })
  }
));
ChartColumnRegular.displayName = "ChartColumnRegular";
var ChartColumn_default = ChartColumnRegular;

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
var ChairOffice_exports = {};
__export(ChairOffice_exports, {
  default: () => ChairOffice_default
});
module.exports = __toCommonJS(ChairOffice_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChairOfficeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 224V160C64 142.375 49.625 128 32 128S0 142.375 0 160V224C0 241.625 14.375 256 32 256S64 241.625 64 224ZM352 64C352 28.625 323.375 0 288 0H160C124.625 0 96 28.625 96 64V256H352V64ZM416 128C398.375 128 384 142.375 384 160V224C384 241.625 398.375 256 416 256S448 241.625 448 224V160C448 142.375 433.625 128 416 128ZM403.625 309.875C399.375 296.75 387.125 288 373.25 288H74.75C60.875 288 48.75 296.75 44.375 309.875L33.625 341.875C26.75 362.625 42.125 384 64 384H192V451.375C163.75 457.375 141 471 130.125 488.625C123.75 498.875 132.5 512 145.125 512H302.875C315.5 512 324.25 498.875 317.875 488.625C307 471 284.25 457.375 256 451.375V384H384C405.75 384 421.25 362.625 414.375 341.875L403.625 309.875Z" })
  }
));
ChairOfficeSolid.displayName = "ChairOfficeSolid";
var ChairOffice_default = ChairOfficeSolid;

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
var Bug_exports = {};
__export(Bug_exports, {
  default: () => Bug_default
});
module.exports = __toCommonJS(Bug_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BugRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 264H400V196.807L471.188 138.562C481.469 130.187 482.969 115.062 474.563 104.812C466.188 94.5 451.031 93.031 440.813 101.437L369.236 160H142.764L71.188 101.438C61.031 93.062 45.812 94.5 37.438 104.812C29.031 115.062 30.531 130.188 40.812 138.562L112 196.807V264H24C10.75 264 0 274.75 0 288S10.75 312 24 312H112V336C112 354.375 115.783 371.807 122.084 387.979L39.031 471.031C29.656 480.406 29.656 495.594 39.031 504.969C43.719 509.656 49.844 512 56 512S68.281 509.656 72.969 504.969L147.863 430.074C174.281 460.404 212.711 480 256 480S337.719 460.404 364.137 430.074L439.031 504.969C443.719 509.656 449.844 512 456 512S468.281 509.656 472.969 504.969C482.344 495.594 482.344 480.406 472.969 471.031L389.916 387.979C396.217 371.807 400 354.375 400 336V312H488C501.25 312 512 301.25 512 288S501.25 264 488 264ZM352 336C352 380.602 321.289 417.859 280 428.592V280C280 266.75 269.25 256 256 256S232 266.75 232 280V428.592C190.711 417.859 160 380.602 160 336V209.186C160.48 208.74 161.07 208.49 161.52 208H350.48C350.93 208.49 351.52 208.74 352 209.186V336ZM184 128C197.25 128 208 117.25 208 104V96C208 69.531 229.531 48 256 48S304 69.531 304 96V104C304 117.25 314.75 128 328 128S352 117.25 352 104V96C352 43.062 308.938 0 256 0S160 43.062 160 96V104C160 117.25 170.75 128 184 128Z" })
  }
));
BugRegular.displayName = "BugRegular";
var Bug_default = BugRegular;

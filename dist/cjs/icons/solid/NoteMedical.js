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
var NoteMedical_exports = {};
__export(NoteMedical_exports, {
  default: () => NoteMedical_default
});
module.exports = __toCommonJS(NoteMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NoteMedicalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 480L448 352H320V480ZM400 32H48C21.49 32 0 53.492 0 80V432C0 458.508 21.49 480 48 480H288V352C288 334.328 302.326 320 320 320H448V80C448 53.492 426.51 32 400 32ZM320 248C320 252.375 316.375 256 312 256H256V312C256 316.375 252.375 320 248 320H200C195.625 320 192 316.375 192 312V256H136C131.625 256 128 252.375 128 248V200C128 195.625 131.625 192 136 192H192V136C192 131.625 195.625 128 200 128H248C252.375 128 256 131.625 256 136V192H312C316.375 192 320 195.625 320 200V248Z" })
  }
));
NoteMedicalSolid.displayName = "NoteMedicalSolid";
var NoteMedical_default = NoteMedicalSolid;

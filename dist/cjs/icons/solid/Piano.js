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
var Piano_exports = {};
__export(Piano_exports, {
  default: () => Piano_default
});
module.exports = __toCommonJS(Piano_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PianoSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M476.625 270.25L419.375 241.75C397.75 230.875 384 208.75 384 184.5C384 82.625 301.5 0 199.5 0H184.5C82.5 0 0 82.625 0 184.5V480C0 497.625 14.375 512 32 512H480C497.625 512 512 497.625 512 480V327.5C512 303.25 498.25 281.125 476.625 270.25ZM448 448H64V352H96V408C96 412.375 99.625 416 104 416H120C124.375 416 128 412.375 128 408V352H160V408C160 412.375 163.625 416 168 416H184C188.375 416 192 412.375 192 408V352H224V408C224 412.375 227.625 416 232 416H248C252.375 416 256 412.375 256 408V352H320V408C320 412.375 323.625 416 328 416H344C348.375 416 352 412.375 352 408V352H384V408C384 412.375 387.625 416 392 416H408C412.375 416 416 412.375 416 408V352H448V448Z" })
  }
));
PianoSolid.displayName = "PianoSolid";
var Piano_default = PianoSolid;

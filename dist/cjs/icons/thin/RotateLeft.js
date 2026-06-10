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
var RotateLeft_exports = {};
__export(RotateLeft_exports, {
  default: () => RotateLeft_default
});
module.exports = __toCommonJS(RotateLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RotateLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 56.656V199.375C0 212.953 11.031 224 24.625 224H167.344C177.5 224 186.219 218.172 190.094 208.797S191.938 189.141 184.75 181.969L114.572 111.791L117.406 108.375C198.094 27.812 330.031 27.875 411.094 108.922C492.188 190.016 492.188 321.969 411.094 403.094C329.969 484.156 198.031 484.125 116.906 403.094C113.75 399.937 108.688 400 105.594 403.094C102.469 406.219 102.469 411.281 105.594 414.406C149.281 458.062 206.625 479.906 264 479.906S378.719 458.062 422.406 414.406C509.719 327.062 509.719 184.937 422.406 97.609C335.031 10.266 192.969 10.266 105.594 97.609L103.227 100.445L42.031 39.25C34.844 32.094 24.625 30.047 15.188 33.906C5.812 37.797 0 46.516 0 56.656ZM16 56.656C16 51.312 20.062 49.203 21.312 48.688C21.906 48.453 23.188 48.016 24.781 48.016C26.562 48.016 28.719 48.562 30.719 50.562L173.437 193.281C177.219 197.062 175.812 201.437 175.312 202.687C174.781 203.922 172.688 208 167.344 208H24.625C19.875 208 16 204.125 16 199.375V56.656Z" })
  }
));
RotateLeftThin.displayName = "RotateLeftThin";
var RotateLeft_default = RotateLeftThin;

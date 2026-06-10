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
var Lamp_exports = {};
__export(Lamp_exports, {
  default: () => Lamp_default
});
module.exports = __toCommonJS(Lamp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LampLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M445.484 211.375L367.982 19.375C363.232 7.625 352.357 0 340.355 0H120.597C109.222 0 98.722 6.75 93.597 17.75L3.218 209.75C-6.782 231 7.718 256 30.218 256H208V288H198.109C171.125 288 146.062 301.5 131.031 324.156C109.421 356.656 96 395.188 96 424.656C96 452.156 107.062 478.719 127.109 499.406C134.812 507.406 146.125 512 158.156 512H289.843C301.921 512 313.281 507.375 321.015 499.312C341 478.5 352 451.969 352 424.656C352 395.188 338.609 356.688 317.046 324.188C302.015 301.531 276.937 288 249.937 288H240V256H417.859C439.484 256 454.111 232.5 445.484 211.375ZM249.937 320C266.171 320 281.296 328.188 290.375 341.875C308.375 369 320 401.5 320 424.656C320 443.938 312.375 462.094 297.921 477.156C296.203 478.938 293.187 480 289.843 480H158.156C154.828 480 151.828 478.969 150.109 477.188C135.64 462.25 128 444.094 128 424.656C128 401.5 139.656 369 157.687 341.844C166.765 328.156 181.875 320 198.109 320H249.937ZM31.812 224C31.982 223.9 32.111 223.711 32.171 223.379L122.259 32H338.568L415.486 224H31.812Z" })
  }
));
LampLight.displayName = "LampLight";
var Lamp_default = LampLight;

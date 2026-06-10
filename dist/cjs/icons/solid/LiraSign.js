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
var LiraSign_exports = {};
__export(LiraSign_exports, {
  default: () => LiraSign_default
});
module.exports = __toCommonJS(LiraSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LiraSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 440C320 462.094 302.094 480 280 480H40C24.562 480 10.5 471.125 3.875 457.156C-2.75 443.219 -0.75 426.719 9 414.75C24.062 396.246 34.492 374.711 40.9 352H32C14.312 352 0 337.688 0 320S14.312 288 32 288H48V256H32C14.312 256 0 241.688 0 224S14.312 192 32 192H48V161.438C48 90.062 106.062 32 177.438 32C191.406 32 205.219 34.25 218.5 38.688L292.688 63.5C313.625 70.5 324.938 93.188 317.938 114.125S288.406 146.375 267.313 139.375L193.125 114.562C188.062 112.875 182.781 112 177.438 112C150.188 112 128 134.188 128 161.438V192H224C241.688 192 256 206.312 256 224S241.688 256 224 256H128V288H224C241.688 288 256 302.312 256 320S241.688 352 224 352H123.531C120.428 368.43 115.775 384.525 109.531 400H280C302.094 400 320 417.906 320 440Z" })
  }
));
LiraSignSolid.displayName = "LiraSignSolid";
var LiraSign_default = LiraSignSolid;

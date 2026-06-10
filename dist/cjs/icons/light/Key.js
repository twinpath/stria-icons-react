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
var Key_exports = {};
__export(Key_exports, {
  default: () => Key_default
});
module.exports = __toCommonJS(Key_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KeyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 0C238.875 0 160 78.75 160 176C160 191.25 162 206.375 165.75 221L7 379.75C2.5 384.25 0 390.375 0 396.625V488C0 501.25 10.75 512 24 512H136C149.25 512 160 501.25 160 488V448H200C213.25 448 224 437.25 224 424V384H243.375C249.625 384 255.75 381.5 260.25 377L291 346.25C305.625 350 320.75 352 336 352C433.125 352 512 273.25 512 176C512 78.875 433.25 0 336 0ZM336 320C317 320 298.875 316.375 282.375 309.625L240 352H192V416H128V480H32V400L202.375 229.625C195.625 213.125 192 195 192 176C192 96.5 256.5 32 336 32S480 96.5 480 176S415.5 320 336 320ZM384 104C370.746 104 360 114.744 360 128C360 141.254 370.746 152 384 152S408 141.254 408 128C408 114.744 397.254 104 384 104Z" })
  }
));
KeyLight.displayName = "KeyLight";
var Key_default = KeyLight;

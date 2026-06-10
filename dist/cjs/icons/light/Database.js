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
var Database_exports = {};
__export(Database_exports, {
  default: () => Database_default
});
module.exports = __toCommonJS(Database_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DatabaseLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 0C100.289 0 0 35.816 0 80V432C0 476.182 100.289 512 224 512S448 476.182 448 432V80C448 35.816 347.711 0 224 0ZM224 32C347.008 32 412.088 67.197 416 80L416.016 160.076C364.867 180.164 296.807 192 224 192C151.176 192 83.102 180.158 31.949 160.061L31.936 80.574C35.912 67.197 100.994 32 224 32ZM416.021 193.451L416.045 320.062C364.893 340.16 296.822 352 224 352C151.189 352 83.127 340.162 31.979 320.072L31.957 193.443C85.678 212.521 152.695 224 224 224C295.295 224 362.305 212.523 416.021 193.451ZM224 480C100.996 480 35.914 444.803 32 432L31.986 353.453C85.701 372.525 152.709 384 224 384C295.307 384 362.328 372.521 416.051 353.441L416.064 431.426C412.086 444.803 347.004 480 224 480Z" })
  }
));
DatabaseLight.displayName = "DatabaseLight";
var Database_default = DatabaseLight;

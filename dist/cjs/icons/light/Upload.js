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
var Upload_exports = {};
__export(Upload_exports, {
  default: () => Upload_default
});
module.exports = __toCommonJS(Upload_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UploadLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M122.625 155.953L240 51.627V368C240 376.844 247.156 384 256 384S272 376.844 272 368V51.627L389.375 155.953C392.406 158.672 396.219 160 400 160C404.406 160 408.812 158.188 411.969 154.625C417.844 148.031 417.219 137.906 410.625 132.047L266.625 4.047C260.562 -1.359 251.437 -1.359 245.375 4.047L101.375 132.047C94.781 137.906 94.156 148.031 100.031 154.625S116.062 161.828 122.625 155.953ZM448 320H336C327.164 320 320 327.162 320 336C320 344.836 327.164 352 336 352H448C465.674 352 480 366.326 480 384V448C480 465.672 465.674 480 448 480H64C46.326 480 32 465.672 32 448V384C32 366.326 46.326 352 64 352H176C184.836 352 192 344.836 192 336C192 327.162 184.836 320 176 320H64C28.654 320 0 348.652 0 384V448C0 483.346 28.654 512 64 512H448C483.346 512 512 483.346 512 448V384C512 348.652 483.346 320 448 320ZM440 416C440 402.75 429.25 392 416 392S392 402.75 392 416S402.75 440 416 440S440 429.25 440 416Z" })
  }
));
UploadLight.displayName = "UploadLight";
var Upload_default = UploadLight;

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
var CameraSecurity_exports = {};
__export(CameraSecurity_exports, {
  default: () => CameraSecurity_default
});
module.exports = __toCommonJS(CameraSecurity_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraSecurityRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 0H64C28.654 0 0 28.654 0 64V352C0 387.346 28.654 416 64 416H105.365L67.75 475.109C63.047 482.5 62.75 491.875 66.969 499.547C71.172 507.234 79.234 512 88 512H360C368.766 512 376.828 507.234 381.031 499.547C385.25 491.875 384.953 482.5 380.25 475.109L342.635 416H384C419.348 416 448 387.346 448 352V64C448 28.654 419.348 0 384 0ZM131.719 464L162.271 416H285.729L316.281 464H131.719ZM400 352C400 360.822 392.822 368 384 368H64C55.178 368 48 360.822 48 352V64C48 55.178 55.178 48 64 48H384C392.822 48 400 55.178 400 64V352ZM224 96C162.145 96 112 146.145 112 208S162.145 320 224 320S336 269.855 336 208S285.855 96 224 96ZM224 272C188.711 272 160 243.289 160 208S188.711 144 224 144C259.291 144 288 172.711 288 208S259.291 272 224 272Z" })
  }
));
CameraSecurityRegular.displayName = "CameraSecurityRegular";
var CameraSecurity_default = CameraSecurityRegular;

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
var CameraRotate_exports = {};
__export(CameraRotate_exports, {
  default: () => CameraRotate_default
});
module.exports = __toCommonJS(CameraRotate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraRotateLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 176C343.156 176 336 183.156 336 192V217.717C315.66 194.568 287.055 181 256 181C222.844 181 192.094 196 171.656 222.141C166.219 229.109 167.453 239.172 174.406 244.609C181.391 250.047 191.438 248.797 196.875 241.859C224.979 205.881 283.949 205.412 313.252 240H288C279.156 240 272 247.156 272 256S279.156 272 288 272H352C360.844 272 368 264.844 368 256V192C368 183.156 360.844 176 352 176ZM315.125 334.141C287.021 370.119 228.053 370.588 198.75 336H224C232.844 336 240 328.844 240 320S232.844 304 224 304H160C151.156 304 144 311.156 144 320V384C144 392.844 151.156 400 160 400S176 392.844 176 384V358.283C196.34 381.432 224.945 395 256 395C289.156 395 319.906 380 340.344 353.859C345.781 346.891 344.547 336.828 337.594 331.391C330.578 325.938 320.562 327.188 315.125 334.141ZM448 96H376L367.514 73.453C358.125 48.514 334.266 32 307.615 32H204.385C177.734 32 153.875 48.514 144.486 73.453L136 96H64C28.654 96 0 124.654 0 160V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V160C512 124.654 483.346 96 448 96ZM480 416C480 433.6 465.6 448 448 448H64C46.4 448 32 433.6 32 416V160C32 142.4 46.4 128 64 128H158.25L174.355 84.818C179.023 72.301 190.979 64 204.338 64H307.662C321.021 64 332.977 72.301 337.645 84.818L353.75 128H448C465.6 128 480 142.4 480 160V416Z" })
  }
));
CameraRotateLight.displayName = "CameraRotateLight";
var CameraRotate_default = CameraRotateLight;

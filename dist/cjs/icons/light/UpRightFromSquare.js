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
var UpRightFromSquare_exports = {};
__export(UpRightFromSquare_exports, {
  default: () => UpRightFromSquare_default
});
module.exports = __toCommonJS(UpRightFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpRightFromSquareLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 320C391.164 320 384 327.164 384 336V448C384 465.674 369.674 480 352 480H64C46.328 480 32 465.674 32 448V160C32 142.326 46.328 128 64 128H176C184.838 128 192 120.836 192 112S184.838 96 176 96H64C28.654 96 0 124.654 0 160V448C0 483.346 28.654 512 64 512H352C387.348 512 416 483.346 416 448V336C416 327.164 408.838 320 400 320ZM480 0H368.031C355.031 0 343.438 7.766 338.469 19.766S336.219 45.453 345.406 54.625L390.076 99.299L180.688 308.688C174.438 314.938 174.438 325.063 180.688 331.312C183.812 334.438 187.906 336 192 336S200.188 334.438 203.312 331.312L412.697 121.928L457.375 166.609C463.531 172.734 471.656 175.984 479.969 175.984C484.094 175.984 488.281 175.172 492.25 173.531C504.25 168.547 512 156.953 512 143.969V32C512 14.359 497.656 0 480 0ZM480 143.969L367.875 32.016C367.875 32.016 367.938 32 368.031 32H480V143.969Z" })
  }
));
UpRightFromSquareLight.displayName = "UpRightFromSquareLight";
var UpRightFromSquare_default = UpRightFromSquareLight;

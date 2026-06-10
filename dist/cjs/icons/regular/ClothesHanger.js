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
var ClothesHanger_exports = {};
__export(ClothesHanger_exports, {
  default: () => ClothesHanger_default
});
module.exports = __toCommonJS(ClothesHanger_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClothesHangerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M607.812 382.094L359.625 221.094L382.125 206.094C413.344 185.281 432 150.438 432 112C432 50.25 381.75 0 320 0S208 50.25 208 112C208 125.25 218.75 136 232 136S256 125.25 256 112C256 76.719 284.719 48 320 48S384 76.719 384 112.906C384 134.344 373.344 154.25 355.5 166.156L31.469 382.188C11.781 395.312 0 417.281 0 441.344C0 480.312 31.688 512 70.656 512H569.344C608.312 512 640 480.312 640 441.344C640 417.312 627.969 395.156 607.812 382.094ZM569.344 464H70.656C58.156 464 48 453.844 48 440.969C48 433.375 51.781 426.344 58.094 422.125L316.125 250.094L581.688 422.344C588.156 426.531 592 433.625 592 441.344C592 453.844 581.844 464 569.344 464Z" })
  }
));
ClothesHangerRegular.displayName = "ClothesHangerRegular";
var ClothesHanger_default = ClothesHangerRegular;

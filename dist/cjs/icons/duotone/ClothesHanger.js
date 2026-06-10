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
const ClothesHangerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M607.188 377L370.719 219.344L378.844 213.688C412.125 190.562 432 152.531 432 112C432 50.25 381.75 0 320 0C266.938 0 220.75 37.688 210.219 89.656C206.719 106.969 217.906 123.844 235.25 127.375C252.5 130.844 269.438 119.656 272.969 102.344C277.469 80.125 297.25 64 320 64C346.469 64 368 85.531 368 112C368 131.594 358.406 149.969 342.312 161.125L31.594 377.281C11.812 391.062 0 413.656 0 438.312C0 478.938 33.062 512 73.688 512H566.312C606.938 512 640 478.938 640 438.312C640 413.594 627.719 390.688 607.188 377ZM566.312 448H73.688C68.344 448 64 443.656 64 437.781C64 434.625 65.562 431.625 68.156 429.844L314.25 258.625L571.719 430.25C574.406 432.062 576 435.062 576 438.312C576 443.656 571.656 448 566.312 448Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
ClothesHangerDuotone.displayName = "ClothesHangerDuotone";
var ClothesHanger_default = ClothesHangerDuotone;

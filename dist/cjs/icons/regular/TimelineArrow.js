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
var TimelineArrow_exports = {};
__export(TimelineArrow_exports, {
  default: () => TimelineArrow_default
});
module.exports = __toCommonJS(TimelineArrow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TimelineArrowRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.406 236.797L534.406 164.797C523.781 156.828 508.688 159 500.812 169.594C492.844 180.203 495 195.25 505.594 203.203L543.996 232H376V123.254C399.436 113.75 416 90.844 416 64C416 28.656 387.348 0 352 0C316.654 0 288 28.656 288 64C288 90.844 304.564 113.75 328 123.254V232H152V123.254C175.436 113.75 192 90.844 192 64C192 28.656 163.348 0 128 0C92.654 0 64 28.656 64 64C64 90.844 80.564 113.75 104 123.254V232H24C10.75 232 0 242.75 0 256S10.75 280 24 280H200V388.746C176.564 398.25 160 421.156 160 448C160 483.344 188.654 512 224 512C259.348 512 288 483.344 288 448C288 421.156 271.436 398.25 248 388.746V280H543.996L505.594 308.797C495 316.75 492.844 331.797 500.812 342.406C505.5 348.688 512.719 352 520.031 352C525.031 352 530.094 350.438 534.406 347.203L630.406 275.203C636.438 270.672 640 263.547 640 256S636.438 241.328 630.406 236.797ZM352 40C365.234 40 376 50.766 376 64C376 77.232 365.234 88 352 88C338.768 88 328 77.232 328 64C328 50.766 338.768 40 352 40ZM128 40C141.234 40 152 50.766 152 64C152 77.232 141.234 88 128 88C114.768 88 104 77.232 104 64C104 50.766 114.768 40 128 40ZM224 472C210.768 472 200 461.232 200 448C200 434.766 210.768 424 224 424C237.234 424 248 434.766 248 448C248 461.232 237.234 472 224 472Z" })
  }
));
TimelineArrowRegular.displayName = "TimelineArrowRegular";
var TimelineArrow_default = TimelineArrowRegular;

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
var SquareLeft_exports = {};
__export(SquareLeft_exports, {
  default: () => SquareLeft_default
});
module.exports = __toCommonJS(SquareLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96ZM384 64C401.645 64 416 78.355 416 96V416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384ZM91.719 227.719C76.594 242.844 76.391 268.969 91.922 284.469L187.719 376.969C199.203 388.437 216.312 391.844 231.312 385.656C246.312 379.438 256 364.938 256 348.688V320H328C350.062 320 368 302.062 368 280V232C368 209.938 350.062 192 328 192H256V163.312C256 147.062 246.312 132.562 231.312 126.344C216.359 120.156 199.312 123.531 187.828 134.906L91.719 227.719ZM224 163.312V224H328C332.406 224 336 227.594 336 232V280C336 284.406 332.406 288 328 288H224V348.688C224 355.102 215.952 359.943 210.141 354.156L114.344 261.656C110.139 257.495 112.548 252.124 114.141 250.531L210.141 157.844L210.344 157.656C215.194 152.806 224 155.879 224 163.312Z" })
  }
));
SquareLeftLight.displayName = "SquareLeftLight";
var SquareLeft_default = SquareLeftLight;

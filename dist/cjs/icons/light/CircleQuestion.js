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
var CircleQuestion_exports = {};
__export(CircleQuestion_exports, {
  default: () => CircleQuestion_default
});
module.exports = __toCommonJS(CircleQuestion_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleQuestionLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M285.625 128H226.375C189.781 128 160 157.766 160 194.359V204C160 212.844 167.156 220 176 220S192 212.844 192 204V194.359C192 175.406 207.406 160 226.375 160H285.625C304.594 160 320 175.406 320 194.359C320 206.844 313.219 218.359 302.938 224.078L242.5 254.297C231.094 260.656 224 272.703 224 285.766V304C224 312.844 231.156 320 240 320S256 312.844 256 304V285.766C256 284.312 256.781 282.969 257.438 282.594L317.844 252.375C338.906 240.703 352 218.469 352 194.359C352 157.766 322.219 128 285.625 128ZM240 344C226.746 344 216 354.746 216 368S226.746 392 240 392S264 381.254 264 368S253.254 344 240 344ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" })
  }
));
CircleQuestionLight.displayName = "CircleQuestionLight";
var CircleQuestion_default = CircleQuestionLight;

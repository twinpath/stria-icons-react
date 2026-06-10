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
var Question_exports = {};
__export(Question_exports, {
  default: () => Question_default
});
module.exports = __toCommonJS(Question_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QuestionLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M213.125 32H106.656C47.844 32 0 79.844 0 138.656V160C0 168.844 7.156 176 16 176S32 168.844 32 160V138.656C32 97.484 65.5 64 106.656 64H213.125C254.406 64 288 97.578 288 138.859C288 165.859 273.375 190.859 249.844 204.109L152.469 258.891C137.375 267.391 128 283.422 128 300.719V336C128 344.844 135.156 352 144 352S160 344.844 160 336V300.719C160 294.953 163.125 289.609 168.156 286.766L265.531 231.984C299.125 213.078 320 177.391 320 138.859C320 79.938 272.062 32 213.125 32ZM144 400C126.326 400 112 414.326 112 432S126.326 464 144 464S176 449.674 176 432S161.674 400 144 400Z" })
  }
));
QuestionLight.displayName = "QuestionLight";
var Question_default = QuestionLight;

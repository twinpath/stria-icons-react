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
const QuestionSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 376C113.072 376 88 401.072 88 432S113.072 488 144 488S200 462.928 200 432S174.928 376 144 376ZM201.344 32H112C50.25 32 0 82.25 0 144C0 170.516 21.5 192 48 192S96 170.516 96 144C96 135.172 103.188 128 112 128H201.344C213.844 128 224 138.172 224 150.672C224 158.844 219.562 166.422 212.438 170.438L120.469 222.172C105.344 230.672 96 246.656 96 264V288C96 314.516 117.5 336 144 336C169.094 336 189.719 316.734 191.812 292.172L259.5 254.094C296.812 233.109 320 193.484 320 150.672C320 85.234 266.781 32 201.344 32Z" })
  }
));
QuestionSolid.displayName = "QuestionSolid";
var Question_default = QuestionSolid;

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
var BracketsSquare_exports = {};
__export(BracketsSquare_exports, {
  default: () => BracketsSquare_default
});
module.exports = __toCommonJS(BracketsSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketsSquareThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M56 48H136C140.406 48 144 44.422 144 40S140.406 32 136 32H56C33.938 32 16 49.938 16 72V440C16 462.062 33.938 480 56 480H136C140.406 480 144 476.422 144 472S140.406 464 136 464H56C42.781 464 32 453.234 32 440V72C32 58.766 42.781 48 56 48ZM392 32H312C307.594 32 304 35.578 304 40S307.594 48 312 48H392C405.219 48 416 58.766 416 72V440C416 453.234 405.219 464 392 464H312C307.594 464 304 467.578 304 472S307.594 480 312 480H392C414.062 480 432 462.062 432 440V72C432 49.938 414.062 32 392 32Z" })
  }
));
BracketsSquareThin.displayName = "BracketsSquareThin";
var BracketsSquare_default = BracketsSquareThin;

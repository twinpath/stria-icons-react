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
var FeatherPointed_exports = {};
__export(FeatherPointed_exports, {
  default: () => FeatherPointed_default
});
module.exports = __toCommonJS(FeatherPointed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FeatherPointedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M467.119 241.953L352 288H446.338C438.627 302.852 430.051 317.279 420.465 331.014L288 384H373.65C314.314 436.707 229.619 464.289 109.166 436.772L40.969 504.969C31.589 514.349 16.405 514.343 7.031 504.969C-2.344 495.594 -2.344 480.406 7.031 471.031L260.426 217.637C265.271 211.361 265.068 202.443 259.312 196.688C253.062 190.438 242.937 190.438 236.687 196.688L68.115 365.26C24.559 58.004 366.914 8.115 478.865 0.082C497.73 -1.271 513.271 14.27 511.918 33.135C508.66 78.526 498.461 161.828 467.119 241.953Z" })
  }
));
FeatherPointedSolid.displayName = "FeatherPointedSolid";
var FeatherPointed_default = FeatherPointedSolid;

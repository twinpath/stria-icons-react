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
var Walker_exports = {};
__export(Walker_exports, {
  default: () => Walker_default
});
module.exports = __toCommonJS(Walker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WalkerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M399.583 386.131C399.685 385.402 400.013 384.756 400.013 384V80C400.013 35.891 364.138 0 320.013 0H178.794C141.419 0 109.388 25.422 100.888 61.812L0.419 492.359C-1.581 500.969 3.763 509.578 12.388 511.578C13.607 511.859 14.826 512 16.013 512C23.294 512 29.857 507.016 31.607 499.641L103.392 192H368.013V384C368.013 384.756 368.341 385.402 368.443 386.131C340.664 393.115 320.013 418.055 320.013 448C320.013 483.346 348.667 512 384.013 512C419.361 512 448.013 483.346 448.013 448C448.013 418.055 427.363 393.115 399.583 386.131ZM110.859 160L132.076 69.078C137.138 47.25 156.357 32 178.794 32H320.013C346.482 32 368.013 53.531 368.013 80V160H110.859ZM384.013 480C366.369 480 352.013 465.645 352.013 448S366.369 416 384.013 416S416.013 430.355 416.013 448S401.658 480 384.013 480Z" })
  }
));
WalkerLight.displayName = "WalkerLight";
var Walker_default = WalkerLight;

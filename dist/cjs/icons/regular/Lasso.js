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
var Lasso_exports = {};
__export(Lasso_exports, {
  default: () => Lasso_default
});
module.exports = __toCommonJS(Lasso_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LassoRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 0C126.5 0 0 78.5 0 178.625C0 227 29.625 271.875 83.5 305.25C87.625 307.875 92.125 310.375 96.875 312.875C91.25 353.75 132.375 386.625 182.5 383.375C185.188 391.926 186.562 400.836 186.389 409.87C185.821 439.659 159.366 464 129.571 464L56 464C42.745 464 32 474.745 32 488V488C32 501.255 42.745 512 56 512L126.046 512C185.488 512 236.624 463.309 234.277 403.913C233.8 391.85 231.583 379.919 227.625 368.375C233.375 364.625 238.5 360.125 242.875 354.875C257.75 356.375 272.75 357.375 288 357.375C449.5 357.375 576 278.875 576 178.625C576 78.5 449.5 0 288 0ZM288 309.375C276.625 309.375 265.5 308.5 254.5 307.625C247.25 278.125 214.875 255.875 176 255.875C155.625 255.875 137.25 262.125 123.125 272.25C118.25 269.625 113 267.125 108.75 264.5C69.5 240.25 48 209.75 48 178.625C48 107.875 157.875 48 288 48S528 107.875 528 178.625C528 249.5 418.125 309.375 288 309.375Z" })
  }
));
LassoRegular.displayName = "LassoRegular";
var Lasso_default = LassoRegular;

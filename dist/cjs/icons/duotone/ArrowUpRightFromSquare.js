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
var ArrowUpRightFromSquare_exports = {};
__export(ArrowUpRightFromSquare_exports, {
  default: () => ArrowUpRightFromSquare_default
});
module.exports = __toCommonJS(ArrowUpRightFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpRightFromSquareDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 320C366.326 320 352 334.328 352 352V448H64V160.004H160C177.674 160.004 192 145.68 192 128.004S177.674 96.004 160 96.004H64C28.654 96.004 0 124.656 0 160.004V448C0 483.344 28.654 512 64 512H352C387.346 512 416 483.344 416 448V352C416 334.328 401.674 320 384 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.631 31.996V192C511.631 209.672 497.307 223.996 479.637 223.996H479.635C461.965 223.996 447.639 209.672 447.639 192V109.246L223.631 336C211.133 348.492 190.872 348.496 178.374 336C165.875 323.5 165.875 303.234 178.374 290.738L402.381 63.992H319.629C301.959 63.992 287.635 49.664 287.635 31.996C287.635 14.324 301.959 0 319.631 0H479.631C488.475 0 496.471 3.578 502.26 9.367C508.053 15.156 511.631 23.156 511.631 31.996Z" })
    ]
  }
));
ArrowUpRightFromSquareDuotone.displayName = "ArrowUpRightFromSquareDuotone";
var ArrowUpRightFromSquare_default = ArrowUpRightFromSquareDuotone;

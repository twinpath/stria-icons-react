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
var Wrench_exports = {};
__export(Wrench_exports, {
  default: () => Wrench_default
});
module.exports = __toCommonJS(Wrench_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WrenchThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.599 122.783C505.763 115.142 498.951 110.714 491.968 110.714C487.906 110.714 483.787 112.212 480.554 115.445L404 192.001H320V108.002L396.554 31.445C405.345 22.656 401.304 7.307 389.218 4.402C377.281 1.533 364.822 0.002 352 0C339.379 0 326.402 1.484 313.216 4.641C251.771 19.34 203.898 71.549 194.058 133.957C189.822 160.816 192.322 186.663 200.06 210.128L21.094 389.094C-7.031 417.219 -7.031 462.781 21.094 490.906C35.156 504.969 53.562 512 72 512S108.844 504.969 122.906 490.906L301.875 311.938C334.652 322.745 362.854 320.336 378.045 317.942C440.453 308.102 492.66 260.229 507.361 198.784C513.72 172.204 513.292 146.474 507.599 122.783ZM491.8 195.062C478.601 250.226 431.886 293.255 375.552 302.138C369.703 303.059 343.834 308.928 297.527 293.657L111.592 479.592C89.709 501.475 54.314 501.498 32.408 479.592C10.528 457.716 10.499 422.316 32.408 400.407L218.342 214.474C202.974 167.875 208.634 144.244 209.863 136.449C218.746 80.113 261.775 33.398 316.939 20.201C333.564 16.224 358.778 13.202 385.24 20.131L304 101.375V208.001H410.627L492.042 126.521C497.414 148.876 497.333 171.937 491.8 195.062ZM80 416C71.164 416 64 423.162 64 432C64 440.836 71.164 448 80 448C88.836 448 96 440.836 96 432C96 423.162 88.836 416 80 416Z" })
  }
));
WrenchThin.displayName = "WrenchThin";
var Wrench_default = WrenchThin;

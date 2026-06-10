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
var Router_exports = {};
__export(Router_exports, {
  default: () => Router_default
});
module.exports = __toCommonJS(Router_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RouterRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M248.16 149.867C238.191 158.596 237.223 173.77 245.973 183.779C254.723 193.744 269.879 194.729 279.848 185.969C319.627 150.994 384.377 150.994 424.158 185.969C434.127 194.729 449.283 193.744 458.033 183.779C462.031 179.211 464 173.564 464 167.934C464 161.256 461.25 154.607 455.846 149.867C398.596 99.533 305.408 99.533 248.16 149.867ZM200.254 105.523C283.941 28.471 420.064 28.471 503.75 105.523C513.5 114.502 528.688 113.861 537.656 104.1C541.906 99.486 544 93.65 544 87.834C544 81.357 541.406 74.881 536.25 70.141C434.658 -23.381 269.348 -23.381 167.754 70.141C157.973 79.104 157.379 94.324 166.348 104.1C175.316 113.861 190.504 114.502 200.254 105.523ZM512 303.965H376V247.955C376 234.703 365.25 223.951 352 223.951S328 234.703 328 247.955V303.965H64C28.652 303.965 0 332.623 0 367.975V447.988C0 483.34 28.652 512 64 512H512C547.346 512 576 483.34 576 447.988V367.975C576 332.623 547.346 303.965 512 303.965ZM528 447.988C528 456.812 520.822 463.992 512 463.992H64C55.178 463.992 48 456.813 48 447.988V367.975C48 359.152 55.178 351.973 64 351.973H512C520.822 351.973 528 359.152 528 367.975V447.988ZM184 383.979C170.746 383.979 160 394.725 160 407.982C160 421.238 170.746 431.986 184 431.986S208 421.238 208 407.982C208 394.725 197.254 383.979 184 383.979ZM104 383.979C90.746 383.979 80 394.725 80 407.982C80 421.238 90.746 431.986 104 431.986S128 421.238 128 407.982C128 394.725 117.254 383.979 104 383.979Z" })
  }
));
RouterRegular.displayName = "RouterRegular";
var Router_default = RouterRegular;

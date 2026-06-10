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
var Scalpel_exports = {};
__export(Scalpel_exports, {
  default: () => Scalpel_default
});
module.exports = __toCommonJS(Scalpel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScalpelRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M482.738 11.861C471.41 3.771 458.318 0 445.18 0C424.412 0 403.527 9.422 389.297 26.113L187.922 261.498C178.928 272 186.424 288 200.041 288H331.957C341.326 288 350.195 283.875 356.316 276.75L495.23 114.367C521.59 83.49 516.467 35.863 482.738 11.861ZM458.756 83.164L324.588 240H269.482L425.824 57.256C430.691 51.547 438.107 48 445.18 48C448.875 48 452.127 48.984 454.908 50.971C461.648 55.766 463.389 62.441 463.828 65.992C464.281 69.656 464.219 76.766 458.756 83.164ZM0 512C88.969 512.125 174.104 482.875 239.553 430.875C239.809 430.625 239.936 430.5 240.191 430.375C272.277 404.625 288 366.375 288 328V320H179.984L0 512Z" })
  }
));
ScalpelRegular.displayName = "ScalpelRegular";
var Scalpel_default = ScalpelRegular;

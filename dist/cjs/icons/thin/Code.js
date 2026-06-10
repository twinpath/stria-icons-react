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
var Code_exports = {};
__export(Code_exports, {
  default: () => Code_default
});
module.exports = __toCommonJS(Code_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M157.812 114.502C154.812 111.283 149.75 111.126 146.5 114.189L2.5 250.192C0.906 251.692 0 253.817 0 256.004C0 258.192 0.906 260.317 2.5 261.817L146.5 397.82C150.516 401.595 155.611 399.841 157.812 397.507C160.844 394.289 160.719 389.226 157.5 386.195L19.656 256.004L157.5 125.814C160.719 122.783 160.844 117.72 157.812 114.502ZM637.5 250.192L493.5 114.189C490.25 111.126 485.219 111.283 482.188 114.502S479.281 122.783 482.5 125.814L620.344 256.004L482.5 386.195C479.281 389.226 479.156 394.289 482.188 397.507C484.389 399.841 489.484 401.595 493.5 397.82L637.5 261.817C639.094 260.317 640 258.192 640 256.004C640 253.817 639.094 251.692 637.5 250.192ZM399.893 0.364C395.658 -0.948 391.189 1.396 389.861 5.615L234.861 501.625C233.549 505.844 235.893 510.312 240.111 511.625C240.908 511.875 241.721 512 242.502 512C245.908 512 249.064 509.812 250.143 506.375L405.143 10.365C406.455 6.146 404.111 1.677 399.893 0.364Z" })
  }
));
CodeThin.displayName = "CodeThin";
var Code_default = CodeThin;

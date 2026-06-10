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
var FaceGrin_exports = {};
__export(FaceGrin_exports, {
  default: () => FaceGrin_default
});
module.exports = __toCommonJS(FaceGrin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceGrinDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.418 16 256C16 388.578 123.461 496 256 496S496 388.578 496 256C496 123.418 388.539 16 256 16ZM336.043 176C353.723 176 368.012 190.25 368.012 208S353.723 240 336.043 240C318.242 240 303.953 225.75 303.953 208S318.242 176 336.043 176ZM175.957 176C193.758 176 208.047 190.25 208.047 208S193.758 240 175.957 240C158.277 240 143.988 225.75 143.988 208S158.277 176 175.957 176ZM256 432C195.453 432 121.465 393.75 112.141 338.75C110.203 326.875 121.465 317.125 132.848 320.75C163.121 330.5 208.047 336 256 336S348.879 330.5 379.152 320.75C390.414 317.125 401.676 326.875 399.859 338.75C390.535 393.75 316.547 432 256 432Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.055 176C318.254 176 303.965 190.25 303.965 208S318.254 240 336.055 240C353.734 240 368.023 225.75 368.023 208S353.734 176 336.055 176ZM175.969 176C158.289 176 144 190.25 144 208S158.289 240 175.969 240C193.77 240 208.059 225.75 208.059 208S193.77 176 175.969 176Z" })
    ]
  }
));
FaceGrinDuotone.displayName = "FaceGrinDuotone";
var FaceGrin_default = FaceGrinDuotone;

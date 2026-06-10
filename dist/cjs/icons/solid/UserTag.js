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
var UserTag_exports = {};
__export(UserTag_exports, {
  default: () => UserTag_default
});
module.exports = __toCommonJS(UserTag_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserTagSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.759 367.25V322.25C328.516 310.676 302.402 304 274.671 304H173.34C77.611 304 0 381.602 0 477.332C0 496.477 15.524 512 34.665 512H413.346C425.208 512 435.163 505.664 441.413 496.57L379.757 435.004C361.702 416.949 351.759 392.887 351.759 367.25ZM224.005 256C294.702 256 352.009 198.691 352.009 128S294.702 0 224.005 0C153.316 0 96.002 57.309 96.002 128S153.316 256 224.005 256ZM630.64 364.875L540.263 274.75C528.263 262.75 512.012 256 495.012 256H415.76C398.01 256 383.759 270.25 383.759 288V367.25C383.759 384.25 390.384 400.375 402.385 412.375L492.762 502.625C505.262 515.125 525.513 515.125 538.013 502.625L630.515 410.125C643.141 397.625 643.141 377.375 630.64 364.875ZM447.761 343.875C434.511 343.875 423.76 333.25 423.76 319.875C423.76 306.625 434.511 295.875 447.761 295.875C461.136 295.875 471.761 306.625 471.761 319.875S461.136 343.875 447.761 343.875Z" })
  }
));
UserTagSolid.displayName = "UserTagSolid";
var UserTag_default = UserTagSolid;

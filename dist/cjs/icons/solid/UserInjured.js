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
var UserInjured_exports = {};
__export(UserInjured_exports, {
  default: () => UserInjured_default
});
module.exports = __toCommonJS(UserInjured_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserInjuredSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M277.355 11.977C261.07 4.469 243.109 0 224 0C170.314 0 124.502 33.133 105.494 80H186.656L277.355 11.977ZM342.508 80C334.613 60.531 321.846 43.812 306.025 30.488L240.01 80H342.508ZM224 256C294.695 256 352 198.691 352 128C352 122.52 351.055 117.297 350.387 112H97.613C96.945 117.297 96 122.52 96 128C96 198.691 153.312 256 224 256ZM272 416H226.855L285.5 509.828C305.369 503.953 320 485.75 320 464C320 437.531 298.469 416 272 416ZM274.664 304H173.336C167.943 304 162.627 304.324 157.359 304.805L206.855 384H272C316.125 384 352 419.875 352 464C352 482.082 345.748 498.59 335.602 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM0 477.332C0 496.477 15.523 512 34.664 512H64V342.891C24.967 374.676 0 423.07 0 477.332ZM96 322.375V512H249.145L123.707 311.301C114.072 314.176 104.85 317.949 96 322.375Z" })
  }
));
UserInjuredSolid.displayName = "UserInjuredSolid";
var UserInjured_default = UserInjuredSolid;

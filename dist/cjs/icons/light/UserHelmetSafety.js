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
var UserHelmetSafety_exports = {};
__export(UserHelmetSafety_exports, {
  default: () => UserHelmetSafety_default
});
module.exports = __toCommonJS(UserHelmetSafety_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserHelmetSafetyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.029 472.238C434.064 420.379 387.469 384 334.017 384H113.984C60.532 384 13.935 420.379 0.972 472.238C-4.079 492.438 11.197 512 32.015 512H415.983C436.802 512 452.078 492.438 447.029 472.238ZM32.019 479.998C41.438 442.316 75.144 416 113.984 416H334.017C372.857 416 406.561 442.316 415.983 480L32.019 479.998ZM322.44 224C322.44 276.938 279.374 320 226.431 320S130.421 276.938 130.421 224C130.421 215.156 123.263 208 114.418 208S98.417 215.156 98.417 224C98.417 294.578 155.844 352 226.431 352C297.015 352 354.444 294.578 354.444 224C354.444 215.156 347.286 208 338.443 208C329.598 208 322.44 215.156 322.44 224ZM80.436 176H370.009C378.893 176 386.096 168.836 386.096 160C386.096 151.162 378.893 144 370.009 144H353.918C353.918 143.994 353.922 143.99 353.922 143.984C353.922 78.885 304.623 25.578 241.31 17.602V16C241.31 7.156 234.115 0 225.223 0C216.331 0 209.135 7.156 209.135 16V17.602C145.823 25.578 96.524 78.885 96.524 143.984C96.524 143.99 96.528 143.994 96.528 144H80.436C71.552 144 64.349 151.162 64.349 160C64.349 168.836 71.552 176 80.436 176ZM241.31 49.602C286.866 57.273 321.747 96.525 321.747 143.984C321.747 143.99 321.751 143.994 321.751 144H241.31V49.602ZM128.699 143.984C128.699 96.525 163.579 57.273 209.135 49.602V144H128.695C128.695 143.994 128.699 143.99 128.699 143.984Z" })
  }
));
UserHelmetSafetyLight.displayName = "UserHelmetSafetyLight";
var UserHelmetSafety_default = UserHelmetSafetyLight;

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
var UserNinja_exports = {};
__export(UserNinja_exports, {
  default: () => UserNinja_default
});
module.exports = __toCommonJS(UserNinja_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserNinjaThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M327.607 313.875C311.748 308.781 294.248 314.094 284.186 326.844L223.094 404.281L163.814 326.844C153.768 314.125 136.315 308.875 120.378 313.875C47.755 336.625 -0.619 400.813 0.006 473.625C0.193 494.781 18.787 512 41.427 512H406.573C429.213 512 447.807 494.781 447.994 473.625C448.619 400.812 400.245 336.594 327.607 313.875ZM41.427 496C27.755 496 16.115 485.688 16.006 473.5C15.443 407.781 59.301 349.75 125.159 329.125C140.276 324.531 149.543 334.621 151.174 336.687L273.171 496H41.427ZM406.573 496H293.326L233.125 417.375L296.748 336.781C302.748 329.188 313.216 326.219 322.825 329.125C388.683 349.75 432.557 407.781 431.994 473.5C431.885 485.688 420.245 496 406.573 496ZM33.599 180.812C35.177 182.906 37.583 184 40.005 184C41.677 184 43.364 183.469 44.802 182.406L97.503 142.879C104.958 206.471 158.408 256 224 256C294.691 256 351.997 198.691 351.997 128C351.997 57.307 294.691 0 224 0C158.408 0 104.958 49.529 97.503 113.121L44.802 73.594C41.302 71.031 36.271 71.656 33.599 75.188C30.958 78.75 31.677 83.75 35.208 86.406L90.675 128L35.208 169.594C31.677 172.25 30.958 177.25 33.599 180.812ZM224 16C283.016 16 331.001 62.033 335.188 120H311.998C311.998 97.938 294.061 80 271.999 80H176.001C153.939 80 136.002 97.938 136.002 120H112.812C116.999 62.033 164.986 16 224 16ZM295.998 120H152.002C152.002 106.781 162.767 96 176.001 96H271.999C285.233 96 295.998 106.781 295.998 120ZM335.188 136C331.001 193.967 283.016 240 224 240C164.986 240 116.999 193.967 112.812 136H335.188Z" })
  }
));
UserNinjaThin.displayName = "UserNinjaThin";
var UserNinja_default = UserNinjaThin;

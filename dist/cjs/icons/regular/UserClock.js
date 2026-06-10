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
var UserClock_exports = {};
__export(UserClock_exports, {
  default: () => UserClock_default
});
module.exports = __toCommonJS(UserClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserClockRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 224C416.375 224 352 288.375 352 368S416.375 512 496 512S640 447.625 640 368S575.625 224 496 224ZM544 384H489.75C484.375 384 480 379.625 480 374.25V304C480 295.164 487.164 288 496 288C504.838 288 512 295.164 512 304V352H544C552.838 352 560 359.164 560 368S552.838 384 544 384ZM224 256C294.693 256 352 198.691 352 128C352 57.307 294.693 0 224 0S96 57.307 96 128C96 198.691 153.307 256 224 256ZM224 48C268.111 48 304 83.887 304 128C304 172.111 268.111 208 224 208S144 172.111 144 128C144 83.887 179.889 48 224 48ZM395.002 512H32C14.326 512 0 497.672 0 480C0 382.797 78.797 304 176 304H272C291.865 304 310.889 307.441 328.701 313.508C323.738 328.752 320.914 344.92 320.318 361.674C305.377 355.547 289.123 352 272 352H176C110.84 352 56.895 400.945 48.994 464H348.6C360.879 482.814 376.645 499.1 395.002 512Z" })
  }
));
UserClockRegular.displayName = "UserClockRegular";
var UserClock_default = UserClockRegular;

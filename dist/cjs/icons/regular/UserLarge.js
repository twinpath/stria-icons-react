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
var UserLarge_exports = {};
__export(UserLarge_exports, {
  default: () => UserLarge_default
});
module.exports = __toCommonJS(UserLarge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserLargeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 288C335.533 288 400 223.527 400 144S335.533 0 256 0C176.477 0 112 64.473 112 144S176.477 288 256 288ZM256 48C308.936 48 352 91.064 352 144C352 196.934 308.936 240 256 240C203.066 240 160 196.934 160 144C160 91.064 203.066 48 256 48ZM351.998 320H160.002C71.639 320 0 391.633 0 480C0 497.672 14.33 512 31.998 512H480.002C497.67 512 512 497.672 512 480C512 391.633 440.367 320 351.998 320ZM49.141 464C56.928 409.795 103.676 368 160.002 368H351.998C408.324 368 455.074 409.795 462.861 464H49.141Z" })
  }
));
UserLargeRegular.displayName = "UserLargeRegular";
var UserLarge_default = UserLargeRegular;

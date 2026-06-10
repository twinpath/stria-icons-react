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
var UserGroupCrown_exports = {};
__export(UserGroupCrown_exports, {
  default: () => UserGroupCrown_default
});
module.exports = __toCommonJS(UserGroupCrown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserGroupCrownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM48.705 464C55.379 401.133 108.727 352 173.336 352H274.664C339.273 352 392.621 401.133 399.297 464H48.705ZM224 272C294.75 272 352 214.75 352 144V0L288 32L224 0L160 32L96 0V144C96 214.75 153.25 272 224 272ZM144 128H304V144C304 188.125 268.125 224 224 224S144 188.125 144 144V128ZM544 144C544 82.145 493.859 32 432 32C414.701 32 398.555 36.285 384 43.375V144C384 175.086 374.715 203.887 359.314 228.469C378.92 245.371 404.084 256 432 256C493.859 256 544 205.855 544 144ZM479.998 320H406.15C451.182 357.695 480 414.148 480 477.332C480 490.07 476.225 501.867 470.002 512H608.002C625.67 512 640 497.672 640 480C640 391.633 568.367 320 479.998 320Z" })
  }
));
UserGroupCrownRegular.displayName = "UserGroupCrownRegular";
var UserGroupCrown_default = UserGroupCrownRegular;

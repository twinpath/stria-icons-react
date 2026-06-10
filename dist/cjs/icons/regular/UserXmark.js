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
var UserXmark_exports = {};
__export(UserXmark_exports, {
  default: () => UserXmark_default
});
module.exports = __toCommonJS(UserXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserXmarkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM48.705 464C55.379 401.133 108.727 352 173.336 352H274.664C339.273 352 392.621 401.133 399.297 464H48.705ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 48C268.113 48 304 83.887 304 128C304 172.111 268.113 208 224 208C179.889 208 144 172.111 144 128C144 83.887 179.889 48 224 48ZM577.938 223.998L624.969 176.969C634.344 167.594 634.344 152.406 624.969 143.031S600.406 133.656 591.031 143.031L544 190.062L496.969 143.031C487.594 133.656 472.406 133.656 463.031 143.031S453.656 167.594 463.031 176.969L510.062 223.998L463.031 271.029C453.656 280.404 453.656 295.592 463.031 304.967C472.404 314.34 487.588 314.348 496.969 304.967L544 257.936L591.031 304.967C600.404 314.34 615.588 314.348 624.969 304.967C634.344 295.592 634.344 280.404 624.969 271.029L577.938 223.998Z" })
  }
));
UserXmarkRegular.displayName = "UserXmarkRegular";
var UserXmark_default = UserXmarkRegular;

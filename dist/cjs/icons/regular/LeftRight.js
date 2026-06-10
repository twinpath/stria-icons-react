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
var LeftRight_exports = {};
__export(LeftRight_exports, {
  default: () => LeftRight_default
});
module.exports = __toCommonJS(LeftRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M503.992 238.406L391.992 134.406C387.469 130.207 381.605 128 375.658 128C372.42 128 369.154 128.656 366.07 130C357.32 133.812 351.664 142.453 351.664 152V232H159.664V152C159.664 142.453 154.008 133.812 145.258 130C142.172 128.656 138.908 128 135.668 128C129.721 128 123.857 130.207 119.336 134.406L7.336 238.406C-2.445 247.5 -2.445 264.5 7.336 273.594L119.336 377.594C123.857 381.793 129.721 384 135.668 384C138.908 384 142.172 383.344 145.258 382C154.008 378.188 159.664 369.547 159.664 360V280H351.664V360C351.664 369.547 357.32 378.188 366.07 382C369.154 383.344 372.418 384 375.658 384C381.605 384 387.469 381.793 391.992 377.594L503.992 273.594C513.773 264.5 513.773 247.5 503.992 238.406Z" })
  }
));
LeftRightRegular.displayName = "LeftRightRegular";
var LeftRight_default = LeftRightRegular;

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
var FaceSmileWink_exports = {};
__export(FaceSmileWink_exports, {
  default: () => FaceSmileWink_default
});
module.exports = __toCommonJS(FaceSmileWink_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceSmileWinkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.42 16 256S123.42 496 256 496C388.582 496 496 388.58 496 256S388.582 16 256 16ZM175.957 176C193.758 176 208.047 190.25 208.047 208S193.758 240 175.957 240C158.277 240 143.988 225.75 143.988 208S158.277 176 175.957 176ZM370.797 346.25C342.34 380.375 300.441 400 256 400S169.66 380.375 141.203 346.25C127.641 329.875 152.344 309.5 165.785 325.75C188.188 352.75 221.004 368 256 368S323.812 352.625 346.215 325.75C359.777 309.625 384.359 330 370.797 346.25ZM376.246 233L366.559 224.5C351.664 211.25 320.301 211.25 305.527 224.5L295.961 233C287.727 240.375 274.406 233.375 276.223 222.25C280.219 197 310.371 180.125 336.043 180.125C361.836 180.125 391.988 197 395.984 222.25C397.68 233.25 384.602 240.5 376.246 233Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175.969 176C158.289 176 144 190.25 144 208S158.289 240 175.969 240C193.77 240 208.059 225.75 208.059 208S193.77 176 175.969 176ZM336.055 180.125C310.383 180.125 280.23 197 276.234 222.25C274.418 233.375 287.738 240.375 295.973 233L305.539 224.5C320.312 211.25 351.676 211.25 366.57 224.5L376.258 233C384.613 240.5 397.691 233.25 395.996 222.25C392 197 361.848 180.125 336.055 180.125Z" })
    ]
  }
));
FaceSmileWinkDuotone.displayName = "FaceSmileWinkDuotone";
var FaceSmileWink_default = FaceSmileWinkDuotone;

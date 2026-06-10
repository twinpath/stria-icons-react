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
const FaceSmileWinkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 184C313.234 184 292.094 197.969 280.844 220.406C278.875 224.375 280.469 229.188 284.422 231.156C288.344 233.125 293.188 231.531 295.156 227.594C303.672 210.562 319.328 200 336 200S368.328 210.562 376.844 227.594C378.25 230.375 381.078 232 384 232C385.203 232 386.438 231.719 387.578 231.156C391.531 229.188 393.125 224.375 391.156 220.406C379.906 197.969 358.766 184 336 184ZM176 224C184.844 224 192 216.852 192 208S184.844 192 176 192S160 199.148 160 208S167.156 224 176 224ZM256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480ZM359.938 324C338.562 361 298.719 384 256 384S173.438 361 152.062 324C149.781 320.156 144.844 318.844 141.125 321.078C137.281 323.281 136 328.172 138.188 332C162.438 373.953 207.594 400 256 400S349.562 373.953 373.812 332C376 328.172 374.719 323.281 370.875 321.078C367.094 318.844 362.156 320.156 359.938 324Z" })
  }
));
FaceSmileWinkThin.displayName = "FaceSmileWinkThin";
var FaceSmileWink_default = FaceSmileWinkThin;
